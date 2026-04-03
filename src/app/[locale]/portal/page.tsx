import { setRequestLocale } from 'next-intl/server'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/types'

const content = {
  en: {
    transition: {
      label: 'From light into dark',
      heading: 'you are crossing a threshold.',
      body: 'The public side of Umbral is education and orientation. The portal is something else entirely. A private space designed for the inner work. The shift from light to dark mirrors the journey from learning about psychedelics to working with them.',
    },
    hero: {
      label: 'Coming soon',
      heading: 'the portal\nis being built.',
      body: 'A private, encrypted space for the work that matters most: preparation, experience, and integration. Built for people who take this seriously.',
    },
    features: [
      {
        title: 'Preparation pathways',
        description:
          'Guided protocols across all six nodes of the Mycelial Network. Personalized to your experience level, intentions, and timeline.',
      },
      {
        title: 'Encrypted journal',
        description:
          'Your reflections belong to you. End-to-end encrypted journaling designed for the vulnerability this work requires. Nobody reads this but you.',
      },
      {
        title: 'Integration tracking',
        description:
          'Map your progress across the six domains over time. See patterns. Notice what shifts. Track the real work that happens after the experience.',
      },
      {
        title: 'Music companion',
        description:
          'Curated playlists and soundscapes for ceremony, meditation, and integration. Because what you listen to during the experience matters.',
      },
    ],
    cta: {
      heading: 'be the first to enter.',
      body: 'Leave your email. We will notify you when the portal opens. No spam. No sharing. Just a single message when it is time.',
      placeholder: 'your@email.com',
      button: 'Join the Waitlist',
    },
  },
  es: {
    transition: {
      label: 'De la luz a la oscuridad',
      heading: 'estás cruzando un umbral.',
      body: 'El lado público de Umbral es educación y orientación. El portal es algo completamente diferente. Un espacio privado diseñado para el trabajo interior. El cambio de luz a oscuridad refleja el viaje de aprender sobre psicodélicos a trabajar con ellos.',
    },
    hero: {
      label: 'Próximamente',
      heading: 'el portal\nse está construyendo.',
      body: 'Un espacio privado y encriptado para el trabajo que más importa: preparación, experiencia e integración. Construido para personas que toman esto en serio.',
    },
    features: [
      {
        title: 'Caminos de preparación',
        description:
          'Protocolos guiados a través de los seis nodos de la Red Micelial. Personalizados según tu nivel de experiencia, intenciones y cronograma.',
      },
      {
        title: 'Diario encriptado',
        description:
          'Tus reflexiones te pertenecen. Diario con encriptación de extremo a extremo, diseñado para la vulnerabilidad que este trabajo requiere. Nadie lee esto más que tú.',
      },
      {
        title: 'Seguimiento de integración',
        description:
          'Mapea tu progreso a través de los seis dominios con el tiempo. Ve patrones. Nota qué cambia. Rastrea el trabajo real que sucede después de la experiencia.',
      },
      {
        title: 'Compañero musical',
        description:
          'Playlists y paisajes sonoros curados para ceremonias, meditación e integración. Porque lo que escuchas durante la experiencia importa.',
      },
    ],
    cta: {
      heading: 'sé el primero en entrar.',
      body: 'Deja tu correo. Te notificaremos cuando el portal abra. Sin spam. Sin compartir. Solo un mensaje cuando sea el momento.',
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
      {/* ── TRANSITION: light to dark ── */}
      <section className="relative py-[var(--space-section)] bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4 font-sans">
                {t.transition.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em]">
                {t.transition.heading}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-lg text-ink/60 font-light leading-relaxed">
                {t.transition.body}
              </p>
            </div>
          </div>
        </div>
        {/* gradient fade from cream to forest-deep */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-forest-deep" />
      </section>

      {/* ── HERO: dark portal aesthetic ── */}
      <section className="bg-forest-deep text-ivory min-h-[80dvh] flex items-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-32 md:py-40 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 lg:col-span-7">
              <p className="text-xs tracking-[0.2em] uppercase text-ivory/40 mb-8 font-sans">
                {t.hero.label}
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-ivory">
                {t.hero.heading}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-ivory/50 font-light leading-relaxed max-w-[50ch]">
                {t.hero.body}
              </p>
            </div>
            <div className="hidden md:block md:col-span-4 lg:col-span-5" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-forest-deep text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-[var(--space-section-lg)]">
          <p className="text-xs tracking-[0.2em] uppercase text-ivory/30 mb-16 md:mb-24 font-sans">
            {locale === 'en' ? 'What awaits inside' : 'Lo que espera adentro'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24">
            {t.features.map((feature, i) => (
              <div key={i} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-xs text-ivory/20 font-sans tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[-0.01em] text-ivory/90">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-ivory/40 font-light leading-relaxed pl-10 max-w-[45ch]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST CTA ── */}
      <section className="bg-forest-deep text-ivory border-t border-ivory/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-[var(--space-section-lg)]">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-ivory mb-6">
              {t.cta.heading}
            </h2>
            <p className="text-lg text-ivory/40 font-light leading-relaxed mb-12">
              {t.cta.body}
            </p>
            <form action="#" className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder={t.cta.placeholder}
                className="flex-1 bg-ivory/[0.05] border border-ivory/[0.08] rounded-full px-6 py-3 text-sm text-ivory placeholder:text-ivory/25 font-light focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-7 py-3 text-sm tracking-[0.08em] uppercase font-sans font-normal rounded-full bg-gold text-forest-deep hover:bg-gold/90 transition-colors active:scale-[0.98] transition-transform duration-150"
              >
                {t.cta.button}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
