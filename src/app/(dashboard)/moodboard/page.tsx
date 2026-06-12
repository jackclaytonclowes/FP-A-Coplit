"use client"

import { useState } from "react"
import { useCIQStore } from "@/hooks/useCIQStore"
import { ciqStore } from "@/stores/cultureIQStore"
import type { MoodboardItem } from "@/stores/cultureIQStore"

const ITEM_TYPES = ["photographer", "campaign", "film", "artist", "fashion", "design", "other"] as const

const INPUT_STYLE: React.CSSProperties = {
  width: "100%", background: "var(--surface-2)",
  border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
  padding: "8px 12px", font: "var(--text-body)", color: "var(--fg-1)",
  outline: "none", boxSizing: "border-box",
}

export default function MoodboardPage() {
  const { moodboardItems } = useCIQStore()
  const [activeCollection, setActiveCollection] = useState<string | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [newItem, setNewItem] = useState({
    title: "",
    type: "photographer" as MoodboardItem["type"],
    notes: "",
    collection: "",
    tags: "",
  })

  const collections = Array.from(
    new Set(moodboardItems.map((i) => i.collection).filter(Boolean))
  ) as string[]

  const filtered = activeCollection
    ? moodboardItems.filter((i) => i.collection === activeCollection)
    : moodboardItems

  function handleAdd() {
    if (!newItem.title.trim()) return
    ciqStore.saveMoodboardItem({
      title: newItem.title,
      type: newItem.type,
      notes: newItem.notes || undefined,
      collection: newItem.collection || undefined,
      tags: newItem.tags.split(",").map((t) => t.trim()).filter(Boolean),
    })
    setNewItem({ title: "", type: "photographer", notes: "", collection: "", tags: "" })
    setShowAdd(false)
  }

  function handleDelete(id: string) {
    ciqStore.deleteMoodboardItem(id)
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ font: "var(--text-h1)", color: "var(--fg-1)" }}>Moodboard</h1>
          <p style={{ font: "var(--text-body)", color: "var(--fg-3)", marginTop: 4 }}>Save references, build collections, track inspiration.</p>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          style={{
            background: "var(--gold)", color: "#000",
            font: "var(--text-body-strong)", padding: "8px 16px",
            borderRadius: "var(--radius-md)", border: "none", cursor: "pointer",
            transition: "opacity 0.15s",
          }}
        >
          + Add
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <div style={{
          background: "var(--surface)", border: "1px solid var(--border-strong)",
          borderRadius: "var(--radius-lg)", padding: 16,
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)" }}>New Reference</p>
          <input
            placeholder="Title (e.g. Wolfgang Tillmans, Celine SS23)"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            style={INPUT_STYLE}
          />
          <select
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value as MoodboardItem["type"] })}
            style={INPUT_STYLE}
          >
            {ITEM_TYPES.map((t) => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
          <input
            placeholder="Collection (e.g. Night Aesthetics)"
            value={newItem.collection}
            onChange={(e) => setNewItem({ ...newItem, collection: e.target.value })}
            style={INPUT_STYLE}
          />
          <input
            placeholder="Tags (comma separated)"
            value={newItem.tags}
            onChange={(e) => setNewItem({ ...newItem, tags: e.target.value })}
            style={INPUT_STYLE}
          />
          <textarea
            placeholder="Notes…"
            value={newItem.notes}
            onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
            rows={2}
            style={{ ...INPUT_STYLE, resize: "none" }}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={handleAdd}
              style={{
                flex: 1, background: "var(--gold)", color: "#000",
                font: "var(--text-body-strong)", padding: "8px 0",
                borderRadius: "var(--radius-md)", border: "none", cursor: "pointer",
              }}
            >
              Save
            </button>
            <button
              onClick={() => setShowAdd(false)}
              style={{
                flex: 1, background: "transparent",
                border: "1px solid var(--border)", color: "var(--fg-3)",
                font: "var(--text-body)", padding: "8px 0",
                borderRadius: "var(--radius-md)", cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Collection filter */}
      {collections.length > 0 && (
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }} className="no-scrollbar">
          <button
            onClick={() => setActiveCollection(null)}
            style={{
              flexShrink: 0, font: "var(--text-label)", padding: "4px 12px",
              borderRadius: "var(--radius-pill)", border: "1px solid var(--border)",
              background: !activeCollection ? "var(--gold)" : "transparent",
              color: !activeCollection ? "#000" : "var(--fg-3)",
              cursor: "pointer", fontWeight: !activeCollection ? 600 : 400,
              transition: "all 0.15s",
            }}
          >
            All ({moodboardItems.length})
          </button>
          {collections.map((col) => (
            <button
              key={col}
              onClick={() => setActiveCollection(col === activeCollection ? null : col)}
              style={{
                flexShrink: 0, font: "var(--text-label)", padding: "4px 12px",
                borderRadius: "var(--radius-pill)", border: "1px solid var(--border)",
                background: activeCollection === col ? "var(--gold)" : "transparent",
                color: activeCollection === col ? "#000" : "var(--fg-3)",
                cursor: "pointer", fontWeight: activeCollection === col ? 600 : 400,
                transition: "all 0.15s",
              }}
            >
              {col} ({moodboardItems.filter((i) => i.collection === col).length})
            </button>
          ))}
        </div>
      )}

      {/* Items grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 0", color: "var(--fg-muted)" }}>
          <p style={{ fontSize: 32, marginBottom: 10 }}>📌</p>
          <p style={{ font: "var(--text-body)", color: "var(--fg-3)" }}>Nothing saved yet.</p>
          <p style={{ font: "var(--text-caption)", color: "var(--fg-muted)", marginTop: 4 }}>Hit + Add to save your first reference.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: 12, position: "relative",
              }}
            >
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  position: "absolute", top: 8, right: 8,
                  width: 24, height: 24, background: "var(--surface-2)",
                  border: "none", borderRadius: "50%",
                  color: "var(--fg-3)", fontSize: 14, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                ×
              </button>
              <span style={{
                fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600,
                background: "var(--surface-2)", color: "var(--fg-3)",
                padding: "2px 8px", borderRadius: "var(--radius-pill)",
              }}>
                {item.type}
              </span>
              <p style={{ font: "var(--text-body-strong)", color: "var(--fg-1)", marginTop: 8, lineHeight: 1.25 }}>{item.title}</p>
              {item.collection && (
                <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--gold-text)", marginTop: 4 }}>{item.collection}</p>
              )}
              {item.notes && (
                <p style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "var(--fg-3)", marginTop: 4, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.notes}</p>
              )}
              {item.tags.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{
                      fontSize: 9, fontFamily: "var(--font-sans)", fontWeight: 600,
                      background: "var(--surface-2)", color: "var(--fg-muted)",
                      padding: "1px 6px", borderRadius: "var(--radius-pill)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
