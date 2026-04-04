import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { legalJurisdictions } from '@/content/safety/legal-status'
import type { Locale, LegalJurisdiction } from '@/types'

const statusColors: Record<LegalJurisdiction['status'], string> = {
  legal: 'bg-sage/20 text-sage border border-sage/30',
  decriminalized: 'bg-mint/20 text-mint border border-mint/30',
  medical: 'bg-teal text-cloud border border-teal/30',
  illegal: 'bg-crisis-accent/20 text-crisis-accent border border-crisis-accent/30',
  'gray-area': 'bg-cloud/10 text-cloud/60 border border-white/[0.04]',
}

const statusLabels: Record<LegalJurisdiction['status'], { en: string; es: string }> = {
  legal: { en: 'Legal', es: 'Legal' },
  decriminalized: { en: 'Decriminalized', es: 'Despenalizado' },
  medical: { en: 'Medical', es: 'Médico' },
  illegal: { en: 'Illegal', es: 'Ilegal' },
  'gray-area': { en: 'Gray Area', es: 'Zona Gris' },
}

const content = {
  en: {
    hero: {
      label: 'Legal landscape',
      heading: 'laws vary.\nknowledge protects.',
      subtitle:
        'Legal status differs dramatically across jurisdictions and is changing rapidly. Educational overview only.',
    },
    disclaimer:
      'This is not legal advice. Umbral does not encourage or facilitate illegal activities. Laws change. Enforcement varies. Always verify current status in your jurisdiction through official sources or qualified legal counsel.',
    jurisdictions: {
      label: 'By jurisdiction',
      heading: 'A changing map.',
      subtitle:
        'Selected jurisdictions with notable legal frameworks. Not exhaustive. Last reviewed: early 2026.',
    },
  },
  es: {
    hero: {
      label: 'Panorama legal',
      heading: 'las leyes varían.\nel conocimiento protege.',
      subtitle:
        'El estado legal difiere dramáticamente entre jurisdicciones y cambia rápidamente. Solo con fines educativos.',
    },
    disclaimer:
      'Esto no es asesoramiento legal. Umbral no fomenta ni facilita actividades ilegales. Las leyes cambian. La aplicación varía. Siempre verifica el estado actual en tu jurisdicción a través de fuentes oficiales o asesoría legal calificada.',
    jurisdictions: {
      label: 'Por jurisdicción',
      heading: 'Un mapa cambiante.',
      subtitle:
        'Jurisdicciones seleccionadas con marcos legales notables. No exhaustiva. Última revisión: principios de 2026.',
    },
  },
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]
  const lang = locale as Locale

  return (
    <>
      {/* ── 1. HERO + DISCLAIMER ── */}
      <Section spacing="none" className="min-h-[60dvh] flex items-center">
        <div className="py-32 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
                {t.hero.label}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-white">
                {t.hero.heading}
              </h1>
              <p className="mt-8 text-xl text-cloud/60 font-light leading-relaxed max-w-[50ch]">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-16">
              <div className="border-l-2 border-moss pl-6">
                <p className="text-base text-cloud/70 font-light leading-relaxed">
                  {t.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. JURISDICTIONS ── */}
      <Section spacing="lg" className="bg-forest">
        <SectionHeader
          label={t.jurisdictions.label}
          heading={t.jurisdictions.heading}
          subtitle={t.jurisdictions.subtitle}
        />
        <div className="space-y-0 border-t border-white/[0.06]">
          {legalJurisdictions.map((jurisdiction) => (
            <div
              key={jurisdiction.country}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-white/[0.06] px-4 md:px-6"
            >
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-light tracking-[-0.01em] text-white">
                  {jurisdiction.country}
                </h3>
              </div>
              <div className="md:col-span-2">
                <span
                  className={`inline-block px-3 py-1 text-xs tracking-[0.1em] uppercase rounded-full font-sans ${statusColors[jurisdiction.status]}`}
                >
                  {statusLabels[jurisdiction.status][lang]}
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="text-cloud/70 font-light leading-relaxed">
                  {jurisdiction.notes[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
