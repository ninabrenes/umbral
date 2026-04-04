'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag, ArrowRight, Clock } from '@phosphor-icons/react'
import type { BlogMeta } from '@/content/blog/posts'
import type { Locale } from '@/types'

const categoryLabels: Record<string, { en: string; es: string }> = {
  integration: { en: 'Integration', es: 'Integración' },
  science: { en: 'Science', es: 'Ciencia' },
  preparation: { en: 'Preparation', es: 'Preparación' },
  safety: { en: 'Safety', es: 'Seguridad' },
  framework: { en: 'Framework', es: 'Marco' },
  culture: { en: 'Culture', es: 'Cultura' },
}

function formatDate(dateStr: string, locale: Locale): string {
  return new Date(dateStr).toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface BlogListProps {
  posts: BlogMeta[]
  locale: Locale
  readLabel: string
  allLabel: string
  minLabel: string
  featuredLabel: string
}

export function BlogList({ posts, locale, readLabel, allLabel, minLabel, featuredLabel }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = [...new Set(posts.map((p) => p.category))]
  const filtered = activeCategory ? posts.filter((p) => p.category === activeCategory) : posts
  const featured = filtered.find((p) => p.featured)
  const rest = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered

  return (
    <>
      {/* category pills */}
      <div className="flex flex-wrap gap-2 mb-16">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 border ${
            activeCategory === null
              ? 'bg-sage/20 text-sage border-sage/30'
              : 'bg-transparent text-cloud/40 border-white/[0.06] hover:text-cloud/70 hover:border-white/10'
          }`}
          type="button"
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 border ${
              activeCategory === cat
                ? 'bg-sage/20 text-sage border-sage/30'
                : 'bg-transparent text-cloud/40 border-white/[0.06] hover:text-cloud/70 hover:border-white/10'
            }`}
            type="button"
          >
            {categoryLabels[cat]?.[locale] ?? cat}
          </button>
        ))}
      </div>

      {/* featured card */}
      {featured && !activeCategory && (
        <Link
          href={`/${locale}/blog/${featured.slug}`}
          className="group block relative mb-20 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/10 transition-colors duration-200"
        >
          {featured.image && (
            <div className="relative h-[320px] md:h-[400px]">
              <Image
                src={featured.image}
                alt={featured.title[locale]}
                fill
                className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-transparent" />
            </div>
          )}
          <div className={`relative ${featured.image ? '-mt-48 md:-mt-56' : ''} p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-sage/20 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans border border-sage/20">
                {featuredLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} weight="duotone" className="text-cloud/40" />
                <span className="text-xs text-cloud/50 font-light">
                  {featured.readingTime} {minLabel}
                </span>
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] mb-4 text-white group-hover:text-mint transition-colors duration-200">
              {featured.title[locale]}
            </h2>
            <p className="text-cloud/70 font-light leading-relaxed max-w-[55ch] mb-6">
              {featured.description[locale]}
            </p>
            <div className="flex items-center gap-4">
              <time dateTime={featured.date} className="text-sm text-cloud/50 font-light tabular-nums">
                {formatDate(featured.date, locale)}
              </time>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="bg-teal/50 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
                {categoryLabels[featured.category]?.[locale] ?? featured.category}
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* post list */}
      <div className="divide-y divide-white/[0.06]">
        {rest.map((post) => (
          <article key={post.slug} className="py-12 first:pt-0 last:pb-0">
            <div className="flex items-center gap-4 mb-5">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} weight="duotone" className="text-cloud/40" />
                <time
                  dateTime={post.date}
                  className="text-sm text-cloud/60 font-light tabular-nums"
                >
                  {formatDate(post.date, locale)}
                </time>
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-1.5">
                <Tag size={14} weight="duotone" className="text-sage/60" />
                <span className="bg-teal/50 text-sage text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
                  {categoryLabels[post.category]?.[locale] ?? post.category}
                </span>
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} weight="duotone" className="text-cloud/40" />
                <span className="text-xs text-cloud/50 font-light">
                  {post.readingTime} {minLabel}
                </span>
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] tracking-[-0.02em] mb-4">
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="text-white hover:text-mint transition-colors duration-200"
              >
                {post.title[locale]}
              </Link>
            </h2>

            <p className="text-cloud font-light leading-relaxed max-w-[60ch] mb-5">
              {post.description[locale]}
            </p>

            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="group/read inline-flex items-center gap-2 font-serif text-base italic text-mint hover:text-white transition-colors duration-200 tracking-wide"
            >
              {readLabel}
              <ArrowRight size={16} weight="bold" className="transition-transform duration-200 group-hover/read:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}
