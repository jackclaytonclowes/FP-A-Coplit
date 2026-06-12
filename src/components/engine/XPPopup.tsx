"use client"

import { useEffect, useState } from "react"
import { useUserStore } from "@/stores/userStore"

export function XPPopup() {
  const { pendingXp, clearPending } = useUserStore()
  const [visible, setVisible] = useState(false)
  const [displayXp, setDisplayXp] = useState(0)

  useEffect(() => {
    if (pendingXp > 0) {
      setDisplayXp(pendingXp)
      setVisible(true)
      const t = setTimeout(() => {
        setVisible(false)
        clearPending()
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [pendingXp, clearPending])

  if (!visible) return null

  return (
    <div
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      style={{ animation: "floatUp 2s ease-out forwards" }}
    >
      <div className="bg-amber-400 text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg">
        +{displayXp} XP
      </div>
      <style>{`
        @keyframes floatUp {
          0% { opacity: 0; transform: translateX(-50%) translateY(0); }
          20% { opacity: 1; transform: translateX(-50%) translateY(-10px); }
          80% { opacity: 1; transform: translateX(-50%) translateY(-30px); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-50px); }
        }
      `}</style>
    </div>
  )
}
