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

// SVG path data for each icon (updated: fruit=compass, canopy=sun horizon)
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
    // Compass — circle with directional lines
    primary: 'M0 -9 A9 9 0 1 0 0 9 A9 9 0 1 0 0 -9',
    secondary: 'M0 -6 L2 -1 L0 6 L-2 -1 Z M-6 0 L-1 -2 L6 0 L-1 2 Z',
  },
  canopy: {
    // Sun horizon — semicircle with rays rising
    primary: 'M-10 4 L10 4 M-8 4 A8 8 0 0 1 8 4',
    secondary: 'M0 -4 L0 -8 M-5.5 -2.5 L-7.5 -5.5 M5.5 -2.5 L7.5 -5.5 M-3 -3.5 L-4 -7 M3 -3.5 L4 -7',
  },
}

// Hexagonal layout: 6 nodes arranged around center
// viewBox is 600x540, center at (300, 255)
const nodePositions: Record<NodeId, { x: number; y: number }> = {
  canopy: { x: 300, y: 70 },
  spore: { x: 510, y: 150 },
  weave: { x: 510, y: 360 },
  ground: { x: 300, y: 440 },
  roots: { x: 90, y: 360 },
  fruit: { x: 90, y: 150 },
}

const CIRCLE_RADIUS = 50
const CIRCLE_RADIUS_ACTIVE = 58

// Generate connections between nodes (hexagonal edges + cross-connections)
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
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy)
  const offsetAmount = len * 0.12
  const cx = mx + (-dy / len) * offsetAmount
  const cy = my + (dx / len) * offsetAmount
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}

let gradientIdCounter = 0
function useGradientId(prefix: string): string {
  return `${prefix}-${++gradientIdCounter}`
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
      return from === activeNode || to === activeNode
    },
    [activeNode],
  )

  return (
    <svg
      viewBox="0 0 600 540"
      className="w-full max-w-[640px] h-auto min-h-[500px]"
      role="img"
      aria-label={
        locale === 'en'
          ? 'The Mycelial Network — 6 interconnected nodes'
          : 'La Red Micelial — 6 nodos interconectados'
      }
      onMouseLeave={() => setActiveNode(null)}
    >
      <defs>
        {/* Gradient definitions for connection lines */}
        {connections.map(({ from, to }) => {
          const p1 = nodePositions[from]
          const p2 = nodePositions[to]
          return (
            <linearGradient
              key={`grad-${from}-${to}`}
              id={`grad-${from}-${to}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={nodeColors[from]} />
              <stop offset="100%" stopColor={nodeColors[to]} />
            </linearGradient>
          )
        })}

        {/* Glow filter for active node */}
        <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* CSS animation for pulsing glow */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.45; }
        }
        .node-pulse {
          animation: pulse-glow 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .node-pulse {
            animation: none;
            opacity: 0.3;
          }
        }
      `}</style>

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
            stroke={active ? `url(#grad-${from}-${to})` : 'oklch(0.45 0.03 150)'}
            strokeWidth={active ? 2.5 : 1.2}
            opacity={dimmed ? 0.05 : active ? 0.6 : 0.15}
            style={{ transition: 'stroke 0.4s cubic-bezier(0.32, 0.72, 0, 1), stroke-width 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1)' }}
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
              r={CIRCLE_RADIUS_ACTIVE + 12}
              fill="transparent"
            />

            {/* pulsing glow ring on active */}
            {isActive && (
              <circle
                className="node-pulse"
                cx={pos.x}
                cy={pos.y}
                r={radius + 12}
                fill="none"
                stroke={color}
                strokeWidth={1.5}
              />
            )}

            {/* outer glow ring on active */}
            {isActive && (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={radius + 6}
                fill="none"
                stroke={color}
                strokeWidth={1}
                opacity={0.3}
                style={{ transition: 'r 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1)' }}
              />
            )}

            {/* background circle */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={radius}
              fill={color}
              fillOpacity={isActive ? 0.18 : 0.08}
              stroke={color}
              strokeWidth={isActive ? 2 : 1.2}
              strokeOpacity={dimmed ? 0.12 : isActive ? 0.75 : 0.3}
              style={{ transition: 'r 0.4s cubic-bezier(0.32, 0.72, 0, 1), fill-opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1), stroke-width 0.4s cubic-bezier(0.32, 0.72, 0, 1), stroke-opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1)' }}
            />

            {/* icon paths */}
            <g
              transform={`translate(${pos.x}, ${pos.y}) scale(${isActive ? 1.15 : 1})`}
              opacity={dimmed ? 0.25 : 1}
              style={{ transition: 'opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1), transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)' }}
            >
              {icon.secondary && (
                <path
                  d={icon.secondary}
                  fill={color}
                  fillOpacity={0.35}
                  stroke="none"
                />
              )}
              <path
                d={icon.primary}
                fill="none"
                stroke={color}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* label */}
            <text
              x={pos.x}
              y={pos.y + CIRCLE_RADIUS_ACTIVE + 24}
              textAnchor="middle"
              fill={isActive ? color : 'oklch(0.55 0.02 150)'}
              fontSize={isActive ? 15 : 14}
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={isActive ? 500 : 400}
              letterSpacing="0.02em"
              opacity={dimmed ? 0.3 : 1}
              style={{ transition: 'fill 0.4s cubic-bezier(0.32, 0.72, 0, 1), font-size 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.4s cubic-bezier(0.32, 0.72, 0, 1)' }}
            >
              {name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
