interface CalloutProps {
  quote: string
  attribution?: string
}

export function Callout({
  quote,
  attribution,
}: CalloutProps) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
      <div
        className="py-[var(--space-section)] border-t border-b border-white/[0.06]"
      >
        <blockquote className="max-w-3xl mx-auto text-center">
          <p
            className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-light leading-[1.3] tracking-[-0.01em] text-cloud/70"
          >
            {quote}
          </p>
          {attribution && (
            <footer
              className="mt-6 text-xs tracking-[0.2em] uppercase font-sans text-cloud/40"
            >
              {attribution}
            </footer>
          )}
        </blockquote>
      </div>
    </div>
  )
}
