"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCourse } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"

export default function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params)
  const course = getCourse(courseId)
  if (!course) notFound()

  const { completedLessons } = useCIQStore()
  const done = completedLessons[courseId] || []
  const nextLesson = course.lessons.find((l) => !done.includes(l.id))
  const progress = course.lessons.length > 0 ? done.length / course.lessons.length : 0
  const allDone = done.length === course.lessons.length && course.lessons.length > 0

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px" }}>
      <Link href="/learn" style={{ font: "var(--text-caption)", color: "var(--fg-3)", textDecoration: "none", display: "inline-block", marginBottom: 16 }}>
        ← Back to Learn
      </Link>

      {/* Header card */}
      <div style={{
        background: `linear-gradient(135deg, ${course.accentColor}20 0%, var(--surface) 70%)`,
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: 24,
        marginBottom: 24,
      }}>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "capitalize", letterSpacing: "0.06em", marginBottom: 6 }}>
          {course.category.replace(/-/g, " ")}
        </p>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 10 }}>{course.title}</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.6, marginBottom: 16 }}>
          {course.description}
        </p>

        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          {[
            { v: `${course.lessons.length} lessons` },
            { v: `${course.estimatedHours}h` },
            { v: `${done.length} done` },
          ].map(({ v }) => (
            <span key={v} style={{ font: "var(--text-caption)", fontFamily: "var(--font-mono)", color: "var(--fg-3)" }}>{v}</span>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden", marginBottom: 16 }}>
          <div style={{
            height: "100%",
            width: `${progress * 100}%`,
            background: allDone ? "var(--favourable)" : course.accentColor,
            borderRadius: "var(--radius-pill)",
            transition: "width 0.5s ease-out",
          }} />
        </div>

        {nextLesson && (
          <Link href={`/learn/${courseId}/${nextLesson.id}`} style={{
            display: "block",
            textAlign: "center",
            font: "var(--text-body-strong)",
            color: "#000",
            background: course.accentColor,
            borderRadius: "var(--radius-md)",
            padding: "12px 0",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}>
            {done.length === 0 ? "Start Course" : "Continue"} →
          </Link>
        )}
        {allDone && (
          <div style={{
            textAlign: "center",
            font: "var(--text-body-strong)",
            color: "var(--favourable-text)",
            background: "var(--favourable-soft)",
            border: "1px solid var(--favourable-border)",
            borderRadius: "var(--radius-md)",
            padding: "12px 0",
          }}>
            ✅ Course Complete
          </div>
        )}
      </div>

      {/* Lesson list */}
      <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
        Lessons
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {course.lessons.map((lesson, i) => {
          const isComplete = done.includes(lesson.id)
          const isNext = lesson.id === nextLesson?.id
          const isLocked = !isComplete && !isNext && i > 0 && !done.includes(course.lessons[i - 1]?.id ?? "")

          let bg = "var(--surface)"
          let borderColor = "var(--border)"
          if (isComplete) { bg = "var(--favourable-soft)"; borderColor = "var(--favourable-border)" }
          if (isNext) { bg = "var(--gold-soft)"; borderColor = "var(--gold-border)" }

          return (
            <Link
              key={lesson.id}
              href={isLocked ? "#" : `/learn/${courseId}/${lesson.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 12,
                background: bg,
                border: `1px solid ${borderColor}`,
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                opacity: isLocked ? 0.45 : 1,
                pointerEvents: isLocked ? "none" : "auto",
                transition: "border-color 0.15s",
              }}
            >
              {/* Number/status pill */}
              <div style={{
                width: 32, height: 32,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                font: "var(--text-label)", fontFamily: "var(--font-mono)",
                background: isComplete ? "var(--favourable-soft)" : isNext ? "var(--gold-soft)" : "var(--surface-2)",
                color: isComplete ? "var(--favourable-text)" : isNext ? "var(--gold-text)" : "var(--fg-3)",
                border: `1px solid ${isComplete ? "var(--favourable-border)" : isNext ? "var(--gold-border)" : "var(--border)"}`,
              }}>
                {isComplete ? "✓" : isLocked ? "🔒" : i + 1}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  font: "var(--text-body-strong)",
                  color: isComplete ? "var(--fg-2)" : isNext ? "var(--fg-1)" : "var(--fg-2)",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {lesson.title}
                </p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 2 }}>
                  {lesson.estimatedMinutes} min · +{lesson.xpReward} XP
                  {lesson.quiz ? " · Quiz" : ""}
                  {lesson.reflection ? " · Reflection" : ""}
                </p>
              </div>

              {isNext && (
                <span style={{ font: "var(--text-label)", color: "var(--gold-text)", flexShrink: 0 }}>Start →</span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
