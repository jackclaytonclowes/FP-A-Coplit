"use client"

import { useUserStore } from "@/stores/userStore"
import { cn } from "@/lib/utils"

interface StreakCounterProps {
  className?: string
  size?: "sm" | "md"
}

export function StreakCounter({ className, size = "md" }: StreakCounterProps) {
  const { streak } = useUserStore()

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <span className={size === "sm" ? "text-base" : "text-xl"}>🔥</span>
      <span
        className={cn(
          "font-semibold tabular-nums",
          size === "sm" ? "text-sm text-zinc-300" : "text-base text-white"
        )}
      >
        {streak}
      </span>
    </div>
  )
}
