"use client"

import { useCIQStore } from "@/hooks/useCIQStore"

export function TopBar() {
  const { xp, streak, level, levelTitle, progressPercent } = useCIQStore()

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(9,9,14,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      padding: "12px 16px",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        maxWidth: 640,
        margin: "0 auto",
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ font: "var(--text-h3)", color: "var(--fg-1)", letterSpacing: "-0.02em" }}>
            CultureIQ
          </span>
          <span style={{ font: "var(--text-label)", color: "var(--fg-3)" }}>
            Lv {level}
          </span>
        </div>

        {/* Right: streak + XP bar + XP */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Streak */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 14 }}>🔥</span>
            <span style={{ font: "var(--text-label)", color: "var(--fg-2)", fontFamily: "var(--font-mono)" }}>
              {streak}
            </span>
          </div>

          {/* XP bar */}
          <div style={{ width: 80, display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{
              height: 4,
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

          {/* XP count */}
          <span style={{
            font: "var(--text-label)",
            fontFamily: "var(--font-mono)",
            color: "var(--gold-text)",
          }}>
            {xp.toLocaleString()}
          </span>
        </div>
      </div>
    </header>
  )
}
