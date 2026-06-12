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
  accent: "var(--ph-lindbergh)",
  link: "/photographers/peter-lindbergh",
}

export default function HomePage() {
  const { xp, streak, level, levelTitle, progressPercent, xpToNext, completedLessons } = useCIQStore()

  const recentCourse =
    ALL_COURSES.find((c) => Object.keys(completedLessons).includes(c.id)) ?? ALL_COURSES[0]
  const doneCount = (completedLessons[recentCourse.id] || []).length
  const totalCount = recentCourse.lessons.length
  const courseProgress = totalCount > 0 ? doneCount / totalCount : 0

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 24 }}>

      {/* Level & XP card */}
      <section className="card">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <p style={{ font: "var(--text-label)", color: "var(--fg-3)", marginBottom: 4 }}>Level {level}</p>
            <p style={{ font: "var(--text-h2)", color: "var(--fg-1)" }}>{levelTitle}</p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            padding: "8px 12px",
          }}>
            <span style={{ fontSize: 20 }}>🔥</span>
            <span style={{ font: "var(--text-h3)", fontFamily: "var(--font-mono)", color: "var(--fg-1)" }}>{streak}</span>
            <span style={{ font: "var(--text-caption)", color: "var(--fg-3)" }}>streak</span>
          </div>
        </div>
        <XPBar showLevel={false} />
        <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 6 }}>
          {xp.toLocaleString()} XP · {xpToNext.toLocaleString()} to Lv {level + 1}
        </p>
      </section>

      {/* Daily Inspiration */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Daily Inspiration</p>
          <Link href="/daily" style={{ font: "var(--text-label)", color: "var(--gold-text)", textDecoration: "none" }}>See all →</Link>
        </div>
        <div style={{
          background: `linear-gradient(135deg, ${DAILY.accent}18 0%, var(--surface) 60%)`,
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: 20,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                Photographer of the day
              </p>
              <p style={{ font: "var(--text-h2)", color: "var(--fg-1)" }}>{DAILY.name}</p>
              <p style={{ font: "var(--text-caption)", color: "var(--fg-2)", fontStyle: "italic", marginTop: 2 }}>{DAILY.tagline}</p>
            </div>
            <span style={{ fontSize: 28, opacity: 0.5 }}>📷</span>
          </div>
          <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.6, margin: "12px 0" }}>
            {DAILY.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {DAILY.tags.map((tag) => (
              <span key={tag} style={{
                font: "var(--text-label)",
                color: "var(--fg-3)",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-pill)",
                padding: "3px 10px",
              }}>{tag}</span>
            ))}
          </div>
          <Link href={DAILY.link} style={{
            display: "block",
            textAlign: "center",
            font: "var(--text-body-strong)",
            color: "var(--fg-1)",
            background: "var(--surface-3)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-md)",
            padding: "10px 0",
            textDecoration: "none",
            transition: "background 0.15s",
          }}>
            Start learning →
          </Link>
        </div>
      </section>

      {/* Continue Learning */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Continue Learning
        </p>
        <Link href={`/learn/${recentCourse.id}`} style={{ textDecoration: "none" }}>
          <div style={{
            background: `linear-gradient(135deg, ${recentCourse.accentColor}15 0%, var(--surface) 70%)`,
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: 16,
            transition: "border-color 0.15s",
          }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: "var(--radius-md)",
                background: `${recentCourse.accentColor}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
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
            </div>
            <div style={{ marginTop: 12, height: 4, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${courseProgress * 100}%`,
                background: recentCourse.accentColor,
                borderRadius: "var(--radius-pill)",
                transition: "width 0.5s ease-out",
              }} />
            </div>
          </div>
        </Link>
      </section>

      {/* Photographer strip */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Photographers</p>
          <Link href="/photographers" style={{ font: "var(--text-label)", color: "var(--gold-text)", textDecoration: "none" }}>All 18 →</Link>
        </div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }} className="no-scrollbar">
          {PHOTOGRAPHERS.slice(0, 8).map((p) => (
            <Link key={p.id} href={`/photographers/${p.id}`} style={{ flexShrink: 0, width: 80, textDecoration: "none" }}>
              <div style={{
                width: 80, height: 80,
                borderRadius: "var(--radius-lg)",
                background: `${p.accentColor}20`,
                border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 6,
              }}>📷</div>
              <p style={{
                font: "var(--text-caption)",
                color: "var(--fg-2)",
                textAlign: "center",
                lineHeight: 1.2,
              }}>
                {p.name.split(" ").slice(-1)[0]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[
          { label: "Lessons done",    value: Object.values(completedLessons).flat().length },
          { label: "Courses started", value: Object.keys(completedLessons).length },
          { label: "XP earned",       value: xp.toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} className="card" style={{ textAlign: "center", padding: 12 }}>
            <p style={{ font: "var(--text-h3)", fontFamily: "var(--font-mono)", color: "var(--gold-text)" }}>{value}</p>
            <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 2 }}>{label}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
