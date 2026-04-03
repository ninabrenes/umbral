'use client'

import { useRef, useEffect, createElement } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: string
  className?: string
  as?: keyof HTMLElementTagNameMap
}

export function TextReveal({ children, className, as = 'h2' }: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !ref.current) return

    const innerSpans = ref.current.querySelectorAll<HTMLSpanElement>('.text-reveal-inner')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerSpans,
        { y: '100%' },
        {
          y: '0%',
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [children])

  const words = children.split(/\s+/)

  return createElement(
    as,
    { ref, className },
    words.map((word, i) => (
      <span key={i} className="inline-block overflow-hidden">
        <span className="text-reveal-inner inline-block">
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      </span>
    ))
  )
}
