"use client"

import Link from "next/link"
import { PHOTOGRAPHERS, DISCOVERY_CHAINS } from "@/content/photographers"
import { useCIQStore } from "@/hooks/useCIQStore"

export default function PhotographersPage() {
  const { completedLessons, discoveryProgress } = useCIQStore()

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)", marginBottom: 6 }}>Photographers</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-3)" }}>18 masters of the medium — biography, style, and what you can learn.</p>
      </div>

      {/* Discovery Chains */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Discovery Chains
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {DISCOVERY_CHAINS.map((chain) => {
            const progress = discoveryProgress[chain.id]
            const unlockedIds = progress?.unlockedPhotographers ?? []
            const completed = progress?.completed ?? false
            return (
              <div key={chain.id} style={{
                background: completed ? "var(--gold-soft)" : "var(--surface)",
                border: `1px solid ${completed ? "var(--gold-border)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: 16,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                  <div>
                    <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)" }}>{chain.name}</p>
                    <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 2 }}>{chain.description}</p>
                  </div>
                  {completed && <span style={{ fontSize: 18, flexShrink: 0 }}>🔗</span>}
                </div>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                  {chain.photographers.map((pid, i) => {
                    const p = PHOTOGRAPHERS.find((ph) => ph.id === pid)
                    const isUnlocked = i === 0 || unlockedIds.includes(pid)
                    return (
                      <div key={pid} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Link
                          href={isUnlocked ? `/photographers/${pid}` : "#"}
                          style={{
                            font: "var(--text-label)",
                            color: isUnlocked ? "var(--fg-1)" : "var(--fg-muted)",
                            background: isUnlocked ? "var(--surface-2)" : "var(--surface)",
                            border: `1px solid ${isUnlocked ? "var(--border-strong)" : "var(--border-subtle)"}`,
                            borderRadius: "var(--radius-sm)",
                            padding: "4px 10px",
                            textDecoration: "none",
                            pointerEvents: isUnlocked ? "auto" : "none",
                            transition: "background 0.15s",
                          }}
                        >
                          {p?.name.split(" ").slice(-1)[0] ?? pid}
                        </Link>
                        {i < chain.photographers.length - 1 && (
                          <span style={{ font: "var(--text-caption)", color: "var(--fg-muted)" }}>→</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* All Photographers */}
      <section>
        <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          All Photographers
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {PHOTOGRAPHERS.map((p) => {
            const done = (completedLessons[p.courseId] || []).length
            return (
              <Link key={p.id} href={`/photographers/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: `linear-gradient(135deg, ${p.accentColor}12 0%, var(--surface) 75%)`,
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 16,
                  height: "100%",
                  transition: "border-color 0.15s",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "var(--radius-md)",
                    background: `${p.accentColor}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, marginBottom: 10,
                  }}>📷</div>
                  <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", lineHeight: 1.2 }}>{p.name}</p>
                  <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginTop: 2 }}>{p.nationality}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
                    {p.tags.slice(0, 2).map((tag) => (
                      <span key={tag} style={{
                        fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600,
                        color: "var(--fg-3)", background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-pill)", padding: "2px 7px",
                      }}>{tag}</span>
                    ))}
                  </div>
                  {done > 0 && (
                    <p style={{ font: "var(--text-caption)", color: "var(--gold-text)", marginTop: 8 }}>
                      {done} lessons done
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
