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
  "architecture",
]

export const CATEGORY_LABELS: Record<string, string> = {
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
  "architecture":            "Architecture",
  "glossary":                "Glossary",
}

export const CATEGORY_EMOJI: Record<string, string> = {
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
  "architecture":            "🏛️",
  "glossary":                "📖",
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "photography-foundations": "Light, composition, and the language of images",
  "great-photographers":     "18 masters who changed how we see",
  "style-movements":         "Surrealism to midnight aesthetics",
  "film":                    "Genre, form, and how cinema works",
  "directors":               "11 directors who shaped modern storytelling",
  "history":                 "The events that made the world you live in",
  "crime":                   "Power, corruption, and organised violence",
  "fashion":                 "The industry behind culture's most visible art form",
  "creative-direction":      "From concept brief to finished campaign",
  "marketing":               "Brand, psychology, and desire",
  "art-history":             "Coming soon",
  "architecture":            "Brutalism, modernism, and buildings that changed how we live",
  "glossary":                "Coming soon",
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

  const inProgress = ALL_COURSES
    .filter((c) => {
      const done = (completedLessons[c.id] || []).length
      return done > 0 && (courseProgress[c.id] ?? 0) < 1
    })
    .sort((a, b) =>
      (completedLessons[b.id] || []).length - (completedLessons[a.id] || []).length
    )

  const nothingStarted = ALL_COURSES.every((c) => !(completedLessons[c.id] || []).length)
  const suggestedStart = nothingStarted
    ? ALL_COURSES.find((c) => c.category === "photography-foundations")
    : null

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 6 }}>Learn</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-3)" }}>
          Photography, film, history, crime, fashion, and creative culture.
        </p>
      </div>

      {/* ── Continue Learning ── */}
      {inProgress.length > 0 && (
        <section>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            Continue Learning
          </p>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }} className="no-scrollbar">
            {inProgress.map((course) => {
              const done = (completedLessons[course.id] || []).length
              const total = course.lessons.length
              const progress = courseProgress[course.id] ?? 0
              const nextLessonId = course.lessons[done]?.id ?? course.lessons[0].id
              return (
                <Link
                  key={course.id}
                  href={`/learn/${course.id}/${nextLessonId}`}
                  style={{ textDecoration: "none", flexShrink: 0, width: inProgress.length === 1 ? "100%" : 260 }}
                >
                  <div style={{
                    background: `linear-gradient(135deg, ${course.accentColor}18 0%, var(--surface) 60%)`,
                    border: `1px solid ${course.accentColor}44`,
                    borderLeft: `4px solid ${course.accentColor}`,
                    borderRadius: "var(--radius-lg)",
                    padding: "14px 16px",
                  }}>
                    <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {CATEGORY_LABELS[course.category] ?? course.category}
                    </p>
                    <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", marginBottom: 10, lineHeight: 1.3 }}>
                      {course.title}
                    </p>
                    <div style={{ height: 5, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden", marginBottom: 8 }}>
                      <div style={{ height: "100%", width: `${progress * 100}%`, background: course.accentColor, borderRadius: "var(--radius-pill)" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ font: "var(--text-caption)", color: "var(--fg-3)", fontFamily: "var(--font-mono)" }}>
                        {done}/{total} lessons
                      </span>
                      <span style={{ font: "var(--text-label)", color: course.accentColor }}>Continue →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* ── Start Here (new users) ── */}
      {suggestedStart && (
        <Link href={`/learn/${suggestedStart.id}`} style={{ textDecoration: "none" }}>
          <div style={{
            background: `linear-gradient(135deg, ${suggestedStart.accentColor}20 0%, var(--surface) 60%)`,
            border: `1px solid ${suggestedStart.accentColor}55`,
            borderTop: `3px solid ${suggestedStart.accentColor}`,
            borderRadius: "var(--radius-xl)",
            padding: "20px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
          }}>
            <div>
              <p style={{ font: "var(--text-label)", color: suggestedStart.accentColor, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Start Here
              </p>
              <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", marginBottom: 2 }}>{suggestedStart.title}</p>
              <p style={{ font: "var(--text-caption)", color: "var(--fg-3)" }}>
                {suggestedStart.lessons.length} lessons · the foundations
              </p>
            </div>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
              background: `${suggestedStart.accentColor}25`,
              border: `2px solid ${suggestedStart.accentColor}60`,
              display: "flex", alignItems: "center", justifyContent: "center",
              font: "var(--text-h2)", color: suggestedStart.accentColor,
            }}>→</div>
          </div>
        </Link>
      )}

      {/* ── Category grid ── */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          All Categories
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {CATEGORY_ORDER.filter((cat) => groupedRaw[cat]?.length).map((cat) => {
            const courses = groupedRaw[cat] || []
            const accent = courses[0]?.accentColor ?? "var(--gold)"
            const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0)
            const doneLessons = courses.reduce((s, c) => s + (completedLessons[c.id] || []).length, 0)
            const pct = totalLessons > 0 ? doneLessons / totalLessons : 0
            const href = `/learn/${cat}`

            return (
              <Link key={cat} href={href} style={{ textDecoration: "none" }}>
                <div style={{
                  background: `linear-gradient(160deg, ${accent}18 0%, var(--surface) 55%)`,
                  border: `1px solid ${accent}50`,
                  borderTop: `3px solid ${accent}`,
                  borderRadius: "var(--radius-lg)",
                  padding: "14px 14px 14px",
                  display: "flex", flexDirection: "column", gap: 8,
                  minHeight: 140,
                }}>
                  {/* Emoji in coloured circle */}
                  <div style={{
                    width: 38, height: 38, borderRadius: "var(--radius-md)",
                    background: `${accent}25`,
                    border: `1px solid ${accent}45`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                  }}>
                    {CATEGORY_EMOJI[cat] ?? "📚"}
                  </div>

                  <div style={{ flex: 1 }}>
                    <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", lineHeight: 1.25 }}>
                      {CATEGORY_LABELS[cat]}
                    </p>
                    <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", lineHeight: 1.35, marginTop: 3 }}>
                      {CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ font: "var(--text-caption)", color: "var(--fg-3)", fontFamily: "var(--font-mono)" }}>
                        {courses.length} course{courses.length !== 1 ? "s" : ""}
                      </span>
                      {doneLessons > 0 && (
                        <span style={{ font: "var(--text-caption)", color: accent, fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                          {Math.round(pct * 100)}%
                        </span>
                      )}
                    </div>
                    <div style={{ height: 4, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct * 100}%`, background: accent, borderRadius: "var(--radius-pill)" }} />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
