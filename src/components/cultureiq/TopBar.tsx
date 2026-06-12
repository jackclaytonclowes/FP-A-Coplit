"use client"

import { useCIQStore } from "@/hooks/useCIQStore"
import { XPBar } from "@/components/engine/XPBar"
import { StreakCounter } from "@/components/engine/StreakCounter"

export function TopBar() {
  const { xp, streak, levelTitle, level } = useCIQStore()

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/60 px-4 py-3">
      <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">CultureIQ</span>
          <span className="text-xs text-zinc-500 font-medium hidden sm:block">Lv {level} · {levelTitle}</span>
        </div>

        {/* Right: streak + XP */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <StreakCounter size="sm" />
          <div className="w-28 hidden sm:block">
            <XPBar showLevel={false} />
          </div>
          <span className="text-xs font-semibold text-amber-400 tabular-nums">{xp.toLocaleString()} XP</span>
        </div>
      </div>
    </header>
  )
}
