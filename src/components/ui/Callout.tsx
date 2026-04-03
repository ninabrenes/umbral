interface CalloutProps {
  quote: string
  attribution?: string
  variant?: 'default' | 'forest'
}

export function Callout({
  quote,
  attribution,
  variant = 'default',
}: CalloutProps) {
  const textColor =
    variant === 'forest' ? 'text-ivory/70' : 'text-ink/70'
  const lineColor =
    variant === 'forest' ? 'border-ivory/10' : 'border-ink/10'
  const attrColor =
    variant === 'forest' ? 'text-ivory/40' : 'text-ink-muted'

  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
      <div
        className={`py-[var(--space-section)] border-t border-b ${lineColor}`}
      >
        <blockquote className="max-w-3xl mx-auto text-center">
          <p
            className={`font-serif italic text-2xl sm:text-3xl md:text-4xl font-light leading-[1.3] tracking-[-0.01em] ${textColor}`}
          >
            {quote}
          </p>
          {attribution && (
            <footer
              className={`mt-6 text-xs tracking-[0.2em] uppercase font-sans ${attrColor}`}
            >
              {attribution}
            </footer>
          )}
        </blockquote>
      </div>
    </div>
  )
}
