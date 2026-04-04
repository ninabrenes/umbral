import { type ComponentProps } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  spacing?: 'default' | 'lg' | 'none'
  dark?: boolean
}

const spacingMap = {
  default: 'py-24 md:py-32',
  lg: 'py-32 md:py-40',
  none: '',
}

export function Section({
  spacing = 'default',
  dark = false,
  className = '',
  children,
  ...props
}: SectionProps) {
  const darkClasses = dark ? 'bg-forest' : ''

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
