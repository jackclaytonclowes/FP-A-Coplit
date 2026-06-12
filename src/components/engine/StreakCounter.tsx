"use client"

import { useCIQStore } from "@/hooks/useCIQStore"

interface StreakCounterProps {
  size?: "sm" | "md"
}

export function StreakCounter({ size = "md" }: StreakCounterProps) {
  const { streak } = useCIQStore()
  const fontSize = size === "sm" ? 13 : 16

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span style={{ fontSize: size === "sm" ? 14 : 18 }}>🔥</span>
      <span style={{
        fontSize,
        fontWeight: 600,
        fontFamily: "var(--font-mono)",
        color: "var(--fg-1)",
        fontVariantNumeric: "tabular-nums",
      }}>
        {streak}
      </span>
    </div>
  )
}
