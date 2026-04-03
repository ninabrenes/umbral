interface SectionHeaderProps {
  label?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeader({
  label,
  heading,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  const labelColor = dark ? 'text-sage' : 'text-ink-muted'
  const headingColor = dark ? 'text-ivory' : ''
  const subtitleColor = dark ? 'text-ivory/60' : 'text-ink-muted'

  return (
    <div className={`mb-16 md:mb-24 max-w-2xl ${alignment}`}>
      {label && (
        <p className={`text-xs tracking-[0.2em] uppercase ${labelColor} mb-4 font-sans font-normal`}>
          {label}
        </p>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] ${headingColor}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg ${subtitleColor} font-light leading-relaxed max-w-[55ch]`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
