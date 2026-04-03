import { type ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  href?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-forest-deep text-ivory hover:bg-forest transition-colors active:scale-[0.98]',
  secondary:
    'border border-ink/15 text-ink hover:bg-ink/5 transition-colors active:scale-[0.98]',
  ghost:
    'text-ink-muted hover:text-ink transition-colors',
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-7 py-3 text-sm tracking-[0.08em] uppercase font-sans font-normal rounded-full transition-transform duration-150'

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
