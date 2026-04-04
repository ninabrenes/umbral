import Link from 'next/link'
import type { Locale } from '@/types'
import { ActiveNavLink } from './ActiveNavLink'
import { MobileMenu } from './MobileMenu'

interface NavProps {
  locale: Locale
}

const links = [
  { key: 'framework', en: 'The Framework', es: 'El Marco', href: '/framework' },
  { key: 'science', en: 'Science', es: 'Ciencia', href: '/science' },
  { key: 'safety', en: 'Safety', es: 'Seguridad', href: '/safety' },
  { key: 'blog', en: 'Blog', es: 'Blog', href: '/blog' },
  { key: 'about', en: 'About', es: 'Acerca de', href: '/about' },
] as const

export function Nav({ locale }: NavProps) {
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en'
  const otherLabel = locale === 'en' ? 'ES' : 'EN'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav className="flex items-center gap-1 px-2 py-2 rounded-full bg-deep/70 backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] w-max transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="px-4 py-2 font-serif text-lg font-light text-white"
        >
          umbral
        </Link>

        {/* Divider */}
        <span className="w-px h-5 bg-white/[0.08]" />

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <ActiveNavLink
              key={link.key}
              href={`/${locale}${link.href}`}
              className="px-3 py-1.5 text-[13px] text-cloud/60 hover:text-cloud rounded-full hover:bg-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] font-sans font-light"
              activeClassName="px-3 py-1.5 text-[13px] text-mint font-sans font-normal bg-white/[0.06] rounded-full"
            >
              {link[locale]}
            </ActiveNavLink>
          ))}
        </div>

        {/* Divider */}
        <span className="hidden md:block w-px h-5 bg-white/[0.08]" />

        {/* Language + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href={`/${otherLocale}`}
            className="px-2 py-1.5 text-[11px] tracking-[0.12em] uppercase text-cloud/50 hover:text-cloud rounded-full hover:bg-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            {otherLabel}
          </Link>
          {/* Button-in-Button CTA */}
          <Link
            href={`/${locale}/portal`}
            className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-[12px] tracking-[0.08em] uppercase bg-mint text-deep rounded-full hover:bg-mint/90 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            Portal
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-deep/15 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2"/></svg>
            </span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <MobileMenu
          locale={locale}
          otherLocale={otherLocale}
          otherLabel={otherLabel}
          links={links}
        />
      </nav>
    </header>
  )
}
