import { setRequestLocale } from 'next-intl/server'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import { artImages } from '@/content/framework/images'
import { nodes } from '@/content/framework/nodes'
import { NodeIcon } from '@/components/framework/NodeIcon'
import type { Locale, NodeId } from '@/types'

/* ── Card background colors for variety ── */
const nodeCardBg: Record<NodeId, string> = {
  ground: 'bg-teal/40',
  roots: 'bg-green/40',
  spore: 'bg-teal/40',
  weave: 'bg-green/40',
  fruit: 'bg-teal/40',
  canopy: 'bg-green/40',
}

/* ── Bilingual content (trimmed to essentials) ── */
const content = {
  en: {
    hero: {
      title: 'preparation.\nexperience.\nintegration.',
      subtitle: 'the network that connects it all.',
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
      subtitle: 'la red que lo conecta todo.',
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
      {/* ── HERO (full viewport, dark, immersive) ── */}
      <section className="relative min-h-[100dvh] flex items-center bg-deep overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/images/art/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-transparent to-onyx/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-32 md:py-40">
          <ScrollReveal>
            <h1 className="font-serif text-[clamp(4rem,12vw,9rem)] font-light leading-[0.95] tracking-[-0.03em] whitespace-pre-line text-white">
              {t.hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-10 text-xl md:text-2xl text-cloud font-light max-w-[28ch]">
              {t.hero.subtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-16">
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

          {/* Bento grid: varied card types for asymmetry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Image card — cosmic nebula (tall, spans 2 cols + 2 rows) */}
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[320px] md:min-h-[420px]">
                <Image
                  src={bentoArt[0].src}
                  alt={bentoArt[0].alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-cloud/60 text-xs uppercase tracking-[0.15em] font-sans">
                    {locale === 'es' ? 'La Red Micelial' : 'The Mycelial Network'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Node: Ground */}
            <ScrollReveal delay={0.08}>
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                <a
                  href={`/${locale}/framework/${nodes[0].id}`}
                  className={`group flex flex-col justify-between rounded-[calc(1.75rem-0.375rem)] p-8 min-h-[200px] h-full transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${nodeCardBg[nodes[0].id]}`}
                >
                  <NodeIcon nodeId={nodes[0].id} size={28} useNodeColor weight="duotone" />
                  <div>
                    <h3 className="text-cloud font-serif text-xl">{nodes[0].name[locale as Locale]}</h3>
                    <p className="text-cloud/60 text-sm mt-1">{nodes[0].tagline[locale as Locale]}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Node: Roots */}
            <ScrollReveal delay={0.16}>
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                <a
                  href={`/${locale}/framework/${nodes[1].id}`}
                  className={`group flex flex-col justify-between rounded-[calc(1.75rem-0.375rem)] p-8 min-h-[200px] h-full transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${nodeCardBg[nodes[1].id]}`}
                >
                  <NodeIcon nodeId={nodes[1].id} size={28} useNodeColor weight="duotone" />
                  <div>
                    <h3 className="text-cloud font-serif text-xl">{nodes[1].name[locale as Locale]}</h3>
                    <p className="text-cloud/60 text-sm mt-1">{nodes[1].tagline[locale as Locale]}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Node: Spore */}
            <ScrollReveal delay={0.24}>
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                <a
                  href={`/${locale}/framework/${nodes[2].id}`}
                  className={`group flex flex-col justify-between rounded-[calc(1.75rem-0.375rem)] p-8 min-h-[200px] h-full transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${nodeCardBg[nodes[2].id]}`}
                >
                  <NodeIcon nodeId={nodes[2].id} size={28} useNodeColor weight="duotone" />
                  <div>
                    <h3 className="text-cloud font-serif text-xl">{nodes[2].name[locale as Locale]}</h3>
                    <p className="text-cloud/60 text-sm mt-1">{nodes[2].tagline[locale as Locale]}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Image card — psychedelic swirls (tall, spans 2 cols + 2 rows) */}
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[320px] md:min-h-[420px]">
                <Image
                  src={bentoArt[1].src}
                  alt={bentoArt[1].alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-cloud/60 text-xs uppercase tracking-[0.15em] font-sans">
                    {locale === 'es' ? 'Preparación e Integración' : 'Preparation & Integration'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Node: Weave */}
            <ScrollReveal delay={0.32}>
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                <a
                  href={`/${locale}/framework/${nodes[3].id}`}
                  className={`group flex flex-col justify-between rounded-[calc(1.75rem-0.375rem)] p-8 min-h-[200px] h-full transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${nodeCardBg[nodes[3].id]}`}
                >
                  <NodeIcon nodeId={nodes[3].id} size={28} useNodeColor weight="duotone" />
                  <div>
                    <h3 className="text-cloud font-serif text-xl">{nodes[3].name[locale as Locale]}</h3>
                    <p className="text-cloud/60 text-sm mt-1">{nodes[3].tagline[locale as Locale]}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Node: Fruit */}
            <ScrollReveal delay={0.40}>
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                <a
                  href={`/${locale}/framework/${nodes[4].id}`}
                  className={`group flex flex-col justify-between rounded-[calc(1.75rem-0.375rem)] p-8 min-h-[200px] h-full transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${nodeCardBg[nodes[4].id]}`}
                >
                  <NodeIcon nodeId={nodes[4].id} size={28} useNodeColor weight="duotone" />
                  <div>
                    <h3 className="text-cloud font-serif text-xl">{nodes[4].name[locale as Locale]}</h3>
                    <p className="text-cloud/60 text-sm mt-1">{nodes[4].tagline[locale as Locale]}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Node: Canopy */}
            <ScrollReveal delay={0.48}>
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                <a
                  href={`/${locale}/framework/${nodes[5].id}`}
                  className={`group flex flex-col justify-between rounded-[calc(1.75rem-0.375rem)] p-8 min-h-[200px] h-full transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${nodeCardBg[nodes[5].id]}`}
                >
                  <NodeIcon nodeId={nodes[5].id} size={28} useNodeColor weight="duotone" />
                  <div>
                    <h3 className="text-cloud font-serif text-xl">{nodes[5].name[locale as Locale]}</h3>
                    <p className="text-cloud/60 text-sm mt-1">{nodes[5].tagline[locale as Locale]}</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY — full-bleed art background ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={artImages.handsReaching.src}
          alt={artImages.handsReaching.alt[locale as Locale]}
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/60 to-onyx/80" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-32 md:py-48">
          <ScrollReveal>
            <div className="max-w-[900px] mx-auto text-center">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.philosophy.line}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PORTAL CTA — elevated teal surface ── */}
      <section className="bg-teal py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="backdrop-blur-xl border border-white/[0.08] bg-white/[0.04] rounded-3xl px-10 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-white mb-6">
                {t.cta.heading}
              </h2>
              <p className="text-lg text-cloud/60 font-light mb-12 max-w-[40ch] mx-auto">
                {t.cta.subtitle}
              </p>
              <a
                href={`/${locale}/portal`}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-wide bg-mint text-deep rounded-[var(--radius-pill)] transition-opacity duration-200 hover:opacity-90"
              >
                {t.cta.button}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
