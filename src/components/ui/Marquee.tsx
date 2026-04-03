'use client'

import { useRef, useEffect, useState } from 'react'

interface MarqueeProps {
  children: string
  speed?: number
  className?: string
  direction?: 'left' | 'right'
  separator?: string
}

export function Marquee({
  children,
  speed = 50,
  className = '',
  direction = 'left',
  separator = '\u00b7',
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [repetitions, setRepetitions] = useState(10)

  useEffect(() => {
    if (!containerRef.current) return
    const containerWidth = containerRef.current.offsetWidth
    // Estimate: each repeat is roughly children.length * 12px + separator spacing
    const estimatedRepeatWidth = (children.length + separator.length + 2) * 12
    const needed = Math.ceil((containerWidth * 2) / estimatedRepeatWidth) + 2
    setRepetitions(Math.max(needed, 10))
  }, [children, separator])

  const repeatedContent = Array.from({ length: repetitions }, (_, i) => (
    <span key={i} className="inline-flex items-center gap-6 whitespace-nowrap">
      <span>{children}</span>
      <span className="opacity-40" aria-hidden="true">{separator}</span>
    </span>
  ))

  // Duration based on speed: more repetitions = longer track = longer duration
  const duration = (repetitions * (children.length + 4) * 12) / speed

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none ${className}`}
      aria-label={children}
      role="marquee"
    >
      <div
        className="inline-flex items-center gap-6 font-serif italic text-lg md:text-xl marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {repeatedContent}
        {repeatedContent}
      </div>
    </div>
  )
}
