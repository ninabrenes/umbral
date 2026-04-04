import { type ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  href?: string
}

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-sans font-normal tracking-[0.06em] uppercase rounded-full active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]'

const variants: Record<Variant, string> = {
  primary: 'bg-mint text-deep hover:bg-mint/90',
  secondary: 'text-cloud border border-white/[0.1] hover:bg-white/[0.04]',
  ghost: 'text-cloud/70 hover:text-mint border-b border-white/[0.1] pb-px hover:border-mint/30 rounded-none px-0 py-0',
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${variant !== 'ghost' ? base : ''} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
