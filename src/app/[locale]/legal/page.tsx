import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { legalJurisdictions } from '@/content/safety/legal-status'
import type { Locale, LegalJurisdiction } from '@/types'

const statusColors: Record<LegalJurisdiction['status'], string> = {
  legal: 'bg-sage/20 text-sage border border-sage/30',
  decriminalized: 'bg-gold/10 text-gold border border-gold/30',
  medical: 'bg-moss/15 text-moss border border-moss/30',
  illegal: 'bg-white/[0.04] text-cloud/60 border border-white/[0.08]',
  'gray-area': 'bg-white/[0.04] text-cloud/60 border border-white/[0.08]',
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
    disclaimer: {
      heading: 'Important disclaimer',
      body: 'Umbral does not encourage or facilitate illegal activities. Laws change. Enforcement varies. Always verify current status in your jurisdiction.',
      emphasis:
        'This is not legal advice. Consult a qualified attorney in your jurisdiction.',
    },
    jurisdictions: {
      label: 'By jurisdiction',
      heading: 'A changing map.',
      subtitle:
        'Selected jurisdictions with notable legal frameworks. Not exhaustive. Last reviewed: early 2026.',
    },
    footer: {
      heading: 'Verify before you act.',
      body: 'Laws change frequently. Always verify through official government sources or qualified legal counsel.',
    },
  },
  es: {
    hero: {
      label: 'Panorama legal',
      heading: 'las leyes varían.\nel conocimiento protege.',
      subtitle:
        'El estado legal difiere dramáticamente entre jurisdicciones y cambia rápidamente. Solo con fines educativos.',
    },
    disclaimer: {
      heading: 'Aviso importante',
      body: 'Umbral no fomenta ni facilita actividades ilegales. Las leyes cambian. La aplicación varía. Siempre verifica el estado actual en tu jurisdicción.',
      emphasis:
        'Esto no es asesoramiento legal. Consulta a un abogado calificado en tu jurisdicción.',
    },
    jurisdictions: {
      label: 'Por jurisdicción',
      heading: 'Un mapa cambiante.',
      subtitle:
        'Jurisdicciones seleccionadas con marcos legales notables. No exhaustiva. Última revisión: principios de 2026.',
    },
    footer: {
      heading: 'Verifica antes de actuar.',
      body: 'Las leyes cambian con frecuencia. Verifica a través de fuentes gubernamentales oficiales o asesoría legal calificada.',
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
      {/* ── HERO ── */}
      <Section spacing="none" className="min-h-[70dvh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-32 md:py-40">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-white">
              {t.hero.heading}
            </h1>
            <p className="mt-8 text-xl text-cloud/60 font-light leading-relaxed max-w-[50ch]">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />
        </div>
      </Section>

      {/* ── DISCLAIMER ── */}
      <Section spacing="default" className="bg-forest">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white">
              {t.disclaimer.heading}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-cloud/70 font-light leading-relaxed mb-6">
              {t.disclaimer.body}
            </p>
            <p className="text-base text-white font-normal leading-relaxed border-l-2 border-moss pl-5">
              {t.disclaimer.emphasis}
            </p>
          </div>
        </div>
      </Section>

      {/* ── JURISDICTIONS ── */}
      <Section spacing="lg">
        <SectionHeader
          label={t.jurisdictions.label}
          heading={t.jurisdictions.heading}
          subtitle={t.jurisdictions.subtitle}
        />
        <div className="space-y-0 border-t border-white/[0.06]">
          {legalJurisdictions.map((jurisdiction) => (
            <div
              key={jurisdiction.country}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-4 md:px-6 rounded-lg mb-1"
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

      {/* ── FOOTER DISCLAIMER ── */}
      <Section spacing="lg" className="bg-forest">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] mb-6 text-white">
            {t.footer.heading}
          </h2>
          <p className="text-lg text-cloud/70 font-light leading-relaxed">
            {t.footer.body}
          </p>
        </div>
      </Section>
    </>
  )
}
