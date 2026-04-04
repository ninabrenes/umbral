'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true))
    }
  }, [open])

  function handleClose() {
    setVisible(false)
    setTimeout(() => setOpen(false), 200)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          if (open) {
            handleClose()
          } else {
            setOpen(true)
          }
        }}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="p-2 -mr-2 text-cloud hover:text-cloud/60 transition-colors duration-200"
      >
        {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-deep/95 backdrop-blur-xl transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <nav className="px-6 py-8 flex flex-col gap-1">
            {links.map((link) => {
              const fullHref = `/${locale}${link.href}`
              const isActive = pathname === fullHref

              return (
                <Link
                  key={link.key}
                  href={fullHref}
                  onClick={handleClose}
                  className={`py-3 text-lg font-serif border-b border-white/[0.08] transition-colors duration-200 ${
                    isActive
                      ? 'text-mint font-normal'
                      : 'font-light text-cloud/80 hover:text-mint'
                  }`}
                >
                  {link[locale]}
                </Link>
              )
            })}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={`/${otherLocale}`}
                onClick={handleClose}
                className="text-xs tracking-[0.15em] uppercase text-cloud/60 hover:text-mint transition-colors duration-200"
              >
                {otherLabel}
              </Link>
              <Link
                href={`/${locale}/portal`}
                onClick={handleClose}
                className="inline-flex items-center px-5 py-2.5 text-xs tracking-[0.1em] uppercase bg-mint text-deep rounded-full hover:bg-mint/80 transition-colors duration-200"
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
