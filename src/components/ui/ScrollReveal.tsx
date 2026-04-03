'use client'

import { useRef, useEffect, useState } from 'react'

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

const variantClass: Record<RevealVariant, string> = {
  'fade-up': 'reveal-up',
  'fade-in': 'reveal-in',
  'slide-left': 'reveal-left',
  'slide-right': 'reveal-right',
  'scale': 'reveal-scale',
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = 'fade-up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (prefersReduced || !el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className ?? ''} ${animated ? `reveal-animated ${variantClass[variant]}` : ''}`}
      style={animated && delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
