import { setRequestLocale } from 'next-intl/server'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import { nodes } from '@/content/framework/nodes'
import { artImages } from '@/content/framework/images'
import { NodeIcon } from '@/components/framework/NodeIcon'
import type { Locale } from '@/types'

const content = {
  en: {
    hero: {
      title: 'preparation.\nexperience.\nintegration.',
      subtitle: 'the network that connects it all.',
      cta: 'Explore the Framework',
    },
    framework: { label: 'The Mycelial Network' },
    philosophy: 'Integration is 80% of the value.',
    cta: {
      heading: 'The portal is being built.',
      subtitle: 'A private space for preparation, encrypted journaling, and integration tracking.',
      button: 'Join the Waitlist',
    },
  },
  es: {
    hero: {
      title: 'preparación.\nexperiencia.\nintegración.',
      subtitle: 'la red que lo conecta todo.',
      cta: 'Explorar el Marco',
    },
    framework: { label: 'La Red Micelial' },
    philosophy: 'La integración es el 80% del valor.',
    cta: {
      heading: 'El portal se está construyendo.',
      subtitle: 'Un espacio privado para preparación, diario encriptado y seguimiento de integración.',
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
      <section className="relative min-h-[100dvh] flex items-center bg-deep overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-deep/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-32 md:py-40">
          <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.95] tracking-[-0.03em] whitespace-pre-line text-white">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cloud/60 font-light max-w-[30ch]">
            {t.hero.subtitle}
          </p>
          <div className="mt-12">
            <a
              href={`/${locale}/framework`}
              className="group inline-flex items-center gap-2 pl-7 pr-2 py-3 text-sm font-sans tracking-[0.04em] bg-mint text-deep rounded-full hover:bg-mint/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              {t.hero.cta}
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-deep/15 group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2"/></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK NODES ── */}
      <section className="bg-forest py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.2em] uppercase text-sage font-sans mb-12">
              {t.framework.label}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large art card */}
            <ScrollReveal className="md:col-span-5 md:row-span-2">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[320px] md:min-h-[440px]">
                <Image
                  src={artImages.cosmicNebula.src}
                  alt={artImages.cosmicNebula.alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Node cards — consistent style, 3 per row beside the art */}
            {nodes.slice(0, 3).map((node, i) => (
              <ScrollReveal key={node.id} className="md:col-span-7" delay={i * 0.06}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className="group flex items-center gap-5 bg-teal/30 hover:bg-teal/50 rounded-xl p-5 transition-colors duration-300"
                >
                  <div className="shrink-0">
                    <NodeIcon nodeId={node.id} size={28} useNodeColor weight="duotone" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg text-white group-hover:text-mint transition-colors duration-300">
                      {node.name[locale as Locale]}
                    </h3>
                    <p className="text-sm text-cloud/50 font-light mt-0.5">
                      {node.tagline[locale as Locale]}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            {/* Remaining 3 nodes + second art card */}
            {nodes.slice(3).map((node, i) => (
              <ScrollReveal key={node.id} className="md:col-span-7" delay={0.2 + i * 0.06}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className="group flex items-center gap-5 bg-teal/30 hover:bg-teal/50 rounded-xl p-5 transition-colors duration-300"
                >
                  <div className="shrink-0">
                    <NodeIcon nodeId={node.id} size={28} useNodeColor weight="duotone" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg text-white group-hover:text-mint transition-colors duration-300">
                      {node.name[locale as Locale]}
                    </h3>
                    <p className="text-sm text-cloud/50 font-light mt-0.5">
                      {node.tagline[locale as Locale]}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            <ScrollReveal className="md:col-span-5 md:row-span-2">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[320px] md:min-h-[440px]">
                <Image
                  src={artImages.psychedelicSwirls.src}
                  alt={artImages.psychedelicSwirls.alt[locale as Locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY — full-bleed art moment ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={artImages.handsReaching.src}
          alt={artImages.handsReaching.alt[locale as Locale]}
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep/60" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
          <ScrollReveal variant="scale">
            <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-[-0.01em] text-white text-center max-w-[20ch] mx-auto">
              {t.philosophy}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PORTAL CTA ── */}
      <section className="bg-teal py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white mb-4">
              {t.cta.heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-cloud/60 font-light mb-10 max-w-[45ch]">
              {t.cta.subtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <a
              href={`/${locale}/portal`}
              className="group inline-flex items-center gap-2 pl-7 pr-2 py-3 text-sm font-sans tracking-[0.04em] bg-mint text-deep rounded-full hover:bg-mint/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              {t.cta.button}
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-deep/15 group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2"/></svg>
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
