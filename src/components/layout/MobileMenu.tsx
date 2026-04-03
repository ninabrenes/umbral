'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/types'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  locale: Locale
  otherLocale: Locale
  otherLabel: string
  links: ReadonlyArray<{
    key: string
    en: string
    es: string
    href: string
  }>
}

export function MobileMenu({ locale, otherLocale, otherLabel, links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="p-2 -mr-2 text-ink hover:text-ink-muted transition-colors"
      >
        {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-cream">
          <nav className="px-6 py-8 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-serif font-light text-ink border-b border-ink/[0.06] transition-colors hover:text-moss"
              >
                {link[locale]}
              </Link>
            ))}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={`/${otherLocale}`}
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.15em] uppercase text-ink-muted hover:text-ink transition-colors"
              >
                {otherLabel}
              </Link>
              <Link
                href={`/${locale}/portal`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-5 py-2.5 text-xs tracking-[0.1em] uppercase bg-forest-deep text-ivory rounded-full hover:bg-forest transition-colors"
              >
                Portal
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
