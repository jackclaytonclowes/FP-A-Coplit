"use client"

import { useCIQStore } from "@/hooks/useCIQStore"
import { XPBar } from "@/components/engine/XPBar"
import { ACHIEVEMENTS } from "@/lib/engine/achievements"
import { ALL_COURSES } from "@/content/courses"

export default function ProfilePage() {
  const {
    xp, level, levelTitle, xpToNext,
    streak, completedLessons, courseProgress,
    unlockedAchievements, moodboardItems, journalEntries, glossaryMastered,
  } = useCIQStore()

  const totalLessonsCompleted = Object.values(completedLessons).flat().length
  const coursesCompleted = Object.values(courseProgress).filter((p) => p >= 1).length
  const coursesStarted = Object.keys(completedLessons).length

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 24 }}>
      <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)" }}>Profile</h1>

      {/* Level card */}
      <div style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: 20,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Level {level}</p>
            <p style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginTop: 2 }}>{levelTitle}</p>
            <p style={{ font: "var(--text-body-strong)", color: "var(--gold-text)", marginTop: 2 }}>{xp.toLocaleString()} XP</p>
          </div>
          <div style={{ fontSize: 36, opacity: 0.8 }}>
            {level <= 2 ? "👁️" : level <= 4 ? "📷" : level <= 6 ? "🎨" : level <= 8 ? "💡" : "🏆"}
          </div>
        </div>
        <XPBar showLevel={false} />
        <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 6 }}>{xpToNext.toLocaleString()} XP to Level {level + 1}</p>
      </div>

      {/* Stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { label: "Current streak", value: `${streak} 🔥`, sub: "days" },
          { label: "Lessons completed", value: totalLessonsCompleted, sub: "lessons" },
          { label: "Courses complete", value: coursesCompleted, sub: `of ${ALL_COURSES.length} total` },
          { label: "Glossary mastered", value: glossaryMastered.length, sub: "of 20 terms" },
          { label: "Moodboard saved", value: moodboardItems.length, sub: "references" },
          { label: "Journal entries", value: journalEntries.length, sub: "reflections" },
        ].map(({ label, value, sub }) => (
          <div key={label} style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)", padding: 12,
          }}>
            <p style={{ font: "var(--text-h2)", fontFamily: "var(--font-mono)", color: "var(--fg-1)" }}>{value}</p>
            <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-3)", marginTop: 2, lineHeight: 1.3 }}>{label}</p>
            <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-muted)" }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Achievements</p>
          <span style={{ font: "var(--text-caption)", color: "var(--fg-3)" }}>{unlockedAchievements.length}/{ACHIEVEMENTS.length}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {ACHIEVEMENTS.map((ach) => {
            const unlocked = unlockedAchievements.includes(ach.slug)
            return (
              <div
                key={ach.slug}
                style={{
                  borderRadius: "var(--radius-md)", padding: 12,
                  border: `1px solid ${unlocked ? "var(--gold-border)" : "var(--border)"}`,
                  background: unlocked ? "var(--gold-soft)" : "var(--surface)",
                  display: "flex", alignItems: "flex-start", gap: 10,
                  opacity: unlocked ? 1 : 0.5,
                  transition: "opacity 0.15s",
                }}
              >
                <span style={{ fontSize: 20, flexShrink: 0, filter: unlocked ? "none" : "grayscale(1)" }}>{ach.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    font: "var(--text-label)", fontWeight: 600,
                    color: unlocked ? "var(--fg-1)" : "var(--fg-3)",
                    lineHeight: 1.25,
                  }}>
                    {ach.name}
                  </p>
                  <p style={{
                    fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-muted)",
                    marginTop: 2, lineHeight: 1.3,
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>
                    {ach.description}
                  </p>
                  {unlocked && ach.xpReward > 0 && (
                    <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--gold-text)", marginTop: 2 }}>+{ach.xpReward} XP</p>
                  )}
                  {!unlocked && (
                    <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-muted)", marginTop: 2 }}>{ach.rarity}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Course progress */}
      <div>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Course Progress</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {ALL_COURSES.map((course) => {
            const done = (completedLessons[course.id] || []).length
            const progress = courseProgress[course.id] ?? 0
            if (!coursesStarted && done === 0) return null
            return (
              <div key={course.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "var(--radius-sm)",
                  background: `${course.accentColor}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, flexShrink: 0,
                }}>
                  📷
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ font: "var(--text-caption)", color: "var(--fg-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{course.title}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                    <div style={{ flex: 1, height: 3, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", borderRadius: "var(--radius-pill)",
                        background: course.accentColor, transition: "width 0.5s ease-out",
                        width: `${progress * 100}%`,
                      }} />
                    </div>
                    <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--fg-3)", flexShrink: 0 }}>{done}/{course.lessons.length}</span>
                  </div>
                </div>
              </div>
            )
          })}
          {coursesStarted === 0 && (
            <p style={{ font: "var(--text-body)", color: "var(--fg-muted)", textAlign: "center", padding: "16px 0" }}>No courses started yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
