"use client"

import { use, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import { getCourse } from "@/content/courses"
import { ciqStore } from "@/stores/cultureIQStore"
import type { LessonBlock } from "@/types"

type Phase = "reading" | "quiz" | "reflection" | "complete"
type QuizState = "idle" | "correct" | "wrong"

export default function LessonPage({ params }: { params: Promise<{ courseId: string; lessonId: string }> }) {
  const { courseId, lessonId } = use(params)
  const router = useRouter()

  const course = getCourse(courseId)
  if (!course) notFound()
  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId)
  if (lessonIndex === -1) notFound()
  const lesson = course.lessons[lessonIndex]
  const nextLesson = course.lessons[lessonIndex + 1]

  const [phase, setPhase] = useState<Phase>("reading")
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [quizState, setQuizState] = useState<QuizState>("idle")
  const [reflectionText, setReflectionText] = useState("")
  const [isFirstAttempt, setIsFirstAttempt] = useState(true)
  const [earnedXp, setEarnedXp] = useState(0)

  function handleFinishReading() {
    if (lesson.quiz) setPhase("quiz")
    else if (lesson.reflection) setPhase("reflection")
    else completeLesson()
  }

  function handleAnswer(optionId: string) {
    if (quizState !== "idle") return
    const correct = lesson.quiz?.options.find((o) => o.id === optionId)?.isCorrect ?? false
    setSelectedOption(optionId)
    setQuizState(correct ? "correct" : "wrong")
    if (!correct) setIsFirstAttempt(false)
  }

  function handleAfterQuiz() {
    const xp = quizState === "correct" && isFirstAttempt ? 30 : 15
    ciqStore.recordQuizResult({ courseId, lessonId, score: quizState === "correct" ? 1 : 0, total: 1 })
    setEarnedXp((p) => p + xp)
    if (lesson.reflection) setPhase("reflection")
    else completeLesson()
  }

  function handleReflectionSubmit() {
    if (reflectionText.trim()) {
      ciqStore.addJournalEntry({ content: reflectionText, prompt: lesson.reflection?.prompt, lessonId, courseId })
    }
    completeLesson()
  }

  function completeLesson() {
    if (!course) return
    const state = ciqStore.markLessonComplete(courseId, lessonId, course.lessons.length)
    setEarnedXp(lesson.xpReward)
    setPhase("complete")
    const done = (state.completedLessons[courseId] || []).length
    if (done >= course.lessons.length) ciqStore.unlockAchievement("culture-explorer")
  }

  const accent = course.accentColor
  const progressPct = ((lessonIndex + (phase === "complete" ? 1 : 0)) / course.lessons.length) * 100

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", minHeight: "80vh", display: "flex", flexDirection: "column" }}>
      {/* Course progress bar */}
      <div style={{ height: 3, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden", marginBottom: 24 }}>
        <div style={{
          height: "100%", width: `${progressPct}%`,
          background: accent, borderRadius: "var(--radius-pill)",
          transition: "width 0.5s ease-out",
        }} />
      </div>

      {/* ── Reading ── */}
      {phase === "reading" && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", marginBottom: 4 }}>{course.title}</p>
          <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 24 }}>{lesson.title}</h1>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 22 }}>
            {lesson.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} accent={accent} />
            ))}
          </div>

          <button
            onClick={handleFinishReading}
            style={{
              marginTop: 32, width: "100%", padding: "14px 0",
              background: accent, color: "#000", borderRadius: "var(--radius-md)",
              font: "var(--text-body-strong)", border: "none", cursor: "pointer",
              transition: "opacity 0.15s",
            }}
          >
            {lesson.quiz ? "Take the Quiz →" : lesson.reflection ? "Reflect →" : "Complete →"}
          </button>
        </div>
      )}

      {/* ── Quiz ── */}
      {phase === "quiz" && lesson.quiz && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Quiz</p>
          <h2 style={{ font: "var(--text-h2)", color: "var(--fg-1)", marginBottom: 24, lineHeight: 1.35 }}>
            {lesson.quiz.question}
          </h2>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            {lesson.quiz.options.map((opt) => {
              const isSelected = selectedOption === opt.id
              const shown = quizState !== "idle"
              let bg = "var(--surface)"
              let border = "var(--border)"
              let color = "var(--fg-1)"
              let opacity = 1

              if (shown) {
                if (isSelected && opt.isCorrect)  { bg = "var(--favourable-soft)"; border = "var(--favourable)"; color = "var(--favourable-text)" }
                if (isSelected && !opt.isCorrect) { bg = "var(--adverse-soft)";    border = "var(--adverse)";    color = "var(--adverse-text)" }
                if (!isSelected && opt.isCorrect) { bg = "var(--favourable-soft)"; border = "var(--favourable-border)"; color = "var(--favourable-text)"; opacity = 0.8 }
                if (!isSelected && !opt.isCorrect){ opacity = 0.4 }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleAnswer(opt.id)}
                  disabled={quizState !== "idle"}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "14px 16px",
                    background: bg, border: `1px solid ${border}`, color,
                    borderRadius: "var(--radius-md)",
                    font: "var(--text-body)", cursor: quizState === "idle" ? "pointer" : "default",
                    opacity, transition: "all 0.15s", display: "flex", gap: 10, alignItems: "flex-start",
                  }}
                >
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                    border: `1px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
                    font: "var(--text-label)", fontFamily: "var(--font-mono)", marginTop: 1,
                  }}>
                    {opt.id.toUpperCase()}
                  </span>
                  {opt.text}
                </button>
              )
            })}
          </div>

          {quizState !== "idle" && (
            <div style={{
              marginTop: 16, padding: 16,
              background: quizState === "correct" ? "var(--favourable-soft)" : "var(--adverse-soft)",
              border: `1px solid ${quizState === "correct" ? "var(--favourable-border)" : "var(--adverse-border)"}`,
              borderRadius: "var(--radius-md)",
            }}>
              <p style={{ font: "var(--text-body-strong)", color: quizState === "correct" ? "var(--favourable-text)" : "var(--adverse-text)", marginBottom: 4 }}>
                {quizState === "correct" ? "✓ Correct!" : "✗ Not quite."}
              </p>
              {lesson.quiz?.explanation && (
                <p style={{ font: "var(--text-caption)", color: "var(--fg-2)", lineHeight: 1.6 }}>{lesson.quiz.explanation}</p>
              )}
              <button
                onClick={handleAfterQuiz}
                style={{
                  marginTop: 12, width: "100%", padding: "10px 0",
                  background: accent, color: "#000",
                  borderRadius: "var(--radius-sm)", border: "none",
                  font: "var(--text-body-strong)", cursor: "pointer",
                }}
              >
                Continue →
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Reflection ── */}
      {phase === "reflection" && lesson.reflection && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Reflection</p>
          <h2 style={{ font: "var(--text-h2)", color: "var(--fg-1)", marginBottom: 20, lineHeight: 1.35 }}>
            {lesson.reflection.prompt}
          </h2>
          <textarea
            value={reflectionText}
            onChange={(e) => setReflectionText(e.target.value)}
            placeholder="Write your thoughts here… (or skip)"
            rows={7}
            style={{
              flex: 1,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: 16,
              font: "var(--text-body)",
              color: "var(--fg-1)",
              resize: "none",
              outline: "none",
              transition: "border-color 0.15s",
            }}
          />
          <button
            onClick={handleReflectionSubmit}
            style={{
              marginTop: 16, width: "100%", padding: "14px 0",
              background: accent, color: "#000",
              borderRadius: "var(--radius-md)", border: "none",
              font: "var(--text-body-strong)", cursor: "pointer",
            }}
          >
            {reflectionText.trim() ? "Save & Complete →" : "Skip & Complete →"}
          </button>
        </div>
      )}

      {/* ── Complete ── */}
      {phase === "complete" && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
          <h2 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 6 }}>Lesson Complete!</h2>
          <p style={{ font: "var(--text-body)", color: "var(--fg-3)", marginBottom: 12 }}>{lesson.title}</p>
          <p style={{ font: "var(--text-h2)", fontFamily: "var(--font-mono)", color: "var(--gold-text)", marginBottom: 32 }}>
            +{lesson.xpReward} XP
          </p>

          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
            {nextLesson ? (
              <button
                onClick={() => router.push(`/learn/${courseId}/${nextLesson.id}`)}
                style={{
                  width: "100%", padding: "14px 0",
                  background: accent, color: "#000",
                  borderRadius: "var(--radius-md)", border: "none",
                  font: "var(--text-body-strong)", cursor: "pointer",
                }}
              >
                Next: {nextLesson.title} →
              </button>
            ) : (
              <div style={{
                padding: "14px 0", textAlign: "center",
                background: "var(--favourable-soft)",
                border: "1px solid var(--favourable-border)",
                borderRadius: "var(--radius-md)",
                font: "var(--text-body-strong)", color: "var(--favourable-text)",
              }}>
                🏆 Course Complete!
              </div>
            )}
            <button
              onClick={() => router.push(`/learn/${courseId}`)}
              style={{
                width: "100%", padding: "12px 0",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                font: "var(--text-body)", color: "var(--fg-3)",
                cursor: "pointer", transition: "border-color 0.15s",
              }}
            >
              Back to Course
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Block renderer ──────────────────────────────────────────────────────── */

function BlockRenderer({ block, accent }: { block: LessonBlock; accent: string }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 style={{
          font: "var(--text-h3)", color: "var(--fg-1)",
          paddingLeft: 12, borderLeft: `3px solid ${accent}`,
          margin: "10px 0 0",
        }}>
          {block.content}
        </h2>
      )
    case "paragraph":
      return <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.72 }}>{block.content}</p>
    case "quote":
      return (
        <blockquote style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 16, margin: 0 }}>
          <p style={{ font: "var(--text-body)", color: "var(--fg-2)", fontStyle: "italic", lineHeight: 1.72 }}>"{block.content}"</p>
          {block.author && (
            <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 6 }}>— {block.author}</p>
          )}
        </blockquote>
      )
    case "list":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--text-body)", color: "var(--fg-2)" }}>
              <span style={{ marginTop: 7, width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      )
    case "divider":
      return <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "4px 0" }} />
    default:
      return null
  }
}
