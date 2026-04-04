'use client'

import { useRef, useCallback } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'motion/react'
import Link from 'next/link'
import { Mountains, Plant, Eye, UsersThree, Target, Sparkle } from '@phosphor-icons/react'
import type { FrameworkNode, Locale, NodeId } from '@/types'
import type { Icon } from '@phosphor-icons/react'

const nodeIcons: Record<NodeId, Icon> = {
  ground: Mountains,
  roots: Plant,
  spore: Eye,
  weave: UsersThree,
  fruit: Target,
  canopy: Sparkle,
}

const nodeAccentColors: Record<NodeId, string> = {
  ground: 'oklch(0.55 0.06 45)',
  roots: 'oklch(0.50 0.07 155)',
  spore: 'oklch(0.55 0.06 280)',
  weave: 'oklch(0.55 0.08 25)',
  fruit: 'oklch(0.58 0.10 85)',
  canopy: 'oklch(0.50 0.05 230)',
}

const nodeBorderColors: Record<NodeId, string> = {
  ground: 'group-hover:border-node-ground/30',
  roots: 'group-hover:border-node-roots/30',
  spore: 'group-hover:border-node-spore/30',
  weave: 'group-hover:border-node-weave/30',
  fruit: 'group-hover:border-node-fruit/30',
  canopy: 'group-hover:border-node-canopy/30',
}

const nodeTextColors: Record<NodeId, string> = {
  ground: 'text-node-ground',
  roots: 'text-node-roots',
  spore: 'text-node-spore',
  weave: 'text-node-weave',
  fruit: 'text-node-fruit',
  canopy: 'text-node-canopy',
}

interface InteractiveNodeProps {
  node: FrameworkNode
  locale: Locale
  index: number
  href: string
}

export function InteractiveNode({ node, locale, index, href }: InteractiveNodeProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rawRotateX = useTransform(mouseY, [0, 1], [6, -6])
  const rawRotateY = useTransform(mouseX, [0, 1], [-6, 6])

  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 20 })

  const accentColor = nodeAccentColors[node.id]
  const IconComponent = nodeIcons[node.id]

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    },
    [mouseX, mouseY, prefersReducedMotion],
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])

  return (
    <Link href={href} className="group block">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          prefersReducedMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 800,
                transformStyle: 'preserve-3d' as const,
              }
        }
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                boxShadow: `0 0 30px 2px ${accentColor.replace(')', ' / 0.15)')}`,
              }
        }
        transition={{ duration: 0.2 }}
        className={`relative bg-teal/50 hover:bg-teal/50 border border-white/[0.04] rounded-2xl ${nodeBorderColors[node.id]} p-6 sm:p-8 transition-colors duration-200`}
      >
        {/* index number */}
        <span className="absolute top-4 right-5 text-[11px] text-cloud/20 font-sans tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* icon */}
        <div className={`mb-5 ${nodeTextColors[node.id]} transition-transform duration-200 group-hover:scale-110 origin-left`}>
          <IconComponent size={36} weight="duotone" />
        </div>

        {/* name */}
        <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-[-0.01em] mb-2 text-white group-hover:text-mint transition-colors duration-200">
          {node.name[locale]}
        </h3>

        {/* tagline */}
        <p className="text-sm text-cloud/60 font-light leading-relaxed">
          {node.tagline[locale]}
        </p>

        {/* bottom accent line */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>
    </Link>
  )
}
