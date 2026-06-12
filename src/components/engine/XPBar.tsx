"use client"

import { useCIQStore } from "@/hooks/useCIQStore"

interface XPBarProps {
  className?: string
  showLevel?: boolean
}

export function XPBar({ showLevel = true }: XPBarProps) {
  const { xp, level, levelTitle, progressPercent } = useCIQStore()

  return (
    <div style={{ width: "100%" }}>
      {showLevel && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ font: "var(--text-label)", color: "var(--fg-3)" }}>
            Lv {level} · {levelTitle}
          </span>
          <span style={{ font: "var(--text-label)", fontFamily: "var(--font-mono)", color: "var(--fg-3)" }}>
            {xp.toLocaleString()} XP
          </span>
        </div>
      )}
      <div style={{
        height: 6,
        background: "var(--surface-3)",
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${progressPercent}%`,
          background: "var(--gold)",
          borderRadius: "var(--radius-pill)",
          transition: "width 0.7s ease-out",
        }} />
      </div>
    </div>
  )
}
