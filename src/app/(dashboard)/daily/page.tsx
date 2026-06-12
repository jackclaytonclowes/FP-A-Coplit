"use client"

import Link from "next/link"
import { ciqStore } from "@/stores/cultureIQStore"
import { useCIQStore } from "@/hooks/useCIQStore"

const DAILY_CARDS = [
  {
    date: "2026-06-12",
    type: "Photographer",
    title: "Peter Lindbergh",
    subtitle: "German-French, 1944–2019",
    description: "Lindbergh stripped fashion photography of artifice — no retouching, natural light, women as themselves. His 1990 British Vogue beach shoot launched the supermodel era and changed the industry forever.",
    tags: ["Black & White", "Natural Light", "Documentary Fashion"],
    lessonLink: "/photographers/peter-lindbergh",
    emoji: "📷",
  },
  {
    date: "2026-06-11",
    type: "Concept",
    title: "Chiaroscuro",
    subtitle: "The art of light and shadow",
    description: "From the Italian for 'light-dark'. A technique borrowed from Renaissance painters — Caravaggio, Rembrandt — and adopted by photographers. One directional light source, dramatic shadow. Helmut Newton made it a signature.",
    tags: ["Lighting", "Technique", "Contrast"],
    lessonLink: "/glossary",
    emoji: "🕯️",
  },
  {
    date: "2026-06-10",
    type: "Film",
    title: "Eyes Wide Shut (1999)",
    subtitle: "Stanley Kubrick",
    description: "Kubrick's final film uses light as a character — every scene lit with practicals, tungsten warmth, Christmas lights. A masterclass in nocturnal cinematography and how to build dread with beauty.",
    tags: ["Cinematography", "Nocturnal", "Kubrick"],
    lessonLink: "/discover",
    emoji: "🎬",
  },
  {
    date: "2026-06-09",
    type: "Fashion House",
    title: "Céline under Phoebe Philo",
    subtitle: "2008–2018",
    description: "Ten years that defined a visual language: understated luxury, intellectual cool, functional beauty. Philo's Céline was anti-logo, anti-spectacle. The campaigns — often photographed by Juergen Teller — were equally restrained.",
    tags: ["Fashion", "Branding", "Creative Direction"],
    lessonLink: "/learn/fashion",
    emoji: "👗",
  },
  {
    date: "2026-06-08",
    type: "Photographer",
    title: "Nan Goldin",
    subtitle: "American, b. 1953",
    description: "'The Ballad of Sexual Dependency' — a diary-form slideshow of Goldin's social world in 1970s–80s New York. Raw, intimate, revolutionary. She photographed her community from inside it, not above it.",
    tags: ["Documentary", "Diary", "Portrait", "Underground"],
    lessonLink: "/photographers/nan-goldin",
    emoji: "📷",
  },
]

export default function DailyPage() {
  const { dailyInspirationSeen } = useCIQStore()

  function handleSeen(date: string) {
    ciqStore.markDailyInspirationSeen(date)
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)" }}>Daily Inspiration</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-3)", marginTop: 4 }}>A new photographer, concept, or reference every day.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {DAILY_CARDS.map((card, i) => {
          const seen = dailyInspirationSeen.includes(card.date)
          const isToday = i === 0
          return (
            <div
              key={card.date}
              style={{
                borderRadius: "var(--radius-lg)", padding: 20,
                border: `1px solid ${isToday ? "var(--gold-border)" : "var(--border)"}`,
                background: isToday
                  ? `linear-gradient(135deg, rgba(232,197,71,0.08) 0%, var(--surface) 80%)`
                  : "var(--surface)",
                transition: "border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600,
                    background: "var(--surface-2)", color: "var(--fg-3)",
                    padding: "2px 8px", borderRadius: "var(--radius-pill)",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                  }}>
                    {card.type}
                  </span>
                  {isToday && (
                    <span style={{
                      fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600,
                      background: "var(--gold-soft)", color: "var(--gold-text)",
                      padding: "2px 8px", borderRadius: "var(--radius-pill)",
                    }}>
                      Today
                    </span>
                  )}
                </div>
                <span style={{ fontSize: 20, opacity: 0.5 }}>{card.emoji}</span>
              </div>

              <h2 style={{ font: "var(--text-h2)", color: "var(--fg-1)", marginTop: 8 }}>{card.title}</h2>
              <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 10 }}>{card.subtitle}</p>
              <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.65, marginBottom: 16 }}>{card.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {card.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600,
                    background: "var(--surface-2)", color: "var(--fg-3)",
                    padding: "2px 8px", borderRadius: "var(--radius-pill)",
                    border: "1px solid var(--border)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <Link
                  href={card.lessonLink}
                  style={{
                    flex: 1, textAlign: "center",
                    font: "var(--text-body-strong)", color: "var(--fg-1)",
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)", padding: "8px 0",
                    textDecoration: "none", transition: "border-color 0.15s",
                  }}
                >
                  Learn more →
                </Link>
                {!seen && (
                  <button
                    onClick={() => handleSeen(card.date)}
                    style={{
                      font: "var(--text-body)", color: "var(--fg-3)",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)", padding: "8px 12px",
                      cursor: "pointer", transition: "border-color 0.15s",
                    }}
                  >
                    +5 XP
                  </button>
                )}
                {seen && (
                  <span style={{ font: "var(--text-body)", color: "var(--gold-text)", padding: "8px 12px", opacity: 0.6 }}>✓</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
