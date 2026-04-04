'use client'

import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'

const categoryColors: Record<string, string> = {
  'psilocybin-clinical': '#8EB69B',
  'mdma-therapy': '#8EB69B',
  'integration-frameworks': '#5B9B6B',
  'music-psychedelics': '#9B8B5B',
  'nature-relatedness': '#5B9B6B',
  'mystical-experience': '#7B5B9B',
  safety: '#9B5B6B',
  'harm-reduction': '#9B5B6B',
  neuroscience: '#5B7B9B',
  'indigenous-ethics': '#7B5B9B',
  'set-and-setting': '#5B9B6B',
  'long-term-outcomes': '#5B7B9B',
  // book categories
  science: '#5B7B9B',
  integration: '#5B9B6B',
  contemplative: '#7B5B9B',
  practice: '#9B8B5B',
  indigenous: '#9B5B6B',
}

interface ResearchCardProps {
  title: string
  author: string
  year: number
  type: 'paper' | 'book'
  category?: string
  url?: string
  journal?: string
  summary?: string
}

export function ResearchCard({
  title,
  author,
  year,
  type,
  category,
  url,
  journal,
  summary,
}: ResearchCardProps) {
  const accentColor = category ? categoryColors[category] ?? '#8EB69B' : '#ACDBB8'
  const isBook = type === 'book'

  const cardWidth = isBook ? 'w-[160px] md:w-[180px]' : 'w-[140px] md:w-[160px]'
  const cardHeight = isBook ? 'h-[220px] md:h-[240px]' : 'h-[200px] md:h-[220px]'
  const stripeWidth = isBook ? 'w-[4px]' : 'w-[2px]'

  const Wrapper = url ? 'a' : 'div'
  const linkProps = url
    ? { href: url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...linkProps}
      className={`
        group relative flex-shrink-0 ${cardWidth} ${cardHeight}
        rounded-t-lg overflow-hidden
        transition-transform duration-200 ease-out
        hover:-translate-y-2 focus-visible:-translate-y-2
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage/60
        cursor-pointer
      `}
    >
      {/* colored spine edge */}
      <div
        className={`absolute top-0 left-0 ${stripeWidth} h-full transition-opacity duration-200`}
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${accentColor}15 0%, transparent 40%)`,
        }}
      />

      {/* card face */}
      <div
        className={`
          h-full flex flex-col justify-between p-4 pl-5
          ${isBook ? 'bg-teal/30' : 'bg-teal/20'}
          border border-white/[0.06] border-l-0 rounded-t-lg
        `}
      >
        {/* top: title */}
        <div className="flex-1 overflow-hidden">
          <p className="font-serif text-[13px] md:text-sm font-light leading-[1.35] text-cloud line-clamp-4">
            {title}
          </p>
          {journal && (
            <p className="mt-1.5 text-[10px] text-sage/70 font-sans italic leading-tight line-clamp-1">
              {journal}
            </p>
          )}
        </div>

        {/* bottom: author + year */}
        <div className="mt-2 pt-2 border-t border-white/[0.06]">
          <p className="text-[10px] text-cloud/50 font-sans leading-tight line-clamp-1">
            {author}
          </p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-[10px] text-cloud/30 font-sans tabular-nums">{year}</span>
            {url && (
              <ArrowSquareOut
                size={12}
                weight="bold"
                className="text-cloud/20 group-hover:text-sage transition-colors duration-200"
              />
            )}
          </div>
        </div>
      </div>

      {/* hover tooltip with summary */}
      {summary && (
        <div
          className="
            absolute left-1/2 -translate-x-1/2 bottom-full mb-2
            w-[240px] md:w-[280px] p-3 rounded-lg
            bg-onyx border border-white/[0.1]
            opacity-0 pointer-events-none
            group-hover:opacity-100 group-hover:pointer-events-auto
            transition-opacity duration-200
            z-20 shadow-lg
          "
        >
          <p className="text-[11px] text-cloud/70 font-sans font-light leading-relaxed line-clamp-5">
            {summary}
          </p>
        </div>
      )}
    </Wrapper>
  )
}
