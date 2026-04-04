import { setRequestLocale } from 'next-intl/server'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { nodes } from '@/content/framework/nodes'
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
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-[0.95] tracking-[-0.03em] whitespace-pre-line text-white">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cloud/60 font-light max-w-[30ch]">
            {t.hero.subtitle}
          </p>
          <div className="mt-12">
            <Button href={`/${locale}/framework`}>{t.hero.cta}</Button>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK NODES ── */}
      <section className="bg-forest py-24 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.2em] uppercase text-sage font-sans mb-4">
              {t.framework.label}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {nodes.map((node, i) => (
              <ScrollReveal key={node.id} delay={i * 0.06}>
                <a
                  href={`/${locale}/framework/${node.id}`}
                  className="group flex items-center gap-5 bg-teal/50 hover:bg-teal/50 rounded-xl p-5 transition-colors duration-300"
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
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY LINE ── */}
      <section className="bg-deep py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl font-light leading-[1.15] tracking-[-0.01em] text-cloud/60 max-w-[20ch] mx-auto">
            {t.philosophy}
          </p>
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
            <Button href={`/${locale}/portal`}>{t.cta.button}</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
