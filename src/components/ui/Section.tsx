import { type ComponentProps } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  spacing?: 'default' | 'lg' | 'none'
  dark?: boolean
}

const spacingMap = {
  default: 'py-[var(--space-section)]',
  lg: 'py-[var(--space-section-lg)]',
  none: '',
}

export function Section({
  spacing = 'default',
  dark = false,
  className = '',
  children,
  ...props
}: SectionProps) {
  const darkClasses = dark ? 'bg-forest-deep text-ivory' : ''

  return (
    <section
      className={`${spacingMap[spacing]} ${darkClasses} ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  )
}
