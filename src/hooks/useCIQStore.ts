"use client"

import { useEffect, useState, useCallback } from "react"
import { ciqStore, type CIQState } from "@/stores/cultureIQStore"
import { getLevelFromXp, getProgressToNextLevel, getXpToNextLevel } from "@/lib/engine/xp"

export function useCIQStore() {
  const [state, setState] = useState<CIQState>(() => ciqStore.get())

  useEffect(() => {
    const handler = (e: Event) => {
      setState((e as CustomEvent<CIQState>).detail)
    }
    window.addEventListener("ciq-store-update", handler)
    // Sync on mount in case another tab updated
    setState(ciqStore.get())
    return () => window.removeEventListener("ciq-store-update", handler)
  }, [])

  const set = useCallback((patch: Partial<CIQState>) => ciqStore.set(patch), [])

  const levelInfo = getLevelFromXp(state.xp)
  const progressPercent = getProgressToNextLevel(state.xp)
  const xpToNext = getXpToNextLevel(state.xp)

  return {
    ...state,
    levelTitle: levelInfo.title,
    progressPercent,
    xpToNext,
    set,
    store: ciqStore,
  }
}

export function useLessonProgress(courseId: string, lessonId: string) {
  const { completedLessons, topicMastery } = useCIQStore()
  const completed = (completedLessons[courseId] || []).includes(lessonId)
  const mastery = topicMastery[`${courseId}-${lessonId}`] ?? null
  return { completed, mastery }
}

export function useCourseProgress(courseId: string) {
  const { completedLessons, courseProgress } = useCIQStore()
  return {
    progress: courseProgress[courseId] ?? 0,
    completedCount: (completedLessons[courseId] || []).length,
  }
}
