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
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)" }}>Journal</h1>
        <p style={{ font: "var(--text-body)", color: "var(--fg-3)", marginTop: 4 }}>Record thoughts, reflections, and creative inspiration.</p>
      </div>

      {/* New entry */}
      <div style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: 16,
        display: "flex", flexDirection: "column", gap: 12,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <p style={{ font: "var(--text-body)", color: "var(--fg-2)", fontStyle: "italic", lineHeight: 1.6, flex: 1 }}>"{prompt}"</p>
          <button
            onClick={() => setPrompt(JOURNAL_PROMPTS[Math.floor(Math.random() * JOURNAL_PROMPTS.length)])}
            style={{
              font: "var(--text-caption)", color: "var(--fg-muted)",
              background: "transparent", border: "none", cursor: "pointer",
              flexShrink: 0, marginTop: 2,
            }}
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
          style={{
            background: "var(--surface-2)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)", padding: "10px 12px",
            font: "var(--text-body)", color: "var(--fg-1)",
            resize: "none", outline: "none", width: "100%", boxSizing: "border-box",
            transition: "border-color 0.15s",
          }}
        />
        <button
          onClick={handleSave}
          disabled={!newText.trim()}
          style={{
            width: "100%", padding: "10px 0",
            background: "var(--gold)", color: "#000",
            font: "var(--text-body-strong)", borderRadius: "var(--radius-md)",
            border: "none", cursor: newText.trim() ? "pointer" : "default",
            opacity: newText.trim() ? 1 : 0.4,
            transition: "opacity 0.15s",
          }}
        >
          Save Entry (+20 XP)
        </button>
      </div>

      {/* Past entries */}
      {journalEntries.length > 0 && (
        <div>
          <p style={{ font: "var(--text-label)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            {journalEntries.length} {journalEntries.length === 1 ? "entry" : "entries"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {journalEntries.map((entry) => (
              <div key={entry.id} style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: 16,
              }}>
                {entry.prompt && (
                  <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-muted)", fontStyle: "italic", marginBottom: 6 }}>"{entry.prompt}"</p>
                )}
                <p style={{ font: "var(--text-body)", color: "var(--fg-2)", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>{entry.content}</p>
                <p style={{ font: "var(--text-caption)", color: "var(--fg-muted)", marginTop: 8 }}>
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
        <div style={{ textAlign: "center", padding: "48px 0", color: "var(--fg-muted)" }}>
          <p style={{ fontSize: 32, marginBottom: 10 }}>✍️</p>
          <p style={{ font: "var(--text-body)", color: "var(--fg-3)" }}>No entries yet.</p>
          <p style={{ font: "var(--text-caption)", color: "var(--fg-muted)", marginTop: 4 }}>Write your first reflection above.</p>
        </div>
      )}
    </div>
  )
}
