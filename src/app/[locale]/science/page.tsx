import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { CountUp } from '@/components/ui/CountUp'
import { papers, organizations, books } from '@/content/framework/sources'
import { artImages } from '@/content/framework/images'
import {
  BookOpenText,
  Flask,
  HandHeart,
  Buildings,
  TreeStructure,
  Brain,
  MusicNotes,
  Compass,
  ArrowSquareOut,
} from '@phosphor-icons/react/dist/ssr'
import type { Locale, Source } from '@/types'
import type { Icon } from '@phosphor-icons/react'

/* ── category system ── */

type PaperCategory = 'Therapy' | 'Integration' | 'Neuroscience' | 'Music' | 'Safety' | 'Ethics'

const categoryMap: Record<string, PaperCategory> = {
  'johnson-2008': 'Safety',
  'carhart-harris-2019': 'Neuroscience',
  'kaelen-2018': 'Music',
  'bathje-2022': 'Integration',
  'watts-2020': 'Therapy',
  'brennan-2022': 'Therapy',
  'lyons-2018': 'Neuroscience',
  'barrett-2017': 'Music',
  'lancet-2023': 'Ethics',
}

const categoryOrder: PaperCategory[] = [
  'Therapy',
  'Neuroscience',
  'Music',
  'Integration',
  'Safety',
  'Ethics',
]

const categoryLabels: Record<PaperCategory, { en: string; es: string }> = {
  Therapy: { en: 'Therapy', es: 'Terapia' },
  Integration: { en: 'Integration', es: 'Integracion' },
  Neuroscience: { en: 'Neuroscience', es: 'Neurociencia' },
  Music: { en: 'Music', es: 'Musica' },
  Safety: { en: 'Safety', es: 'Seguridad' },
  Ethics: { en: 'Ethics', es: 'Etica' },
}

const categoryIcons: Record<PaperCategory, Icon> = {
  Therapy: HandHeart,
  Integration: Compass,
  Neuroscience: Brain,
  Music: MusicNotes,
  Safety: Flask,
  Ethics: Buildings,
}

/* ── paper summaries ── */

const paperSummaries: Record<string, { en: string; es: string }> = {
  'johnson-2008': {
    en: 'Codified the safety guidelines every modern clinical trial follows. The foundation of responsible psychedelic research.',
    es: 'Codifico las guias de seguridad que sigue cada ensayo clinico moderno. La base de la investigacion psicodelica responsable.',
  },
  'carhart-harris-2019': {
    en: 'Proposed the REBUS model — psychedelics relax the brain\'s predictive constraints, enabling new patterns of thought.',
    es: 'Propuso el modelo REBUS — los psicodelicos relajan las restricciones predictivas del cerebro, permitiendo nuevos patrones de pensamiento.',
  },
  'kaelen-2018': {
    en: 'Demonstrated that music plays a central, active role in psychedelic therapy — not background, but intervention.',
    es: 'Demostro que la musica juega un rol central y activo en la terapia psicodelica — no es fondo, es intervencion.',
  },
  'bathje-2022': {
    en: 'Analyzed how integration transforms psychedelic insights into lasting behavioral change.',
    es: 'Analizo como la integracion transforma las percepciones psicodelicas en cambios de comportamiento duraderos.',
  },
  'watts-2020': {
    en: 'Applied the psychological flexibility model to psychedelic-assisted therapy, bridging ACT and psychedelic science.',
    es: 'Aplico el modelo de flexibilidad psicologica a la terapia asistida por psicodelicos, conectando ACT y ciencia psicodelica.',
  },
  'brennan-2022': {
    en: 'Introduced EMBARK — an open clinical framework for structuring psychedelic-assisted therapy sessions.',
    es: 'Introdujo EMBARK — un marco clinico abierto para estructurar sesiones de terapia asistida por psicodelicos.',
  },
  'lyons-2018': {
    en: 'Found that psilocybin increases nature-relatedness and shifts political attitudes away from authoritarianism.',
    es: 'Encontro que la psilocibina aumenta la relacion con la naturaleza y aleja las actitudes politicas del autoritarismo.',
  },
  'barrett-2017': {
    en: 'Identified the specific musical qualities that support peak mystical experiences during psychedelic sessions.',
    es: 'Identifico las cualidades musicales especificas que apoyan experiencias misticas cumbre durante sesiones psicodelicas.',
  },
  'lancet-2023': {
    en: 'Articulated ethical principles from indigenous medicine traditions to guide Western psychedelic research.',
    es: 'Articulo principios eticos de tradiciones medicinales indigenas para guiar la investigacion psicodelica occidental.',
  },
}

/* ── paper journals ── */

const paperJournals: Record<string, string> = {
  'johnson-2008': 'Journal of Psychopharmacology',
  'carhart-harris-2019': 'Pharmacological Reviews',
  'kaelen-2018': 'Psychopharmacology',
  'bathje-2022': 'Frontiers in Psychology',
  'watts-2020': 'Journal of Contextual Behavioral Science',
  'brennan-2022': 'Frontiers in Psychology',
  'lyons-2018': 'Psychopharmacology',
  'barrett-2017': 'Frontiers in Psychology',
  'lancet-2023': 'The Lancet Regional Health — Americas',
}

/* ── org focus areas ── */

const orgFocus: Record<string, { en: string; es: string }> = {
  'johns-hopkins': { en: 'Academic Research', es: 'Investigacion Academica' },
  maps: { en: 'Clinical Trials & Policy', es: 'Ensayos Clinicos y Politica' },
  'fireside-project': { en: 'Peer Support', es: 'Apoyo entre Pares' },
  chacruna: { en: 'Indigenous Knowledge', es: 'Conocimiento Indigena' },
}

/* ── book categories ── */

const bookCategories: Record<string, { en: string; es: string }> = {
  'pollan-2018': { en: 'Science & Culture', es: 'Ciencia y Cultura' },
  'van-der-kolk-2014': { en: 'Trauma & Body', es: 'Trauma y Cuerpo' },
  'kornfield-2000': { en: 'Integration & Practice', es: 'Integracion y Practica' },
}

const bookDescriptions: Record<string, { en: string; es: string }> = {
  'pollan-2018': {
    en: 'The definitive popular account of the psychedelic renaissance and what it reveals about consciousness.',
    es: 'El relato popular definitivo del renacimiento psicodelico y lo que revela sobre la conciencia.',
  },
  'van-der-kolk-2014': {
    en: 'How trauma reshapes body and mind, and why somatic awareness matters for integration.',
    es: 'Como el trauma remodela cuerpo y mente, y por que la conciencia somatica importa para la integracion.',
  },
  'kornfield-2000': {
    en: 'What happens after the peak experience. The real work of bringing insight into daily life.',
    es: 'Lo que sucede despues de la experiencia cumbre. El verdadero trabajo de integrar la percepcion en la vida diaria.',
  },
}

/* ── bilingual content ── */

const content = {
  en: {
    hero: {
      label: 'Evidence base',
      title: 'the evidence base',
      subtitle: 'Peer-reviewed research and clinical observation. Not opinion. Evidence.',
    },
    stats: {
      papers: 'published papers',
      orgs: 'research organizations',
      frameworks: 'frameworks synthesized',
    },
    findings: {
      label: 'Key findings',
      items: [
        {
          heading: '"The psychedelic experience opens a window. Integration determines whether it stays open."',
          attribution: 'Bathje et al., 2022',
        },
        {
          icon: 'music',
          heading: 'Music is not background. It is therapy.',
          body: 'Kaelen et al. (2018) demonstrated music plays a central, active role in psychedelic therapy. Barrett et al. (2017) identified the specific qualities that matter most.',
        },
        {
          number: '72%',
          heading: 'of participants rated their psilocybin experience among the top 5 most meaningful of their lives.',
          attribution: 'Griffiths et al., Johns Hopkins',
        },
        {
          icon: 'compass',
          heading: 'Set and setting shape everything.',
          body: 'Johnson et al. (2008) codified the safety guidelines every modern clinical trial follows. Preparation is not a preference. It is a determinant.',
        },
      ],
    },
    research: {
      label: 'Published research',
      heading: 'the papers behind the framework',
      subtitle: 'Peer-reviewed research that directly informed the Mycelial Network model.',
    },
    orgs: {
      label: 'Organizations',
      heading: 'leading the field',
      items: {
        'johns-hopkins':
          'Leading academic center for psychedelic science. Psilocybin research for depression, end-of-life anxiety, and smoking cessation.',
        maps: 'Pioneered the path to FDA approval for MDMA-assisted therapy. Three decades of clinical trials and policy advocacy.',
        'fireside-project':
          'Free peer support during and after psychedelic experiences. Integration support beyond clinical settings.',
        chacruna:
          'Bridges indigenous knowledge and psychedelic science. Advocates for cultural reciprocity and traditional practitioners\u2019 rights.',
      } as Record<string, string>,
    },
    books: {
      label: 'Recommended reading',
      heading: 'books that shaped this work',
      subtitle: 'Essential reading for psychedelic preparation and integration.',
    },
  },
  es: {
    hero: {
      label: 'Base de evidencia',
      title: 'la base de evidencia',
      subtitle: 'Investigacion revisada por pares y observacion clinica. No opinion. Evidencia.',
    },
    stats: {
      papers: 'estudios publicados',
      orgs: 'organizaciones de investigacion',
      frameworks: 'marcos sintetizados',
    },
    findings: {
      label: 'Hallazgos clave',
      items: [
        {
          heading: '"La experiencia psicodelica abre una ventana. La integracion determina si permanece abierta."',
          attribution: 'Bathje et al., 2022',
        },
        {
          icon: 'music',
          heading: 'La musica no es fondo. Es terapia.',
          body: 'Kaelen et al. (2018) demostro que la musica juega un rol central y activo en la terapia psicodelica. Barrett et al. (2017) identifico las cualidades que importan.',
        },
        {
          number: '72%',
          heading: 'de los participantes calificaron su experiencia con psilocibina entre las 5 mas significativas de sus vidas.',
          attribution: 'Griffiths et al., Johns Hopkins',
        },
        {
          icon: 'compass',
          heading: 'Set y setting moldean todo.',
          body: 'Johnson et al. (2008) codifico las guias de seguridad que sigue cada ensayo clinico moderno. La preparacion no es preferencia. Es determinante.',
        },
      ],
    },
    research: {
      label: 'Investigacion publicada',
      heading: 'los estudios detras del marco',
      subtitle: 'Investigacion revisada por pares que informo el modelo de la Red Micelial.',
    },
    orgs: {
      label: 'Organizaciones',
      heading: 'liderando el campo',
      items: {
        'johns-hopkins':
          'Centro de investigacion lider en ciencia psicodelica. Investigacion con psilocibina para depresion, ansiedad y cesacion del tabaquismo.',
        maps: 'Pioneros en la aprobacion de la FDA para terapia con MDMA. Tres decadas de ensayos clinicos y defensa de politicas.',
        'fireside-project':
          'Apoyo gratuito entre pares durante y despues de experiencias psicodelicas. Apoyo de integracion mas alla de entornos clinicos.',
        chacruna:
          'Puente entre conocimiento indigena y ciencia psicodelica. Reciprocidad cultural y derechos de practicantes tradicionales.',
      } as Record<string, string>,
    },
    books: {
      label: 'Lectura recomendada',
      heading: 'libros que dieron forma a este trabajo',
      subtitle: 'Lectura esencial para preparacion e integracion psicodelica.',
    },
  },
}

/* ── helper: group papers by category ── */

function groupPapersByCategory(
  allPapers: Source[]
): { category: PaperCategory; papers: Source[] }[] {
  const groups: Record<PaperCategory, Source[]> = {
    Therapy: [],
    Neuroscience: [],
    Music: [],
    Integration: [],
    Safety: [],
    Ethics: [],
  }

  for (const paper of allPapers) {
    const cat = categoryMap[paper.id] ?? 'Therapy'
    groups[cat].push(paper)
  }

  return categoryOrder
    .filter((cat) => groups[cat].length > 0)
    .map((cat) => ({ category: cat, papers: groups[cat] }))
}

/* ── sub-components ── */

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="bg-teal/50 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
      {label}
    </span>
  )
}

function YearBadge({ year }: { year: number }) {
  return (
    <span className="text-cloud/40 text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-white/[0.08] font-sans">
      {year}
    </span>
  )
}

function PaperEntry({
  source,
  locale,
  index,
}: {
  source: Source
  locale: Locale
  index: number
}) {
  const cat = categoryMap[source.id] ?? 'Therapy'
  const journal = paperJournals[source.id]
  const summary = paperSummaries[source.id]

  return (
    <ScrollReveal variant="fade-up" delay={index * 0.04}>
      <li className="group py-8 md:py-10 border-b border-white/[0.06] last:border-b-0">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity duration-200 hover:opacity-70"
        >
          {/* badges row */}
          <div className="flex items-center gap-3 mb-4">
            <CategoryBadge label={categoryLabels[cat][locale]} />
            <YearBadge year={source.year} />
          </div>

          {/* title */}
          <p className="font-serif text-xl md:text-2xl font-light leading-[1.3] tracking-[-0.01em] text-cloud">
            {source.title}
          </p>

          {/* authors */}
          <p className="mt-2 text-sm text-cloud/50 font-sans font-light">
            {source.authors}
          </p>

          {/* journal */}
          {journal && (
            <p className="mt-1 text-sm text-sage font-sans italic">
              {journal}
            </p>
          )}

          {/* summary */}
          {summary && (
            <p className="mt-3 text-cloud/60 text-sm font-sans font-light leading-relaxed max-w-[65ch]">
              {summary[locale]}
            </p>
          )}

          {/* link indicator */}
          <div className="mt-4 flex items-center gap-2 text-sage text-xs tracking-[0.15em] uppercase font-sans">
            <span>PubMed</span>
            <ArrowSquareOut size={14} weight="bold" className="text-sage" />
          </div>
        </a>
      </li>
    </ScrollReveal>
  )
}

function OrgCard({
  source,
  description,
  locale,
}: {
  source: Source
  description: string
  locale: Locale
}) {
  const focus = orgFocus[source.id]
  const orgIconMap: Record<string, Icon> = {
    'johns-hopkins': Flask,
    maps: Flask,
    'fireside-project': HandHeart,
    chacruna: HandHeart,
  }
  const OrgIcon = orgIconMap[source.id] ?? Flask

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-teal/30 rounded-2xl p-8 md:p-10 transition-opacity duration-200 hover:opacity-80"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06]">
          <OrgIcon size={22} weight="duotone" className="text-sage" />
        </div>
        <ArrowSquareOut size={18} weight="bold" className="text-cloud/30" />
      </div>

      <h3 className="font-serif text-xl md:text-2xl font-light leading-[1.2] tracking-[-0.01em] text-cloud">
        {source.title}
      </h3>

      {focus && (
        <div className="mt-3">
          <span className="bg-teal/50 text-sage text-xs px-3 py-1 rounded-full font-sans">
            {focus[locale]}
          </span>
        </div>
      )}

      <p className="mt-4 text-sm text-cloud/60 font-sans font-light leading-relaxed">
        {description}
      </p>
    </a>
  )
}

function BookCard({ source, locale }: { source: Source; locale: Locale }) {
  const category = bookCategories[source.id]
  const description = bookDescriptions[source.id]

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/[0.04] rounded-2xl p-8 md:p-10 border border-white/[0.06] transition-opacity duration-200 hover:opacity-80"
    >
      <div className="flex items-start justify-between mb-4">
        {category && <CategoryBadge label={category[locale]} />}
        <ArrowSquareOut size={16} weight="bold" className="text-cloud/30" />
      </div>

      <h3 className="font-serif text-lg md:text-xl font-light leading-[1.3] tracking-[-0.01em] text-cloud">
        {source.title}
      </h3>

      <p className="mt-2 text-sm text-sage font-sans">
        {source.authors} ({source.year})
      </p>

      {description && (
        <p className="mt-3 text-sm text-cloud/60 font-sans font-light leading-relaxed">
          {description[locale]}
        </p>
      )}
    </a>
  )
}

/* ── page ── */

export default async function SciencePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]
  const grouped = groupPapersByCategory(papers)

  return (
    <>
      {/* ── HERO (bg-deep) ── */}
      <Section spacing="none" className="min-h-[70dvh] flex items-center bg-deep">
        <div className="py-32 md:py-40">
          <ScrollReveal variant="fade-up">
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
              {t.hero.label}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em] text-white max-w-[14ch]">
              {t.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-cloud/60 font-sans font-light leading-relaxed max-w-[55ch]">
              {t.hero.subtitle}
            </p>
          </ScrollReveal>

          {/* stats row */}
          <ScrollReveal variant="fade-up" delay={0.35}>
            <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 border-t border-white/[0.06] pt-10">
              <div className="flex items-center gap-4">
                <BookOpenText size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={18} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.stats.papers}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Buildings size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={13} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.stats.orgs}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <TreeStructure size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={6} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.stats.frameworks}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── KEY FINDINGS (bg-forest) ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-16 md:mb-24 font-sans">
            {t.findings.label}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Finding 1: Pull quote — full width */}
          <ScrollReveal variant="fade-up" delay={0.05}>
            <div className="bg-teal/30 rounded-2xl p-8 md:p-10 md:col-span-1 flex flex-col justify-center min-h-[240px]">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-[1.25] tracking-[-0.01em] italic text-cloud/90">
                {t.findings.items[0].heading}
              </p>
              {'attribution' in t.findings.items[0] && (
                <p className="mt-6 text-xs tracking-[0.2em] uppercase text-cloud/40 font-sans">
                  {t.findings.items[0].attribution}
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Finding 2: Icon left, text right */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="bg-teal/30 rounded-2xl p-8 md:p-10 flex flex-col justify-center min-h-[240px]">
              <div className="flex items-start gap-6">
                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.06]">
                  <MusicNotes size={28} weight="duotone" className="text-sage" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white">
                    {t.findings.items[1].heading}
                  </h3>
                  {'body' in t.findings.items[1] && (
                    <p className="mt-4 text-sm text-cloud/60 font-sans font-light leading-relaxed">
                      {t.findings.items[1].body}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Finding 3: Large number + text (magazine callout) */}
          <ScrollReveal variant="scale" delay={0.15}>
            <div className="bg-teal/30 rounded-2xl p-8 md:p-10 flex flex-col justify-center min-h-[240px]">
              <p className="font-serif text-6xl sm:text-7xl md:text-8xl font-light leading-none tracking-[-0.03em] text-mint">
                {'number' in t.findings.items[2] ? t.findings.items[2].number : ''}
              </p>
              <p className="mt-4 font-serif text-lg md:text-xl font-light leading-[1.35] text-cloud/80">
                {t.findings.items[2].heading}
              </p>
              {'attribution' in t.findings.items[2] && (
                <p className="mt-4 text-xs tracking-[0.2em] uppercase text-cloud/40 font-sans">
                  {t.findings.items[2].attribution}
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Finding 4: Text left, icon right */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="bg-teal/30 rounded-2xl p-8 md:p-10 flex flex-col justify-center min-h-[240px]">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white">
                    {t.findings.items[3].heading}
                  </h3>
                  {'body' in t.findings.items[3] && (
                    <p className="mt-4 text-sm text-cloud/60 font-sans font-light leading-relaxed">
                      {t.findings.items[3].body}
                    </p>
                  )}
                </div>
                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.06]">
                  <Compass size={28} weight="duotone" className="text-sage" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── ART BREAK ── */}
      <ParallaxImage
        src={artImages.radiantSilhouette.src}
        alt={artImages.radiantSilhouette.alt[locale as Locale]}
        className="h-[50vh]"
        speed={0.1}
        overlay="bg-deep/60"
      />

      {/* ── PUBLISHED RESEARCH (bg-onyx) ── */}
      <Section spacing="lg" className="bg-onyx">
        <ScrollReveal variant="fade-up">
          <SectionHeader
            label={t.research.label}
            heading={t.research.heading}
            subtitle={t.research.subtitle}
          />
        </ScrollReveal>

        <div className="space-y-16 md:space-y-20">
          {grouped.map((group) => {
            const CatIcon = categoryIcons[group.category]
            return (
              <div key={group.category}>
                {/* category header */}
                <ScrollReveal variant="slide-right">
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/[0.08]">
                    <CatIcon size={22} weight="duotone" className="text-sage" />
                    <h3 className="text-xs tracking-[0.2em] uppercase text-sage font-sans font-medium">
                      {categoryLabels[group.category][locale as Locale]}
                    </h3>
                    <span className="text-cloud/30 text-xs font-sans">
                      {group.papers.length}
                    </span>
                  </div>
                </ScrollReveal>

                {/* papers in category */}
                <ul>
                  {group.papers.map((paper, index) => (
                    <PaperEntry
                      key={paper.id}
                      source={paper}
                      locale={locale as Locale}
                      index={index}
                    />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ── ORGANIZATIONS (bg-forest) ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="slide-left">
          <SectionHeader
            label={t.orgs.label}
            heading={t.orgs.heading}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <ScrollReveal key={org.id} variant="fade-up" delay={i * 0.08}>
              <OrgCard
                source={org}
                description={t.orgs.items[org.id] ?? ''}
                locale={locale as Locale}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── BOOKS (bg-teal) ── */}
      <Section spacing="lg" className="bg-teal">
        <ScrollReveal variant="fade-in">
          <SectionHeader
            label={t.books.label}
            heading={t.books.heading}
            subtitle={t.books.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, i) => (
            <ScrollReveal key={book.id} variant="fade-up" delay={i * 0.08}>
              <BookCard source={book} locale={locale as Locale} />
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  )
}
