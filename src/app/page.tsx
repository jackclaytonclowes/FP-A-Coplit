"use client"

import Link from "next/link"
import { useCIQStore } from "@/hooks/useCIQStore"
import { XPBar } from "@/components/engine/XPBar"
import { ALL_COURSES } from "@/content/courses"
import { PHOTOGRAPHERS } from "@/content/photographers"

const DAILY_INSPIRATION = {
  type: "photographer",
  name: "Peter Lindbergh",
  tagline: "The man who gave supermodels their souls back.",
  description:
    "In 1988, Lindbergh shot Linda Evangelista, Naomi Campbell, Cindy Crawford, and Christy Turlington on a windswept Santa Monica beach — no makeup, natural light, worn denim. It became the cover of British Vogue and launched the supermodel era. His mission: strip fashion photography of artifice and show women as they actually are.",
  tags: ["Black & White", "Documentary", "Fashion", "Natural Light"],
  accentColor: "#a0a0a0",
}

export default function HomePage() {
  const { xp, streak, level, levelTitle, progressPercent, completedLessons } = useCIQStore()

  const recentCourse =
    ALL_COURSES.find((c) => Object.keys(completedLessons).includes(c.id)) ?? ALL_COURSES[0]
  const completedCount = (completedLessons[recentCourse.id] || []).length
  const totalCount = recentCourse.lessons.length

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Level & XP summary */}
      <section className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800/50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Level {level}</p>
            <p className="text-lg font-semibold text-white">{levelTitle}</p>
          </div>
          <div className="flex items-center gap-2 bg-zinc-800 rounded-xl px-3 py-2">
            <span className="text-xl">🔥</span>
            <span className="text-lg font-bold text-white tabular-nums">{streak}</span>
            <span className="text-xs text-zinc-400">day streak</span>
          </div>
        </div>
        <XPBar showLevel={false} />
        <p className="text-xs text-zinc-500 mt-1.5">
          {xp.toLocaleString()} XP · {progressPercent}% to Lv {level + 1}
        </p>
      </section>

      {/* Daily Inspiration */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
            Daily Inspiration
          </h2>
          <Link href="/daily" className="text-xs text-amber-400 hover:text-amber-300">
            See all →
          </Link>
        </div>
        <div
          className="rounded-2xl p-5 border border-zinc-800/50 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${DAILY_INSPIRATION.accentColor}18 0%, #18181b 60%)`,
          }}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Photographer</p>
              <h3 className="text-xl font-bold text-white">{DAILY_INSPIRATION.name}</h3>
              <p className="text-sm text-zinc-400 italic mt-0.5">{DAILY_INSPIRATION.tagline}</p>
            </div>
            <span className="text-3xl opacity-60">📷</span>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed mt-3 mb-4">
            {DAILY_INSPIRATION.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {DAILY_INSPIRATION.tags.map((tag) => (
              <span key={tag} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/photographers/peter-lindbergh"
            className="block w-full text-center text-sm font-semibold bg-white/10 hover:bg-white/15 text-white rounded-xl py-2.5 transition-colors"
          >
            Start learning →
          </Link>
        </div>
      </section>

      {/* Continue Learning */}
      <section>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
          Continue Learning
        </h2>
        <Link href={`/learn/${recentCourse.id}`}>
          <div
            className="rounded-2xl p-4 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
            style={{
              background: `linear-gradient(135deg, ${recentCourse.accentColor}18 0%, #18181b 60%)`,
            }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 mb-1">
                  {recentCourse.category.replace(/-/g, " ")}
                </p>
                <h3 className="font-semibold text-white truncate">{recentCourse.title}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {completedCount} / {totalCount} lessons
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                style={{ background: `${recentCourse.accentColor}30` }}
              >
                📸
              </div>
            </div>
            <div className="mt-3 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%`,
                  background: recentCourse.accentColor,
                }}
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Photographers */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
            Photographers
          </h2>
          <Link href="/photographers" className="text-xs text-amber-400 hover:text-amber-300">
            See all →
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {PHOTOGRAPHERS.slice(0, 8).map((p) => (
            <Link key={p.id} href={`/photographers/${p.id}`} className="shrink-0 w-24 group">
              <div
                className="w-24 h-24 rounded-xl mb-2 flex items-center justify-center text-2xl border border-zinc-800/50 group-hover:border-zinc-700 transition-colors"
                style={{ background: `${p.accentColor}20` }}
              >
                📷
              </div>
              <p className="text-xs text-zinc-300 text-center leading-tight font-medium">
                {p.name.split(" ").slice(-1)[0]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid grid-cols-3 gap-3">
        {[
          { label: "Lessons done", value: Object.values(completedLessons).flat().length },
          { label: "Courses started", value: Object.keys(completedLessons).length },
          { label: "XP earned", value: xp.toLocaleString() },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-zinc-900/60 rounded-xl p-3 border border-zinc-800/50 text-center"
          >
            <p className="text-lg font-bold text-white">{value}</p>
            <p className="text-[10px] text-zinc-500 leading-tight mt-0.5">{label}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
