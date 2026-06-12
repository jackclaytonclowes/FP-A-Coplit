"use client"

import { useState } from "react"
import { GLOSSARY_TERMS } from "@/content/glossary"
import { ciqStore } from "@/stores/cultureIQStore"
import { useCIQStore } from "@/hooks/useCIQStore"

export default function GlossaryPage() {
  const { glossaryMastered } = useCIQStore()
  const [activeTerm, setActiveTerm] = useState<string | null>(null)
  const [quizActive, setQuizActive] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

  function startQuiz(termId: string) {
    setQuizActive(termId)
    setSelected(null)
    setAnswered(false)
    setActiveTerm(null)
  }

  function handleAnswer(optionId: string, isCorrect: boolean) {
    if (answered) return
    setSelected(optionId)
    setAnswered(true)
    if (isCorrect) {
      ciqStore.markGlossaryMastered(quizActive!)
    }
  }

  const quizTerm = GLOSSARY_TERMS.find((t) => t.id === quizActive)
  const activeFull = GLOSSARY_TERMS.find((t) => t.id === activeTerm)

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)" }}>Glossary</h1>
          <p style={{ font: "var(--text-body)", color: "var(--fg-3)", marginTop: 4 }}>20 essential creative terms.</p>
        </div>
        <span style={{ font: "var(--text-caption)", color: "var(--fg-3)" }}>{glossaryMastered.length}/20 mastered</span>
      </div>

      {/* Progress */}
      <div style={{ height: 4, background: "var(--surface-3)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%", background: "var(--gold)",
            borderRadius: "var(--radius-pill)", transition: "width 0.5s ease-out",
            width: `${(glossaryMastered.length / 20) * 100}%`,
          }}
        />
      </div>

      {/* Quiz overlay */}
      {quizActive && quizTerm && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 50,
          background: "rgba(9,9,14,0.95)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
        }}>
          <div style={{
            width: "100%", maxWidth: 512,
            background: "var(--surface)", border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-xl)", padding: 24,
          }}>
            <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              Quiz · {quizTerm.term}
            </p>
            <h2 style={{ font: "var(--text-h2)", color: "var(--fg-1)", marginBottom: 20, lineHeight: 1.35 }}>{quizTerm.quizQuestion}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {quizTerm.quizOptions.map((opt) => {
                const isSelected = selected === opt.id
                let bg = "var(--surface-2)"
                let border = "var(--border)"
                let color = "var(--fg-1)"
                let opacity = 1
                if (answered) {
                  if (isSelected && opt.isCorrect)  { bg = "var(--favourable-soft)"; border = "var(--favourable)"; color = "var(--favourable-text)" }
                  if (isSelected && !opt.isCorrect) { bg = "var(--adverse-soft)"; border = "var(--adverse)"; color = "var(--adverse-text)" }
                  if (!isSelected && opt.isCorrect) { bg = "var(--favourable-soft)"; border = "var(--favourable-border)"; color = "var(--favourable-text)" }
                  if (!isSelected && !opt.isCorrect){ opacity = 0.4 }
                }
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(opt.id, opt.isCorrect)}
                    disabled={answered}
                    style={{
                      width: "100%", textAlign: "left", padding: "12px 14px",
                      background: bg, border: `1px solid ${border}`, color,
                      borderRadius: "var(--radius-md)", font: "var(--text-body)",
                      cursor: answered ? "default" : "pointer", opacity,
                      transition: "all 0.15s",
                    }}
                  >
                    {opt.text}
                  </button>
                )
              })}
            </div>
            {answered && (
              <button
                onClick={() => setQuizActive(null)}
                style={{
                  marginTop: 16, width: "100%", padding: "10px 0",
                  background: "var(--gold)", color: "#000",
                  borderRadius: "var(--radius-md)", border: "none",
                  font: "var(--text-body-strong)", cursor: "pointer",
                }}
              >
                {selected && quizTerm.quizOptions.find((o) => o.id === selected)?.isCorrect
                  ? "✓ Mastered! +10 XP →"
                  : "Try again later →"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Term detail overlay */}
      {activeFull && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 50,
          background: "rgba(9,9,14,0.95)",
          display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 16,
        }}>
          <div style={{
            width: "100%", maxWidth: 512,
            background: "var(--surface)", border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-xl)", padding: 24,
            maxHeight: "80vh", overflowY: "auto",
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
              <div>
                <h2 style={{ font: "var(--text-h2)", color: "var(--fg-1)" }}>{activeFull.term}</h2>
                {glossaryMastered.includes(activeFull.id) && (
                  <span style={{ font: "var(--text-caption)", color: "var(--gold-text)" }}>✓ Mastered</span>
                )}
              </div>
              <button onClick={() => setActiveTerm(null)} style={{
                font: "var(--text-body)", color: "var(--fg-3)",
                background: "transparent", border: "none", cursor: "pointer", fontSize: 20,
              }}>×</button>
            </div>
            <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.65, marginBottom: 16 }}>{activeFull.definition}</p>
            {activeFull.example && (
              <div style={{ background: "var(--surface-2)", borderRadius: "var(--radius-md)", padding: 12, marginBottom: 16 }}>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 4 }}>Example</p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-2)", lineHeight: 1.6 }}>{activeFull.example}</p>
              </div>
            )}
            {activeFull.photographerExample && (
              <div style={{ background: "var(--surface-2)", borderRadius: "var(--radius-md)", padding: 12, marginBottom: 16 }}>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-3)", marginBottom: 4 }}>In practice</p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-2)", lineHeight: 1.6, fontStyle: "italic" }}>{activeFull.photographerExample}</p>
              </div>
            )}
            {!glossaryMastered.includes(activeFull.id) && (
              <button
                onClick={() => startQuiz(activeFull.id)}
                style={{
                  width: "100%", padding: "10px 0",
                  background: "var(--gold)", color: "#000",
                  font: "var(--text-body-strong)", borderRadius: "var(--radius-md)",
                  border: "none", cursor: "pointer",
                }}
              >
                Take Quiz → +10 XP
              </button>
            )}
          </div>
        </div>
      )}

      {/* Term list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {GLOSSARY_TERMS.map((term) => {
          const mastered = glossaryMastered.includes(term.id)
          return (
            <button
              key={term.id}
              onClick={() => setActiveTerm(term.id)}
              style={{
                width: "100%", textAlign: "left",
                borderRadius: "var(--radius-md)", padding: 12,
                border: `1px solid ${mastered ? "var(--gold-border)" : "var(--border)"}`,
                background: mastered ? "var(--gold-soft)" : "var(--surface)",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
                cursor: "pointer", transition: "all 0.15s",
              }}
            >
              <div>
                <p style={{ font: "var(--text-body-strong)", color: mastered ? "var(--fg-2)" : "var(--fg-1)" }}>
                  {term.term}
                </p>
                <p style={{
                  fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-muted)",
                  marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {term.definition.slice(0, 60)}…
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                {mastered ? (
                  <span style={{ font: "var(--text-body)", color: "var(--gold-text)" }}>✓</span>
                ) : (
                  <span style={{ font: "var(--text-caption)", color: "var(--fg-3)" }}>+10 XP</span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
