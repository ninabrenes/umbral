import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import { NodeCard } from '@/components/framework/NodeCard'
import { nodes } from '@/content/framework/nodes'
import { pageImages, artImages } from '@/content/framework/images'
import { Marquee } from '@/components/ui/Marquee'
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
      {/* ── HERO (dark, immersive) ── */}
      <section className="relative min-h-[100dvh] flex items-center bg-forest-deep overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/images/art/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 via-forest-deep/20 to-forest-deep" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-32 md:py-40">
          <p className="text-[11px] tracking-[0.25em] uppercase text-sage font-sans font-normal mb-10">
            {t.hero.above}
          </p>
          <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.98] tracking-[-0.03em] whitespace-pre-line text-ivory">
            {t.hero.title}
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-ivory/70 font-light max-w-[30ch]">
            {t.hero.subtitle}
          </p>
          <div className="mt-16 flex flex-wrap items-center gap-5">
            <a
              href={`/${locale}/framework`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-wide bg-ivory text-forest-deep rounded-[var(--radius-pill)] transition-opacity duration-200 hover:opacity-90"
            >
              {t.hero.cta}
            </a>
            <a
              href={`/${locale}/science`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-wide text-ivory border border-ivory/30 rounded-[var(--radius-pill)] transition-colors duration-200 hover:border-ivory/60"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK PREVIEW (light) ── */}
      <Section spacing="lg" className="bg-cream">
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

      {/* ── MARQUEE BAND ── */}
      <Marquee className="py-6 bg-forest-deep text-sage/60" speed={40}>
        preparation · experience · integration · the network that connects it all
      </Marquee>

      {/* ── ART STRIP ── */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
        {[
          artImages.cosmicNebula,
          artImages.radiantSilhouette,
          artImages.handsReaching,
          artImages.floatingFigure,
          artImages.psychedelicSwirls,
          artImages.dancingFigures,
        ].map((img, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt[locale as Locale]}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>

      {/* ── PHILOSOPHY (dark) ── */}
      <Section spacing="lg" dark>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.2em] uppercase text-sage mb-5 font-sans font-normal">
                {t.philosophy.label}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-ivory">
                {t.philosophy.heading}
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-ivory/60 font-light leading-[1.75] mb-12">
                {t.philosophy.body}
              </p>
              <ul className="space-y-5">
                {t.philosophy.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 text-ivory/70 font-light"
                  >
                    <span className="shrink-0 mt-[0.65em] w-1 h-1 rounded-full bg-sage" />
                    <span className="leading-[1.7]">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ── PORTAL CTA (light) ── */}
      <Section spacing="lg" className="bg-cream-warm">
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
