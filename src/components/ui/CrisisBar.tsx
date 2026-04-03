import { crisisResources } from '@/content/safety/crisis-resources'
import type { Locale } from '@/types'
import { Phone } from 'lucide-react'

interface CrisisBarProps {
  locale: Locale
}

export function CrisisBar({ locale }: CrisisBarProps) {
  const resources = crisisResources.filter((r) => r.locales.includes(locale))
  const label = locale === 'es' ? 'Apoyo ahora' : 'Support now'

  return (
    <div
      role="complementary"
      aria-label={locale === 'es' ? 'Recursos de crisis' : 'Crisis resources'}
      className="fixed bottom-0 left-0 right-0 z-40 bg-crisis-bg text-crisis-text border-t border-white/10"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-2.5 flex items-center gap-4 overflow-x-auto">
        <span className="shrink-0 text-xs tracking-[0.15em] uppercase text-crisis-accent font-sans font-normal flex items-center gap-2">
          <Phone size={13} strokeWidth={1.5} />
          {label}
        </span>
        <div className="flex items-center gap-3 text-sm">
          {resources.map((resource) => (
            <a
              key={resource.contact}
              href={resource.href}
              className="shrink-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-crisis-text/80 hover:text-crisis-text hover:border-crisis-accent/40 transition-colors"
            >
              <span className="font-sans font-light">
                {resource.name[locale]}
              </span>
              <span className="text-crisis-accent font-normal">
                {resource.contact}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
