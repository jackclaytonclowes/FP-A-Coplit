"use client"

import { create } from "zustand"
import { getLevelFromXp, getProgressToNextLevel } from "@/lib/engine/xp"

interface UserState {
  xp: number
  level: number
  levelTitle: string
  progressPercent: number
  streak: number
  pendingXp: number
  pendingAchievements: string[]
  setUser: (data: { xp: number; level: number; streak: number }) => void
  addXp: (amount: number) => void
  addAchievement: (slug: string) => void
  clearPending: () => void
}

export const useUserStore = create<UserState>((set, get) => ({
  xp: 0,
  level: 1,
  levelTitle: "Curious Eye",
  progressPercent: 0,
  streak: 0,
  pendingXp: 0,
  pendingAchievements: [],

  setUser: (data) => {
    const lvl = getLevelFromXp(data.xp)
    set({
      xp: data.xp,
      level: lvl.level,
      levelTitle: lvl.title,
      progressPercent: getProgressToNextLevel(data.xp),
      streak: data.streak,
    })
  },

  addXp: (amount) => {
    const newXp = get().xp + amount
    const lvl = getLevelFromXp(newXp)
    set({
      xp: newXp,
      level: lvl.level,
      levelTitle: lvl.title,
      progressPercent: getProgressToNextLevel(newXp),
      pendingXp: get().pendingXp + amount,
    })
  },

  addAchievement: (slug) => {
    set({ pendingAchievements: [...get().pendingAchievements, slug] })
  },

  clearPending: () => {
    set({ pendingXp: 0, pendingAchievements: [] })
  },
}))
