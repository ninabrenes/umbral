'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ActiveNavLinkProps {
  href: string
  children: React.ReactNode
  className: string
  activeClassName: string
}

export function ActiveNavLink({ href, children, className, activeClassName }: ActiveNavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link href={href} className={isActive ? activeClassName : className}>
      {children}
    </Link>
  )
}
