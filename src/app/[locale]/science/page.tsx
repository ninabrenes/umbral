import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { CountUp } from '@/components/ui/CountUp'
import { papers, organizations, books } from '@/content/framework/sources-expanded'
import { artImages } from '@/content/framework/images'
import {
  BookOpenText,
  Buildings,
  TreeStructure,
  Brain,
  MusicNotes,
  Compass as CompassIcon,
  Heartbeat,
  Leaf,
  ShieldCheck,
  Scales,
  ArrowSquareOut,
} from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'
import type { Paper, Book, Organization } from '@/content/framework/sources-expanded'

/* ── category system ── */

const categoryLabels: Record<string, { en: string; es: string }> = {
  'psilocybin-clinical': { en: 'Psilocybin Clinical Trials', es: 'Ensayos Clinicos con Psilocibina' },
  'mdma-therapy': { en: 'MDMA-Assisted Therapy', es: 'Terapia Asistida con MDMA' },
  'integration-frameworks': { en: 'Integration Frameworks', es: 'Marcos de Integracion' },
  'music-psychedelics': { en: 'Music & Psychedelics', es: 'Musica y Psicodelicos' },
  'nature-relatedness': { en: 'Nature & Consciousness', es: 'Naturaleza y Conciencia' },
  'mystical-experience': { en: 'Mystical Experience', es: 'Experiencia Mistica' },
  safety: { en: 'Safety & Guidelines', es: 'Seguridad y Directrices' },
  neuroscience: { en: 'Neuroscience', es: 'Neurociencia' },
  'indigenous-ethics': { en: 'Indigenous Knowledge & Ethics', es: 'Conocimiento Indigena y Etica' },
  'harm-reduction': { en: 'Harm Reduction', es: 'Reduccion de Danos' },
  'set-and-setting': { en: 'Set & Setting', es: 'Set y Setting' },
  'long-term-outcomes': { en: 'Long-Term Outcomes', es: 'Resultados a Largo Plazo' },
}

const categoryOrder = [
  'psilocybin-clinical',
  'neuroscience',
  'mdma-therapy',
  'integration-frameworks',
  'music-psychedelics',
  'safety',
  'mystical-experience',
  'nature-relatedness',
  'set-and-setting',
  'harm-reduction',
  'indigenous-ethics',
  'long-term-outcomes',
]

const bookCategoryLabels: Record<string, { en: string; es: string }> = {
  science: { en: 'Science', es: 'Ciencia' },
  integration: { en: 'Integration', es: 'Integracion' },
  contemplative: { en: 'Contemplative', es: 'Contemplativo' },
  practice: { en: 'Practice', es: 'Practica' },
  indigenous: { en: 'Indigenous', es: 'Indigena' },
}

const orgFocusLabels: Record<string, { en: string; es: string }> = {
  research: { en: 'Research', es: 'Investigacion' },
  support: { en: 'Peer Support', es: 'Apoyo entre Pares' },
  'harm-reduction': { en: 'Harm Reduction', es: 'Reduccion de Danos' },
  'indigenous-advocacy': { en: 'Indigenous Advocacy', es: 'Defensa Indigena' },
  training: { en: 'Training', es: 'Formacion' },
}

/* ── bilingual content ── */

const content = {
  en: {
    hero: {
      title: 'the evidence base',
      subtitle: 'Peer-reviewed research, clinical observation, and the organizations advancing psychedelic science. Not opinion. Evidence.',
      stats: {
        papers: 'peer-reviewed papers',
        books: 'essential books',
        orgs: 'organizations',
        categories: 'research categories',
      },
    },
    themes: {
      label: 'Key research themes',
      items: [
        {
          icon: 'brain',
          heading: 'The Default Mode Network',
          insight: 'Psychedelics work by quieting the brain\'s default mode network — the seat of the ego and habitual thought. The REBUS model proposes that by relaxing the precision of high-level priors, psychedelics increase brain entropy and enable revision of entrenched beliefs.',
          citation: 'Carhart-Harris & Friston, 2019 — Pharmacological Reviews',
        },
        {
          icon: 'heartbeat',
          heading: 'Therapeutic Outcomes',
          insight: 'High-dose psilocybin produced large and sustained decreases in depression and anxiety in cancer patients, with 80% showing clinically significant reductions at 6 months. A separate Johns Hopkins trial showed rapid, large, and sustained antidepressant effects in major depressive disorder.',
          citation: 'Griffiths et al., 2016; Davis et al., 2021',
        },
        {
          icon: 'music',
          heading: 'Music as Medicine',
          insight: 'Music is not background. It is therapy. The degree of resonance between music and subjective experience predicts therapeutic outcomes. Regular, predictable, slow tempo with sustained tones best supports peak mystical experiences.',
          citation: 'Kaelen et al., 2018; Barrett et al., 2017',
        },
        {
          icon: 'compass',
          heading: 'Integration Matters',
          insight: 'The psychedelic experience opens a window. Integration determines whether it stays open. Research defines integration as the process of making sense of and incorporating psychedelic experiences into daily life, identifying key practices and therapeutic approaches.',
          citation: 'Bathje et al., 2022; Watts & Luoma, 2020 (ACE model)',
        },
        {
          icon: 'shield',
          heading: 'Safety First',
          insight: 'Foundational safety guidelines covering screening, preparation, session conduct, and follow-up remain the gold standard for clinical psychedelic safety. Comprehensive review confirms that classical psychedelics have favorable safety profiles when used in controlled settings.',
          citation: 'Johnson et al., 2008; Johnson et al., 2019',
        },
        {
          icon: 'leaf',
          heading: 'Nature & Consciousness',
          insight: 'Patients showed lasting increases in nature-relatedness after psilocybin therapy. Large surveys confirm that psychedelic use increases ecological awareness, mediated by ego-dissolution — with ceremonial settings showing the strongest effects.',
          citation: 'Lyons & Carhart-Harris, 2018; Kettner et al., 2019',
        },
      ],
    },
    research: {
      label: 'Full paper library',
      heading: 'the papers behind the framework',
      subtitle: 'Every peer-reviewed study that informed the Mycelial Network model. Grouped by research domain.',
    },
    orgs: {
      label: 'Organizations',
      heading: 'leading the field',
      subtitle: 'The institutions, nonprofits, and projects advancing psychedelic science, education, and harm reduction worldwide.',
    },
    books: {
      label: 'Essential reading',
      heading: 'books that shaped this work',
      subtitle: 'The books that informed our framework. From clinical science to contemplative practice to indigenous wisdom.',
    },
  },
  es: {
    hero: {
      title: 'la base de evidencia',
      subtitle: 'Investigacion revisada por pares, observacion clinica y las organizaciones que avanzan la ciencia psicodelica. No opinion. Evidencia.',
      stats: {
        papers: 'estudios revisados por pares',
        books: 'libros esenciales',
        orgs: 'organizaciones',
        categories: 'categorias de investigacion',
      },
    },
    themes: {
      label: 'Temas clave de investigacion',
      items: [
        {
          icon: 'brain',
          heading: 'La Red de Modo Predeterminado',
          insight: 'Los psicodelicos funcionan al silenciar la red de modo predeterminado del cerebro — la sede del ego y el pensamiento habitual. El modelo REBUS propone que al relajar la precision de los priors de alto nivel, los psicodelicos aumentan la entropia cerebral y permiten la revision de creencias arraigadas.',
          citation: 'Carhart-Harris & Friston, 2019 — Pharmacological Reviews',
        },
        {
          icon: 'heartbeat',
          heading: 'Resultados Terapeuticos',
          insight: 'Dosis altas de psilocibina produjeron disminuciones grandes y sostenidas en depresion y ansiedad en pacientes con cancer, con un 80% mostrando reducciones clinicamente significativas a los 6 meses. Un ensayo separado de Johns Hopkins mostro efectos antidepresivos rapidos, grandes y sostenidos en trastorno depresivo mayor.',
          citation: 'Griffiths et al., 2016; Davis et al., 2021',
        },
        {
          icon: 'music',
          heading: 'La Musica como Medicina',
          insight: 'La musica no es fondo. Es terapia. El grado de resonancia entre la musica y la experiencia subjetiva predice los resultados terapeuticos. Tempo regular, predecible y lento con tonos sostenidos apoya mejor las experiencias misticas cumbre.',
          citation: 'Kaelen et al., 2018; Barrett et al., 2017',
        },
        {
          icon: 'compass',
          heading: 'La Integracion Importa',
          insight: 'La experiencia psicodelica abre una ventana. La integracion determina si permanece abierta. La investigacion define la integracion como el proceso de dar sentido e incorporar experiencias psicodelicas en la vida cotidiana, identificando practicas clave y enfoques terapeuticos.',
          citation: 'Bathje et al., 2022; Watts & Luoma, 2020 (modelo ACE)',
        },
        {
          icon: 'shield',
          heading: 'La Seguridad Primero',
          insight: 'Las directrices fundamentales de seguridad que cubren evaluacion, preparacion, conduccion de sesiones y seguimiento siguen siendo el estandar de oro para la seguridad clinica psicodelica. Una revision integral confirma que los psicodelicos clasicos tienen perfiles de seguridad favorables cuando se usan en entornos controlados.',
          citation: 'Johnson et al., 2008; Johnson et al., 2019',
        },
        {
          icon: 'leaf',
          heading: 'Naturaleza y Conciencia',
          insight: 'Los pacientes mostraron aumentos duraderos en la conexion con la naturaleza despues de la terapia con psilocibina. Encuestas a gran escala confirman que el uso de psicodelicos aumenta la conciencia ecologica, mediado por la disolucion del ego — con entornos ceremoniales mostrando los efectos mas fuertes.',
          citation: 'Lyons & Carhart-Harris, 2018; Kettner et al., 2019',
        },
      ],
    },
    research: {
      label: 'Biblioteca completa',
      heading: 'los estudios detras del marco',
      subtitle: 'Cada estudio revisado por pares que informo el modelo de la Red Micelial. Agrupados por dominio de investigacion.',
    },
    orgs: {
      label: 'Organizaciones',
      heading: 'liderando el campo',
      subtitle: 'Las instituciones, organizaciones sin fines de lucro y proyectos que avanzan la ciencia psicodelica, la educacion y la reduccion de danos en todo el mundo.',
    },
    books: {
      label: 'Lectura esencial',
      heading: 'libros que dieron forma a este trabajo',
      subtitle: 'Los libros que informaron nuestro marco. Desde ciencia clinica hasta practica contemplativa y sabiduria indigena.',
    },
  },
}

/* ── helpers ── */

function groupPapersByCategory(allPapers: Paper[]): { category: string; papers: Paper[] }[] {
  const groups: Record<string, Paper[]> = {}
  for (const cat of categoryOrder) {
    groups[cat] = []
  }

  for (const paper of allPapers) {
    if (groups[paper.category]) {
      groups[paper.category].push(paper)
    }
  }

  return categoryOrder
    .filter((cat) => groups[cat].length > 0)
    .map((cat) => ({ category: cat, papers: groups[cat] }))
}

function getUniqueCategories(allPapers: Paper[]): number {
  return new Set(allPapers.map((p) => p.category)).size
}

/* ── theme icons ── */

function ThemeIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    brain: <Brain size={28} weight="duotone" className="text-sage" />,
    heartbeat: <Heartbeat size={28} weight="duotone" className="text-sage" />,
    music: <MusicNotes size={28} weight="duotone" className="text-sage" />,
    compass: <CompassIcon size={28} weight="duotone" className="text-sage" />,
    shield: <ShieldCheck size={28} weight="duotone" className="text-sage" />,
    leaf: <Leaf size={28} weight="duotone" className="text-sage" />,
  }
  return (
    <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.06]">
      {iconMap[icon] ?? null}
    </div>
  )
}

/* ── sub-components ── */

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="bg-teal/50 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
      {label}
    </span>
  )
}

function PaperEntry({
  paper,
  locale,
  index,
}: {
  paper: Paper
  locale: Locale
  index: number
}) {
  const catLabel = categoryLabels[paper.category]?.[locale] ?? paper.category

  return (
    <ScrollReveal variant="fade-up" delay={index * 0.04}>
      <li className="group py-8 md:py-10 border-b border-white/[0.06] last:border-b-0">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity duration-200 hover:opacity-70"
        >
          {/* badges row */}
          <div className="flex items-center gap-3 mb-4">
            <CategoryBadge label={catLabel} />
            <span className="text-cloud/40 text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-white/[0.08] font-sans">
              {paper.year}
            </span>
          </div>

          {/* title */}
          <p className="font-serif text-lg md:text-xl font-light leading-[1.3] tracking-[-0.01em] text-cloud">
            {paper.title}
          </p>

          {/* authors */}
          <p className="mt-2 text-sm text-cloud/60 font-sans font-light">
            {paper.authors}
          </p>

          {/* journal */}
          <p className="mt-1 text-sm text-sage font-sans italic">
            {paper.journal}
          </p>

          {/* bilingual summary */}
          <p className="mt-3 text-cloud/70 text-sm font-sans font-light leading-relaxed max-w-[65ch]">
            {paper.summary[locale]}
          </p>

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
  org,
  locale,
}: {
  org: Organization
  locale: Locale
}) {
  const focusLabel = orgFocusLabels[org.focus]?.[locale] ?? org.focus

  return (
    <a
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-teal/30 rounded-2xl p-8 md:p-10 transition-opacity duration-200 hover:opacity-80 h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <h3 className="font-serif text-lg md:text-xl font-light leading-[1.2] tracking-[-0.01em] text-cloud flex-1 pr-4">
          {org.name}
        </h3>
        <ArrowSquareOut size={18} weight="bold" className="text-cloud/30 shrink-0" />
      </div>

      <div className="mb-4">
        <span className="bg-teal/50 text-sage text-xs px-3 py-1 rounded-full font-sans">
          {focusLabel}
        </span>
      </div>

      <p className="text-sm text-cloud/60 font-sans font-light leading-relaxed">
        {org.description[locale]}
      </p>
    </a>
  )
}

function BookCard({ book, locale }: { book: Book; locale: Locale }) {
  const catLabel = bookCategoryLabels[book.category]?.[locale] ?? book.category

  return (
    <div className="bg-white/[0.04] rounded-2xl p-8 md:p-10 border border-white/[0.06] h-full">
      <div className="flex items-start justify-between mb-4">
        <CategoryBadge label={catLabel} />
        <span className="text-cloud/40 text-[10px] tracking-[0.15em] uppercase font-sans">
          {book.year}
        </span>
      </div>

      <h3 className="font-serif text-lg md:text-xl font-light leading-[1.3] tracking-[-0.01em] text-cloud">
        {book.title}
      </h3>

      <p className="mt-2 text-sm text-sage font-sans">
        {book.author}
      </p>

      <p className="mt-3 text-sm text-cloud/60 font-sans font-light leading-relaxed">
        {book.description[locale]}
      </p>
    </div>
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
  const totalCategories = getUniqueCategories(papers)

  return (
    <>
      {/* ── HERO (bg-deep) ── */}
      <Section spacing="none" className="min-h-[70dvh] flex items-center bg-deep">
        <div className="py-32 md:py-40">
          <ScrollReveal variant="fade-up">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em] text-white max-w-[14ch]">
              {t.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <p className="mt-8 text-lg md:text-xl text-cloud/60 font-sans font-light leading-relaxed max-w-[55ch]">
              {t.hero.subtitle}
            </p>
          </ScrollReveal>

          {/* stats row */}
          <ScrollReveal variant="fade-up" delay={0.25}>
            <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 border-t border-white/[0.06] pt-10">
              <div className="flex items-center gap-4">
                <BookOpenText size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={papers.length} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.hero.stats.papers}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Scales size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={books.length} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.hero.stats.books}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Buildings size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={organizations.length} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.hero.stats.orgs}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <TreeStructure size={24} weight="duotone" className="text-sage" />
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light leading-none tracking-[-0.02em] text-white">
                    <CountUp value={totalCategories} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-cloud/60 font-sans">
                    {t.hero.stats.categories}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── KEY RESEARCH THEMES (bg-forest) ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-16 md:mb-24 font-sans">
            {t.themes.label}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.themes.items.map((theme, i) => (
            <ScrollReveal key={theme.heading} variant="fade-up" delay={i * 0.06}>
              <div className="bg-teal/30 rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] h-full">
                <div className="flex items-start gap-6">
                  <ThemeIcon icon={theme.icon} />
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white">
                      {theme.heading}
                    </h3>
                    <p className="mt-4 text-sm text-cloud/60 font-sans font-light leading-relaxed">
                      {theme.insight}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-xs tracking-[0.15em] uppercase text-cloud/40 font-sans">
                  {theme.citation}
                </p>
              </div>
            </ScrollReveal>
          ))}
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

      {/* ── FULL PAPER LIBRARY (bg-onyx) ── */}
      <Section spacing="lg" className="bg-onyx">
        <ScrollReveal variant="fade-up">
          <SectionHeader
            label={t.research.label}
            heading={t.research.heading}
            subtitle={t.research.subtitle}
          />
        </ScrollReveal>

        <div className="space-y-16 md:space-y-20">
          {grouped.map((group) => (
            <div key={group.category}>
              {/* category header */}
              <ScrollReveal variant="slide-right">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/[0.08]">
                  <h3 className="font-serif text-2xl text-white mt-0 mb-0">
                    {categoryLabels[group.category]?.[locale as Locale] ?? group.category}
                  </h3>
                  <span className="text-cloud/30 text-sm font-sans">
                    {group.papers.length}
                  </span>
                </div>
              </ScrollReveal>

              {/* papers in category */}
              <ul>
                {group.papers.map((paper, index) => (
                  <PaperEntry
                    key={paper.id}
                    paper={paper}
                    locale={locale as Locale}
                    index={index}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── ORGANIZATIONS (bg-forest) ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <SectionHeader
            label={t.orgs.label}
            heading={t.orgs.heading}
            subtitle={t.orgs.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <ScrollReveal key={org.id} variant="fade-up" delay={i * 0.05}>
              <OrgCard org={org} locale={locale as Locale} />
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
            <ScrollReveal key={book.id} variant="fade-up" delay={i * 0.05}>
              <BookCard book={book} locale={locale as Locale} />
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  )
}
