"use client"

import Link from "next/link"
import { PHOTOGRAPHERS, DISCOVERY_CHAINS } from "@/content/photographers"
import { useCIQStore } from "@/hooks/useCIQStore"
import { cn } from "@/lib/utils"

export default function PhotographersPage() {
  const { completedLessons, discoveryProgress } = useCIQStore()

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Photographers</h1>
        <p className="text-sm text-zinc-400 mt-1">18 masters of the medium — biography, style, and what you can learn.</p>
      </div>

      {/* Discovery Chains */}
      <section>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Discovery Chains</h2>
        <div className="space-y-3">
          {DISCOVERY_CHAINS.map((chain) => {
            const progress = discoveryProgress[chain.id]
            const unlocked = progress?.unlockedPhotographers.length ?? 0
            const completed = progress?.completed ?? false
            return (
              <div
                key={chain.id}
                className={cn(
                  "rounded-2xl p-4 border",
                  completed ? "border-amber-700/40 bg-amber-950/20" : "border-zinc-800/50 bg-zinc-900/40"
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-white text-sm">{chain.name}</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">{chain.description}</p>
                  </div>
                  {completed && <span className="text-amber-400 text-lg shrink-0">🔗</span>}
                </div>
                <div className="flex items-center gap-1.5 mt-3">
                  {chain.photographers.map((pid, i) => {
                    const p = PHOTOGRAPHERS.find((ph) => ph.id === pid)
                    const isUnlocked = (progress?.unlockedPhotographers || []).includes(pid) || i === 0
                    return (
                      <div key={pid} className="flex items-center gap-1">
                        <Link
                          href={isUnlocked ? `/photographers/${pid}` : "#"}
                          className={cn(
                            "text-xs px-2 py-1 rounded-lg transition-colors",
                            isUnlocked
                              ? "bg-zinc-700 text-zinc-200 hover:bg-zinc-600"
                              : "bg-zinc-900 text-zinc-600 cursor-default"
                          )}
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

      {/* All Photographers */}
      <section>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">All Photographers</h2>
        <div className="grid grid-cols-2 gap-3">
          {PHOTOGRAPHERS.map((p) => {
            const lessonsCompleted = (completedLessons[p.courseId] || []).length
            const hasStarted = lessonsCompleted > 0
            return (
              <Link key={p.id} href={`/photographers/${p.id}`}>
                <div
                  className="rounded-2xl p-4 border border-zinc-800/50 hover:border-zinc-700 transition-colors h-full"
                  style={{ background: `linear-gradient(135deg, ${p.accentColor}15 0%, #18181b 70%)` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-lg"
                    style={{ background: `${p.accentColor}25` }}
                  >
                    📷
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-tight">{p.name}</h3>
                  <p className="text-[10px] text-zinc-500 mt-0.5">{p.nationality}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {hasStarted && (
                    <p className="text-[10px] text-amber-400 mt-2">{lessonsCompleted} lessons done</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
