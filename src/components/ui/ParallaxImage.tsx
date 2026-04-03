'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  overlay?: string
  children?: React.ReactNode
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.15,
  overlay,
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPrefersReduced(reduced)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (prefersReduced || !el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '50px 0px 50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReduced])

  useEffect(() => {
    const el = containerRef.current
    if (prefersReduced || !el || !isVisible) return

    let rafId: number

    function handleScroll() {
      rafId = requestAnimationFrame(() => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const elementCenter = rect.top + rect.height / 2
        const viewportCenter = viewportHeight / 2
        const distance = elementCenter - viewportCenter
        setOffset(distance * speed)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [isVisible, speed, prefersReduced])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ''}`}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: prefersReduced ? 'none' : `translateY(${offset}px) scale(1.15)`,
          willChange: prefersReduced ? 'auto' : 'transform',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {overlay && (
        <div className={`absolute inset-0 ${overlay}`} />
      )}
      {children && (
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      )}
    </div>
  )
}
