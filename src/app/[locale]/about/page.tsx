import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { pageImages } from '@/content/framework/images'
import {
  X,
  Check,
  GithubLogo,
  GitBranch,
  HandsPraying,
  HandHeart,
  Scales,
  Compass,
  Gavel,
  Bandaids,
  TreeEvergreen,
  Handshake,
} from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'

const content = {
  en: {
    hero: {
      label: 'About',
      heading: 'about umbral',
      body: 'Free, open-source, bilingual psychedelic preparation and integration portal. Evidence-informed. Culturally grounded. Privacy-first.',
      not: [
        'Not medical advice.',
        'Not a ceremony simulator.',
        'Not gamified self-improvement.',
      ],
      is: 'A tool for people who take this work seriously.',
    },
    mycelial: {
      label: 'The Framework',
      heading: 'The Mycelial Network',
      body: 'Beneath every forest, mycelium connects the trees. Nutrients flow. Signals pass between organisms separated by hundreds of meters.',
      body2: 'Six nodes, each a domain of human experience, connected the way mycelium connects a forest. When one shifts, the others respond.',
    },
    openSource: {
      label: 'Open Source',
      heading: 'Transparency as trust.',
      body: 'MIT-licensed and community-built. Every line of code is public. Every design decision is auditable.',
      cta: 'View on GitHub',
    },
    reciprocity: {
      label: 'Indigenous Reciprocity',
      heading: 'These practices have roots.',
      intro: 'Psychedelic medicines have been held, protected, and transmitted for centuries by Indigenous communities, including the Mazatec, Shipibo-Conibo, and Wixárika peoples, among many others.',
      body: 'Umbral exists because these traditions exist. The current psychedelic renaissance owes a debt that cannot be repaid with citations alone.',
      principles: {
        heading: 'The 8 Principles',
        intro: 'From The Lancet, for ethical engagement with Indigenous psychedelic knowledge:',
        items: [
          { name: 'Reverence', desc: 'Sacred respect for traditional knowledge.' },
          { name: 'Respect', desc: 'Honoring intellectual and cultural property.' },
          { name: 'Responsibility', desc: 'Accountability for impact on communities.' },
          { name: 'Relevance', desc: 'Benefits reaching communities of origin.' },
          { name: 'Regulation', desc: 'Indigenous self-governance over sacred practices.' },
          { name: 'Reparation', desc: 'Material repair for historical extraction.' },
          { name: 'Restoration', desc: 'Returning knowledge, land, and sovereignty.' },
          { name: 'Reconciliation', desc: 'Relationships rooted in truth and equity.' },
        ],
      },
      closing: 'Words on a page are insufficient. But silence is worse. We commit to directing resources toward the communities who have carried this knowledge.',
      cta: 'Indigenous Reciprocity Initiative',
    },
    contribute: {
      label: 'Contribute',
      heading: 'Build with us.',
      body: 'Umbral grows through contributions from developers, designers, researchers, translators, and people with lived experience.',
      github: 'Contribute on GitHub',
      contact: 'Or reach out directly at',
      email: 'hello@umbral.earth',
    },
  },
  es: {
    hero: {
      label: 'Acerca de',
      heading: 'sobre umbral',
      body: 'Portal gratuito, de código abierto y bilingüe para preparación e integración psicodélica. Informado por evidencia. Culturalmente fundamentado. Privacidad primero.',
      not: [
        'No es asesoría médica.',
        'No es un simulador de ceremonias.',
        'No es auto-mejora gamificada.',
      ],
      is: 'Una herramienta para quienes toman este trabajo en serio.',
    },
    mycelial: {
      label: 'El Marco',
      heading: 'La Red Micelial',
      body: 'Debajo de cada bosque, el micelio conecta los árboles. Los nutrientes fluyen. Las señales pasan entre organismos separados por cientos de metros.',
      body2: 'Seis nodos, cada uno un dominio de la experiencia humana, conectados como el micelio conecta un bosque. Cuando uno cambia, los otros responden.',
    },
    openSource: {
      label: 'Código Abierto',
      heading: 'Transparencia como confianza.',
      body: 'Licencia MIT, construido por la comunidad. Cada línea de código es pública. Cada decisión de diseño es auditable.',
      cta: 'Ver en GitHub',
    },
    reciprocity: {
      label: 'Reciprocidad Indígena',
      heading: 'Estas prácticas tienen raíces.',
      intro: 'Las medicinas psicodélicas han sido custodiadas y transmitidas durante siglos por comunidades indígenas, incluyendo los pueblos Mazateco, Shipibo-Conibo y Wixárika, entre muchos otros.',
      body: 'Umbral existe porque estas tradiciones existen. El renacimiento psicodélico actual tiene una deuda que no se puede pagar solo con citas.',
      principles: {
        heading: 'Los 8 Principios',
        intro: 'De The Lancet, para el compromiso ético con el conocimiento psicodélico indígena:',
        items: [
          { name: 'Reverencia', desc: 'Respeto sagrado por el conocimiento tradicional.' },
          { name: 'Respeto', desc: 'Honrar la propiedad intelectual y cultural.' },
          { name: 'Responsabilidad', desc: 'Rendición de cuentas por el impacto en comunidades.' },
          { name: 'Relevancia', desc: 'Beneficios que lleguen a las comunidades de origen.' },
          { name: 'Regulación', desc: 'Autogobernanza indígena sobre prácticas sagradas.' },
          { name: 'Reparación', desc: 'Reparación material por extracción histórica.' },
          { name: 'Restauración', desc: 'Devolver conocimiento, tierra y soberanía.' },
          { name: 'Reconciliación', desc: 'Relaciones enraizadas en verdad y equidad.' },
        ],
      },
      closing: 'Las palabras en una página son insuficientes. Pero el silencio es peor. Nos comprometemos a dirigir recursos hacia las comunidades que han custodiado este conocimiento.',
      cta: 'Iniciativa de Reciprocidad Indígena',
    },
    contribute: {
      label: 'Contribuir',
      heading: 'Construye con nosotros.',
      body: 'Umbral crece con contribuciones de desarrolladores, diseñadores, investigadores, traductores, y personas con experiencia vivida.',
      github: 'Contribuir en GitHub',
      contact: 'O escríbenos directamente a',
      email: 'hello@umbral.earth',
    },
  },
}

const principleIcons = [HandsPraying, HandHeart, Scales, Compass, Gavel, Bandaids, TreeEvergreen, Handshake] as const

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]

  return (
    <>
      {/* ── 1. HERO (bg-deep) ── */}
      <Section spacing="none" className="min-h-[80dvh] flex items-center bg-deep">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start py-32 md:py-40">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.03em] text-white">
              {t.hero.heading}
            </h1>
            <p className="mt-10 md:mt-14 text-lg md:text-xl text-cloud/60 font-light leading-relaxed max-w-[50ch]">
              {t.hero.body}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-16">
            <div className="border-l border-white/[0.04] pl-8">
              <ul className="space-y-3">
                {t.hero.not.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-sm text-cloud/60 font-light leading-relaxed"
                  >
                    <X size={16} weight="duotone" className="text-cloud/30 mt-0.5 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-8 flex items-start gap-2.5 text-sm text-cloud/80 font-light leading-relaxed">
                <Check size={16} weight="duotone" className="text-sage mt-0.5 shrink-0" />
                {t.hero.is}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. THE FRAMEWORK (bg-forest) ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="scale">
          <ParallaxImage
            src={pageImages.about.src}
            alt={pageImages.about.alt[locale as Locale]}
            className="aspect-[16/9] md:aspect-[21/9] rounded-[var(--radius-card)] mb-16"
            speed={0.12}
            overlay="bg-deep/40"
          />
        </ScrollReveal>
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                {t.mycelial.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.mycelial.heading}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-lg text-cloud/60 font-light leading-relaxed mb-6">
                {t.mycelial.body}
              </p>
              <p className="text-lg text-cloud/80 font-light leading-relaxed">
                {t.mycelial.body2}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── 3. OPEN SOURCE + RECIPROCITY (bg-deep) ── */}
      <Section spacing="lg" className="bg-deep text-cloud">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            {/* left: open source */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <GithubLogo size={28} weight="duotone" className="text-cloud/30" />
                <GitBranch size={20} weight="duotone" className="text-cloud/20" />
              </div>
              <SectionHeader
                label={t.openSource.label}
                heading={t.openSource.heading}
              />
              <p className="text-lg text-cloud/60 font-light leading-relaxed mb-10">
                {t.openSource.body}
              </p>
              <Button
                variant="secondary"
                href="https://github.com/ninabrenes/umbral"
              >
                <GithubLogo size={18} weight="duotone" className="inline-block mr-2 -mt-0.5" />
                {t.openSource.cta}
              </Button>
            </div>

            {/* right: reciprocity */}
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-xs tracking-[0.2em] uppercase text-gold/80 mb-4 font-sans">
                {t.reciprocity.label}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white mb-6">
                {t.reciprocity.heading}
              </h3>
              <p className="text-base text-cloud/70 font-light leading-relaxed mb-6">
                {t.reciprocity.intro}
              </p>
              <p className="text-base text-cloud/70 font-light leading-relaxed mb-10">
                {t.reciprocity.body}
              </p>

              {/* compact 8 principles list */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.15em] uppercase text-gold/60 mb-4 font-sans">
                  {t.reciprocity.principles.heading}
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {t.reciprocity.principles.items.map((principle, i) => {
                    const PrincipleIcon = principleIcons[i]
                    return (
                      <div key={principle.name} className="flex items-center gap-2">
                        <PrincipleIcon size={14} weight="duotone" className="text-gold/40 shrink-0" />
                        <span className="text-sm text-cloud/60 font-light">
                          {principle.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <p className="text-sm text-cloud/50 font-light leading-relaxed mb-6">
                {t.reciprocity.closing}
              </p>

              <a
                href="https://chacruna.net/indigenous-reciprocity-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase font-sans text-gold hover:text-gold-muted transition-colors duration-200"
              >
                {t.reciprocity.cta}
                <span aria-hidden="true" className="text-gold/60">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── 4. BUILD WITH US (bg-teal) ── */}
      <Section spacing="lg" className="bg-teal text-cloud">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-xs tracking-[0.2em] uppercase text-gold/80 mb-4 font-sans">
                {t.contribute.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white">
                {t.contribute.heading}
              </h2>
              <p className="mt-8 text-lg text-cloud/60 font-light leading-relaxed max-w-[50ch]">
                {t.contribute.body}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <div className="flex flex-col gap-6">
                <Button
                  variant="primary"
                  href="https://github.com/ninabrenes/umbral"
                >
                  {t.contribute.github}
                </Button>
                <p className="text-sm text-cloud/40 font-light">
                  {t.contribute.contact}{' '}
                  <a
                    href="mailto:hello@umbral.earth"
                    className="text-gold underline underline-offset-4 decoration-gold/30 hover:decoration-gold/60 transition-colors duration-200"
                  >
                    {t.contribute.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
