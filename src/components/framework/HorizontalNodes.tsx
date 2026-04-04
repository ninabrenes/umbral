'use client'

import { useRef } from 'react'
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

  return (
    <div className="relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-forest to-transparent z-10 pointer-events-none" />

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
    </div>
  )
}
