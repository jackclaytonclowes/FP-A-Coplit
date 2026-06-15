"use client"

import Link from "next/link"
import { useCIQStore } from "@/hooks/useCIQStore"
import { XPBar } from "@/components/engine/XPBar"
import { ALL_COURSES } from "@/content/courses"
import { PHOTOGRAPHERS } from "@/content/photographers"

const DAILY = {
  name: "Peter Lindbergh",
  tagline: "The man who gave supermodels their souls back.",
  description:
    "In 1988, Lindbergh shot Linda Evangelista, Naomi Campbell, Cindy Crawford, and Christy Turlington on a windswept Santa Monica beach — no makeup, natural light, worn denim. It became the cover of British Vogue and launched the supermodel era.",
  tags: ["Black & White", "Documentary Fashion", "Natural Light"],
  accent: "#A0A0A0",
  link: "/photographers/peter-lindbergh",
}

const TAG_COLORS = [
  { bg: "var(--gold-soft)", border: "var(--gold-border)", text: "var(--gold-text)" },
  { bg: "var(--violet-soft)", border: "var(--violet-border)", text: "var(--violet-text)" },
  { bg: "var(--cyan-soft)", border: "var(--cyan-border)", text: "var(--cyan-text)" },
  { bg: "var(--rose-soft)", border: "var(--rose-border)", text: "var(--rose-text)" },
]

export default function HomePage() {
  const { xp, streak, level, levelTitle, progressPercent, xpToNext, completedLessons } = useCIQStore()

  const recentCourse =
    ALL_COURSES.find((c) => Object.keys(completedLessons).includes(c.id)) ?? ALL_COURSES[0]
  const doneCount = (completedLessons[recentCourse.id] || []).length
  const totalCount = recentCourse.lessons.length
  const courseProgress = totalCount > 0 ? doneCount / totalCount : 0

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 28 }}>

      {/* ── Level & XP ── */}
      <section style={{
        background: "linear-gradient(135deg, var(--gold-soft) 0%, var(--surface) 65%)",
        border: "1px solid var(--gold-border)",
        borderLeft: "4px solid var(--gold)",
        borderRadius: "var(--radius-xl)",
        padding: 20,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <p style={{ font: "var(--text-label)", color: "var(--gold-text)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
              Level {level}
            </p>
            <p style={{ font: "var(--text-h2)", color: "var(--fg-1)" }}>{levelTitle}</p>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "rgba(255,90,0,0.14)",
            border: "1px solid rgba(255,100,0,0.35)",
            borderRadius: "var(--radius-md)",
            padding: "8px 14px",
          }}>
            <span style={{ fontSize: 18 }}>🔥</span>
            <span style={{ font: "var(--text-h3)", fontFamily: "var(--font-mono)", color: "#FF8040" }}>{streak}</span>
            <span style={{ font: "var(--text-caption)", color: "var(--fg-3)" }}>streak</span>
          </div>
        </div>
        <XPBar showLevel={false} />
        <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 6 }}>
          {xp.toLocaleString()} XP · {xpToNext.toLocaleString()} to Lv {level + 1}
        </p>
      </section>

      {/* ── Daily Inspiration ── */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Daily Inspiration</p>
          <Link href="/daily" style={{ font: "var(--text-label)", color: "var(--gold-text)", textDecoration: "none" }}>See all →</Link>
        </div>
        <div style={{
          background: `linear-gradient(135deg, ${DAILY.accent}12 0%, var(--surface) 65%)`,
          border: `1px solid ${DAILY.accent}40`,
          borderTop: `3px solid ${DAILY.accent}`,
          borderRadius: "var(--radius-xl)",
          padding: 20,
        }}>
          <p style={{
            font: "var(--text-label)", letterSpacing: "0.08em", textTransform: "uppercase",
            color: DAILY.accent, marginBottom: 6,
          }}>
            Photographer of the day
          </p>
          <p style={{ font: "var(--text-h2)", color: "var(--fg-1)", marginBottom: 2 }}>{DAILY.name}</p>
          <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", fontStyle: "italic", marginBottom: 12 }}>{DAILY.tagline}</p>
          <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.65, marginBottom: 16 }}>
            {DAILY.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {DAILY.tags.map((tag, i) => {
              const c = TAG_COLORS[i % TAG_COLORS.length]
              return (
                <span key={tag} style={{
                  font: "var(--text-label)", color: c.text,
                  background: c.bg, border: `1px solid ${c.border}`,
                  borderRadius: "var(--radius-pill)", padding: "3px 10px",
                }}>{tag}</span>
              )
            })}
          </div>
          <Link href={DAILY.link} style={{
            display: "block", textAlign: "center",
            font: "var(--text-body-strong)", color: "#000",
            background: DAILY.accent,
            borderRadius: "var(--radius-md)", padding: "11px 0",
            textDecoration: "none",
          }}>
            Start learning →
          </Link>
        </div>
      </section>

      {/* ── Continue Learning ── */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Continue Learning
        </p>
        <Link href={`/learn/${recentCourse.id}`} style={{ textDecoration: "none" }}>
          <div style={{
            background: `linear-gradient(135deg, ${recentCourse.accentColor}18 0%, var(--surface) 70%)`,
            border: `1px solid ${recentCourse.accentColor}40`,
            borderLeft: `4px solid ${recentCourse.accentColor}`,
            borderRadius: "var(--radius-lg)",
            padding: 16,
          }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: "var(--radius-md)",
                background: `${recentCourse.accentColor}25`,
                border: `2px solid ${recentCourse.accentColor}50`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>📸</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", textTransform: "capitalize", marginBottom: 2 }}>
                  {recentCourse.category.replace(/-/g, " ")}
                </p>
                <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {recentCourse.title}
                </p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 2 }}>
                  {doneCount} / {totalCount} lessons
                </p>
              </div>
              <span style={{ font: "var(--text-label)", color: recentCourse.accentColor, flexShrink: 0, alignSelf: "center" }}>
                Continue →
              </span>
            </div>
            <div style={{ marginTop: 12, height: 5, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
              <div style={{
                height: "100%", width: `${courseProgress * 100}%`,
                background: recentCourse.accentColor,
                borderRadius: "var(--radius-pill)", transition: "width 0.5s ease-out",
              }} />
            </div>
          </div>
        </Link>
      </section>

      {/* ── Photographers ── */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Photographers</p>
          <Link href="/photographers" style={{ font: "var(--text-label)", color: "var(--gold-text)", textDecoration: "none" }}>All 18 →</Link>
        </div>
        <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 4 }} className="no-scrollbar">
          {PHOTOGRAPHERS.slice(0, 8).map((p) => (
            <Link key={p.id} href={`/photographers/${p.id}`} style={{ flexShrink: 0, width: 72, textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 64, height: 64,
                borderRadius: "50%",
                background: `${p.accentColor}22`,
                border: `2px solid ${p.accentColor}70`,
                boxShadow: `0 0 0 3px ${p.accentColor}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 700,
                color: p.accentColor,
                fontFamily: "var(--font-display)",
              }}>
                {p.name.split(" ").pop()?.charAt(0)}
              </div>
              <p style={{
                font: "var(--text-caption)", color: "var(--fg-2)",
                textAlign: "center", lineHeight: 1.2,
              }}>
                {p.name.split(" ").pop()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { label: "Lessons done",    value: Object.values(completedLessons).flat().length, color: "var(--gold-text)",   bg: "var(--gold-soft)",   border: "var(--gold-border)" },
          { label: "Courses started", value: Object.keys(completedLessons).length,          color: "var(--violet-text)", bg: "var(--violet-soft)", border: "var(--violet-border)" },
          { label: "XP earned",       value: xp.toLocaleString(),                           color: "var(--cyan-text)",   bg: "var(--cyan-soft)",   border: "var(--cyan-border)" },
        ].map(({ label, value, color, bg, border }) => (
          <div key={label} style={{
            textAlign: "center", padding: "14px 8px",
            background: bg, border: `1px solid ${border}`,
            borderRadius: "var(--radius-lg)",
          }}>
            <p style={{ font: "var(--text-h3)", fontFamily: "var(--font-mono)", color }}>{value}</p>
            <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 4, lineHeight: 1.3 }}>{label}</p>
          </div>
        ))}
      </section>

    </div>
  )
}
