import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { pageImages, artImages } from '@/content/framework/images'
import { Path, LockKey, ChartLine, MusicNotes } from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'

const featureIcons = [Path, LockKey, ChartLine, MusicNotes] as const

const content = {
  en: {
    transition: {
      label: 'From light into dark',
      heading: 'you are crossing a threshold.',
      body: 'The public side is education. The portal is something else entirely. A private space for inner work.',
    },
    hero: {
      label: 'Coming soon',
      heading: 'the portal\nis being built.',
      body: 'A private, encrypted space for preparation, experience, and integration.',
    },
    features: [
      {
        title: 'Preparation pathways',
        description:
          'Guided protocols across all six nodes. Personalized to your experience, intentions, and timeline.',
      },
      {
        title: 'Encrypted journal',
        description:
          'End-to-end encrypted. Nobody reads this but you.',
      },
      {
        title: 'Integration tracking',
        description:
          'Map progress across the six domains. See patterns. Track the real work after the experience.',
      },
      {
        title: 'Music companion',
        description:
          'Curated playlists for ceremony, meditation, and integration.',
      },
    ],
    cta: {
      heading: 'be the first to enter.',
      body: 'Leave your email. One message when the portal opens. No spam.',
      placeholder: 'your@email.com',
      button: 'Join the Waitlist',
    },
  },
  es: {
    transition: {
      label: 'De la luz a la oscuridad',
      heading: 'estás cruzando un umbral.',
      body: 'El lado público es educación. El portal es algo completamente diferente. Un espacio privado para el trabajo interior.',
    },
    hero: {
      label: 'Próximamente',
      heading: 'el portal\nse está construyendo.',
      body: 'Un espacio privado y encriptado para preparación, experiencia e integración.',
    },
    features: [
      {
        title: 'Caminos de preparación',
        description:
          'Protocolos guiados a través de los seis nodos. Personalizados según tu experiencia, intenciones y cronograma.',
      },
      {
        title: 'Diario encriptado',
        description:
          'Cifrado de extremo a extremo. Nadie lee esto más que tú.',
      },
      {
        title: 'Seguimiento de integración',
        description:
          'Mapea tu progreso a través de los seis dominios. Ve patrones. Rastrea el trabajo real.',
      },
      {
        title: 'Compañero musical',
        description:
          'Playlists curados para ceremonias, meditación e integración.',
      },
    ],
    cta: {
      heading: 'sé el primero en entrar.',
      body: 'Deja tu correo. Un mensaje cuando el portal abra. Sin spam.',
      placeholder: 'tu@correo.com',
      button: 'Unirse a la Lista',
    },
  },
}

export default async function PortalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]

  return (
    <>
      {/* ── TRANSITION ── */}
      <section className="relative py-[var(--space-section)] bg-forest">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                {t.transition.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.transition.heading}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-lg text-cloud/60 font-light leading-relaxed">
                {t.transition.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* gradient fade deeper into dark */}
      <div className="relative h-[240px]" style={{ background: 'linear-gradient(to bottom, var(--color-forest) 0%, var(--color-deep) 100%)' }} />

      {/* ── HERO: dark portal aesthetic ── */}
      <section className="relative bg-deep text-cloud min-h-[80dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src={pageImages.portal.src}
            alt=""
            className="h-full w-full"
            speed={0.08}
            overlay="bg-deep/80"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-32 md:py-40 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 lg:col-span-7">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/40 mb-8 font-sans">
                {t.hero.label}
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-white">
                {t.hero.heading}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-cloud/50 font-light leading-relaxed max-w-[50ch]">
                {t.hero.body}
              </p>
            </div>
            <div className="hidden md:block md:col-span-4 lg:col-span-5" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-deep text-cloud">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-[var(--space-section-lg)]">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/30 mb-16 md:mb-24 font-sans">
            {locale === 'en' ? 'What awaits inside' : 'Lo que espera adentro'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.features.map((feature, i) => {
              const FeatureIcon = featureIcons[i]
              const isWide = i === 0 || i === 3
              return (
                <ScrollReveal key={i} variant="fade-up" delay={i * 0.1} className={isWide ? 'md:col-span-2' : ''}>
                  <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.05] h-full">
                    <div className="rounded-[calc(1.75rem-0.375rem)] bg-teal/30 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] h-full">
                      <FeatureIcon size={32} weight="duotone" className="text-sage mb-6" />
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-xs text-cloud/20 font-sans tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[-0.01em] text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-cloud/40 font-light leading-relaxed pl-10 max-w-[45ch]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ART BREAK ── */}
      <ParallaxImage
        src={artImages.ascendingFigures.src}
        alt={artImages.ascendingFigures.alt[locale as Locale]}
        className="h-[35vh]"
        speed={0.08}
        overlay="bg-deep/40"
      />

      {/* ── WAITLIST CTA ── */}
      <section className="bg-deep text-cloud border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-[var(--space-section-lg)]">
          <ScrollReveal variant="scale">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-white mb-6">
                {t.cta.heading}
              </h2>
              <p className="text-lg text-cloud/40 font-light leading-relaxed mb-12">
                {t.cta.body}
              </p>
              <form action="#" className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.cta.placeholder}
                  className="flex-1 bg-white/[0.06] border border-white/[0.1] rounded-xl px-5 py-4 text-sm text-cloud placeholder:text-cloud/30 font-light focus:outline-none focus:border-mint/50 focus:ring-2 focus:ring-mint/20 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-7 py-4 text-sm tracking-[0.08em] uppercase font-sans font-medium rounded-xl bg-mint text-deep hover:bg-mint/90 transition-colors active:scale-[0.98] duration-150"
                >
                  {t.cta.button}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
