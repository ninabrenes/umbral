'use client'

import { useState, useCallback } from 'react'
import type { Locale, NodeId } from '@/types'

const nodeColors: Record<NodeId, string> = {
  ground: 'oklch(0.55 0.06 45)',
  roots: 'oklch(0.50 0.07 155)',
  spore: 'oklch(0.55 0.06 280)',
  weave: 'oklch(0.55 0.08 25)',
  fruit: 'oklch(0.58 0.10 85)',
  canopy: 'oklch(0.50 0.05 230)',
}

const nodeNames: Record<NodeId, { en: string; es: string }> = {
  ground: { en: 'Ground', es: 'Tierra' },
  roots: { en: 'Roots', es: 'Raíces' },
  spore: { en: 'Spore', es: 'Espora' },
  weave: { en: 'Weave', es: 'Tejido' },
  fruit: { en: 'Fruit', es: 'Fruto' },
  canopy: { en: 'Canopy', es: 'Dosel' },
}

// SVG path data for each Phosphor icon (duotone style, simplified)
// These are minimal representations for use inside the SVG diagram
const nodeIconPaths: Record<NodeId, { primary: string; secondary: string }> = {
  ground: {
    // Mountains
    primary: 'M-10 6 L-4 -4 L0 0 L4 -6 L10 6 Z',
    secondary: 'M-4 -4 L0 0 L4 -6',
  },
  roots: {
    // Plant / leaf
    primary: 'M0 8 L0 -2 C0 -8 -8 -8 -8 -2 C-8 4 0 8 0 -2 M0 -2 C0 -8 8 -8 8 -2 C8 4 0 8 0 -2',
    secondary: 'M0 8 L0 -2',
  },
  spore: {
    // Eye
    primary: 'M-10 0 C-6 -5 -2 -7 0 -7 C2 -7 6 -5 10 0 C6 5 2 7 0 7 C-2 7 -6 5 -10 0 Z',
    secondary: 'M-3 0 A3 3 0 1 0 3 0 A3 3 0 1 0 -3 0',
  },
  weave: {
    // Three people (simplified)
    primary: 'M0 -6 A3 3 0 1 0 0 0 A3 3 0 1 0 0 -6 M-5 7 C-5 3 -2 1 0 1 C2 1 5 3 5 7',
    secondary: 'M-8 -4 A2 2 0 1 0 -4 -4 M8 -4 A2 2 0 1 0 4 -4',
  },
  fruit: {
    // Target / crosshair
    primary: 'M0 -9 A9 9 0 1 0 0 9 A9 9 0 1 0 0 -9 M0 -5 A5 5 0 1 0 0 5 A5 5 0 1 0 0 -5',
    secondary: 'M0 -2 A2 2 0 1 0 0 2 A2 2 0 1 0 0 -2',
  },
  canopy: {
    // Sparkle / four-pointed star
    primary: 'M0 -10 C1 -4 4 -1 10 0 C4 1 1 4 0 10 C-1 4 -4 1 -10 0 C-4 -1 -1 -4 0 -10 Z',
    secondary: '',
  },
}

// Hexagonal layout: 6 nodes arranged around center
// viewBox is 600x500, center at (300, 240)
const nodePositions: Record<NodeId, { x: number; y: number }> = {
  canopy: { x: 300, y: 60 },    // top center
  spore: { x: 510, y: 135 },    // top right
  weave: { x: 510, y: 345 },    // bottom right
  ground: { x: 300, y: 420 },   // bottom center
  roots: { x: 90, y: 345 },     // bottom left
  fruit: { x: 90, y: 135 },     // top left
}

const CIRCLE_RADIUS = 42
const CIRCLE_RADIUS_ACTIVE = 48

// Generate connections between nodes (hexagonal edges + some cross-connections)
function getConnections(): Array<{ from: NodeId; to: NodeId }> {
  return [
    // hexagonal edges
    { from: 'canopy', to: 'spore' },
    { from: 'spore', to: 'weave' },
    { from: 'weave', to: 'ground' },
    { from: 'ground', to: 'roots' },
    { from: 'roots', to: 'fruit' },
    { from: 'fruit', to: 'canopy' },
    // cross-connections (mycelial network feel)
    { from: 'canopy', to: 'ground' },
    { from: 'spore', to: 'roots' },
    { from: 'fruit', to: 'weave' },
  ]
}

function getCurvedPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): string {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  // offset the control point perpendicular to the line for organic feel
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy)
  const offsetAmount = len * 0.12
  const cx = mx + (-dy / len) * offsetAmount
  const cy = my + (dx / len) * offsetAmount
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}

interface NetworkDiagramProps {
  locale: Locale
}

export function NetworkDiagram({ locale }: NetworkDiagramProps) {
  const connections = getConnections()
  const nodeIds: NodeId[] = ['ground', 'roots', 'spore', 'weave', 'fruit', 'canopy']
  const [activeNode, setActiveNode] = useState<NodeId | null>(null)

  const isConnected = useCallback(
    (nodeId: NodeId): boolean => {
      if (!activeNode) return false
      if (nodeId === activeNode) return true
      return connections.some(
        ({ from, to }) =>
          (from === activeNode && to === nodeId) ||
          (to === activeNode && from === nodeId),
      )
    },
    [activeNode, connections],
  )

  const isConnectionActive = useCallback(
    (from: NodeId, to: NodeId): boolean => {
      if (!activeNode) return false
      return (
        from === activeNode ||
        to === activeNode
      )
    },
    [activeNode],
  )

  return (
    <svg
      viewBox="0 0 600 500"
      className="w-full max-w-[600px] h-auto"
      role="img"
      aria-label={
        locale === 'en'
          ? 'The Mycelial Network — 6 interconnected nodes'
          : 'La Red Micelial — 6 nodos interconectados'
      }
      onMouseLeave={() => setActiveNode(null)}
    >
      {/* ── connections ── */}
      {connections.map(({ from, to }) => {
        const p1 = nodePositions[from]
        const p2 = nodePositions[to]
        const active = isConnectionActive(from, to)
        const dimmed = activeNode !== null && !active

        return (
          <path
            key={`${from}-${to}`}
            d={getCurvedPath(p1.x, p1.y, p2.x, p2.y)}
            fill="none"
            stroke={active ? nodeColors[activeNode!] : 'oklch(0.45 0.03 150)'}
            strokeWidth={active ? 2 : 1}
            opacity={dimmed ? 0.06 : active ? 0.55 : 0.18}
            style={{ transition: 'stroke 0.2s, stroke-width 0.2s, opacity 0.2s' }}
          />
        )
      })}

      {/* ── nodes ── */}
      {nodeIds.map((id) => {
        const pos = nodePositions[id]
        const color = nodeColors[id]
        const name = nodeNames[id][locale]
        const icon = nodeIconPaths[id]
        const isActive = id === activeNode
        const connected = isConnected(id)
        const dimmed = activeNode !== null && !connected

        const radius = isActive ? CIRCLE_RADIUS_ACTIVE : CIRCLE_RADIUS

        return (
          <g
            key={id}
            onMouseEnter={() => setActiveNode(id)}
            style={{ cursor: 'pointer' }}
          >
            {/* hover target — invisible larger circle for easier interaction */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={CIRCLE_RADIUS_ACTIVE + 8}
              fill="transparent"
            />

            {/* glow ring on active */}
            {isActive && (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={radius + 6}
                fill="none"
                stroke={color}
                strokeWidth={1}
                opacity={0.25}
                style={{ transition: 'r 0.2s, opacity 0.2s' }}
              />
            )}

            {/* background circle */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={radius}
              fill={color}
              fillOpacity={isActive ? 0.15 : 0.08}
              stroke={color}
              strokeWidth={isActive ? 1.8 : 1.2}
              strokeOpacity={dimmed ? 0.15 : isActive ? 0.7 : 0.35}
              style={{ transition: 'r 0.2s, fill-opacity 0.2s, stroke-width 0.2s, stroke-opacity 0.2s' }}
            />

            {/* icon paths */}
            <g
              transform={`translate(${pos.x}, ${pos.y})`}
              opacity={dimmed ? 0.3 : 1}
              style={{ transition: 'opacity 0.2s' }}
            >
              {icon.secondary && (
                <path
                  d={icon.secondary}
                  fill={color}
                  fillOpacity={0.3}
                  stroke="none"
                />
              )}
              <path
                d={icon.primary}
                fill="none"
                stroke={color}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* label */}
            <text
              x={pos.x}
              y={pos.y + CIRCLE_RADIUS_ACTIVE + 20}
              textAnchor="middle"
              fill={isActive ? color : 'oklch(0.45 0.02 150)'}
              fontSize={isActive ? 14 : 13}
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={isActive ? 500 : 400}
              opacity={dimmed ? 0.35 : 1}
              style={{ transition: 'fill 0.2s, font-size 0.2s, opacity 0.2s' }}
            >
              {name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
