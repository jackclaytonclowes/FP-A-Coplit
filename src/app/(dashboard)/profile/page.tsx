"use client"

import { useCIQStore } from "@/hooks/useCIQStore"
import { XPBar } from "@/components/engine/XPBar"
import { ACHIEVEMENTS } from "@/lib/engine/achievements"
import { ALL_COURSES } from "@/content/courses"
import { cn } from "@/lib/utils"

export default function ProfilePage() {
  const {
    xp, level, levelTitle, progressPercent, xpToNext,
    streak, streakLastDate, completedLessons, courseProgress,
    unlockedAchievements, moodboardItems, journalEntries, glossaryMastered,
  } = useCIQStore()

  const totalLessonsCompleted = Object.values(completedLessons).flat().length
  const coursesCompleted = Object.values(courseProgress).filter((p) => p >= 1).length
  const coursesStarted = Object.keys(completedLessons).length

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Profile</h1>

      {/* Level card */}
      <div className="bg-zinc-900/60 rounded-2xl p-5 border border-zinc-800/50">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Level {level}</p>
            <p className="text-2xl font-bold text-white">{levelTitle}</p>
            <p className="text-sm text-amber-400 font-semibold mt-0.5">{xp.toLocaleString()} XP</p>
          </div>
          <div className="text-4xl opacity-80">
            {level <= 2 ? "👁️" : level <= 4 ? "📷" : level <= 6 ? "🎨" : level <= 8 ? "💡" : "🏆"}
          </div>
        </div>
        <XPBar showLevel={false} />
        <p className="text-xs text-zinc-500 mt-1.5">{xpToNext.toLocaleString()} XP to Level {level + 1}</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Current streak", value: `${streak} 🔥`, sub: "days" },
          { label: "Lessons completed", value: totalLessonsCompleted, sub: "lessons" },
          { label: "Courses complete", value: coursesCompleted, sub: `of ${ALL_COURSES.length} total` },
          { label: "Glossary mastered", value: glossaryMastered.length, sub: "of 20 terms" },
          { label: "Moodboard saved", value: moodboardItems.length, sub: "references" },
          { label: "Journal entries", value: journalEntries.length, sub: "reflections" },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-zinc-900/40 rounded-xl p-3 border border-zinc-800/50">
            <p className="text-xl font-bold text-white">{value}</p>
            <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{label}</p>
            <p className="text-[10px] text-zinc-600">{sub}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Achievements</h2>
          <span className="text-xs text-zinc-500">{unlockedAchievements.length}/{ACHIEVEMENTS.length}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {ACHIEVEMENTS.map((ach) => {
            const unlocked = unlockedAchievements.includes(ach.slug)
            return (
              <div
                key={ach.slug}
                className={cn(
                  "rounded-xl p-3 border flex items-start gap-2.5 transition-colors",
                  unlocked
                    ? "border-amber-700/40 bg-amber-950/20"
                    : "border-zinc-800/30 bg-zinc-900/20 opacity-50"
                )}
              >
                <span className={cn("text-xl shrink-0", !unlocked && "grayscale")}>{ach.icon}</span>
                <div className="min-w-0">
                  <p className={cn(
                    "text-xs font-semibold leading-tight",
                    unlocked ? "text-white" : "text-zinc-500"
                  )}>
                    {ach.name}
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-0.5 leading-tight line-clamp-2">
                    {ach.description}
                  </p>
                  {unlocked && ach.xpReward > 0 && (
                    <p className="text-[10px] text-amber-400 mt-0.5">+{ach.xpReward} XP</p>
                  )}
                  {!unlocked && (
                    <p className="text-[10px] text-zinc-700 mt-0.5">{ach.rarity}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Course progress */}
      <div>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Course Progress</h2>
        <div className="space-y-2">
          {ALL_COURSES.map((course) => {
            const done = (completedLessons[course.id] || []).length
            const progress = courseProgress[course.id] ?? 0
            if (!coursesStarted && done === 0) return null
            return (
              <div key={course.id} className="flex items-center gap-3 py-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0"
                  style={{ background: `${course.accentColor}25` }}
                >
                  📷
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-300 truncate">{course.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${progress * 100}%`, background: course.accentColor }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-600 shrink-0">{done}/{course.lessons.length}</span>
                  </div>
                </div>
              </div>
            )
          })}
          {coursesStarted === 0 && (
            <p className="text-sm text-zinc-600 text-center py-4">No courses started yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
