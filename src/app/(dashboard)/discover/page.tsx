"use client"

import Link from "next/link"
import { PHOTOGRAPHERS, DISCOVERY_CHAINS } from "@/content/photographers"
import { ALL_COURSES } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"

const DISCOVER_FEED = [
  { type: "quote", content: "The camera is an instrument that teaches people how to see without a camera.", author: "Dorothea Lange" },
  { type: "tip", content: "Try shooting in the blue hour tonight — 20 minutes after sunset. City lights glow warmly against deep blue sky.", label: "Technique" },
  { type: "quote", content: "I'm interested in the in-between moments — the moments that happen between the moment everybody's focused on.", author: "Wolfgang Tillmans" },
  { type: "tip", content: "Chiaroscuro: use a single off-axis light source and let one side of your subject fall into deep shadow.", label: "Lighting" },
  { type: "quote", content: "Photography is truth. Cinema is truth 24 frames per second.", author: "Jean-Luc Godard" },
  { type: "tip", content: "Build a moodboard before your next shoot. 20–30 reference images that define the mood, colour temperature, and emotional register.", label: "Pre-production" },
]

export default function DiscoverPage() {
  const { discoveryProgress } = useCIQStore()

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Discover</h1>
        <p className="text-sm text-zinc-400 mt-1">Explore photographers, ideas, and creative references.</p>
      </div>

      {/* Discovery Chains */}
      <section>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Photographer Chains</h2>
        <div className="space-y-3">
          {DISCOVERY_CHAINS.map((chain) => {
            const progress = discoveryProgress[chain.id]
            const unlocked = progress?.unlockedPhotographers ?? []
            return (
              <div key={chain.id} className="bg-zinc-900/40 rounded-2xl p-4 border border-zinc-800/50">
                <h3 className="font-semibold text-white text-sm mb-1">{chain.name}</h3>
                <p className="text-xs text-zinc-500 mb-3">{chain.description}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {chain.photographers.map((pid, i) => {
                    const p = PHOTOGRAPHERS.find((ph) => ph.id === pid)
                    const isUnlocked = i === 0 || unlocked.includes(pid)
                    return (
                      <div key={pid} className="flex items-center gap-1.5">
                        <Link
                          href={isUnlocked ? `/photographers/${pid}` : "#"}
                          className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                            isUnlocked
                              ? "bg-zinc-700 text-white hover:bg-zinc-600"
                              : "bg-zinc-900 text-zinc-600 cursor-default"
                          }`}
                        >
                          {p?.name.split(" ").slice(-1)[0] ?? pid}
                        </Link>
                        {i < chain.photographers.length - 1 && (
                          <span className="text-zinc-700 text-xs">→</span>
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

      {/* Courses to explore */}
      <section>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Explore Paths</h2>
        <div className="grid grid-cols-2 gap-3">
          {ALL_COURSES.map((course) => (
            <Link key={course.id} href={`/learn/${course.id}`}>
              <div
                className="rounded-2xl p-3 border border-zinc-800/50 hover:border-zinc-700 transition-colors h-full"
                style={{ background: `linear-gradient(135deg, ${course.accentColor}15 0%, #18181b 80%)` }}
              >
                <p className="text-sm font-semibold text-white leading-tight">{course.title}</p>
                <p className="text-[10px] text-zinc-500 mt-1">{course.lessons.length} lessons</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {course.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[9px] bg-zinc-800/80 text-zinc-600 px-1.5 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Creative feed */}
      <section>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Creative Feed</h2>
        <div className="space-y-3">
          {DISCOVER_FEED.map((item, i) => (
            <div key={i} className="bg-zinc-900/40 rounded-xl p-4 border border-zinc-800/50">
              {item.type === "quote" ? (
                <>
                  <p className="text-sm text-zinc-300 italic leading-relaxed">"{item.content}"</p>
                  <p className="text-xs text-zinc-500 mt-2">— {item.author}</p>
                </>
              ) : (
                <>
                  <span className="text-[10px] bg-amber-900/40 text-amber-400 px-2 py-0.5 rounded-full font-medium">
                    {item.label}
                  </span>
                  <p className="text-sm text-zinc-300 mt-2 leading-relaxed">{item.content}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
