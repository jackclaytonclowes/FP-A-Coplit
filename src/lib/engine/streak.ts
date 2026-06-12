export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function isYesterday(date: Date): boolean {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return isSameDay(date, yesterday)
}

export function calculateStreak(
  lastActiveAt: Date | null,
  currentStreak: number,
  streakFreezes: number
): { newStreak: number; newFreezes: number; streakBroken: boolean } {
  const now = new Date()

  if (!lastActiveAt) {
    return { newStreak: 1, newFreezes: streakFreezes, streakBroken: false }
  }

  if (isSameDay(lastActiveAt, now)) {
    return { newStreak: currentStreak, newFreezes: streakFreezes, streakBroken: false }
  }

  if (isYesterday(lastActiveAt)) {
    return { newStreak: currentStreak + 1, newFreezes: streakFreezes, streakBroken: false }
  }

  // Missed a day — try freeze
  const daysMissed = Math.floor((now.getTime() - lastActiveAt.getTime()) / 86400000)
  if (daysMissed <= 2 && streakFreezes > 0) {
    return { newStreak: currentStreak + 1, newFreezes: streakFreezes - 1, streakBroken: false }
  }

  return { newStreak: 1, newFreezes: streakFreezes, streakBroken: true }
}

export const STREAK_MILESTONES = [7, 14, 30, 60, 100]

export function getStreakMilestoneBonus(streak: number): number {
  if (STREAK_MILESTONES.includes(streak)) return 100
  return 0
}
