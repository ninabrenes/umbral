import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BlogList } from '@/components/blog/BlogList'
import { posts } from '@/content/blog/posts'
import type { Locale } from '@/types'

const content = {
  en: {
    label: 'Writing',
    title: 'Blog',
    subtitle:
      'Evidence-informed writing on psychedelic preparation, integration, and expanded states.',
    read: 'Read',
    all: 'All',
    min: 'min read',
    featured: 'Featured',
  },
  es: {
    label: 'Escritos',
    title: 'Blog',
    subtitle:
      'Escritos informados por evidencia sobre preparación, integración y estados expandidos.',
    read: 'Leer',
    all: 'Todos',
    min: 'min lectura',
    featured: 'Destacado',
  },
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]

  return (
    <>
      {/* ── 1. HERO ── */}
      <Section spacing="lg">
        <ScrollReveal variant="fade-in">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans font-normal">
            {t.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.03em] text-white">
            {t.title}
          </h1>
          <p className="mt-6 text-lg text-cloud font-light leading-relaxed max-w-[55ch]">
            {t.subtitle}
          </p>
        </ScrollReveal>
      </Section>

      {/* ── 2. POST LIST ── */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-10">
            <ScrollReveal variant="fade-up">
              <BlogList
                posts={posts}
                locale={locale as Locale}
                readLabel={t.read}
                allLabel={t.all}
                minLabel={t.min}
                featuredLabel={t.featured}
              />
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  )
}
