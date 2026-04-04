import { setRequestLocale } from 'next-intl/server'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import { artImages } from '@/content/framework/images'
import { nodes } from '@/content/framework/nodes'
import { NodeIcon } from '@/components/framework/NodeIcon'
import type { Locale, NodeId } from '@/types'

/* ── Bilingual content ── */
const content = {
  en: {
    hero: {
      title: 'preparation.\nexperience.\nintegration.',
      cta: 'Explore the Framework',
    },
    framework: {
      label: 'The Mycelial Network',
    },
    philosophy: {
      line: 'Integration is 80% of the value.',
    },
    cta: {
      heading: 'The portal is being built.',
      subtitle: 'Preparation pathways. Encrypted journaling. Integration tracking.',
      button: 'Join the Waitlist',
    },
  },
  es: {
    hero: {
      title: 'preparación.\nexperiencia.\nintegración.',
      cta: 'Explorar el Marco',
    },
    framework: {
      label: 'La Red Micelial',
    },
    philosophy: {
      line: 'La integración es el 80% del valor.',
    },
    cta: {
      heading: 'El portal se está construyendo.',
      subtitle: 'Caminos de preparación. Diario encriptado. Seguimiento de integración.',
      button: 'Unirse a la Lista',
    },
  },
}

/* ── Art images for bento grid ── */
const bentoArt = [artImages.cosmicNebula, artImages.psychedelicSwirls]

/* ── Node card variant assignments for visual variety ── */
type CardVariant = 'massive-serif' | 'icon-centered'
const nodeVariants: Record<NodeId, { variant: CardVariant; bg: string }> = {
  ground:  { variant: 'massive-serif',  bg: 'bg-teal' },
  roots:   { variant: 'icon-centered',  bg: 'bg-green' },
  spore:   { variant: 'massive-serif',  bg: 'bg-teal' },
  weave:   { variant: 'icon-centered',  bg: 'bg-green' },
  fruit:   { variant: 'massive-serif',  bg: 'bg-forest' },
  canopy:  { variant: 'icon-centered',  bg: 'bg-deep' },
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]

  /* Split nodes by variant for rendering */
  const massiveSerifNodes = nodes.filter((n) => nodeVariants[n.id].variant === 'massive-serif')
  const iconCenteredNodes = nodes.filter((n) => nodeVariants[n.id].variant === 'icon-centered')

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-end bg-deep overflow-hidden">
        {/* Video background — more visible */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/images/art/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient — just enough for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />
        </div>

        {/* Content — anchored to bottom for editorial weight */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full pb-24 md:pb-32 pt-48">
          <ScrollReveal>
            <h1 className="font-serif text-[clamp(4rem,12vw,10rem)] font-light leading-[0.9] tracking-[-0.04em] whitespace-pre-line text-white">
              {t.hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-20">
              <a
                href={`/${locale}/framework`}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-wide bg-mint text-deep rounded-[var(--radius-pill)] transition-opacity duration-200 hover:opacity-90"
              >
                {t.hero.cta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FRAMEWORK — BENTO GRID ── */}
      <section className="bg-forest py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-mint font-sans font-normal mb-16 md:mb-24">
              {t.framework.label}
            </p>
          </ScrollReveal>

          {/* Asymmetric bento: art + varied node cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

            {/* Art card 1 — tall, spans 2 cols + 2 rows, rounded */}
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[400px] md:min-h-[520px]">
                <Image
                  src={bentoArt[0].src}
                  alt={bentoArt[0].alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-cloud/50 text-xs uppercase tracking-[0.15em] font-sans">
                    {locale === 'es' ? 'La Red Micelial' : 'The Mycelial Network'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Massive serif nodes — just the name, big type, solid bg */}
            {massiveSerifNodes.slice(0, 2).map((node, i) => (
              <ScrollReveal key={node.id} delay={0.08 + i * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex items-end rounded-2xl p-8 min-h-[200px] h-full transition-colors duration-200 hover:opacity-90 ${nodeVariants[node.id].bg}`}
                >
                  <h3 className="font-serif text-4xl md:text-5xl font-light leading-[1] tracking-[-0.02em] text-cloud/90">
                    {node.name[locale as Locale]}
                  </h3>
                </a>
              </ScrollReveal>
            ))}

            {/* Icon-centered nodes — large icon, name below, solid bg */}
            {iconCenteredNodes.slice(0, 2).map((node, i) => (
              <ScrollReveal key={node.id} delay={0.24 + i * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex flex-col items-center justify-center gap-6 rounded-2xl p-8 min-h-[200px] h-full text-center transition-colors duration-200 hover:opacity-90 ${nodeVariants[node.id].bg}`}
                >
                  <NodeIcon nodeId={node.id} size={48} useNodeColor weight="duotone" />
                  <h3 className="font-serif text-xl text-cloud/80">
                    {node.name[locale as Locale]}
                  </h3>
                </a>
              </ScrollReveal>
            ))}

            {/* Art card 2 — sharp corners for variety, spans 2 cols + 2 rows */}
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <div className="relative overflow-hidden h-full min-h-[400px] md:min-h-[520px]">
                <Image
                  src={bentoArt[1].src}
                  alt={bentoArt[1].alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-cloud/50 text-xs uppercase tracking-[0.15em] font-sans">
                    {locale === 'es' ? 'Preparación e Integración' : 'Preparation & Integration'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Remaining massive serif node */}
            {massiveSerifNodes.slice(2).map((node, i) => (
              <ScrollReveal key={node.id} delay={0.4 + i * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex items-end rounded-2xl p-8 min-h-[200px] h-full transition-colors duration-200 hover:opacity-90 ${nodeVariants[node.id].bg}`}
                >
                  <h3 className="font-serif text-4xl md:text-5xl font-light leading-[1] tracking-[-0.02em] text-cloud/90">
                    {node.name[locale as Locale]}
                  </h3>
                </a>
              </ScrollReveal>
            ))}

            {/* Remaining icon-centered node */}
            {iconCenteredNodes.slice(2).map((node, i) => (
              <ScrollReveal key={node.id} delay={0.48 + i * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex flex-col items-center justify-center gap-6 rounded-2xl p-8 min-h-[200px] h-full text-center transition-colors duration-200 hover:opacity-90 ${nodeVariants[node.id].bg}`}
                >
                  <NodeIcon nodeId={node.id} size={48} useNodeColor weight="duotone" />
                  <h3 className="font-serif text-xl text-cloud/80">
                    {node.name[locale as Locale]}
                  </h3>
                </a>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ── WATERMARK — massive type moment ── */}
      <section className="bg-deep py-16 md:py-24 overflow-hidden">
        <div className="relative">
          <p className="font-serif text-[clamp(6rem,14vw,16rem)] font-light leading-[0.85] tracking-[-0.04em] text-cloud/[0.04] text-center select-none" aria-hidden="true">
            umbral
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY — full-bleed showstopper ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={artImages.handsReaching.src}
          alt={artImages.handsReaching.alt[locale as Locale]}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep/50" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="font-serif italic text-[clamp(2rem,5vw,5rem)] font-light leading-[1.1] tracking-[-0.02em] text-white text-center max-w-[18ch] mx-auto">
              {t.philosophy.line}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PORTAL CTA — no card, just content on solid bg ── */}
      <section className="bg-teal py-32 md:py-40 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-white mb-6">
              {t.cta.heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-cloud/60 font-light mb-12 max-w-[40ch]">
              {t.cta.subtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href={`/${locale}/portal`}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-wide bg-mint text-deep rounded-[var(--radius-pill)] transition-opacity duration-200 hover:opacity-90"
            >
              {t.cta.button}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
