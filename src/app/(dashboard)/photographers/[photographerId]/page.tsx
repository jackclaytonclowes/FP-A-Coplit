"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPhotographer, PHOTOGRAPHERS } from "@/content/photographers"
import { getCourse } from "@/content/courses"
import { useCIQStore } from "@/hooks/useCIQStore"

export default function PhotographerPage({
  params,
}: {
  params: Promise<{ photographerId: string }>
}) {
  const { photographerId } = use(params)
  const photographer = getPhotographer(photographerId)
  if (!photographer) notFound()

  const course = getCourse(photographer.courseId)
  const { completedLessons } = useCIQStore()
  const done = completedLessons[photographer.courseId] || []

  const related = (photographer.discoveryChain || [])
    .map((id) => PHOTOGRAPHERS.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <Link href="/photographers" className="text-xs text-zinc-500 hover:text-zinc-300">
        ← Photographers
      </Link>

      {/* Hero */}
      <div
        className="rounded-2xl p-6 border border-zinc-800/50"
        style={{ background: `linear-gradient(135deg, ${photographer.accentColor}25 0%, #18181b 60%)` }}
      >
        <div
          className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-3xl"
          style={{ background: `${photographer.accentColor}30` }}
        >
          📷
        </div>
        <h1 className="text-2xl font-bold text-white">{photographer.name}</h1>
        <p className="text-sm text-zinc-400 mt-0.5">
          {photographer.nationality}{photographer.born ? ` · b. ${photographer.born}` : ""}
        </p>
        <p className="text-sm text-zinc-300 mt-4 leading-relaxed">{photographer.bio}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {photographer.tags.map((tag) => (
            <span key={tag} className="text-xs bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Style */}
      <div className="bg-zinc-900/40 rounded-2xl p-4 border border-zinc-800/50">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Style</h2>
        <p className="text-sm text-zinc-300 leading-relaxed">{photographer.styleDescription}</p>
      </div>

      {/* Course CTA */}
      {course && (
        <div>
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Learning Path</h2>
          <Link href={`/learn/${course.id}`}>
            <div
              className="rounded-2xl p-4 border border-zinc-700/50 hover:border-zinc-600 transition-colors"
              style={{ background: `linear-gradient(135deg, ${photographer.accentColor}15 0%, #18181b 70%)` }}
            >
              <p className="font-semibold text-white">{course.title}</p>
              <p className="text-xs text-zinc-400 mt-1">{course.lessons.length} lessons · {done.length} completed</p>
              <div className="mt-3 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${course.lessons.length > 0 ? (done.length / course.lessons.length) * 100 : 0}%`,
                    background: photographer.accentColor,
                  }}
                />
              </div>
              <p className="text-xs text-amber-400 mt-3">
                {done.length === 0 ? "Start learning →" : done.length === course.lessons.length ? "✅ Complete" : "Continue →"}
              </p>
            </div>
          </Link>
        </div>
      )}

      {/* Discovery chain */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            If you like {photographer.name.split(" ")[0]}, explore…
          </h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {related.map((r) => r && (
              <Link key={r.id} href={`/photographers/${r.id}`} className="shrink-0">
                <div
                  className="w-28 rounded-xl p-3 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                  style={{ background: `${r.accentColor}15` }}
                >
                  <div className="text-xl mb-2">📷</div>
                  <p className="text-xs font-medium text-zinc-200 leading-tight">{r.name}</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">{r.nationality}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
