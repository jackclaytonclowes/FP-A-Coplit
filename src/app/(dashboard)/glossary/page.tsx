"use client"

import { useState } from "react"
import { GLOSSARY_TERMS } from "@/content/glossary"
import { ciqStore } from "@/stores/cultureIQStore"
import { useCIQStore } from "@/hooks/useCIQStore"
import { cn } from "@/lib/utils"

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
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Glossary</h1>
          <p className="text-sm text-zinc-400 mt-1">20 essential creative terms.</p>
        </div>
        <span className="text-xs text-zinc-500">{glossaryMastered.length}/20 mastered</span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full transition-all"
          style={{ width: `${(glossaryMastered.length / 20) * 100}%` }}
        />
      </div>

      {/* Quiz overlay */}
      {quizActive && quizTerm && (
        <div className="fixed inset-0 z-50 bg-zinc-950/95 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Quiz · {quizTerm.term}</p>
            <h2 className="text-base font-semibold text-white mb-5 leading-snug">{quizTerm.quizQuestion}</h2>
            <div className="space-y-2">
              {quizTerm.quizOptions.map((opt) => {
                const isSelected = selected === opt.id
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(opt.id, opt.isCorrect)}
                    disabled={answered}
                    className={cn(
                      "w-full text-left text-sm p-3 rounded-xl border transition-all",
                      !answered && "border-zinc-700 bg-zinc-800/60 hover:border-zinc-500",
                      answered && isSelected && opt.isCorrect && "border-emerald-500 bg-emerald-950/50 text-emerald-300",
                      answered && isSelected && !opt.isCorrect && "border-red-500 bg-red-950/50 text-red-300",
                      answered && !isSelected && opt.isCorrect && "border-emerald-500/50 bg-emerald-950/20 text-emerald-400",
                      answered && !isSelected && !opt.isCorrect && "border-zinc-800 text-zinc-600 opacity-50"
                    )}
                  >
                    {opt.text}
                  </button>
                )
              })}
            </div>
            {answered && (
              <button
                onClick={() => setQuizActive(null)}
                className="mt-4 w-full py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors"
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
        <div className="fixed inset-0 z-50 bg-zinc-950/95 flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-lg bg-zinc-900 rounded-2xl p-6 border border-zinc-700 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">{activeFull.term}</h2>
                {glossaryMastered.includes(activeFull.id) && (
                  <span className="text-xs text-amber-400">✓ Mastered</span>
                )}
              </div>
              <button onClick={() => setActiveTerm(null)} className="text-zinc-500 hover:text-zinc-300 text-xl leading-none">×</button>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">{activeFull.definition}</p>
            {activeFull.example && (
              <div className="bg-zinc-800/60 rounded-xl p-3 mb-4">
                <p className="text-xs text-zinc-500 mb-1">Example</p>
                <p className="text-xs text-zinc-300 leading-relaxed">{activeFull.example}</p>
              </div>
            )}
            {activeFull.photographerExample && (
              <div className="bg-zinc-800/40 rounded-xl p-3 mb-4">
                <p className="text-xs text-zinc-500 mb-1">In practice</p>
                <p className="text-xs text-zinc-400 leading-relaxed italic">{activeFull.photographerExample}</p>
              </div>
            )}
            {!glossaryMastered.includes(activeFull.id) && (
              <button
                onClick={() => startQuiz(activeFull.id)}
                className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors"
              >
                Take Quiz → +10 XP
              </button>
            )}
          </div>
        </div>
      )}

      {/* Term list */}
      <div className="space-y-2">
        {GLOSSARY_TERMS.map((term) => {
          const mastered = glossaryMastered.includes(term.id)
          return (
            <button
              key={term.id}
              onClick={() => setActiveTerm(term.id)}
              className={cn(
                "w-full text-left rounded-xl p-3 border transition-all flex items-center justify-between gap-3",
                mastered
                  ? "border-amber-800/30 bg-amber-950/15"
                  : "border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700"
              )}
            >
              <div>
                <p className={cn("text-sm font-medium", mastered ? "text-zinc-300" : "text-white")}>
                  {term.term}
                </p>
                <p className="text-[10px] text-zinc-600 mt-0.5 line-clamp-1">{term.definition.slice(0, 60)}…</p>
              </div>
              <div className="shrink-0">
                {mastered ? (
                  <span className="text-amber-400 text-sm">✓</span>
                ) : (
                  <span className="text-zinc-600 text-xs">+10 XP</span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
