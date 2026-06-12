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
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Daily Inspiration</h1>
        <p className="text-sm text-zinc-400 mt-1">A new photographer, concept, or reference every day.</p>
      </div>

      <div className="space-y-4">
        {DAILY_CARDS.map((card, i) => {
          const seen = dailyInspirationSeen.includes(card.date)
          const isToday = i === 0
          return (
            <div
              key={card.date}
              className={`rounded-2xl p-5 border transition-colors ${
                isToday
                  ? "border-amber-700/50 bg-gradient-to-br from-amber-950/30 to-zinc-950"
                  : "border-zinc-800/50 bg-zinc-900/30"
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full uppercase tracking-widest">
                    {card.type}
                  </span>
                  {isToday && (
                    <span className="text-[10px] bg-amber-900/50 text-amber-400 px-2 py-0.5 rounded-full font-semibold">
                      Today
                    </span>
                  )}
                </div>
                <span className="text-xl opacity-50">{card.emoji}</span>
              </div>

              <h2 className="text-lg font-bold text-white mt-2">{card.title}</h2>
              <p className="text-xs text-zinc-500 mb-3">{card.subtitle}</p>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">{card.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {card.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Link
                  href={card.lessonLink}
                  className="flex-1 text-center text-sm font-semibold bg-white/10 hover:bg-white/15 text-white rounded-xl py-2 transition-colors"
                >
                  Learn more →
                </Link>
                {!seen && (
                  <button
                    onClick={() => handleSeen(card.date)}
                    className="text-sm px-3 py-2 rounded-xl border border-zinc-700 text-zinc-400 hover:border-zinc-500 transition-colors"
                  >
                    +5 XP
                  </button>
                )}
                {seen && (
                  <span className="text-sm px-3 py-2 text-amber-400/60">✓</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
