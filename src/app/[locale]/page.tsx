import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MyceliumSVG } from '@/components/ui/MyceliumSVG'
import { NodeCard } from '@/components/framework/NodeCard'
import { nodes } from '@/content/framework/nodes'
import type { Locale } from '@/types'

const content = {
  en: {
    hero: {
      above: 'Free, open-source, evidence-informed',
      title: 'preparation.\nexperience.\nintegration.',
      subtitle: 'the network that connects it all.',
      cta: 'Explore the Framework',
      ctaSecondary: 'See the science',
    },
    framework: {
      label: 'The Mycelial Network',
      heading: 'Six nodes. One living network.',
      subtitle:
        'Like mycelium connecting trees in a forest, these six domains of integration are interconnected. When one shifts, all shift.',
    },
    philosophy: {
      label: 'What we believe',
      heading: 'Integration is 80% of the value.',
      body: 'The psychedelic experience opens the door. Integration is the work of walking through it. This tool exists because preparation and integration deserve the same care, rigor, and beauty as the experience itself.',
      points: [
        'Evidence-informed, culturally grounded, trauma-aware.',
        'Neither condones nor condemns. Harm reduction over ideology.',
        'Privacy by design. Your journal is encrypted. Your data is yours.',
        'Open source. Community-built. Free forever.',
      ],
    },
    cta: {
      label: 'Coming soon',
      heading: 'The portal is being built.',
      subtitle:
        'A private space for preparation pathways, encrypted journaling, and integration tracking across all six nodes.',
      button: 'Join the Waitlist',
    },
  },
  es: {
    hero: {
      above: 'Gratuito, de código abierto, informado por evidencia',
      title: 'preparación.\nexperiencia.\nintegración.',
      subtitle: 'la red que lo conecta todo.',
      cta: 'Explorar el Marco',
      ctaSecondary: 'Ver la ciencia',
    },
    framework: {
      label: 'La Red Micelial',
      heading: 'Seis nodos. Una red viviente.',
      subtitle:
        'Como el micelio conectando árboles en un bosque, estos seis dominios de integración están interconectados. Cuando uno cambia, todos cambian.',
    },
    philosophy: {
      label: 'Lo que creemos',
      heading: 'La integración es el 80% del valor.',
      body: 'La experiencia psicodélica abre la puerta. La integración es el trabajo de cruzarla. Esta herramienta existe porque la preparación y la integración merecen el mismo cuidado, rigor y belleza que la experiencia misma.',
      points: [
        'Informado por evidencia, culturalmente fundamentado, consciente del trauma.',
        'Ni condena ni aprueba. Reducción de daños sobre ideología.',
        'Privacidad por diseño. Tu diario está encriptado. Tus datos son tuyos.',
        'Código abierto. Construido por la comunidad. Gratis para siempre.',
      ],
    },
    cta: {
      label: 'Próximamente',
      heading: 'El portal se está construyendo.',
      subtitle:
        'Un espacio privado para caminos de preparación, diario encriptado y seguimiento de integración en los seis nodos.',
      button: 'Unirse a la Lista',
    },
  },
}

export default async function Home({
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
      <section className="min-h-[100dvh] flex items-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-32 md:py-40">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-10 font-sans font-normal">
                {t.hero.above}
              </p>
              <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] font-light leading-[1.02] tracking-[-0.03em] whitespace-pre-line">
                {t.hero.title}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-ink-muted font-light max-w-[28ch]">
                {t.hero.subtitle}
              </p>
              <div className="mt-14 flex items-center gap-6">
                <Button href={`/${locale}/framework`}>{t.hero.cta}</Button>
                <Button href={`/${locale}/science`} variant="ghost">
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="hidden md:flex md:col-span-5 lg:col-span-6 items-center justify-center">
              <MyceliumSVG className="w-full max-w-[420px] h-auto opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK PREVIEW ── */}
      <Section spacing="lg" className="border-t border-ink/[0.06]">
        <ScrollReveal>
          <SectionHeader
            label={t.framework.label}
            heading={t.framework.heading}
            subtitle={t.framework.subtitle}
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          {nodes.map((node, i) => (
            <ScrollReveal key={node.id} delay={i * 0.06}>
              <NodeCard
                node={node}
                locale={locale as Locale}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── PHILOSOPHY ── */}
      <Section spacing="lg" className="bg-sand border-t border-ink/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-5 font-sans font-normal">
                {t.philosophy.label}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em]">
                {t.philosophy.heading}
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-ink-muted font-light leading-[1.75] mb-12">
                {t.philosophy.body}
              </p>
              <ul className="space-y-5">
                {t.philosophy.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 text-ink/75 font-light"
                  >
                    <span className="shrink-0 mt-[0.65em] w-1 h-1 rounded-full bg-moss" />
                    <span className="leading-[1.7]">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ── PORTAL CTA ── */}
      <Section spacing="lg" className="border-t border-ink/[0.06]">
        <ScrollReveal>
          <div className="max-w-2xl">
            <SectionHeader
              label={t.cta.label}
              heading={t.cta.heading}
              subtitle={t.cta.subtitle}
            />
            <Button href={`/${locale}/portal`}>{t.cta.button}</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
