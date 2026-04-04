import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BlogList } from '@/components/blog/BlogList'
import { posts } from '@/content/blog/posts'
import { artImages } from '@/content/framework/images'
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
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* header */}
          <div className="md:col-span-8">
            <ScrollReveal variant="fade-in">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans font-normal">
                {t.label}
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.03em] text-white">
                {t.title}
              </h1>
              <p className="mt-6 text-lg text-cloud font-light leading-relaxed max-w-[55ch]">
                {t.subtitle}
              </p>
            </ScrollReveal>
          </div>
          {/* art accent */}
          <div className="hidden md:flex md:col-span-3 md:col-start-10 items-start justify-end pt-4">
            <Image
              src={artImages.psychedelicEye.src}
              alt={artImages.psychedelicEye.alt[locale as Locale]}
              width={120}
              height={120}
              className="aspect-square rounded-full opacity-60 object-cover"
            />
          </div>
        </div>
      </Section>

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
