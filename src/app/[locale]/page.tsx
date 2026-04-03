import { setRequestLocale } from 'next-intl/server'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Marquee } from '@/components/ui/Marquee'
import Image from 'next/image'
import { artImages } from '@/content/framework/images'
import { nodes } from '@/content/framework/nodes'
import { NodeIcon } from '@/components/framework/NodeIcon'
import type { Locale, NodeId } from '@/types'

/* ── Node color map for hover glow borders ── */
const nodeGlowBorder: Record<NodeId, string> = {
  ground: 'hover:border-node-ground/40',
  roots: 'hover:border-node-roots/40',
  spore: 'hover:border-node-spore/40',
  weave: 'hover:border-node-weave/40',
  fruit: 'hover:border-node-fruit/40',
  canopy: 'hover:border-node-canopy/40',
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
const artStripImages = [
  artImages.cosmicNebula,
  artImages.radiantSilhouette,
  artImages.handsReaching,
  artImages.floatingFigure,
  artImages.psychedelicSwirls,
  artImages.dancingFigures,
]

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
      <section className="relative min-h-[100dvh] flex items-center bg-onyx overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          >
            <source src="/images/art/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/30 to-deep" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-32 md:py-40">
          <ScrollReveal>
            <h1 className="font-serif text-[clamp(4rem,12vw,9rem)] font-light leading-[0.95] tracking-[-0.03em] whitespace-pre-line text-white">
              {t.hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-10 text-xl md:text-2xl text-cloud/60 font-light max-w-[28ch]">
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

      {/* ── MARQUEE BAND ── */}
      <Marquee className="py-5 bg-deep text-sage/50" speed={40}>
        preparation · experience · integration · the network that connects it all
      </Marquee>

      {/* ── FRAMEWORK — BENTO GRID ── */}
      <section className="bg-deep py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-mint font-sans font-normal mb-16 md:mb-24">
              {t.framework.label}
            </p>
          </ScrollReveal>

          {/* Bento grid: asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Row 1: large art + 2 nodes */}
            <div className="md:row-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
              <ScrollReveal className="h-full">
                <Image
                  src={bentoArt[0].src}
                  alt={bentoArt[0].alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
              </ScrollReveal>
            </div>

            {nodes.slice(0, 2).map((node, i) => (
              <ScrollReveal key={node.id} delay={i * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex flex-col justify-between p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-200 aspect-square md:aspect-auto md:h-full ${nodeGlowBorder[node.id]}`}
                >
                  <NodeIcon
                    nodeId={node.id}
                    size={28}
                    useNodeColor
                    weight="duotone"
                  />
                  <p className="mt-auto text-lg font-serif text-white">
                    {node.name[locale as Locale]}
                  </p>
                </a>
              </ScrollReveal>
            ))}

            {/* Row 2: 2 more nodes (left art carries over via row-span) */}
            {nodes.slice(2, 4).map((node, i) => (
              <ScrollReveal key={node.id} delay={(i + 2) * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex flex-col justify-between p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-200 aspect-square md:aspect-auto md:h-full ${nodeGlowBorder[node.id]}`}
                >
                  <NodeIcon
                    nodeId={node.id}
                    size={28}
                    useNodeColor
                    weight="duotone"
                  />
                  <p className="mt-auto text-lg font-serif text-white">
                    {node.name[locale as Locale]}
                  </p>
                </a>
              </ScrollReveal>
            ))}

            {/* Row 3: 2 nodes + large art */}
            {nodes.slice(4, 6).map((node, i) => (
              <ScrollReveal key={node.id} delay={(i + 4) * 0.08}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className={`group flex flex-col justify-between p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-200 aspect-square md:aspect-auto md:h-full ${nodeGlowBorder[node.id]}`}
                >
                  <NodeIcon
                    nodeId={node.id}
                    size={28}
                    useNodeColor
                    weight="duotone"
                  />
                  <p className="mt-auto text-lg font-serif text-white">
                    {node.name[locale as Locale]}
                  </p>
                </a>
              </ScrollReveal>
            ))}

            <div className="md:row-span-1 relative aspect-[3/4] md:aspect-auto rounded-2xl overflow-hidden">
              <ScrollReveal className="h-full">
                <Image
                  src={bentoArt[1].src}
                  alt={bentoArt[1].alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY — single callout ── */}
      <section className="bg-onyx py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="backdrop-blur-xl border border-white/[0.08] bg-white/[0.04] rounded-3xl px-10 py-16 md:px-16 md:py-24 text-center">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.philosophy.line}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ART STRIP ── */}
      <section className="bg-deep py-4 md:py-5 px-4 md:px-5">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {artStripImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt[locale as Locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/20 transition-colors duration-300 rounded-2xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── PORTAL CTA — glassmorphic card ── */}
      <section className="bg-deep py-32 md:py-48 px-6 md:px-12 lg:px-20">
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
