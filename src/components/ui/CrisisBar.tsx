import { crisisResources } from '@/content/safety/crisis-resources'
import type { Locale } from '@/types'
import { Phone } from 'lucide-react'

interface CrisisBarProps {
  locale: Locale
}

export function CrisisBar({ locale }: CrisisBarProps) {
  const resources = crisisResources.filter((r) => r.locales.includes(locale))
  const label = locale === 'es' ? 'Apoyo' : 'Support'

  return (
    <div
      role="complementary"
      aria-label={locale === 'es' ? 'Recursos de crisis' : 'Crisis resources'}
      className="fixed bottom-0 left-0 right-0 z-40 bg-deep backdrop-blur-xl text-crisis-text"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-2 flex items-center gap-3 overflow-x-auto scrollbar-none">
        <span className="shrink-0 text-[10px] tracking-[0.15em] uppercase text-crisis-accent font-sans flex items-center gap-1.5">
          <Phone size={11} strokeWidth={1.5} />
          {label}
        </span>
        <span className="shrink-0 w-px h-3 bg-white/10" />
        {resources.map((resource, i) => (
          <a
            key={resource.contact}
            href={resource.href}
            className="shrink-0 inline-flex items-center gap-1.5 text-[11px] text-crisis-text/60 hover:text-crisis-text transition-colors"
          >
            <span className="font-sans font-light hidden sm:inline text-cloud/70">
              {resource.name[locale]}
            </span>
            <span className="text-crisis-accent font-medium">
              {resource.contact}
            </span>
            {i < resources.length - 1 && (
              <span className="text-white/10 ml-1.5">·</span>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
