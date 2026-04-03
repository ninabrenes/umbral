import type { NodeId } from '@/types'

const nodeColorClasses: Record<NodeId, string> = {
  ground: 'text-node-ground',
  roots: 'text-node-roots',
  spore: 'text-node-spore',
  weave: 'text-node-weave',
  fruit: 'text-node-fruit',
  canopy: 'text-node-canopy',
}

interface NodeIconProps {
  nodeId: NodeId
  size?: number
  className?: string
  useNodeColor?: boolean
}

export function NodeIcon({ nodeId, size = 32, className = '', useNodeColor = false }: NodeIconProps) {
  const colorClass = useNodeColor ? nodeColorClasses[nodeId] : ''
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: `${colorClass} ${className}`.trim(),
  }

  switch (nodeId) {
    case 'ground':
      return (
        <svg {...props}>
          <circle cx="16" cy="24" r="6" stroke="currentColor" strokeWidth="1.2" />
          <line x1="16" y1="18" x2="16" y2="6" stroke="currentColor" strokeWidth="1.2" />
          <line x1="12" y1="10" x2="16" y2="6" stroke="currentColor" strokeWidth="1.2" />
          <line x1="20" y1="10" x2="16" y2="6" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'roots':
      return (
        <svg {...props}>
          <path d="M16 4 C16 4 8 14 8 20 C8 24.4 11.6 28 16 28 C20.4 28 24 24.4 24 20 C24 14 16 4 16 4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      )
    case 'spore':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        </svg>
      )
    case 'weave':
      return (
        <svg {...props}>
          <path d="M6 16 Q16 6 26 16 Q16 26 6 16Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M16 6 Q26 16 16 26 Q6 16 16 6Z" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'fruit':
      return (
        <svg {...props}>
          <polygon points="16,4 28,24 4,24" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
          <line x1="16" y1="14" x2="16" y2="24" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'canopy':
      return (
        <svg {...props}>
          <path d="M4 28 Q4 8 16 4 Q28 8 28 28" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M10 28 Q10 14 16 10 Q22 14 22 28" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
      )
  }
}
