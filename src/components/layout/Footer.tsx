import Link from 'next/link'
import type { Locale } from '@/types'

interface FooterProps {
  locale: Locale
}

const footerLinks = {
  framework: [
    { key: 'ground', en: 'Ground', es: 'Tierra', href: '/framework/ground' },
    { key: 'roots', en: 'Roots', es: 'Raíces', href: '/framework/roots' },
    { key: 'spore', en: 'Spore', es: 'Espora', href: '/framework/spore' },
    { key: 'weave', en: 'Weave', es: 'Tejido', href: '/framework/weave' },
    { key: 'fruit', en: 'Fruit', es: 'Fruto', href: '/framework/fruit' },
    { key: 'canopy', en: 'Canopy', es: 'Dosel', href: '/framework/canopy' },
  ],
  resources: [
    { key: 'science', en: 'The Science', es: 'La Ciencia', href: '/science' },
    { key: 'safety', en: 'Safety', es: 'Seguridad', href: '/safety' },
    { key: 'blog', en: 'Blog', es: 'Blog', href: '/blog' },
    { key: 'about', en: 'About', es: 'Acerca de', href: '/about' },
  ],
  community: [
    { key: 'github', en: 'GitHub', es: 'GitHub', href: 'https://github.com/ninabrenes/umbral' },
    { key: 'reciprocity', en: 'Indigenous Reciprocity', es: 'Reciprocidad Indígena', href: 'https://chacruna.net/indigenous-reciprocity-initiative/' },
    { key: 'contribute', en: 'Contribute', es: 'Contribuir', href: 'https://github.com/ninabrenes/umbral/issues' },
    { key: 'license', en: 'MIT License', es: 'Licencia MIT', href: 'https://github.com/ninabrenes/umbral/blob/main/LICENSE' },
  ],
} as const

export function Footer({ locale }: FooterProps) {
  const disclaimer =
    locale === 'es'
      ? 'Umbral es una herramienta educativa. No proporciona atención médica, terapia ni servicios profesionales. No alienta ni condona actividades ilegales.'
      : 'Umbral is an educational tool. It does not provide medical care, therapy, or professional services. It does not encourage or condone illegal activities.'

  const copyright =
    locale === 'es'
      ? 'Código abierto bajo licencia MIT'
      : 'Open source under MIT license'

  return (
    <footer className="bg-onyx text-cloud/50 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-light text-white mb-4">
              umbral
            </p>
            <p className="text-sm font-light leading-relaxed max-w-[40ch] text-cloud/40">
              {locale === 'en'
                ? 'preparation. experience. integration. the network that connects it all.'
                : 'preparación. experiencia. integración. la red que lo conecta todo.'}
            </p>
          </div>

          {/* Framework */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.15em] uppercase text-cloud/30 mb-5">
              {locale === 'en' ? 'The Framework' : 'El Marco'}
            </p>
            <ul className="space-y-3">
              {footerLinks.framework.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm font-light hover:text-mint transition-colors"
                  >
                    {link[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.15em] uppercase text-cloud/30 mb-5">
              {locale === 'en' ? 'Resources' : 'Recursos'}
            </p>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm font-light hover:text-mint transition-colors"
                  >
                    {link[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.15em] uppercase text-cloud/30 mb-5">
              {locale === 'en' ? 'Community' : 'Comunidad'}
            </p>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light hover:text-mint transition-colors"
                  >
                    {link[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 pt-8 border-t border-glass-border">
          <p className="text-xs text-cloud/30 font-light leading-relaxed max-w-[80ch]">
            {disclaimer}
          </p>
          <p className="mt-4 text-xs text-cloud/20 font-light">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
