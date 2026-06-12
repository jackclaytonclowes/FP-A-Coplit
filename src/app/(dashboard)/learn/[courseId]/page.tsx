"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCourse } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"
import { cn } from "@/lib/utils"

export default function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params)
  const course = getCourse(courseId)
  if (!course) notFound()

  const { completedLessons } = useCIQStore()
  const done = completedLessons[courseId] || []

  const nextLesson = course.lessons.find((l) => !done.includes(l.id))

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Back */}
      <Link href="/learn" className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1 mb-4">
        ← Back to Learn
      </Link>

      {/* Header */}
      <div
        className="rounded-2xl p-6 mb-6 border border-zinc-800/50"
        style={{ background: `linear-gradient(135deg, ${course.accentColor}20 0%, #18181b 70%)` }}
      >
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
          {course.category.replace(/-/g, " ")}
        </p>
        <h1 className="text-2xl font-bold text-white mb-2">{course.title}</h1>
        <p className="text-sm text-zinc-400 leading-relaxed">{course.description}</p>

        <div className="flex items-center gap-4 mt-4">
          <span className="text-xs text-zinc-500">{course.lessons.length} lessons</span>
          <span className="text-xs text-zinc-500">{course.estimatedHours}h estimated</span>
          <span className="text-xs text-zinc-500">{done.length} completed</span>
        </div>

        {/* Course progress bar */}
        <div className="mt-3 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${course.lessons.length > 0 ? (done.length / course.lessons.length) * 100 : 0}%`,
              background: course.accentColor,
            }}
          />
        </div>

        {nextLesson && (
          <Link
            href={`/learn/${courseId}/${nextLesson.id}`}
            className="mt-4 block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: course.accentColor, color: "#000" }}
          >
            {done.length === 0 ? "Start Course" : "Continue"} →
          </Link>
        )}
        {!nextLesson && done.length > 0 && (
          <div className="mt-4 text-center py-3 rounded-xl text-sm font-semibold bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
            ✅ Course Complete
          </div>
        )}
      </div>

      {/* Lesson list */}
      <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Lessons</h2>
      <div className="space-y-2">
        {course.lessons.map((lesson, i) => {
          const isComplete = done.includes(lesson.id)
          const isNext = lesson.id === nextLesson?.id
          const isLocked = !isComplete && !isNext && i > 0 && !done.includes(course.lessons[i - 1]?.id ?? "")

          return (
            <Link
              key={lesson.id}
              href={isLocked ? "#" : `/learn/${courseId}/${lesson.id}`}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl border transition-colors",
                isComplete && "border-emerald-800/30 bg-emerald-950/20",
                isNext && "border-amber-500/40 bg-amber-950/20",
                !isComplete && !isNext && !isLocked && "border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700",
                isLocked && "border-zinc-800/30 bg-zinc-900/20 opacity-50 cursor-not-allowed"
              )}
            >
              {/* Status icon */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                  isComplete && "bg-emerald-500/20 text-emerald-400",
                  isNext && "bg-amber-500/20 text-amber-400",
                  !isComplete && !isNext && "bg-zinc-800 text-zinc-500"
                )}
              >
                {isComplete ? "✓" : isLocked ? "🔒" : i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className={cn(
                  "text-sm font-medium truncate",
                  isComplete ? "text-zinc-300" : isNext ? "text-white" : "text-zinc-400"
                )}>
                  {lesson.title}
                </p>
                <p className="text-[10px] text-zinc-600 mt-0.5">
                  {lesson.estimatedMinutes} min · +{lesson.xpReward} XP
                  {lesson.quiz ? " · Quiz" : ""}
                  {lesson.reflection ? " · Reflection" : ""}
                </p>
              </div>

              {isNext && (
                <span className="text-xs text-amber-400 shrink-0">Start →</span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
