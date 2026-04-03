import { type ComponentProps } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  spacing?: 'default' | 'lg' | 'none'
  dark?: boolean
  glass?: boolean
}

const spacingMap = {
  default: 'py-[var(--space-section)]',
  lg: 'py-[var(--space-section-lg)]',
  none: '',
}

export function Section({
  spacing = 'default',
  dark = false,
  glass = false,
  className = '',
  children,
  ...props
}: SectionProps) {
  const darkClasses = dark ? 'bg-forest' : ''
  const glassClasses = glass
    ? 'bg-glass backdrop-blur-xl border border-glass-border rounded-[var(--radius-glass)]'
    : ''

  return (
    <section
      className={`${spacingMap[spacing]} ${darkClasses} ${glassClasses} ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  )
}
