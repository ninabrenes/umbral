'use client'

import { useEffect, useState, useCallback } from 'react'

interface SideDockSection {
  id: string
  label: string
}

export function SideDock() {
  const [sections, setSections] = useState<SideDockSection[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-detect sections with id attributes on mount
  useEffect(() => {
    const sectionElements = document.querySelectorAll('section[id]')
    const detected: SideDockSection[] = Array.from(sectionElements).map((el) => ({
      id: el.id,
      label: el.getAttribute('aria-label') || el.id,
    }))

    if (detected.length > 0) {
      setSections(detected)
    }
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (sections.length === 0) return

    const observers: IntersectionObserver[] = []

    sections.forEach((section, index) => {
      const el = document.getElementById(section.id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index)
            }
          })
        },
        {
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sections])

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Don't render if no sections detected
  if (sections.length === 0) return null

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {sections.map((item, i) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`w-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            i === activeIndex
              ? 'h-8 bg-mint'
              : 'h-2 bg-cloud/20 hover:bg-cloud/40'
          }`}
          aria-label={item.label || `Section ${i + 1}`}
        />
      ))}
    </div>
  )
}
