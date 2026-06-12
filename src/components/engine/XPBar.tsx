"use client"

import { useUserStore } from "@/stores/userStore"
import { cn } from "@/lib/utils"

interface XPBarProps {
  className?: string
  showLevel?: boolean
}

export function XPBar({ className, showLevel = true }: XPBarProps) {
  const { xp, level, levelTitle, progressPercent } = useUserStore()

  return (
    <div className={cn("w-full", className)}>
      {showLevel && (
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-zinc-400">
            Lv {level} · {levelTitle}
          </span>
          <span className="text-xs text-zinc-500">{xp.toLocaleString()} XP</span>
        </div>
      )}
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  )
}
