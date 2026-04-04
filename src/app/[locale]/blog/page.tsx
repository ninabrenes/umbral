import Link from 'next/link'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { posts } from '@/content/blog/posts'
import { artImages } from '@/content/framework/images'
import { Calendar, Tag, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'

const content = {
  en: {
    label: 'Writing',
    title: 'Blog',
    subtitle:
      'Evidence-informed writing on psychedelic preparation, integration, and expanded states.',
    read: 'Read',
  },
  es: {
    label: 'Escritos',
    title: 'Blog',
    subtitle:
      'Escritos informados por evidencia sobre preparación, integración y estados expandidos.',
    read: 'Leer',
  },
}

const categoryLabels: Record<string, { en: string; es: string }> = {
  integration: { en: 'Integration', es: 'Integración' },
  science: { en: 'Science', es: 'Ciencia' },
  preparation: { en: 'Preparation', es: 'Preparación' },
}

function formatDate(dateStr: string, locale: Locale): string {
  return new Date(dateStr).toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
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
          <div className="md:col-span-8">
            <div className="divide-y divide-white/[0.06]">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} variant="fade-up" delay={i * 0.1}>
                  <article className="py-12 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} weight="duotone" className="text-cloud/40" />
                        <time
                          dateTime={post.date}
                          className="text-sm text-cloud/60 font-light tabular-nums"
                        >
                          {formatDate(post.date, locale as Locale)}
                        </time>
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="inline-flex items-center gap-1.5">
                        <Tag size={14} weight="duotone" className="text-sage/60" />
                        <span className="bg-teal/50 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
                          {categoryLabels[post.category]?.[locale as Locale] ?? post.category}
                        </span>
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] tracking-[-0.02em] mb-4">
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="text-white hover:text-mint transition-colors duration-200"
                      >
                        {post.title[locale as Locale]}
                      </Link>
                    </h2>

                    <p className="text-cloud font-light leading-relaxed max-w-[60ch] mb-5">
                      {post.description[locale as Locale]}
                    </p>

                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="group/read inline-flex items-center gap-2 font-serif text-base italic text-mint hover:text-white transition-colors duration-200 tracking-wide"
                    >
                      {t.read}
                      <ArrowRight size={16} weight="bold" className="transition-transform duration-200 group-hover/read:translate-x-1" />
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
