"use client"

import Link from "next/link"
import { PHOTOGRAPHERS, DISCOVERY_CHAINS } from "@/content/photographers"
import { ALL_COURSES } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"

const FEED: { type: "quote" | "tip"; content: string; author?: string; label?: string }[] = [
  { type: "quote", content: "The camera is an instrument that teaches people how to see without a camera.", author: "Dorothea Lange" },
  { type: "tip", content: "Try shooting in the blue hour tonight — 20 minutes after sunset. City lights glow warmly against the deep blue sky.", label: "Technique" },
  { type: "quote", content: "I'm interested in the in-between moments — the moments that happen between the moment everybody's focused on.", author: "Wolfgang Tillmans" },
  { type: "tip", content: "Build a moodboard before your next shoot. 20–30 reference images that define the mood, colour temperature, and emotional register.", label: "Pre-production" },
  { type: "quote", content: "Photography is truth. Cinema is truth 24 frames per second.", author: "Jean-Luc Godard" },
  { type: "tip", content: "Chiaroscuro: use a single off-axis light source and let one side of your subject fall into deep shadow.", label: "Lighting" },
]

export default function DiscoverPage() {
  const { discoveryProgress } = useCIQStore()

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 6 }}>Discover</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-3)" }}>Photographers, ideas, and creative references.</p>
      </div>

      {/* Discovery Chains */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Photographer Chains
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {DISCOVERY_CHAINS.map((chain) => {
            const progress = discoveryProgress[chain.id]
            const unlocked = progress?.unlockedPhotographers ?? []
            return (
              <div key={chain.id} style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: 16,
              }}>
                <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", marginBottom: 2 }}>{chain.name}</p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 12 }}>{chain.description}</p>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                  {chain.photographers.map((pid, i) => {
                    const p = PHOTOGRAPHERS.find((ph) => ph.id === pid)
                    const isUnlocked = i === 0 || unlocked.includes(pid)
                    return (
                      <div key={pid} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Link
                          href={isUnlocked ? `/photographers/${pid}` : "#"}
                          style={{
                            font: "var(--text-label)", fontWeight: 600,
                            color: isUnlocked ? "var(--fg-1)" : "var(--fg-muted)",
                            background: isUnlocked ? "var(--surface-2)" : "var(--surface)",
                            border: `1px solid ${isUnlocked ? "var(--border-strong)" : "var(--border-subtle)"}`,
                            borderRadius: "var(--radius-sm)",
                            padding: "4px 10px", textDecoration: "none",
                            pointerEvents: isUnlocked ? "auto" : "none",
                          }}
                        >
                          {p?.name.split(" ").slice(-1)[0] ?? pid}
                        </Link>
                        {i < chain.photographers.length - 1 && (
                          <span style={{ font: "var(--text-caption)", color: "var(--fg-muted)" }}>→</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Courses */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Explore Paths
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {ALL_COURSES.map((course) => (
            <Link key={course.id} href={`/learn/${course.id}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: `linear-gradient(135deg, ${course.accentColor}12 0%, var(--surface) 80%)`,
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 14,
                height: "100%",
                transition: "border-color 0.15s",
              }}>
                <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", lineHeight: 1.25, marginBottom: 4 }}>
                  {course.title}
                </p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 8 }}>
                  {course.lessons.length} lessons
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {course.tags.slice(0, 2).map((t) => (
                    <span key={t} style={{
                      fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600,
                      color: "var(--fg-3)", background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-pill)", padding: "2px 7px",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Creative feed */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Creative Feed
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FEED.map((item, i) => (
            <div key={i} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: 16,
            }}>
              {item.type === "quote" ? (
                <>
                  <p style={{ font: "var(--text-body)", color: "var(--fg-2)", fontStyle: "italic", lineHeight: 1.65 }}>
                    "{item.content}"
                  </p>
                  <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 8 }}>— {item.author}</p>
                </>
              ) : (
                <>
                  <span style={{
                    display: "inline-block",
                    font: "var(--text-label)",
                    color: "var(--gold-text)",
                    background: "var(--gold-soft)",
                    border: "1px solid var(--gold-border)",
                    borderRadius: "var(--radius-pill)",
                    padding: "2px 10px",
                    marginBottom: 8,
                  }}>{item.label}</span>
                  <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.65 }}>{item.content}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
