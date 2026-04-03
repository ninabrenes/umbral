import Link from 'next/link'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { posts, getPostBySlug } from '@/content/blog/posts'
import { routing } from '@/i18n/routing'
import { ArrowLeft, Calendar, Tag } from '@phosphor-icons/react/dist/ssr'
import type { Locale } from '@/types'

const categoryLabels: Record<string, { en: string; es: string }> = {
  integration: { en: 'Integration', es: 'Integración' },
  science: { en: 'Science', es: 'Ciencia' },
  preparation: { en: 'Preparation', es: 'Preparación' },
}

const ui = {
  en: {
    back: 'All posts',
    comingSoon: 'Full article coming soon.',
    comingSoonBody:
      'This post is currently being written. Check back soon.',
  },
  es: {
    back: 'Todos los posts',
    comingSoon: 'Artículo completo próximamente.',
    comingSoonBody:
      'Este post está siendo escrito actualmente. Vuelve pronto.',
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

  const t = ui[locale as Locale]
  const category = categoryLabels[post.category]?.[locale as Locale] ?? post.category

  return (
    <>
      <Section spacing="lg">
        <div className="max-w-[680px]">
          {/* back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-cloud/60 hover:text-white transition-colors duration-200 font-sans mb-12"
          >
            <ArrowLeft size={16} weight="duotone" />
            {t.back}
          </Link>

          {/* meta */}
          <div className="flex items-center gap-4 mb-8">
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
              <span className="bg-sage/10 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
                {category}
              </span>
            </span>
          </div>

          {/* title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-8 text-white">
            {post.title[locale as Locale]}
          </h1>

          {/* description as lede */}
          <p className="text-xl text-cloud/60 font-light leading-relaxed mb-16">
            {post.description[locale as Locale]}
          </p>

          {/* decorative separator */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-px bg-white/[0.1]" />
            <div className="w-1.5 h-1.5 rounded-full bg-sage/30" />
            <div className="w-8 h-px bg-white/[0.06]" />
          </div>

          {/* placeholder body */}
          <div className="space-y-6">
            <p className="font-serif text-2xl font-light leading-[1.3] text-cloud/70">
              {t.comingSoon}
            </p>
            <p className="text-cloud/60 font-light leading-relaxed">
              {t.comingSoonBody}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
