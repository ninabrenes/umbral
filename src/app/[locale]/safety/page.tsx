import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { crisisResources } from '@/content/safety/crisis-resources'
import { contraindications } from '@/content/safety/contraindications'
import { artImages } from '@/content/framework/images'
import {
  Warning,
  WarningCircle,
  Info,
  Question,
  Phone,
  ChatText,
  Lifebuoy,
  Heartbeat,
  Armchair,
  House,
  Spiral,
  Shield,
} from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'
import type { Severity } from '@/content/safety/contraindications'
import type { Icon, IconWeight } from '@phosphor-icons/react'

const severityIcons: Record<Severity, { icon: Icon; weight: IconWeight }> = {
  critical: { icon: Warning, weight: 'fill' },
  high: { icon: WarningCircle, weight: 'duotone' },
  moderate: { icon: Info, weight: 'duotone' },
  unknown: { icon: Question, weight: 'duotone' },
}

const harmReductionIcons: Icon[] = [Heartbeat, Armchair, House, Spiral]

const content = {
  en: {
    hero: {
      label: 'Safety first, always',
      title: 'your safety matters most',
      subtitle:
        'Harm reduction ensures anyone who chooses this path has the information to do so with care.',
    },
    crisis: {
      label: 'Crisis support',
      heading: 'If you need help right now',
      subtitle:
        'Trained professionals. Free, confidential, available now.',
      callLabel: 'Call',
      textLabel: 'Text',
    },
    contraindications: {
      label: 'What the research shows',
      heading: 'Known contraindications',
      subtitle:
        'A starting point for informed conversation with your healthcare provider.',
      severityLabels: {
        critical: 'Critical risk',
        high: 'High caution',
        moderate: 'Moderate note',
        unknown: 'Insufficient data',
      },
      riskLabel: 'Risk',
      actionLabel: 'Recommended action',
    },
    harmReduction: {
      label: 'Harm reduction',
      heading: 'Principles that guide this work',
      subtitle:
        'From the Zendo Project and decades of psychedelic peer support.',
      principles: [
        {
          title: 'Difficult is not the same as bad',
          body: 'Challenging experiences can be the most meaningful. The goal is support, not elimination of difficulty.',
        },
        {
          title: 'Sitting, not guiding',
          body: 'Presence, not direction. We create a safe container and trust the process.',
        },
        {
          title: 'Set and setting matter',
          body: 'Mindset and environment shape the experience more than any substance. Preparation is not optional.',
        },
        {
          title: 'Integration is where the value lives',
          body: 'The experience opens a door. Integration weaves what was revealed into daily life.',
        },
      ],
    },
    disclaimers: {
      label: 'Legal notice',
      heading: 'Important disclaimers',
      items: [
        'This tool does not encourage, condone, or facilitate illegal activities. It exists as an educational and harm reduction resource.',
        'Umbral does not provide medical care, psychiatric diagnosis, or therapeutic treatment.',
        'Information drawn from published research and established harm reduction practices. Not exhaustive.',
        'You are solely responsible for your decisions. Consult healthcare professionals before changing medications or treatment plans.',
        'Laws vary by jurisdiction. It is your responsibility to understand and comply with local laws.',
      ],
    },
  },
  es: {
    hero: {
      label: 'La seguridad primero, siempre',
      title: 'tu seguridad importa más',
      subtitle:
        'La reducción de daños asegura que quien elija este camino tenga la información necesaria para hacerlo con cuidado.',
    },
    crisis: {
      label: 'Apoyo en crisis',
      heading: 'Si necesitas ayuda ahora',
      subtitle:
        'Profesionales capacitados. Gratuitas, confidenciales, disponibles ahora.',
      callLabel: 'Llamar',
      textLabel: 'Texto',
    },
    contraindications: {
      label: 'Lo que muestra la investigación',
      heading: 'Contraindicaciones conocidas',
      subtitle:
        'Un punto de partida para una conversación informada con tu profesional de salud.',
      severityLabels: {
        critical: 'Riesgo crítico',
        high: 'Alta precaución',
        moderate: 'Nota moderada',
        unknown: 'Datos insuficientes',
      },
      riskLabel: 'Riesgo',
      actionLabel: 'Acción recomendada',
    },
    harmReduction: {
      label: 'Reducción de daños',
      heading: 'Principios que guían este trabajo',
      subtitle:
        'Del Zendo Project y décadas de apoyo entre pares psicodélico.',
      principles: [
        {
          title: 'Difícil no es lo mismo que malo',
          body: 'Las experiencias desafiantes pueden ser las más significativas. El objetivo es apoyo, no eliminación de la dificultad.',
        },
        {
          title: 'Acompañar, no guiar',
          body: 'Presencia, no dirección. Creamos un espacio seguro y confiamos en el proceso.',
        },
        {
          title: 'El set y el setting importan',
          body: 'Mentalidad y entorno moldean la experiencia más que cualquier sustancia. La preparación no es opcional.',
        },
        {
          title: 'La integración es donde vive el valor',
          body: 'La experiencia abre una puerta. La integración teje lo revelado en la vida cotidiana.',
        },
      ],
    },
    disclaimers: {
      label: 'Aviso legal',
      heading: 'Descargos de responsabilidad',
      items: [
        'Esta herramienta no fomenta, aprueba ni facilita actividades ilegales. Existe como recurso educativo y de reducción de daños.',
        'Umbral no proporciona atención médica, diagnóstico psiquiátrico ni tratamiento terapéutico.',
        'Información de investigaciones publicadas y prácticas establecidas de reducción de daños. No exhaustiva.',
        'Eres el único responsable de tus decisiones. Consulta profesionales antes de hacer cambios en medicamentos o tratamiento.',
        'Las leyes varían según la jurisdicción. Es tu responsabilidad conocer y cumplir las leyes locales.',
      ],
    },
  },
}

const severityConfig: Record<
  Severity,
  { border: string; bg: string; badge: string; badgeText: string }
> = {
  critical: {
    border: 'border-red-800/30',
    bg: 'bg-red-950/20',
    badge: 'bg-red-900/40',
    badgeText: 'text-red-300',
  },
  high: {
    border: 'border-amber-800/30',
    bg: 'bg-amber-950/15',
    badge: 'bg-amber-900/40',
    badgeText: 'text-amber-300',
  },
  moderate: {
    border: 'border-sky-800/20',
    bg: 'bg-sky-950/10',
    badge: 'bg-sky-900/30',
    badgeText: 'text-sky-300',
  },
  unknown: {
    border: 'border-white/[0.04]',
    bg: 'bg-forest',
    badge: 'bg-teal/30',
    badgeText: 'text-cloud/60',
  },
}

export default async function SafetyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]

  return (
    <>
      {/* ── HERO ── */}
      <Section spacing="lg" className="bg-deep">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-24 md:pt-32">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-[-0.03em] text-white">
              {t.hero.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-cloud/60 font-light leading-relaxed max-w-[55ch]">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </Section>

      {/* ── CRISIS RESOURCES — NO ANIMATION (instant render) ── */}
      <Section spacing="lg" className="bg-crisis-bg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-crisis-accent mb-4 font-sans">
              {t.crisis.label}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-crisis-text">
              {t.crisis.heading}
            </h2>
            <p className="mt-5 text-lg text-crisis-text/70 font-light leading-relaxed">
              {t.crisis.subtitle}
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-4">
              {crisisResources.map((resource) => {
                const isText = resource.href.startsWith('sms:')
                const CrisisIcon = isText ? ChatText : Phone
                return (
                  <a
                    key={resource.contact}
                    href={resource.href}
                    className="block rounded-lg border border-white/10 bg-crisis-bg/80 p-6 md:p-8 transition-colors duration-200 hover:bg-crisis-text/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crisis-accent"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 rounded-full bg-crisis-accent/15">
                          <CrisisIcon size={20} weight="duotone" className="text-crisis-accent" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl font-light text-crisis-text">
                            {resource.name[locale as Locale]}
                          </h3>
                          <p className="mt-1 text-sm text-crisis-text/60 font-light">
                            {resource.description[locale as Locale]}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center gap-3 min-h-[44px] min-w-[44px]">
                        <span className="text-xs tracking-[0.15em] uppercase text-crisis-text/40">
                          {isText ? t.crisis.textLabel : t.crisis.callLabel}
                        </span>
                        <span className="font-serif text-2xl md:text-3xl font-light text-crisis-accent tracking-tight">
                          {resource.contact}
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ── ART IMAGE BREAK ── */}
      <ParallaxImage
        src={artImages.cosmicNebula.src}
        alt={artImages.cosmicNebula.alt[locale as Locale]}
        className="h-[35vh]"
        speed={0.08}
        overlay="bg-deep/60"
      />

      {/* ── CONTRAINDICATIONS ── */}
      <Section spacing="lg" className="bg-forest">
        <SectionHeader
          label={t.contraindications.label}
          heading={t.contraindications.heading}
          subtitle={t.contraindications.subtitle}
        />
        <div className="space-y-4">
          {contraindications.map((item, index) => {
            const style = severityConfig[item.severity]
            return (
              <ScrollReveal key={item.id} variant="fade-up" delay={index * 0.05}>
                <div
                  className={`rounded-2xl border ${style.border} ${style.bg} p-6 md:p-8`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3 mb-2">
                        {(() => {
                          const { icon: SeverityIcon, weight } = severityIcons[item.severity]
                          return <SeverityIcon size={16} weight={weight} className={style.badgeText} />
                        })()}
                        <span
                          className={`inline-block text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded ${style.badge} ${style.badgeText}`}
                        >
                          {t.contraindications.severityLabels[item.severity]}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-light leading-tight text-white">
                        {item.name[locale as Locale]}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-xs tracking-[0.15em] uppercase text-cloud/60 mb-1.5">
                        {t.contraindications.riskLabel}
                      </p>
                      <p className="text-base font-light text-cloud/80 leading-relaxed">
                        {item.risk[locale as Locale]}
                      </p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-xs tracking-[0.15em] uppercase text-cloud/60 mb-1.5">
                        {t.contraindications.actionLabel}
                      </p>
                      <p className="text-base font-light text-cloud/80 leading-relaxed">
                        {item.action[locale as Locale]}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Section>

      {/* ── HARM REDUCTION PRINCIPLES ── */}
      <ScrollReveal variant="fade-in">
        <Section spacing="lg" className="bg-teal">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                {t.harmReduction.label}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.harmReduction.heading}
              </h2>
              <p className="mt-5 text-lg text-cloud/60 font-light leading-relaxed">
                {t.harmReduction.subtitle}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-10">
                {t.harmReduction.principles.map((principle, index) => {
                  const PrincipleIcon = harmReductionIcons[index]
                  return (
                    <ScrollReveal key={principle.title} variant="slide-left" delay={index * 0.08}>
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 mt-1">
                          <PrincipleIcon size={28} weight="duotone" className="text-sage" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-light leading-tight mb-3 text-white">
                            {principle.title}
                          </h3>
                          <p className="text-base text-cloud/60 font-light leading-relaxed max-w-[50ch]">
                            {principle.body}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </Section>
      </ScrollReveal>

      {/* ── DISCLAIMERS ── */}
      <Section spacing="lg" className="bg-deep">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Shield size={32} weight="duotone" className="text-cloud/60 mb-5" />
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
              {t.disclaimers.label}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white">
              {t.disclaimers.heading}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-6">
              {t.disclaimers.items.map((item, i) => (
                <p
                  key={i}
                  className="text-sm text-cloud/60 font-light leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
