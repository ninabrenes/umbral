import Link from 'next/link'
import type { Locale } from '@/types'
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-deep/70 backdrop-blur-xl border-b border-white/[0.08] shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)] transition-all duration-300">
      <nav className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-serif text-xl font-light tracking-[-0.01em] text-ivory transition-all duration-300"
        >
          umbral
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              className="text-sm text-ivory/80 hover:text-sage transition-colors duration-200 font-sans font-light"
            >
              {link[locale]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={`/${otherLocale}`}
            className="hidden md:inline text-xs tracking-[0.15em] uppercase text-ivory/80 hover:text-sage transition-colors duration-200 font-sans"
          >
            {otherLabel}
          </Link>
          <Link
            href={`/${locale}/portal`}
            className="hidden md:inline-flex items-center px-5 py-2 text-xs tracking-[0.1em] uppercase bg-sage text-forest-deep rounded-full hover:bg-sage-light transition-colors duration-200"
          >
            Portal
          </Link>
          <MobileMenu
            locale={locale}
            otherLocale={otherLocale}
            otherLabel={otherLabel}
            links={links}
          />
        </div>
      </nav>
    </header>
  )
}
