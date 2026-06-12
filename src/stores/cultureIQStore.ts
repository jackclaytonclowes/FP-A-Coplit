/**
 * CultureIQ — localStorage-backed state store with server-side sync
 *
 * Single key: "ciq_state" in localStorage (fast reads, offline-capable).
 * When a session is active, every write is also pushed to
 * PUT /api/ciq/state (debounced 1 s) so progress persists across devices.
 *
 * Consumers call ciqStore.get() / ciqStore.set(patch) / ciqStore.reset().
 * Call ciqStore.loadFromServer(token) after login to pull server state.
 */

const CIQ_KEY = "ciq_state"

export interface TopicMastery {
  correct: number
  total: number
  lastSeen: string
}

export interface QuizResult {
  courseId: string
  lessonId: string
  score: number
  total: number
  date: string
}

export interface MoodboardItem {
  id: string
  title: string
  type: "photographer" | "campaign" | "film" | "artist" | "fashion" | "design" | "other"
  imageUrl?: string
  notes?: string
  tags: string[]
  collection?: string
  createdAt: string
}

export interface JournalEntry {
  id: string
  content: string
  prompt?: string
  lessonId?: string
  courseId?: string
  createdAt: string
}

export interface DiscoveryChainProgress {
  chainId: string
  unlockedPhotographers: string[]
  completed: boolean
}

export interface CIQState {
  /* Onboarding */
  onboardingComplete: boolean
  interests: string[]
  primaryUser: "user1" | "user2" | null

  /* Progress per course */
  courseProgress: Record<string, number>              // courseId → 0–1
  completedLessons: Record<string, string[]>          // courseId → lessonId[]

  /* Per-topic mastery (quiz performance) */
  topicMastery: Record<string, TopicMastery>          // topicKey → mastery

  /* Quiz history */
  quizHistory: QuizResult[]

  /* Streak & XP */
  streak: number
  streakLastDate: string | null
  xp: number
  level: number
  todayMinutes: number
  todayDate: string | null

  /* Achievements */
  unlockedAchievements: string[]                      // achievement slugs

  /* Discovery chains */
  discoveryProgress: Record<string, DiscoveryChainProgress>

  /* Photographer progress */
  photographerProgress: Record<string, number>        // photographerId → 0–1

  /* Moodboard */
  moodboardItems: MoodboardItem[]

  /* Journal */
  journalEntries: JournalEntry[]

  /* Glossary mastery */
  glossaryMastered: string[]                          // term ids

  /* Daily inspiration viewed dates */
  dailyInspirationSeen: string[]                      // ISO date strings
}

const DEFAULT_STATE: CIQState = {
  onboardingComplete: false,
  interests: [],
  primaryUser: null,

  courseProgress: {},
  completedLessons: {},

  topicMastery: {},
  quizHistory: [],

  streak: 0,
  streakLastDate: null,
  xp: 0,
  level: 1,
  todayMinutes: 0,
  todayDate: null,

  unlockedAchievements: [],

  discoveryProgress: {},
  photographerProgress: {},

  moodboardItems: [],
  journalEntries: [],
  glossaryMastered: [],
  dailyInspirationSeen: [],
}

function resetTodayIfNeeded(state: CIQState): CIQState {
  const today = new Date().toISOString().slice(0, 10)
  if (state.todayDate !== today) {
    return { ...state, todayMinutes: 0, todayDate: today }
  }
  return state
}

/* ── Server sync (debounced) ─────────────────────────────────────────────── */
let _syncTimer: ReturnType<typeof setTimeout> | null = null

function _scheduleSync(state: CIQState) {
  if (_syncTimer) clearTimeout(_syncTimer)
  _syncTimer = setTimeout(() => _pushToServer(state), 1000)
}

async function _pushToServer(state: CIQState) {
  const token = (window as Window & { _ciqToken?: string })._ciqToken
  if (!token) return
  try {
    await fetch("/api/ciq/state", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ state }),
    })
  } catch {
    /* non-critical — localStorage is always the source of truth */
  }
}

/* ── Store API --------------------------------------------------------------- */
export const ciqStore = {
  get(): CIQState {
    try {
      const raw = localStorage.getItem(CIQ_KEY)
      const saved = raw ? JSON.parse(raw) : {}
      const merged: CIQState = { ...DEFAULT_STATE, ...saved }
      return resetTodayIfNeeded(merged)
    } catch {
      return { ...DEFAULT_STATE }
    }
  },

  set(patch: Partial<CIQState>): CIQState {
    try {
      const current = this.get()
      const next = { ...current, ...patch }
      localStorage.setItem(CIQ_KEY, JSON.stringify(next))
      _scheduleSync(next)
      window.dispatchEvent(new CustomEvent("ciq-store-update", { detail: next }))
      return next
    } catch {
      return this.get()
    }
  },

  reset() {
    try {
      localStorage.removeItem(CIQ_KEY)
    } catch {
      /* noop */
    }
  },

  /* Pull server state and merge */
  async loadFromServer(token: string) {
    ;(window as Window & { _ciqToken?: string })._ciqToken = token
    try {
      const res = await fetch("/api/ciq/state", {
        headers: { Authorization: "Bearer " + token },
      })
      if (!res.ok) return
      const { state: serverState } = await res.json()
      if (!serverState || typeof serverState !== "object") return

      const local = this.get()
      const merged: CIQState = {
        ...local,
        ...serverState,
        completedLessons: _mergeLessons(local.completedLessons, serverState.completedLessons),
        quizHistory: _mergeHistory(local.quizHistory, serverState.quizHistory),
        topicMastery: _mergeMastery(local.topicMastery, serverState.topicMastery),
        unlockedAchievements: Array.from(
          new Set([...local.unlockedAchievements, ...(serverState.unlockedAchievements || [])])
        ),
        moodboardItems: _mergeMoodboard(local.moodboardItems, serverState.moodboardItems),
        journalEntries: _mergeJournal(local.journalEntries, serverState.journalEntries),
        glossaryMastered: Array.from(
          new Set([...local.glossaryMastered, ...(serverState.glossaryMastered || [])])
        ),
        xp: Math.max(local.xp || 0, serverState.xp || 0),
        streak: Math.max(local.streak || 0, serverState.streak || 0),
      }

      localStorage.setItem(CIQ_KEY, JSON.stringify(merged))
      window.dispatchEvent(new CustomEvent("ciq-store-update", { detail: merged }))
    } catch {
      /* offline — localStorage remains authoritative */
    }
  },

  /* ── Activity recording ──────────────────────────────────────────────── */

  recordActivity({ minutes = 0, xpDelta = 0 }: { minutes?: number; xpDelta?: number }) {
    const state = this.get()
    const today = new Date().toISOString().slice(0, 10)
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)

    let newStreak = state.streak
    if (state.streakLastDate === today) {
      /* already counted */
    } else if (state.streakLastDate === yesterday) {
      newStreak = state.streak + 1
    } else {
      newStreak = 1
    }

    const newXp = state.xp + xpDelta
    const newLevel = _levelFromXp(newXp)

    return this.set({
      streak: newStreak,
      streakLastDate: today,
      xp: newXp,
      level: newLevel,
      todayMinutes: state.todayMinutes + minutes,
      todayDate: today,
    })
  },

  markLessonComplete(courseId: string, lessonId: string, totalLessons: number) {
    const state = this.get()
    const prev = state.completedLessons[courseId] || []
    if (prev.includes(lessonId)) return state
    const updated = [...prev, lessonId]
    const progress = totalLessons > 0 ? Math.min(1, updated.length / totalLessons) : 0
    this.recordActivity({ xpDelta: 50, minutes: 8 })
    return this.set({
      completedLessons: { ...state.completedLessons, [courseId]: updated },
      courseProgress: { ...state.courseProgress, [courseId]: progress },
    })
  },

  recordQuizResult(result: Omit<QuizResult, "date">) {
    const state = this.get()
    const isPerfect = result.score === result.total
    const xpDelta = isPerfect ? 30 : 15
    this.recordActivity({ xpDelta })
    const topicKey = `${result.courseId}-${result.lessonId}`
    const prev = state.topicMastery[topicKey] || { correct: 0, total: 0 }
    return this.set({
      quizHistory: [
        ...state.quizHistory,
        { ...result, date: new Date().toISOString().slice(0, 10) },
      ],
      topicMastery: {
        ...state.topicMastery,
        [topicKey]: {
          correct: prev.correct + result.score,
          total: prev.total + result.total,
          lastSeen: new Date().toISOString().slice(0, 10),
        },
      },
    })
  },

  unlockAchievement(slug: string) {
    const state = this.get()
    if (state.unlockedAchievements.includes(slug)) return state
    this.recordActivity({ xpDelta: 0 })
    return this.set({
      unlockedAchievements: [...state.unlockedAchievements, slug],
    })
  },

  saveMoodboardItem(item: Omit<MoodboardItem, "id" | "createdAt">) {
    const state = this.get()
    const newItem: MoodboardItem = {
      ...item,
      id: `mb-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
    }
    this.recordActivity({ xpDelta: 5 })
    return this.set({ moodboardItems: [...state.moodboardItems, newItem] })
  },

  deleteMoodboardItem(id: string) {
    const state = this.get()
    return this.set({ moodboardItems: state.moodboardItems.filter((i) => i.id !== id) })
  },

  addJournalEntry(entry: Omit<JournalEntry, "id" | "createdAt">) {
    const state = this.get()
    const newEntry: JournalEntry = {
      ...entry,
      id: `j-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
    }
    this.recordActivity({ xpDelta: 20 })
    return this.set({ journalEntries: [newEntry, ...state.journalEntries] })
  },

  markGlossaryMastered(termId: string) {
    const state = this.get()
    if (state.glossaryMastered.includes(termId)) return state
    this.recordActivity({ xpDelta: 10 })
    return this.set({ glossaryMastered: [...state.glossaryMastered, termId] })
  },

  markDailyInspirationSeen(date: string) {
    const state = this.get()
    if (state.dailyInspirationSeen.includes(date)) return state
    this.recordActivity({ xpDelta: 5 })
    return this.set({ dailyInspirationSeen: [...state.dailyInspirationSeen, date] })
  },

  unlockDiscoveryPhotographer(chainId: string, photographerId: string, chainLength: number) {
    const state = this.get()
    const prev = state.discoveryProgress[chainId] || {
      chainId,
      unlockedPhotographers: [],
      completed: false,
    }
    if (prev.unlockedPhotographers.includes(photographerId)) return state
    const updated = [...prev.unlockedPhotographers, photographerId]
    const completed = updated.length >= chainLength
    this.recordActivity({ xpDelta: 75 })
    return this.set({
      discoveryProgress: {
        ...state.discoveryProgress,
        [chainId]: { chainId, unlockedPhotographers: updated, completed },
      },
    })
  },
}

/* ── Level calculation ───────────────────────────────────────────────────── */

const XP_THRESHOLDS = [0, 200, 500, 1000, 2000, 3500, 5500, 8000, 12000, 18000]

function _levelFromXp(xp: number): number {
  let level = 1
  for (let i = 0; i < XP_THRESHOLDS.length; i++) {
    if (xp >= XP_THRESHOLDS[i]) level = i + 1
    else break
  }
  return level
}

/* ── Merge helpers ───────────────────────────────────────────────────────── */

function _mergeLessons(
  local: Record<string, string[]> = {},
  server: Record<string, string[]> = {}
): Record<string, string[]> {
  const out = { ...local }
  for (const [course, ids] of Object.entries(server)) {
    const combined = new Set([...(out[course] || []), ...(Array.isArray(ids) ? ids : [])])
    out[course] = [...combined]
  }
  return out
}

function _mergeHistory(local: QuizResult[] = [], server: QuizResult[] = []): QuizResult[] {
  const seen = new Set(local.map((r) => `${r.date}-${r.lessonId}-${r.score}`))
  const extras = (Array.isArray(server) ? server : []).filter(
    (r) => !seen.has(`${r.date}-${r.lessonId}-${r.score}`)
  )
  return [...local, ...extras]
}

function _mergeMastery(
  local: Record<string, TopicMastery> = {},
  server: Record<string, TopicMastery> = {}
): Record<string, TopicMastery> {
  const out = { ...local }
  for (const [topic, s] of Object.entries(server)) {
    const l = out[topic] || { correct: 0, total: 0, lastSeen: "" }
    out[topic] = {
      correct: Math.max(l.correct || 0, s.correct || 0),
      total: Math.max(l.total || 0, s.total || 0),
      lastSeen: s.lastSeen || l.lastSeen,
    }
  }
  return out
}

function _mergeMoodboard(local: MoodboardItem[] = [], server: MoodboardItem[] = []): MoodboardItem[] {
  const seen = new Set(local.map((i) => i.id))
  const extras = (Array.isArray(server) ? server : []).filter((i) => !seen.has(i.id))
  return [...local, ...extras]
}

function _mergeJournal(local: JournalEntry[] = [], server: JournalEntry[] = []): JournalEntry[] {
  const seen = new Set(local.map((e) => e.id))
  const extras = (Array.isArray(server) ? server : []).filter((e) => !seen.has(e.id))
  return [...local, ...extras]
}
