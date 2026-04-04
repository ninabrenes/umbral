import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { ReadingProgress } from '@/components/ui/ReadingProgress'
import { CopyLinkButton } from '@/components/ui/CopyLinkButton'
import { posts, getPostBySlug, getRelatedPosts } from '@/content/blog/posts'
import { getArticleBySlug } from '@/content/blog/articles'
import { routing } from '@/i18n/routing'
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'

const categoryLabels: Record<string, { en: string; es: string }> = {
  integration: { en: 'Integration', es: 'Integración' },
  science: { en: 'Science', es: 'Ciencia' },
  preparation: { en: 'Preparation', es: 'Preparación' },
  safety: { en: 'Safety', es: 'Seguridad' },
  framework: { en: 'Framework', es: 'Marco' },
  culture: { en: 'Culture', es: 'Cultura' },
}

const ui = {
  en: {
    back: 'All posts',
    comingSoon: 'Full article coming soon.',
    comingSoonBody: 'This post is currently being written. Check back soon.',
    min: 'min read',
    share: 'Copy link',
    copied: 'Copied',
    related: 'Continue reading',
    read: 'Read',
  },
  es: {
    back: 'Todos los posts',
    comingSoon: 'Artículo completo próximamente.',
    comingSoonBody: 'Este post está siendo escrito actualmente. Vuelve pronto.',
    min: 'min lectura',
    share: 'Copiar enlace',
    copied: 'Copiado',
    related: 'Continuar leyendo',
    read: 'Leer',
  },
}

function formatDate(dateStr: string, locale: Locale): string {
  return new Date(dateStr).toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of routing.locales) {
    for (const post of posts) {
      params.push({ locale, slug: post.slug })
    }
  }
  return params
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  const article = getArticleBySlug(slug)
  const t = ui[locale as Locale]
  const category = categoryLabels[post.category]?.[locale as Locale] ?? post.category
  const related = getRelatedPosts(slug, 2)

  return (
    <>
      <ReadingProgress />

      <Section spacing="lg">
        <div className="max-w-[720px]">
          {/* back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-cloud/60 hover:text-white transition-colors duration-200 font-sans mb-12"
          >
            <ArrowLeft size={16} weight="duotone" />
            <span>{t.back}</span>
          </Link>

          {/* meta row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
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
              <Clock size={14} weight="duotone" className="text-cloud/40" />
              <span className="text-sm text-cloud/60 font-light">
                {post.readingTime} {t.min}
              </span>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <Tag size={14} weight="duotone" className="text-sage/60" />
              <span className="bg-teal/50 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
                {category}
              </span>
            </span>
          </div>

          {/* title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-8 text-white">
            {post.title[locale as Locale]}
          </h1>

          {/* description as lede */}
          <p className="text-xl text-cloud font-light leading-relaxed mb-12">
            {post.description[locale as Locale]}
          </p>

          {/* hero image if available */}
          {post.image && (
            <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden mb-16">
              <Image
                src={post.image}
                alt={post.title[locale as Locale]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
            </div>
          )}

          {/* decorative separator */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-px bg-white/[0.1]" />
            <div className="w-1.5 h-1.5 rounded-full bg-sage/30" />
            <div className="w-8 h-px bg-white/[0.06]" />
          </div>

          {/* article body */}
          {article ? (
            <div className="space-y-16">
              {article.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-serif text-2xl md:text-3xl font-light leading-[1.2] tracking-[-0.01em] text-white mb-8">
                    {section.heading[locale as Locale]}
                  </h2>
                  <div className="space-y-6">
                    {section.body[locale as Locale].split('\n\n').map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-cloud font-light leading-[1.75] text-[17px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              <p className="font-serif text-2xl font-light leading-[1.3] text-cloud/70">
                {t.comingSoon}
              </p>
              <p className="text-cloud font-light leading-relaxed">
                {t.comingSoonBody}
              </p>
            </div>
          )}

          {/* share section */}
          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <CopyLinkButton label={t.share} copiedLabel={t.copied} />
          </div>
        </div>
      </Section>

      {/* related posts */}
      {related.length > 0 && (
        <Section spacing="lg" dark>
          <div className="max-w-[720px]">
            <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-10 font-sans font-normal">
              {t.related}
            </p>
            <div className="divide-y divide-white/[0.06]">
              {related.map((rel) => (
                <article key={rel.slug} className="py-10 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-4 mb-4">
                    <time
                      dateTime={rel.date}
                      className="text-sm text-cloud/50 font-light tabular-nums"
                    >
                      {formatDate(rel.date, locale as Locale)}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} weight="duotone" className="text-cloud/40" />
                      <span className="text-xs text-cloud/50 font-light">
                        {rel.readingTime} {t.min}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.15] tracking-[-0.02em] mb-3">
                    <Link
                      href={`/${locale}/blog/${rel.slug}`}
                      className="text-white hover:text-mint transition-colors duration-200"
                    >
                      {rel.title[locale as Locale]}
                    </Link>
                  </h3>
                  <p className="text-cloud/60 font-light leading-relaxed max-w-[55ch] mb-4">
                    {rel.description[locale as Locale]}
                  </p>
                  <Link
                    href={`/${locale}/blog/${rel.slug}`}
                    className="group/read inline-flex items-center gap-2 font-serif text-sm italic text-mint hover:text-white transition-colors duration-200"
                  >
                    {t.read}
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-200 group-hover/read:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  )
}
