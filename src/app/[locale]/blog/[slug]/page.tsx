import Link from 'next/link'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { posts, getPostBySlug } from '@/content/blog/posts'
import { routing } from '@/i18n/routing'
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
      'This post is currently being written. Check back soon for the complete, evidence-informed piece.',
  },
  es: {
    back: 'Todos los posts',
    comingSoon: 'Artículo completo próximamente.',
    comingSoonBody:
      'Este post está siendo escrito actualmente. Vuelve pronto para la pieza completa, informada por evidencia.',
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
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-200 font-sans mb-12"
          >
            <span aria-hidden="true">&larr;</span>
            {t.back}
          </Link>

          {/* meta */}
          <div className="flex items-center gap-4 mb-8">
            <time
              dateTime={post.date}
              className="text-sm text-ink-muted font-light tabular-nums"
            >
              {formatDate(post.date, locale as Locale)}
            </time>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span className="text-xs tracking-[0.2em] uppercase text-ink-muted font-sans font-normal">
              {category}
            </span>
          </div>

          {/* title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-8">
            {post.title[locale as Locale]}
          </h1>

          {/* description as lede */}
          <p className="text-xl text-ink-muted font-light leading-relaxed mb-16">
            {post.description[locale as Locale]}
          </p>

          {/* separator */}
          <div className="w-12 h-px bg-ink/15 mb-16" />

          {/* placeholder body */}
          <div className="space-y-6">
            <p className="font-serif text-2xl font-light leading-[1.3] text-ink/70">
              {t.comingSoon}
            </p>
            <p className="text-ink-muted font-light leading-relaxed">
              {t.comingSoonBody}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
