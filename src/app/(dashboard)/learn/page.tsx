"use client"

import Link from "next/link"
import { useCIQStore } from "@/hooks/useCIQStore"
import { ALL_COURSES } from "@/content/courses"

const CATEGORY_ORDER = [
  "photography-foundations",
  "great-photographers",
  "style-movements",
  "film",
  "directors",
  "history",
  "crime",
  "fashion",
  "creative-direction",
  "marketing",
  "art-history",
  "glossary",
]

const CATEGORY_LABELS: Record<string, string> = {
  "photography-foundations": "Photography",
  "great-photographers":     "Photographers",
  "style-movements":         "Style & Aesthetics",
  "film":                    "Film & Cinema",
  "directors":               "Director Studies",
  "history":                 "History & Geopolitics",
  "crime":                   "Crime, Power & Society",
  "fashion":                 "Fashion & Design",
  "creative-direction":      "Creative Direction",
  "marketing":               "Marketing & Branding",
  "art-history":             "Art History",
  "glossary":                "Glossary",
}

const CATEGORY_EMOJI: Record<string, string> = {
  "photography-foundations": "📷",
  "great-photographers":     "🎨",
  "style-movements":         "🌙",
  "film":                    "🎬",
  "directors":               "🎥",
  "history":                 "🌍",
  "crime":                   "🏛️",
  "fashion":                 "👗",
  "creative-direction":      "💡",
  "marketing":               "📊",
  "art-history":             "🖼️",
  "glossary":                "📖",
}

export default function LearnPage() {
  const { completedLessons, courseProgress } = useCIQStore()

  const groupedRaw = ALL_COURSES.reduce(
    (acc, course) => {
      if (!acc[course.category]) acc[course.category] = []
      acc[course.category].push(course)
      return acc
    },
    {} as Record<string, typeof ALL_COURSES>
  )

  const grouped = CATEGORY_ORDER
    .filter((cat) => groupedRaw[cat])
    .map((cat) => [cat, groupedRaw[cat]] as [string, typeof ALL_COURSES])

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 6 }}>Learn</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-3)" }}>
          Photography, film, history, crime, fashion, and creative culture.
        </p>
      </div>

      {grouped.map(([category, courses]) => (
        <section key={category}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 16 }}>{CATEGORY_EMOJI[category] ?? "📚"}</span>
            <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {CATEGORY_LABELS[category] ?? category}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {courses.map((course) => {
              const done = (completedLessons[course.id] || []).length
              const total = course.lessons.length
              const progress = courseProgress[course.id] ?? 0
              const started = done > 0
              const completed = progress >= 1

              return (
                <Link key={course.id} href={`/learn/${course.id}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: completed
                      ? "linear-gradient(135deg, var(--favourable-soft) 0%, var(--surface) 70%)"
                      : `linear-gradient(135deg, ${course.accentColor}12 0%, var(--surface) 70%)`,
                    border: `1px solid ${completed ? "var(--favourable-border)" : "var(--border)"}`,
                    borderRadius: "var(--radius-lg)",
                    padding: 16,
                    transition: "border-color 0.15s",
                  }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{
                        width: 44, height: 44,
                        borderRadius: "var(--radius-md)",
                        background: completed ? "var(--favourable-soft)" : `${course.accentColor}22`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 20, flexShrink: 0,
                      }}>
                        {completed ? "✅" : (CATEGORY_EMOJI[course.category] ?? "📚")}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                          <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {course.title}
                          </p>
                          {completed && (
                            <span style={{
                              font: "var(--text-label)", fontSize: 10,
                              background: "var(--favourable-soft)",
                              color: "var(--favourable-text)",
                              border: "1px solid var(--favourable-border)",
                              borderRadius: "var(--radius-pill)",
                              padding: "2px 7px", flexShrink: 0,
                            }}>Done</span>
                          )}
                        </div>
                        <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {course.description}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                          <div style={{ flex: 1, height: 3, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                            <div style={{
                              height: "100%",
                              width: `${progress * 100}%`,
                              background: completed ? "var(--favourable)" : course.accentColor,
                              borderRadius: "var(--radius-pill)",
                              transition: "width 0.5s ease-out",
                            }} />
                          </div>
                          <span style={{ font: "var(--text-caption)", fontFamily: "var(--font-mono)", color: "var(--fg-3)", flexShrink: 0 }}>
                            {started ? `${done}/${total}` : `${total} lessons`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
