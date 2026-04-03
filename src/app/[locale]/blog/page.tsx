import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { posts } from '@/content/blog/posts'
import type { Locale } from '@/types'

const content = {
  en: {
    label: 'Writing',
    title: 'Blog',
    subtitle:
      'Evidence-informed writing on psychedelic preparation, integration, and the science behind expanded states of consciousness.',
    read: 'Read',
  },
  es: {
    label: 'Escritos',
    title: 'Blog',
    subtitle:
      'Escritos informados por evidencia sobre preparación psicodélica, integración y la ciencia detrás de los estados expandidos de consciencia.',
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
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4 font-sans font-normal">
              {t.label}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.03em]">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-ink-muted font-light leading-relaxed max-w-[55ch]">
              {t.subtitle}
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="divide-y divide-ink/[0.06]">
              {posts.map((post) => (
                <article key={post.slug} className="py-12 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-4 mb-5">
                    <time
                      dateTime={post.date}
                      className="text-sm text-ink-muted font-light tabular-nums"
                    >
                      {formatDate(post.date, locale as Locale)}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-ink/20" />
                    <span className="text-xs tracking-[0.2em] uppercase text-ink-muted font-sans font-normal">
                      {categoryLabels[post.category]?.[locale as Locale] ?? post.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] tracking-[-0.02em] mb-4">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="hover:text-moss transition-colors duration-200"
                    >
                      {post.title[locale as Locale]}
                    </Link>
                  </h2>

                  <p className="text-ink-muted font-light leading-relaxed max-w-[60ch] mb-5">
                    {post.description[locale as Locale]}
                  </p>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-moss hover:text-sage transition-colors duration-200 font-sans"
                  >
                    {t.read}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
