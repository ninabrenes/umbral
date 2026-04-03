'use client'

import { useRef, useEffect } from 'react'

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

const INITIAL_STYLES: Record<RevealVariant, { opacity: string; transform: string }> = {
  'fade-up': { opacity: '0', transform: 'translateY(30px)' },
  'fade-in': { opacity: '0', transform: 'none' },
  'slide-left': { opacity: '0', transform: 'translateX(-40px)' },
  'slide-right': { opacity: '0', transform: 'translateX(40px)' },
  'scale': { opacity: '0', transform: 'scale(0.95)' },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = 'fade-up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (prefersReduced || !el) return

    const initial = INITIAL_STYLES[variant]
    el.style.opacity = initial.opacity
    el.style.transform = initial.transform
    el.style.transition = `opacity 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, variant])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
