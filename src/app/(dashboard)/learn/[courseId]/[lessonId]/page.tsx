"use client"

import { use, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import { getCourse } from "@/content/courses"
import { ciqStore } from "@/stores/cultureIQStore"
import { cn } from "@/lib/utils"
import type { LessonBlock } from "@/types"

type QuizState = "idle" | "answered" | "correct" | "wrong"

export default function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>
}) {
  const { courseId, lessonId } = use(params)
  const router = useRouter()

  const course = getCourse(courseId)
  if (!course) notFound()

  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId)
  if (lessonIndex === -1) notFound()
  const lesson = course.lessons[lessonIndex]

  const [phase, setPhase] = useState<"reading" | "quiz" | "reflection" | "complete">("reading")
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [quizState, setQuizState] = useState<QuizState>("idle")
  const [reflectionText, setReflectionText] = useState("")
  const [xpEarned, setXpEarned] = useState(0)
  const [isFirstAttempt, setIsFirstAttempt] = useState(true)

  const nextLesson = course.lessons[lessonIndex + 1]

  function handleFinishReading() {
    if (lesson.quiz) {
      setPhase("quiz")
    } else if (lesson.reflection) {
      setPhase("reflection")
    } else {
      completeLesson()
    }
  }

  function handleAnswer(optionId: string) {
    if (quizState !== "idle") return
    const correct = lesson.quiz?.options.find((o) => o.id === optionId)?.isCorrect ?? false
    setSelectedOption(optionId)
    setQuizState(correct ? "correct" : "wrong")
    if (!correct && isFirstAttempt) setIsFirstAttempt(false)
  }

  function handleAfterQuiz() {
    const correct = quizState === "correct"
    const xp = correct && isFirstAttempt ? 30 : 15
    ciqStore.recordQuizResult({
      courseId,
      lessonId,
      score: correct ? 1 : 0,
      total: 1,
    })
    setXpEarned((prev) => prev + xp)
    if (lesson.reflection) {
      setPhase("reflection")
    } else {
      completeLesson()
    }
  }

  function handleReflectionSubmit() {
    if (reflectionText.trim()) {
      ciqStore.addJournalEntry({
        content: reflectionText,
        prompt: lesson.reflection?.prompt,
        lessonId,
        courseId,
      })
    }
    completeLesson()
  }

  function completeLesson() {
    if (!course) return
    const state = ciqStore.markLessonComplete(courseId, lessonId, course.lessons.length)
    const totalXp = lesson.xpReward + xpEarned
    setXpEarned(totalXp)
    setPhase("complete")
    const done = (state.completedLessons[courseId] || []).length
    if (done >= course.lessons.length) {
      ciqStore.unlockAchievement("culture-explorer")
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 min-h-[80vh] flex flex-col">

      {/* Progress bar */}
      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${((lessonIndex + (phase === "complete" ? 1 : 0)) / course.lessons.length) * 100}%`,
            background: course.accentColor,
          }}
        />
      </div>

      {/* Reading phase */}
      {phase === "reading" && (
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{course.title}</p>
          <h1 className="text-2xl font-bold text-white mb-6">{lesson.title}</h1>

          <div className="flex-1 space-y-5 text-zinc-300 leading-relaxed">
            {lesson.blocks.map((block, i) => (
              <LessonBlockRenderer key={i} block={block} accentColor={course.accentColor} />
            ))}
          </div>

          <button
            onClick={handleFinishReading}
            className="mt-8 w-full py-3.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: course.accentColor, color: "#000" }}
          >
            {lesson.quiz ? "Take the Quiz →" : lesson.reflection ? "Reflect →" : "Complete Lesson →"}
          </button>
        </div>
      )}

      {/* Quiz phase */}
      {phase === "quiz" && lesson.quiz && (
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Quiz</p>
          <h2 className="text-lg font-semibold text-white mb-6 leading-snug">
            {lesson.quiz.question}
          </h2>

          <div className="flex-1 space-y-3">
            {lesson.quiz.options.map((option) => {
              const isSelected = selectedOption === option.id
              const showResult = quizState !== "idle"
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  disabled={quizState !== "idle"}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border text-sm transition-all",
                    !showResult && "border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 hover:bg-zinc-800/60",
                    showResult && isSelected && option.isCorrect && "border-emerald-500 bg-emerald-950/50 text-emerald-300",
                    showResult && isSelected && !option.isCorrect && "border-red-500 bg-red-950/50 text-red-300",
                    showResult && !isSelected && option.isCorrect && "border-emerald-500/50 bg-emerald-950/20 text-emerald-400",
                    showResult && !isSelected && !option.isCorrect && "border-zinc-800 bg-zinc-900/30 text-zinc-500 opacity-60"
                  )}
                >
                  <span className="flex items-start gap-2">
                    <span className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] mt-0.5">
                      {option.id.toUpperCase()}
                    </span>
                    {option.text}
                  </span>
                </button>
              )
            })}
          </div>

          {quizState !== "idle" && (
            <div className={cn(
              "mt-4 p-4 rounded-xl border",
              quizState === "correct"
                ? "border-emerald-700/50 bg-emerald-950/30"
                : "border-red-700/50 bg-red-950/30"
            )}>
              <p className={cn(
                "font-semibold text-sm mb-1",
                quizState === "correct" ? "text-emerald-400" : "text-red-400"
              )}>
                {quizState === "correct" ? "✓ Correct!" : "✗ Not quite."}
              </p>
              {lesson.quiz?.explanation && (
                <p className="text-xs text-zinc-400 leading-relaxed">{lesson.quiz.explanation}</p>
              )}
              <button
                onClick={handleAfterQuiz}
                className="mt-3 w-full py-2.5 rounded-lg font-semibold text-xs transition-opacity hover:opacity-90"
                style={{ background: course.accentColor, color: "#000" }}
              >
                Continue →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Reflection phase */}
      {phase === "reflection" && lesson.reflection && (
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Reflection</p>
          <h2 className="text-lg font-semibold text-white mb-4 leading-snug">
            {lesson.reflection.prompt}
          </h2>
          <textarea
            value={reflectionText}
            onChange={(e) => setReflectionText(e.target.value)}
            placeholder="Write your thoughts here… (or skip)"
            rows={6}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-sm text-white placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-500 transition-colors"
          />
          <button
            onClick={handleReflectionSubmit}
            className="mt-4 w-full py-3.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: course.accentColor, color: "#000" }}
          >
            {reflectionText.trim() ? "Save & Complete →" : "Skip & Complete →"}
          </button>
        </div>
      )}

      {/* Complete phase */}
      {phase === "complete" && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-2">Lesson Complete!</h2>
          <p className="text-zinc-400 text-sm mb-2">{lesson.title}</p>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl font-bold text-amber-400">+{lesson.xpReward} XP</span>
          </div>

          <div className="w-full space-y-3">
            {nextLesson ? (
              <button
                onClick={() => router.push(`/learn/${courseId}/${nextLesson.id}`)}
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: course.accentColor, color: "#000" }}
              >
                Next: {nextLesson.title} →
              </button>
            ) : (
              <div className="p-4 rounded-xl border border-emerald-700/50 bg-emerald-950/30 text-emerald-400 font-semibold text-sm mb-2">
                🏆 Course Complete!
              </div>
            )}
            <button
              onClick={() => router.push(`/learn/${courseId}`)}
              className="w-full py-3 rounded-xl border border-zinc-700 text-zinc-400 text-sm hover:border-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Back to Course
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Block Renderer ──────────────────────────────────────────────────────── */

function LessonBlockRenderer({ block, accentColor }: { block: LessonBlock; accentColor: string }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-lg font-bold text-white pt-2" style={{ borderLeft: `3px solid ${accentColor}`, paddingLeft: "12px" }}>
          {block.content}
        </h2>
      )
    case "paragraph":
      return <p className="text-zinc-300 leading-relaxed text-sm">{block.content}</p>
    case "quote":
      return (
        <blockquote className="border-l-2 pl-4 py-1" style={{ borderColor: accentColor }}>
          <p className="text-zinc-300 italic text-sm leading-relaxed">"{block.content}"</p>
          {block.author && (
            <p className="text-zinc-500 text-xs mt-1">— {block.author}</p>
          )}
        </blockquote>
      )
    case "list":
      return (
        <ul className="space-y-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }} />
              {item}
            </li>
          ))}
        </ul>
      )
    case "divider":
      return <hr className="border-zinc-800" />
    default:
      return null
  }
}
