import Link from 'next/link'
import type { FrameworkNode, Locale, NodeId } from '@/types'
import { NodeIcon } from './NodeIcon'

const nodeBorderColors: Record<NodeId, string> = {
  ground: 'group-hover:border-l-node-ground',
  roots: 'group-hover:border-l-node-roots',
  spore: 'group-hover:border-l-node-spore',
  weave: 'group-hover:border-l-node-weave',
  fruit: 'group-hover:border-l-node-fruit',
  canopy: 'group-hover:border-l-node-canopy',
}

interface NodeCardProps {
  node: FrameworkNode
  locale: Locale
  index: number
}

export function NodeCard({ node, locale, index }: NodeCardProps) {
  return (
    <Link
      href={`/${locale}/framework/${node.id}`}
      className={`group block py-6 border-b border-ink/[0.06] last:border-b-0 border-l-2 border-l-transparent pl-4 -ml-4 transition-all duration-200 ${nodeBorderColors[node.id]}`}
    >
      <div className="flex items-start gap-5">
        <div className="shrink-0 mt-1 transition-colors">
          <NodeIcon nodeId={node.id} size={28} useNodeColor />
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-3 mb-1.5">
            <span className="text-[11px] text-ink-muted/40 font-sans tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-2xl font-light tracking-[-0.01em] group-hover:text-moss transition-colors">
              {node.name[locale]}
            </h3>
          </div>
          <p className="text-sm text-ink-muted/70 font-light leading-relaxed">
            {node.tagline[locale]}
          </p>
        </div>
      </div>
    </Link>
  )
}
