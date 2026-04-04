'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  labels: Record<string, string>
  allLabel: string
  onChange: (category: string | null) => void
}

export function CategoryFilter({ categories, labels, allLabel, onChange }: CategoryFilterProps) {
  const [active, setActive] = useState<string | null>(null)

  function handleClick(cat: string | null) {
    setActive(cat)
    onChange(cat)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleClick(null)}
        className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 border ${
          active === null
            ? 'bg-sage/20 text-sage border-sage/30'
            : 'bg-transparent text-cloud/40 border-white/[0.06] hover:text-cloud/70 hover:border-white/10'
        }`}
        type="button"
      >
        {allLabel}
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 border ${
            active === cat
              ? 'bg-sage/20 text-sage border-sage/30'
              : 'bg-transparent text-cloud/40 border-white/[0.06] hover:text-cloud/70 hover:border-white/10'
          }`}
          type="button"
        >
          {labels[cat] ?? cat}
        </button>
      ))}
    </div>
  )
}
