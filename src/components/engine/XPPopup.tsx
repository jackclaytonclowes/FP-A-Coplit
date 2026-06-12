"use client"

import { useEffect, useState } from "react"
import { useCIQStore } from "@/hooks/useCIQStore"

export function XPPopup() {
  const { xp } = useCIQStore()
  const [visible, setVisible] = useState(false)
  const [displayXp, setDisplayXp] = useState(0)
  const [prev, setPrev] = useState(0)

  useEffect(() => {
    if (prev === 0) { setPrev(xp); return }
    const delta = xp - prev
    if (delta > 0) {
      setDisplayXp(delta)
      setVisible(true)
      const t = setTimeout(() => setVisible(false), 2000)
      setPrev(xp)
      return () => clearTimeout(t)
    }
    setPrev(xp)
  }, [xp]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null

  return (
    <div style={{
      position: "fixed",
      top: 80,
      left: "50%",
      zIndex: 50,
      pointerEvents: "none",
      animation: "float-up 2s ease-out forwards",
    }}>
      <div style={{
        background: "var(--gold)",
        color: "#000",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 13,
        padding: "6px 16px",
        borderRadius: "var(--radius-pill)",
        boxShadow: "var(--shadow-gold)",
        whiteSpace: "nowrap",
      }}>
        +{displayXp} XP
      </div>
    </div>
  )
}
