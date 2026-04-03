import { type ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  href?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-mint text-deep hover:bg-mint/90 transition-colors active:scale-[0.98]',
  secondary:
    'border border-glass-border text-cloud hover:bg-glass transition-colors active:scale-[0.98]',
  ghost:
    'text-cloud/70 hover:text-mint transition-colors border-b border-glass-border pb-px hover:border-mint/40',
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
