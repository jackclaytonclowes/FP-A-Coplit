import { XP_LEVELS, type XpLevel } from "@/types"

export function getLevelFromXp(xp: number): XpLevel {
  let current = XP_LEVELS[0]
  for (const lvl of XP_LEVELS) {
    if (xp >= lvl.xpRequired) current = lvl
    else break
  }
  return current
}

export function getProgressToNextLevel(xp: number): number {
  const current = getLevelFromXp(xp)
  if (current.xpToNext === Infinity) return 100
  const earned = xp - current.xpRequired
  return Math.min(100, Math.round((earned / current.xpToNext) * 100))
}

export function getXpToNextLevel(xp: number): number {
  const current = getLevelFromXp(xp)
  if (current.xpToNext === Infinity) return 0
  return current.xpRequired + current.xpToNext - xp
}
