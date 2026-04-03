import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Callout } from '@/components/ui/Callout'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { CountUp } from '@/components/ui/CountUp'
import { papers, organizations, books } from '@/content/framework/sources'
import { artImages } from '@/content/framework/images'
import {
  BookOpenText,
  Buildings,
  TreeStructure,
  ArrowsClockwise,
  MusicNotes,
  Compass,
  Sparkle,
  Flask,
  HandHeart,
} from '@phosphor-icons/react/dist/ssr'
import type { Locale, Source } from '@/types'
import type { Icon } from '@phosphor-icons/react'

const findingIcons: Icon[] = [ArrowsClockwise, MusicNotes, Compass, Sparkle]

const orgIconMap: Record<string, Icon> = {
  'johns-hopkins': Flask,
  maps: Flask,
  'fireside-project': HandHeart,
  chacruna: HandHeart,
}

const content = {
  en: {
    hero: {
      label: 'Evidence base',
      title: 'the evidence base',
      subtitle:
        'Every practice, every prompt, and every recommendation in this framework is grounded in published research, established therapeutic models, and decades of clinical observation. Not opinion. Not ideology. Evidence.',
    },
    findings: {
      label: 'What the research shows',
      items: [
        {
          heading: 'Integration determines outcomes.',
          body: 'The psychedelic experience opens a window of neuroplasticity. What happens in the days and weeks after determines whether insights become lasting change or fade into memory. Bathje et al. (2022) established integration as a distinct clinical practice, not an afterthought.',
        },
        {
          heading: 'Music is not background. It is therapy.',
          body: 'Kaelen et al. (2018) demonstrated that music plays a central, active role in psychedelic therapy. Specific musical features support the emergence of mystical experiences, emotional breakthroughs, and meaning-making. Barrett et al. (2017) identified the qualities that matter most.',
        },
        {
          heading: 'Set and setting shape everything.',
          body: 'Johnson et al. (2008) codified the safety guidelines that every modern clinical trial follows. Preparation of mindset, physical environment, and interpersonal trust are not preferences. They are determinants of safety and therapeutic outcome.',
        },
        {
          heading: 'Mystical experience predicts lasting benefit.',
          body: 'Across studies at Johns Hopkins and Imperial College London, the depth of mystical experience during a session is the strongest predictor of long-term positive outcomes. Carhart-Harris and Friston (2019) proposed the REBUS model to explain why: psychedelics relax the brain\'s top-down predictions, allowing new patterns to emerge.',
        },
      ],
    },
    stats: {
      papers: 'published papers',
      orgs: 'organizations',
      frameworks: 'therapeutic frameworks synthesized',
    },
    research: {
      label: 'Published research',
      heading: 'The papers behind the framework',
      subtitle:
        'Peer-reviewed research that directly informed the design of the Mycelial Network integration model.',
    },
    orgs: {
      label: 'Organizations',
      heading: 'Leading the field',
      items: {
        'johns-hopkins':
          'The leading academic research center for psychedelic science. Their work on psilocybin for depression, end-of-life anxiety, and smoking cessation has shaped the modern evidence base.',
        maps: 'Pioneered the path to FDA approval for MDMA-assisted therapy. Three decades of clinical trials, therapist training programs, and policy advocacy.',
        'fireside-project':
          'Free peer support for people during and after psychedelic experiences. Their helpline model demonstrates that integration support does not require clinical settings.',
        chacruna:
          'Bridges indigenous knowledge and psychedelic science. Advocates for cultural reciprocity, informed consent, and the rights of traditional medicine practitioners.',
      } as Record<string, string>,
    },
    books: {
      label: 'Recommended reading',
      heading: 'Books that shaped this work',
      subtitle:
        'Essential reading for anyone exploring psychedelic preparation and integration.',
    },
  },
  es: {
    hero: {
      label: 'Base de evidencia',
      title: 'la base de evidencia',
      subtitle:
        'Cada practica, cada pregunta y cada recomendacion en este marco esta fundamentada en investigacion publicada, modelos terapeuticos establecidos y decadas de observacion clinica. No opinion. No ideologia. Evidencia.',
    },
    findings: {
      label: 'Lo que muestra la investigacion',
      items: [
        {
          heading: 'La integracion determina los resultados.',
          body: 'La experiencia psicodelica abre una ventana de neuroplasticidad. Lo que sucede en los dias y semanas posteriores determina si las percepciones se convierten en cambios duraderos o se desvanecen en la memoria. Bathje et al. (2022) establecio la integracion como una practica clinica distinta, no un agregado.',
        },
        {
          heading: 'La musica no es fondo. Es terapia.',
          body: 'Kaelen et al. (2018) demostro que la musica juega un rol central y activo en la terapia psicodelica. Caracteristicas musicales especificas apoyan la emergencia de experiencias misticas, avances emocionales y construccion de significado. Barrett et al. (2017) identifico las cualidades que mas importan.',
        },
        {
          heading: 'Set y setting moldean todo.',
          body: 'Johnson et al. (2008) codifico las guias de seguridad que sigue cada ensayo clinico moderno. La preparacion de la mentalidad, el entorno fisico y la confianza interpersonal no son preferencias. Son determinantes de la seguridad y el resultado terapeutico.',
        },
        {
          heading: 'La experiencia mistica predice el beneficio duradero.',
          body: 'A traves de estudios en Johns Hopkins e Imperial College London, la profundidad de la experiencia mistica durante una sesion es el predictor mas fuerte de resultados positivos a largo plazo. Carhart-Harris y Friston (2019) propusieron el modelo REBUS para explicar por que: los psicodelicos relajan las predicciones descendentes del cerebro, permitiendo que emerjan nuevos patrones.',
        },
      ],
    },
    stats: {
      papers: 'estudios publicados',
      orgs: 'organizaciones',
      frameworks: 'marcos terapeuticos sintetizados',
    },
    research: {
      label: 'Investigacion publicada',
      heading: 'Los estudios detras del marco',
      subtitle:
        'Investigacion revisada por pares que informo directamente el diseno del modelo de integracion de la Red Micelial.',
    },
    orgs: {
      label: 'Organizaciones',
      heading: 'Liderando el campo',
      items: {
        'johns-hopkins':
          'El centro de investigacion academica lider en ciencia psicodelica. Su trabajo con psilocibina para depresion, ansiedad al final de la vida y cesacion del tabaquismo ha moldeado la base de evidencia moderna.',
        maps: 'Pioneros en el camino hacia la aprobacion de la FDA para terapia asistida con MDMA. Tres decadas de ensayos clinicos, programas de formacion de terapeutas y defensa de politicas.',
        'fireside-project':
          'Apoyo gratuito entre pares para personas durante y despues de experiencias psicodelicas. Su modelo de linea de ayuda demuestra que el apoyo de integracion no requiere entornos clinicos.',
        chacruna:
          'Puente entre el conocimiento indigena y la ciencia psicodelica. Aboga por la reciprocidad cultural, el consentimiento informado y los derechos de los practicantes de medicina tradicional.',
      } as Record<string, string>,
    },
    books: {
      label: 'Lectura recomendada',
      heading: 'Libros que dieron forma a este trabajo',
      subtitle:
        'Lectura esencial para cualquiera que explore la preparacion e integracion psicodelica.',
    },
  },
}

function PaperEntry({ source, index }: { source: Source; index: number }) {
  return (
    <ScrollReveal variant="fade-up" delay={index * 0.04}>
      <li className="group py-6 border-b border-ink/[0.06] last:border-b-0">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity duration-200 hover:opacity-70"
        >
          <p className="font-serif text-xl md:text-2xl font-light leading-[1.3] tracking-[-0.01em]">
            {source.title}
          </p>
          <p className="mt-2 text-sm text-ink-muted font-sans font-light">
            {source.authors} ({source.year})
          </p>
        </a>
      </li>
    </ScrollReveal>
  )
}

function OrgEntry({
  source,
  description,
}: {
  source: Source
  description: string
}) {
  const OrgIcon = orgIconMap[source.id] ?? Flask
  return (
    <div className="py-8 border-b border-ink/[0.06] last:border-b-0">
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-opacity duration-200 hover:opacity-70"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-ink/[0.04]">
            <OrgIcon size={20} weight="duotone" className="text-moss" />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.2] tracking-[-0.01em]">
              {source.title}
            </h3>
            <p className="mt-3 text-base text-ink-muted font-sans font-light leading-relaxed max-w-[60ch]">
              {description}
            </p>
            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-moss font-sans">
              {source.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

function BookEntry({ source }: { source: Source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block py-6 border-b border-ink/[0.06] last:border-b-0 transition-opacity duration-200 hover:opacity-70"
    >
      <p className="font-serif text-xl md:text-2xl font-light leading-[1.3] tracking-[-0.01em]">
        {source.title}
      </p>
      <p className="mt-2 text-sm text-ink-muted font-sans font-light">
        {source.authors} ({source.year})
      </p>
    </a>
  )
}

export default async function SciencePage({
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
      <Section spacing="none" className="min-h-[70dvh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-32 md:py-40">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em]">
              {t.hero.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-muted font-sans font-light leading-relaxed max-w-[55ch]">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </Section>

      {/* ── KEY FINDINGS ── */}
      <ScrollReveal variant="slide-right">
        <Section spacing="lg" className="bg-sand">
          <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-16 md:mb-24 font-sans">
            {t.findings.label}
          </p>

          {/* ── STATS BAR ── */}
          <div className="grid grid-cols-3 gap-8 mb-20 md:mb-28 border-b border-ink/[0.06] pb-16">
            <div className="text-center flex flex-col items-center">
              <BookOpenText size={28} weight="duotone" className="text-moss mb-4" />
              <p className="font-serif text-5xl md:text-6xl font-light leading-none tracking-[-0.02em]">
                <CountUp value={18} suffix="+" />
              </p>
              <p className="mt-3 text-xs tracking-[0.15em] uppercase text-ink-muted font-sans">
                {t.stats.papers}
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Buildings size={28} weight="duotone" className="text-moss mb-4" />
              <p className="font-serif text-5xl md:text-6xl font-light leading-none tracking-[-0.02em]">
                <CountUp value={13} />
              </p>
              <p className="mt-3 text-xs tracking-[0.15em] uppercase text-ink-muted font-sans">
                {t.stats.orgs}
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <TreeStructure size={28} weight="duotone" className="text-moss mb-4" />
              <p className="font-serif text-5xl md:text-6xl font-light leading-none tracking-[-0.02em]">
                <CountUp value={6} />
              </p>
              <p className="mt-3 text-xs tracking-[0.15em] uppercase text-ink-muted font-sans">
                {t.stats.frameworks}
              </p>
            </div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {t.findings.items.map((item, i) => {
              const FindingIcon = findingIcons[i]
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline"
                >
                  <div className="md:col-span-1">
                    <div className="flex flex-col items-start gap-3">
                      <FindingIcon size={32} weight="duotone" className="text-moss" />
                      <span className="font-sans text-5xl md:text-6xl font-light text-ink/10 tabular-nums leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-7 lg:col-span-6">
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] italic">
                      {item.heading}
                    </h3>
                  </div>
                  <div className="md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9">
                    <p className="text-base text-ink-muted font-sans font-light leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>
      </ScrollReveal>

      {/* ── ART IMAGE BREAK ── */}
      <ParallaxImage
        src={artImages.radiantSilhouette.src}
        alt={artImages.radiantSilhouette.alt[locale as Locale]}
        className="h-[40vh]"
        speed={0.1}
        overlay="bg-cream/40"
      />

      {/* ── PUBLISHED RESEARCH ── */}
      <ScrollReveal variant="fade-up">
        <Section spacing="lg" className="border-t border-ink/[0.06]">
          <SectionHeader
            label={t.research.label}
            heading={t.research.heading}
            subtitle={t.research.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-9 lg:col-span-8">
              <ul>
                {papers.map((paper, index) => (
                  <PaperEntry key={paper.id} source={paper} index={index} />
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </ScrollReveal>

      {/* ── ORGANIZATIONS ── */}
      <ScrollReveal variant="slide-left">
        <Section spacing="lg" className="bg-sand">
          <SectionHeader
            label={t.orgs.label}
            heading={t.orgs.heading}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {organizations.map((org) => (
              <OrgEntry
                key={org.id}
                source={org}
                description={t.orgs.items[org.id] ?? ''}
              />
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* ── BOOKS ── */}
      <ScrollReveal variant="fade-in">
        <Section spacing="lg" className="border-t border-ink/[0.06]">
          <SectionHeader
            label={t.books.label}
            heading={t.books.heading}
            subtitle={t.books.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-9 lg:col-span-8">
              {books.map((book) => (
                <BookEntry key={book.id} source={book} />
              ))}
            </div>
          </div>
        </Section>
      </ScrollReveal>
    </>
  )
}
