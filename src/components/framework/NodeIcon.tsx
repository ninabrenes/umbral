import { Mountains, Plant, Eye, UsersThree, Compass, SunHorizon } from '@phosphor-icons/react/dist/ssr'
import type { NodeId } from '@/types'
import type { Icon } from '@phosphor-icons/react/dist/lib/types'

const nodeIcons: Record<NodeId, Icon> = {
  ground: Mountains,
  roots: Plant,
  spore: Eye,
  weave: UsersThree,
  fruit: Compass,
  canopy: SunHorizon,
}

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
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export function NodeIcon({
  nodeId,
  size = 32,
  className = '',
  useNodeColor = false,
  weight = 'duotone',
}: NodeIconProps) {
  const colorClass = useNodeColor ? nodeColorClasses[nodeId] : ''
  const IconComponent = nodeIcons[nodeId]

  return (
    <IconComponent
      size={size}
      weight={weight}
      className={`${colorClass} ${className}`.trim()}
    />
  )
}
