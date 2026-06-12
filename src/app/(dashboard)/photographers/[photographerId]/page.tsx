"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPhotographer, PHOTOGRAPHERS } from "@/content/photographers"
import { getCourse } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"

export default function PhotographerPage({ params }: { params: Promise<{ photographerId: string }> }) {
  const { photographerId } = use(params)
  const photographer = getPhotographer(photographerId)
  if (!photographer) notFound()

  const course = getCourse(photographer.courseId)
  const { completedLessons } = useCIQStore()
  const done = completedLessons[photographer.courseId] || []
  const allDone = course ? done.length === course.lessons.length : false

  const related = (photographer.discoveryChain || [])
    .map((id) => PHOTOGRAPHERS.find((p) => p.id === id))
    .filter(Boolean)

  const accent = photographer.accentColor

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
      <Link href="/photographers" style={{ font: "var(--text-caption)", color: "var(--fg-3)", textDecoration: "none" }}>
        ← Photographers
      </Link>

      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, ${accent}22 0%, var(--surface) 65%)`,
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: 24,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: "var(--radius-lg)",
          background: `${accent}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 30, marginBottom: 16,
        }}>📷</div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 4 }}>{photographer.name}</h1>
        <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 16 }}>
          {photographer.nationality}{photographer.born ? ` · b. ${photographer.born}` : ""}
        </p>
        <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.65, marginBottom: 16 }}>
          {photographer.bio}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {photographer.tags.map((tag) => (
            <span key={tag} style={{
              font: "var(--text-label)", color: "var(--fg-3)",
              background: "var(--surface-2)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-pill)", padding: "3px 10px",
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Style */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 16 }}>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Style</p>
        <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.6 }}>{photographer.styleDescription}</p>
      </div>

      {/* Course CTA */}
      {course && (
        <div>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
            Learning Path
          </p>
          <Link href={`/learn/${course.id}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: `linear-gradient(135deg, ${accent}15 0%, var(--surface) 70%)`,
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: 16,
              transition: "border-color 0.15s",
            }}>
              <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", marginBottom: 4 }}>{course.title}</p>
              <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 12 }}>
                {course.lessons.length} lessons · {done.length} completed
              </p>
              <div style={{ height: 3, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden", marginBottom: 12 }}>
                <div style={{
                  height: "100%",
                  width: `${course.lessons.length > 0 ? (done.length / course.lessons.length) * 100 : 0}%`,
                  background: allDone ? "var(--favourable)" : accent,
                  borderRadius: "var(--radius-pill)",
                  transition: "width 0.5s ease-out",
                }} />
              </div>
              <p style={{ font: "var(--text-label)", color: allDone ? "var(--favourable-text)" : "var(--gold-text)" }}>
                {done.length === 0 ? "Start learning →" : allDone ? "✅ Complete" : "Continue →"}
              </p>
            </div>
          </Link>
        </div>
      )}

      {/* Discovery chain */}
      {related.length > 0 && (
        <div>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
            If you like {photographer.name.split(" ")[0]}, explore…
          </p>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }} className="no-scrollbar">
            {related.map((r) => r && (
              <Link key={r.id} href={`/photographers/${r.id}`} style={{ flexShrink: 0, textDecoration: "none" }}>
                <div style={{
                  width: 110,
                  background: `${r.accentColor}15`,
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 12,
                  transition: "border-color 0.15s",
                }}>
                  <div style={{ fontSize: 20, marginBottom: 8 }}>📷</div>
                  <p style={{ font: "var(--text-label)", color: "var(--fg-1)", lineHeight: 1.25 }}>{r.name}</p>
                  <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 2 }}>{r.nationality}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
