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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-serif text-lg text-white"
          >
            umbral
          </Link>

          {/* Tab links — underline style */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <ActiveNavLink
                key={link.key}
                href={`/${locale}${link.href}`}
                className="px-4 py-2 text-[13px] text-cloud/50 font-sans font-light border-b-2 border-transparent hover:text-cloud hover:border-cloud/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                activeClassName="px-4 py-2 text-[13px] text-mint font-sans font-normal border-b-2 border-mint transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                {link[locale]}
              </ActiveNavLink>
            ))}
          </div>

          {/* Right side: language + CTA + mobile menu */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${otherLocale}`}
              className="hidden md:inline text-[11px] tracking-[0.12em] uppercase text-cloud/40 hover:text-cloud transition-all duration-500"
            >
              {otherLabel}
            </Link>
            <Link
              href={`/${locale}/portal`}
              className="hidden md:inline-flex group items-center gap-2 pl-5 pr-1.5 py-1.5 text-[12px] tracking-[0.06em] uppercase bg-mint text-deep rounded-full hover:bg-mint/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Portal
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-deep/15 group-hover:translate-x-0.5 transition-transform duration-500">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2"/></svg>
              </span>
            </Link>
            <MobileMenu
              locale={locale}
              otherLocale={otherLocale}
              otherLabel={otherLabel}
              links={links}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
