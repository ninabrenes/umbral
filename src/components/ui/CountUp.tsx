'use client'

import { useRef, useEffect, useState } from 'react'

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export function CountUp({
  value,
  suffix = '',
  duration = 2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!el) return

    if (prefersReduced) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.disconnect()

          const startTime = performance.now()
          const durationMs = duration * 1000

          function animate(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / durationMs, 1)
            const eased = easeOutQuart(progress)
            const current = Math.round(eased * value)
            setDisplay(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ''}`}>
      {display}
      {suffix}
    </span>
  )
}
