"use client"

import Link from "next/link"
import { useCIQStore } from "@/hooks/useCIQStore"
import { ALL_COURSES } from "@/content/courses"
import { cn } from "@/lib/utils"

const CATEGORY_LABELS: Record<string, string> = {
  "photography-foundations": "Photography",
  "great-photographers": "Photographers",
  "fashion": "Fashion",
  "style-movements": "Style & Aesthetics",
  "art-history": "Art History",
  "film": "Film",
  "creative-direction": "Creative Direction",
  "marketing": "Marketing",
  "glossary": "Glossary",
}

const CATEGORY_EMOJI: Record<string, string> = {
  "photography-foundations": "📷",
  "great-photographers": "🎨",
  "fashion": "👗",
  "style-movements": "🌙",
  "art-history": "🏛️",
  "film": "🎬",
  "creative-direction": "💡",
  "marketing": "📊",
  "glossary": "📖",
}

export default function LearnPage() {
  const { completedLessons, courseProgress } = useCIQStore()

  // Group courses by category
  const grouped = ALL_COURSES.reduce(
    (acc, course) => {
      if (!acc[course.category]) acc[course.category] = []
      acc[course.category].push(course)
      return acc
    },
    {} as Record<string, typeof ALL_COURSES>
  )

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Learn</h1>
        <p className="text-sm text-zinc-400 mt-1">Your creative education — structured paths, great photographers, and visual culture.</p>
      </div>

      {Object.entries(grouped).map(([category, courses]) => (
        <section key={category}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">{CATEGORY_EMOJI[category] ?? "📚"}</span>
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">
              {CATEGORY_LABELS[category] ?? category}
            </h2>
          </div>

          <div className="space-y-3">
            {courses.map((course) => {
              const done = (completedLessons[course.id] || []).length
              const total = course.lessons.length
              const progress = courseProgress[course.id] ?? 0
              const started = done > 0
              const completed = progress >= 1

              return (
                <Link key={course.id} href={`/learn/${course.id}`}>
                  <div
                    className={cn(
                      "rounded-2xl p-4 border transition-all",
                      completed
                        ? "border-emerald-800/50 bg-emerald-950/30"
                        : "border-zinc-800/50 bg-zinc-900/40 hover:border-zinc-700"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ background: `${course.accentColor}25` }}
                      >
                        {completed ? "✅" : CATEGORY_EMOJI[course.category] ?? "📚"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-white text-sm">{course.title}</h3>
                          {completed && (
                            <span className="text-[10px] bg-emerald-900/50 text-emerald-400 px-1.5 py-0.5 rounded-full">
                              Done
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">{course.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${progress * 100}%`,
                                background: completed ? "#34d399" : course.accentColor,
                              }}
                            />
                          </div>
                          <span className="text-[10px] text-zinc-500 shrink-0">
                            {started ? `${done}/${total}` : `${total} lessons`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
