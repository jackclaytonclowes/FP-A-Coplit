"use client"

import { useState } from "react"
import { useCIQStore } from "@/hooks/useCIQStore"
import { ciqStore } from "@/stores/cultureIQStore"

const JOURNAL_PROMPTS = [
  "What image have you seen recently that you can't stop thinking about?",
  "Describe the last photograph you took that you're proud of.",
  "Which photographer's work makes you want to pick up your camera?",
  "What does your personal visual aesthetic look like right now?",
  "What colours are you drawn to this week — and why?",
  "Describe a film scene that influenced how you think about photography.",
  "What is the biggest thing you've learned about light this week?",
  "If you could photograph one day in history, what would it be?",
]

export default function JournalPage() {
  const { journalEntries } = useCIQStore()
  const [newText, setNewText] = useState("")
  const [prompt, setPrompt] = useState(() => JOURNAL_PROMPTS[Math.floor(Math.random() * JOURNAL_PROMPTS.length)])

  function handleSave() {
    if (!newText.trim()) return
    ciqStore.addJournalEntry({ content: newText, prompt })
    setNewText("")
    setPrompt(JOURNAL_PROMPTS[Math.floor(Math.random() * JOURNAL_PROMPTS.length)])
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Journal</h1>
        <p className="text-sm text-zinc-400 mt-1">Record thoughts, reflections, and creative inspiration.</p>
      </div>

      {/* New entry */}
      <div className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800/50 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm text-zinc-300 italic leading-relaxed flex-1">"{prompt}"</p>
          <button
            onClick={() => setPrompt(JOURNAL_PROMPTS[Math.floor(Math.random() * JOURNAL_PROMPTS.length)])}
            className="text-xs text-zinc-600 hover:text-zinc-400 shrink-0 mt-1"
            title="New prompt"
          >
            ↻
          </button>
        </div>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Write here…"
          rows={4}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-500 transition-colors"
        />
        <button
          onClick={handleSave}
          disabled={!newText.trim()}
          className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Save Entry (+20 XP)
        </button>
      </div>

      {/* Past entries */}
      {journalEntries.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
            {journalEntries.length} {journalEntries.length === 1 ? "entry" : "entries"}
          </h2>
          <div className="space-y-3">
            {journalEntries.map((entry) => (
              <div key={entry.id} className="bg-zinc-900/40 rounded-xl p-4 border border-zinc-800/50">
                {entry.prompt && (
                  <p className="text-[10px] text-zinc-600 italic mb-1.5">"{entry.prompt}"</p>
                )}
                <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{entry.content}</p>
                <p className="text-[10px] text-zinc-600 mt-2">
                  {new Date(entry.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric", month: "long", year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {journalEntries.length === 0 && (
        <div className="text-center py-12 text-zinc-600">
          <p className="text-3xl mb-3">✍️</p>
          <p className="text-sm">No entries yet.</p>
          <p className="text-xs mt-1">Write your first reflection above.</p>
        </div>
      )}
    </div>
  )
}
