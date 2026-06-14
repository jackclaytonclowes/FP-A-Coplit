"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCourse, ALL_COURSES } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"
import { CATEGORY_LABELS, CATEGORY_EMOJI } from "../page"
import type { Course } from "@/types"

export default function CourseOrCategoryPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params)
  const { completedLessons, courseProgress } = useCIQStore()

  const course = getCourse(courseId)

  // ── Category page ──────────────────────────────────────────────────────────
  if (!course) {
    const courses = ALL_COURSES.filter((c) => c.category === courseId)
    if (courses.length === 0) notFound()

    const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0)
    const doneLessons = courses.reduce((s, c) => s + (completedLessons[c.id] || []).length, 0)
    const pct = totalLessons > 0 ? doneLessons / totalLessons : 0
    const accent = courses[0]?.accentColor ?? "var(--gold)"

    return (
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px" }}>
        <Link
          href="/learn"
          style={{ font: "var(--text-caption)", color: "var(--fg-3)", textDecoration: "none", display: "inline-block", marginBottom: 20 }}
        >
          ← Learn
        </Link>

        {/* Category header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 32 }}>{CATEGORY_EMOJI[courseId] ?? "📚"}</span>
            <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)" }}>
              {CATEGORY_LABELS[courseId] ?? courseId}
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ font: "var(--text-caption)", color: "var(--fg-3)", fontFamily: "var(--font-mono)" }}>
              {courses.length} courses · {totalLessons} lessons
            </span>
            {doneLessons > 0 && (
              <span style={{ font: "var(--text-caption)", color: accent, fontFamily: "var(--font-mono)" }}>
                {doneLessons}/{totalLessons} done
              </span>
            )}
          </div>
          <div style={{ height: 5, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct * 100}%`, background: accent, borderRadius: "var(--radius-pill)", transition: "width 0.5s ease-out" }} />
          </div>
        </div>

        {/* Course list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {courses.map((c) => {
            const done = (completedLessons[c.id] || []).length
            const total = c.lessons.length
            const progress = courseProgress[c.id] ?? 0
            const completed = progress >= 1
            const started = done > 0

            return (
              <Link key={c.id} href={`/learn/${c.id}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: completed
                    ? "linear-gradient(135deg, var(--favourable-soft) 0%, var(--surface) 70%)"
                    : `linear-gradient(135deg, ${c.accentColor}12 0%, var(--surface) 70%)`,
                  border: `1px solid ${completed ? "var(--favourable-border)" : "var(--border)"}`,
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}>
                  {c.coverImage && (
                    <div style={{ width: "100%", height: 130, overflow: "hidden", background: `${c.accentColor}22` }}>
                      <img
                        src={c.coverImage}
                        alt={c.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none" }}
                      />
                    </div>
                  )}
                  <div style={{ padding: 16 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "var(--radius-md)", flexShrink: 0,
                      background: completed ? "var(--favourable-soft)" : `${c.accentColor}22`,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                    }}>
                      {completed ? "✅" : (CATEGORY_EMOJI[c.category] ?? "📚")}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                        <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.title}
                        </p>
                        {completed && (
                          <span style={{
                            font: "var(--text-label)", fontSize: 10,
                            background: "var(--favourable-soft)", color: "var(--favourable-text)",
                            border: "1px solid var(--favourable-border)",
                            borderRadius: "var(--radius-pill)", padding: "2px 7px", flexShrink: 0,
                          }}>Done</span>
                        )}
                      </div>
                      <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {c.description}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                        <div style={{ flex: 1, height: 5, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${progress * 100}%`, background: completed ? "var(--favourable)" : c.accentColor, borderRadius: "var(--radius-pill)", transition: "width 0.5s ease-out" }} />
                        </div>
                        <span style={{ font: "var(--text-caption)", fontFamily: "var(--font-mono)", color: "var(--fg-3)", flexShrink: 0 }}>
                          {started ? `${done}/${total}` : `${total} lessons`}
                        </span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  // ── Course detail page ─────────────────────────────────────────────────────
  const done = completedLessons[courseId] || []
  const nextLesson = course.lessons.find((l) => !done.includes(l.id))
  const progress = course.lessons.length > 0 ? done.length / course.lessons.length : 0
  const allDone = done.length === course.lessons.length && course.lessons.length > 0

  // Breadcrumb: link back to parent category (unless course IS the category, e.g. photography-foundations)
  const categoryIsSelf = course.category === courseId
  const backHref = categoryIsSelf ? "/learn" : `/learn/${course.category}`
  const backLabel = categoryIsSelf ? "Learn" : (CATEGORY_LABELS[course.category] ?? "Learn")

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px" }}>
      <Link
        href={backHref}
        style={{ font: "var(--text-caption)", color: "var(--fg-3)", textDecoration: "none", display: "inline-block", marginBottom: 16 }}
      >
        ← {backLabel}
      </Link>

      {/* Cover image */}
      {course.coverImage && (
        <div style={{
          width: "100%", aspectRatio: "16/7", overflow: "hidden",
          borderRadius: "var(--radius-lg)", marginBottom: 16,
          background: `${course.accentColor}22`,
        }}>
          <img
            src={course.coverImage}
            alt={course.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none" }}
          />
        </div>
      )}

      {/* Header card */}
      <div style={{
        background: `linear-gradient(135deg, ${course.accentColor}20 0%, var(--surface) 70%)`,
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: 24,
        marginBottom: 24,
      }}>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "capitalize", letterSpacing: "0.06em", marginBottom: 6 }}>
          {CATEGORY_LABELS[course.category] ?? course.category.replace(/-/g, " ")}
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
            height: "100%", width: `${progress * 100}%`,
            background: allDone ? "var(--favourable)" : course.accentColor,
            borderRadius: "var(--radius-pill)", transition: "width 0.5s ease-out",
          }} />
        </div>

        {nextLesson && (
          <Link href={`/learn/${courseId}/${nextLesson.id}`} style={{
            display: "block", textAlign: "center",
            font: "var(--text-body-strong)", color: "#000",
            background: course.accentColor,
            borderRadius: "var(--radius-md)", padding: "12px 0", textDecoration: "none",
          }}>
            {done.length === 0 ? "Start Course" : "Continue"} →
          </Link>
        )}
        {allDone && (
          <div style={{
            textAlign: "center", font: "var(--text-body-strong)", color: "var(--favourable-text)",
            background: "var(--favourable-soft)", border: "1px solid var(--favourable-border)",
            borderRadius: "var(--radius-md)", padding: "12px 0",
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
          if (isNext)     { bg = "var(--gold-soft)";       borderColor = "var(--gold-border)" }

          return (
            <Link
              key={lesson.id}
              href={isLocked ? "#" : `/learn/${courseId}/${lesson.id}`}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: 12, background: bg,
                border: `1px solid ${borderColor}`,
                borderRadius: "var(--radius-md)", textDecoration: "none",
                opacity: isLocked ? 0.45 : 1,
                pointerEvents: isLocked ? "none" : "auto",
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
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
