export type LessonType = "text" | "image" | "quiz" | "reflection" | "gallery"

export interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface LessonBlock {
  type: "heading" | "paragraph" | "image" | "quote" | "list" | "divider"
  content?: string
  items?: string[]
  caption?: string
  alt?: string
  author?: string
}

export interface Lesson {
  id: string
  title: string
  type: LessonType
  xpReward: number
  estimatedMinutes: number
  blocks: LessonBlock[]
  quiz?: {
    question: string
    options: QuizOption[]
    explanation?: string
  }
  reflection?: {
    prompt: string
  }
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  category: CourseCategory
  coverImage?: string
  accentColor: string
  estimatedHours: number
  lessons: Lesson[]
  prerequisites?: string[]
  tags: string[]
  photographerId?: string
}

export type CourseCategory =
  | "photography-foundations"
  | "great-photographers"
  | "style-movements"
  | "film"
  | "directors"
  | "history"
  | "crime"
  | "fashion"
  | "creative-direction"
  | "marketing"
  | "art-history"
  | "glossary"

export interface Photographer {
  id: string
  name: string
  born?: string
  nationality?: string
  bio: string
  styleDescription: string
  tags: string[]
  coverImage?: string
  accentColor: string
  courseId: string
  discoveryChain?: string[]
  influences?: string[]
}

export interface DiscoveryChain {
  id: string
  name: string
  photographers: string[]
  description: string
}

export interface Achievement {
  slug: string
  name: string
  description: string
  icon: string
  xpReward: number
  rarity: "common" | "rare" | "epic" | "legendary"
}

export interface XpLevel {
  level: number
  title: string
  xpRequired: number
  xpToNext: number
}

export const XP_LEVELS: XpLevel[] = [
  { level: 1, title: "Curious Eye", xpRequired: 0, xpToNext: 200 },
  { level: 2, title: "Visual Explorer", xpRequired: 200, xpToNext: 300 },
  { level: 3, title: "Emerging Creative", xpRequired: 500, xpToNext: 500 },
  { level: 4, title: "Culture Seeker", xpRequired: 1000, xpToNext: 1000 },
  { level: 5, title: "Visual Thinker", xpRequired: 2000, xpToNext: 1500 },
  { level: 6, title: "Storyteller", xpRequired: 3500, xpToNext: 2000 },
  { level: 7, title: "Tastemaker", xpRequired: 5500, xpToNext: 2500 },
  { level: 8, title: "Creative Director", xpRequired: 8000, xpToNext: 4000 },
  { level: 9, title: "Cultural Authority", xpRequired: 12000, xpToNext: 6000 },
  { level: 10, title: "Visionary", xpRequired: 18000, xpToNext: Infinity },
]

export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  QUIZ_FIRST_ATTEMPT: 30,
  QUIZ_RETRY: 15,
  STREAK_7_DAY: 100,
  COURSE_COMPLETE: 200,
  MOODBOARD_SAVE: 5,
  JOURNAL_ENTRY: 20,
  DISCOVERY_CHAIN_UNLOCK: 75,
  GLOSSARY_TERM: 10,
  DAILY_INSPIRATION: 5,
} as const
