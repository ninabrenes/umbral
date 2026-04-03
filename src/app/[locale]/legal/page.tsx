import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { legalJurisdictions } from '@/content/safety/legal-status'
import type { Locale, LegalJurisdiction } from '@/types'

const statusColors: Record<LegalJurisdiction['status'], string> = {
  legal: 'bg-sage/20 text-sage border border-sage/30',
  decriminalized: 'bg-gold/10 text-gold border border-gold/30',
  medical: 'bg-moss/15 text-moss border border-moss/30',
  illegal: 'bg-ink/5 text-ink-muted border border-ink/10',
  'gray-area': 'bg-sand border border-ink/10 text-ink-muted',
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
        'The legal status of psychedelic substances differs dramatically across jurisdictions and is changing rapidly. This page provides a general overview for educational purposes only.',
    },
    disclaimer: {
      heading: 'Important disclaimer',
      body: 'Umbral does not encourage, condone, or facilitate illegal activities. Psychedelic substances carry different legal statuses in different jurisdictions. This information may be outdated by the time you read it. Laws change. Enforcement varies. Always verify the current legal status in your specific jurisdiction before making any decisions.',
      emphasis:
        'This is not legal advice. Consult a qualified attorney in your jurisdiction.',
    },
    jurisdictions: {
      label: 'By jurisdiction',
      heading: 'A changing map.',
      subtitle:
        'Selected jurisdictions with notable legal frameworks. This list is not exhaustive. Last reviewed: early 2026.',
    },
    footer: {
      heading: 'Verify before you act.',
      body: 'This information is provided for educational purposes only. Laws change frequently and enforcement varies by region and context. Always verify current laws in your jurisdiction through official government sources or qualified legal counsel before making any decisions.',
    },
  },
  es: {
    hero: {
      label: 'Panorama legal',
      heading: 'las leyes varían.\nel conocimiento protege.',
      subtitle:
        'El estado legal de las sustancias psicodélicas difiere dramáticamente entre jurisdicciones y está cambiando rápidamente. Esta página proporciona una visión general solo con fines educativos.',
    },
    disclaimer: {
      heading: 'Aviso importante',
      body: 'Umbral no fomenta, aprueba ni facilita actividades ilegales. Las sustancias psicodélicas tienen diferentes estados legales en diferentes jurisdicciones. Esta información puede estar desactualizada cuando la leas. Las leyes cambian. La aplicación varía. Siempre verifica el estado legal actual en tu jurisdicción específica antes de tomar cualquier decisión.',
      emphasis:
        'Esto no es asesoramiento legal. Consulta a un abogado calificado en tu jurisdicción.',
    },
    jurisdictions: {
      label: 'Por jurisdicción',
      heading: 'Un mapa cambiante.',
      subtitle:
        'Jurisdicciones seleccionadas con marcos legales notables. Esta lista no es exhaustiva. Última revisión: principios de 2026.',
    },
    footer: {
      heading: 'Verifica antes de actuar.',
      body: 'Esta información se proporciona solo con fines educativos. Las leyes cambian con frecuencia y la aplicación varía según la región y el contexto. Siempre verifica las leyes actuales en tu jurisdicción a través de fuentes gubernamentales oficiales o asesoría legal calificada antes de tomar cualquier decisión.',
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
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line">
              {t.hero.heading}
            </h1>
            <p className="mt-8 text-xl text-ink-muted font-light leading-relaxed max-w-[50ch]">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />
        </div>
      </Section>

      {/* ── DISCLAIMER ── */}
      <Section spacing="default" className="bg-sand">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em]">
              {t.disclaimer.heading}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-ink/70 font-light leading-relaxed mb-6">
              {t.disclaimer.body}
            </p>
            <p className="text-base text-ink font-normal leading-relaxed border-l-2 border-moss pl-5">
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
        <div className="space-y-0 border-t border-ink/[0.06]">
          {legalJurisdictions.map((jurisdiction) => (
            <div
              key={jurisdiction.country}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-ink/[0.06]"
            >
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-light tracking-[-0.01em]">
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
                <p className="text-ink/70 font-light leading-relaxed">
                  {jurisdiction.notes[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FOOTER DISCLAIMER ── */}
      <Section spacing="lg" className="bg-sand">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] mb-6">
            {t.footer.heading}
          </h2>
          <p className="text-lg text-ink/70 font-light leading-relaxed">
            {t.footer.body}
          </p>
        </div>
      </Section>
    </>
  )
}
