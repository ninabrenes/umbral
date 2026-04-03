interface SectionHeaderProps {
  label?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  heading,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-16 md:mb-24 max-w-2xl ${alignment}`}>
      {label && (
        <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4 font-sans font-normal">
          {label}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em]">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-ink-muted font-light leading-relaxed max-w-[55ch]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
