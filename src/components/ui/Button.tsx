import { type ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  href?: string
}

const variants: Record<Variant, string> = {
  primary:
    'group flex items-center gap-2 pl-7 pr-2 py-2.5 text-sm font-sans tracking-[0.04em] bg-mint text-deep rounded-full hover:bg-mint/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
  secondary:
    'flex items-center gap-2 px-7 py-3 text-sm font-sans tracking-[0.04em] text-cloud border border-white/[0.1] rounded-full hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
  ghost:
    'text-cloud/70 hover:text-mint transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] border-b border-white/[0.1] pb-px hover:border-mint/30',
}

const trailingArrow = (
  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-deep/15 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2"/></svg>
  </span>
)

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'uppercase font-normal'

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
        {variant === 'primary' && trailingArrow}
      </a>
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {variant === 'primary' && trailingArrow}
    </button>
  )
}
