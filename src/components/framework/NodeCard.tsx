import Link from 'next/link'
import type { FrameworkNode, Locale } from '@/types'
import { NodeIcon } from './NodeIcon'

interface NodeCardProps {
  node: FrameworkNode
  locale: Locale
  index: number
}

const polarityLabel: Record<string, { en: string; es: string }> = {
  masculine: { en: 'masculine', es: 'masculino' },
  feminine: { en: 'feminine', es: 'femenino' },
  both: { en: 'both', es: 'ambos' },
}

export function NodeCard({ node, locale, index }: NodeCardProps) {
  return (
    <Link
      href={`/${locale}/framework/${node.id}`}
      className="group block"
    >
      <div className="flex items-start gap-6">
        <div className="shrink-0 w-12 h-12 flex items-center justify-center text-moss group-hover:text-sage transition-colors">
          <NodeIcon nodeId={node.id} size={36} />
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-xs text-ink-muted/50 font-sans tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[-0.01em] group-hover:text-moss transition-colors">
              {node.name[locale]}
            </h3>
          </div>
          <p className="text-sm text-ink-muted font-light leading-relaxed max-w-[45ch]">
            {node.tagline[locale]}
          </p>
          {node.chakra && (
            <p className="mt-2 text-xs text-ink-muted/40 font-sans">
              {node.chakra.sanskrit} — {polarityLabel[node.polarity][locale]}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
