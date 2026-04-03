import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { crisisResources } from '@/content/safety/crisis-resources'
import { contraindications } from '@/content/safety/contraindications'
import { artImages } from '@/content/framework/images'
import type { Locale } from '@/types'
import type { Severity } from '@/content/safety/contraindications'

const content = {
  en: {
    hero: {
      label: 'Safety first, always',
      title: 'your safety matters most',
      subtitle:
        'Harm reduction is not about permission or prohibition. It is about ensuring that anyone who chooses this path has the information they need to do so with care.',
    },
    crisis: {
      label: 'Crisis support',
      heading: 'If you need help right now',
      subtitle:
        'These lines are staffed by trained professionals. Free, confidential, available now.',
      callLabel: 'Call',
      textLabel: 'Text',
    },
    contraindications: {
      label: 'What the research shows',
      heading: 'Known contraindications',
      subtitle:
        'This is not a comprehensive medical assessment. It is a starting point for informed conversation with your healthcare provider.',
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
        'Drawn from the Zendo Project and decades of psychedelic peer support practice.',
      principles: [
        {
          title: 'Difficult is not the same as bad',
          body: 'Challenging experiences can be among the most meaningful. The goal is not to eliminate difficulty but to provide the support needed to move through it.',
        },
        {
          title: 'Sitting, not guiding',
          body: 'The role of support is presence, not direction. We do not interpret, diagnose, or steer. We create a safe container and trust the process.',
        },
        {
          title: 'Set and setting matter',
          body: 'The internal landscape (mindset) and external environment (setting) shape the experience more than any substance. Preparation is not optional.',
        },
        {
          title: 'Integration is where the value lives',
          body: 'The experience opens a door. Integration is the ongoing work of making sense of what was revealed and weaving it into daily life.',
        },
      ],
    },
    disclaimers: {
      label: 'Legal notice',
      heading: 'Important disclaimers',
      items: [
        'This tool does not encourage, condone, or facilitate illegal activities. It exists as an educational and harm reduction resource for adults making informed choices about their own health.',
        'Umbral does not provide medical care, psychiatric diagnosis, or therapeutic treatment. Nothing on this platform substitutes for professional medical advice.',
        'The information presented here is drawn from published research and established harm reduction practices. It is not exhaustive and may not reflect your specific medical situation.',
        'You are solely responsible for your decisions and actions. Consult qualified healthcare professionals before making any changes to medications or treatment plans.',
        'Laws regarding psychedelic substances vary by jurisdiction. It is your responsibility to understand and comply with the laws in your location.',
      ],
    },
  },
  es: {
    hero: {
      label: 'La seguridad primero, siempre',
      title: 'tu seguridad importa más',
      subtitle:
        'La reducción de daños no se trata de permisos ni prohibiciones. Se trata de asegurar que quien elija este camino tenga la información necesaria para hacerlo con cuidado.',
    },
    crisis: {
      label: 'Apoyo en crisis',
      heading: 'Si necesitas ayuda ahora',
      subtitle:
        'Estas líneas son atendidas por profesionales capacitados. Gratuitas, confidenciales, disponibles ahora.',
      callLabel: 'Llamar',
      textLabel: 'Texto',
    },
    contraindications: {
      label: 'Lo que muestra la investigación',
      heading: 'Contraindicaciones conocidas',
      subtitle:
        'Esto no es una evaluación médica completa. Es un punto de partida para una conversación informada con tu profesional de salud.',
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
        'Basados en el Zendo Project y décadas de práctica de apoyo entre pares psicodélico.',
      principles: [
        {
          title: 'Difícil no es lo mismo que malo',
          body: 'Las experiencias desafiantes pueden ser de las más significativas. El objetivo no es eliminar la dificultad sino proporcionar el apoyo necesario para atravesarla.',
        },
        {
          title: 'Acompañar, no guiar',
          body: 'El rol del apoyo es la presencia, no la dirección. No interpretamos, diagnosticamos ni dirigimos. Creamos un espacio seguro y confiamos en el proceso.',
        },
        {
          title: 'El set y el setting importan',
          body: 'El paisaje interno (mentalidad) y el entorno externo (setting) dan forma a la experiencia más que cualquier sustancia. La preparación no es opcional.',
        },
        {
          title: 'La integración es donde vive el valor',
          body: 'La experiencia abre una puerta. La integración es el trabajo continuo de dar sentido a lo revelado y tejerlo en la vida cotidiana.',
        },
      ],
    },
    disclaimers: {
      label: 'Aviso legal',
      heading: 'Descargos de responsabilidad',
      items: [
        'Esta herramienta no fomenta, aprueba ni facilita actividades ilegales. Existe como recurso educativo y de reducción de daños para adultos que toman decisiones informadas sobre su propia salud.',
        'Umbral no proporciona atención médica, diagnóstico psiquiátrico ni tratamiento terapéutico. Nada en esta plataforma sustituye el consejo médico profesional.',
        'La información presentada aquí proviene de investigaciones publicadas y prácticas establecidas de reducción de daños. No es exhaustiva y puede no reflejar tu situación médica específica.',
        'Eres el único responsable de tus decisiones y acciones. Consulta profesionales de salud calificados antes de hacer cambios en medicamentos o planes de tratamiento.',
        'Las leyes sobre sustancias psicodélicas varían según la jurisdicción. Es tu responsabilidad conocer y cumplir las leyes de tu ubicación.',
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
    border: 'border-ink/10',
    bg: 'bg-ink/[0.03]',
    badge: 'bg-ink/10',
    badgeText: 'text-ink-muted',
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
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-24 md:pt-32">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-[-0.03em]">
              {t.hero.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-[55ch]">
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
              {crisisResources.map((resource) => (
                <a
                  key={resource.contact}
                  href={resource.href}
                  className="block rounded-lg border border-crisis-text/10 bg-crisis-text/[0.04] p-6 md:p-8 transition-colors duration-200 hover:bg-crisis-text/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crisis-accent"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-light text-crisis-text">
                        {resource.name[locale as Locale]}
                      </h3>
                      <p className="mt-1 text-sm text-crisis-text/60 font-light">
                        {resource.description[locale as Locale]}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-3 min-h-[44px] min-w-[44px]">
                      <span className="text-xs tracking-[0.15em] uppercase text-crisis-text/40">
                        {resource.href.startsWith('sms:')
                          ? t.crisis.textLabel
                          : t.crisis.callLabel}
                      </span>
                      <span className="font-serif text-2xl md:text-3xl font-light text-crisis-accent tracking-tight">
                        {resource.contact}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
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
        overlay="bg-forest-deep/60"
      />

      {/* ── CONTRAINDICATIONS ── */}
      <Section spacing="lg">
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
                  className={`rounded-lg border ${style.border} ${style.bg} p-6 md:p-8`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`inline-block text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded ${style.badge} ${style.badgeText}`}
                        >
                          {t.contraindications.severityLabels[item.severity]}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-light leading-tight">
                        {item.name[locale as Locale]}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-1.5">
                        {t.contraindications.riskLabel}
                      </p>
                      <p className="text-base font-light text-ink/80 leading-relaxed">
                        {item.risk[locale as Locale]}
                      </p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-1.5">
                        {t.contraindications.actionLabel}
                      </p>
                      <p className="text-base font-light text-ink/80 leading-relaxed">
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
        <Section spacing="lg" className="bg-sand">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4 font-sans">
                {t.harmReduction.label}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em]">
                {t.harmReduction.heading}
              </h2>
              <p className="mt-5 text-lg text-ink-muted font-light leading-relaxed">
                {t.harmReduction.subtitle}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-10">
                {t.harmReduction.principles.map((principle, index) => (
                  <ScrollReveal key={principle.title} variant="slide-left" delay={index * 0.08}>
                    <div>
                      <h3 className="font-serif text-2xl font-light leading-tight mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-base text-ink-muted font-light leading-relaxed max-w-[50ch]">
                        {principle.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </ScrollReveal>

      {/* ── DISCLAIMERS ── */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4 font-sans">
              {t.disclaimers.label}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em]">
              {t.disclaimers.heading}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-6">
              {t.disclaimers.items.map((item, i) => (
                <p
                  key={i}
                  className="text-sm text-ink-muted font-light leading-relaxed"
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
