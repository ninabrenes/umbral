'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NodeIcon } from './NodeIcon'
import { nodeImages } from '@/content/framework/images'
import type { FrameworkNode, Locale } from '@/types'

interface HorizontalNodesProps {
  nodes: FrameworkNode[]
  locale: Locale
}

export function HorizontalNodes({ nodes, locale }: HorizontalNodesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [updateScrollState])

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-forest to-transparent z-10 pointer-events-none" />

      {/* Left arrow button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label={locale === 'es' ? 'Desplazar a la izquierda' : 'Scroll left'}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-forest/80 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-cloud/60 hover:text-white hover:bg-forest transition-colors duration-200"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 md:px-12 lg:px-20 py-4"
      >
        {nodes.map((node) => (
          <Link
            key={node.id}
            href={`/${locale}/framework/${node.id}`}
            className="snap-start shrink-0 relative w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden group"
          >
            <Image
              src={nodeImages[node.id].src}
              alt={nodeImages[node.id].alt[locale]}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <NodeIcon nodeId={node.id} size={24} useNodeColor weight="duotone" />
              <h3 className="font-serif text-xl text-white mt-3">
                {node.name[locale]}
              </h3>
              <p className="text-sm text-cloud/50 mt-1 font-light">
                {node.tagline[locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-forest to-transparent z-10 pointer-events-none" />

      {/* Right arrow button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          aria-label={locale === 'es' ? 'Desplazar a la derecha' : 'Scroll right'}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-forest/80 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-cloud/60 hover:text-white hover:bg-forest transition-colors duration-200"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      )}

      {/* Scroll hint */}
      <p className="text-cloud/30 text-xs font-sans mt-3 px-6 md:px-12 lg:px-20">
        <span className="inline-flex items-center gap-1">
          {locale === 'es' ? 'Desliza para explorar' : 'Scroll to explore'}{' '}
          <span className="text-mint">&rarr;</span>
        </span>
      </p>
    </div>
  )
}
