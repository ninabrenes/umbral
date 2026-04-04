import { setRequestLocale } from 'next-intl/server'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { pageImages } from '@/content/framework/images'
import { Path, LockKey, ChartLine, MusicNotes } from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'

const featureIcons = [Path, LockKey, ChartLine, MusicNotes] as const

const content = {
  en: {
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
      {/* ── 1. HERO (bg-deep with parallax) ── */}
      <section className="relative bg-deep text-cloud min-h-[80dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src={pageImages.portal.src}
            alt=""
            className="h-full w-full"
            speed={0.08}
            overlay="bg-deep/70"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-32 md:py-40 w-full">
          <div className="md:max-w-[60%]">
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/40 mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-white">
              {t.hero.heading}
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-cloud/50 font-light leading-relaxed max-w-[50ch]">
              {t.hero.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURES (bg-deep, 2x2 grid) ── */}
      <section className="bg-deep text-cloud">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-[var(--space-section-lg)]">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/30 mb-16 md:mb-24 font-sans">
            {locale === 'en' ? 'What awaits inside' : 'Lo que espera adentro'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.features.map((feature, i) => {
              const FeatureIcon = featureIcons[i]
              return (
                <ScrollReveal key={i} variant="fade-up" delay={i * 0.1}>
                  <div className="rounded-2xl bg-forest p-8 h-full">
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
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. WAITLIST (bg-deep) ── */}
      <section className="bg-deep text-cloud border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-[var(--space-section)]">
          <ScrollReveal variant="fade-up">
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
                  className="flex-1 bg-forest border border-white/[0.04] rounded-xl px-5 py-4 text-sm text-cloud placeholder:text-cloud/30 font-light focus:outline-none focus:border-mint/50 focus:ring-2 focus:ring-mint/20 transition-colors"
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
