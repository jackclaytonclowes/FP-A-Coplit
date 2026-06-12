"use client"

import { useState } from "react"
import { useCIQStore } from "@/hooks/useCIQStore"
import { ciqStore } from "@/stores/cultureIQStore"
import { cn } from "@/lib/utils"
import type { MoodboardItem } from "@/stores/cultureIQStore"

const ITEM_TYPES = ["photographer", "campaign", "film", "artist", "fashion", "design", "other"] as const

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
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Moodboard</h1>
          <p className="text-sm text-zinc-400 mt-1">Save references, build collections, track inspiration.</p>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="bg-amber-400 text-black font-semibold text-sm px-4 py-2 rounded-xl hover:bg-amber-300 transition-colors"
        >
          + Add
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-700 space-y-3">
          <h3 className="font-semibold text-white text-sm">New Reference</h3>
          <input
            placeholder="Title (e.g. Wolfgang Tillmans, Celine SS23)"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          />
          <select
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value as MoodboardItem["type"] })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-500"
          >
            {ITEM_TYPES.map((t) => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
          <input
            placeholder="Collection (e.g. Night Aesthetics)"
            value={newItem.collection}
            onChange={(e) => setNewItem({ ...newItem, collection: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          />
          <input
            placeholder="Tags (comma separated)"
            value={newItem.tags}
            onChange={(e) => setNewItem({ ...newItem, tags: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          />
          <textarea
            placeholder="Notes…"
            value={newItem.notes}
            onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
            rows={2}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 resize-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="flex-1 bg-amber-400 text-black font-semibold text-sm py-2 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => setShowAdd(false)}
              className="flex-1 border border-zinc-700 text-zinc-400 text-sm py-2 rounded-xl hover:border-zinc-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Collection filter */}
      {collections.length > 0 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setActiveCollection(null)}
            className={cn(
              "shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors",
              !activeCollection
                ? "bg-amber-400 text-black border-amber-400 font-semibold"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
            )}
          >
            All ({moodboardItems.length})
          </button>
          {collections.map((col) => (
            <button
              key={col}
              onClick={() => setActiveCollection(col === activeCollection ? null : col)}
              className={cn(
                "shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors",
                activeCollection === col
                  ? "bg-amber-400 text-black border-amber-400 font-semibold"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              )}
            >
              {col} ({moodboardItems.filter((i) => i.collection === col).length})
            </button>
          ))}
        </div>
      )}

      {/* Items grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-600">
          <p className="text-3xl mb-3">📌</p>
          <p className="text-sm">Nothing saved yet.</p>
          <p className="text-xs mt-1">Hit + Add to save your first reference.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/60 rounded-2xl p-3 border border-zinc-800/50 relative group"
            >
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-zinc-800 rounded-full text-zinc-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-900/50 hover:text-red-400"
              >
                ×
              </button>
              <span className="text-[10px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded-full">
                {item.type}
              </span>
              <h3 className="text-sm font-medium text-white mt-2 leading-tight">{item.title}</h3>
              {item.collection && (
                <p className="text-[10px] text-amber-400/70 mt-1">{item.collection}</p>
              )}
              {item.notes && (
                <p className="text-[10px] text-zinc-500 mt-1 leading-relaxed line-clamp-2">{item.notes}</p>
              )}
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] bg-zinc-800/80 text-zinc-600 px-1.5 py-0.5 rounded-full">
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
