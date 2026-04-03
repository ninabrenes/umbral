import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  // setRequestLocale handled by layout

  const t = useTranslations('home.hero')
  const meta = useTranslations('meta')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-sm tracking-[0.15em] uppercase text-ink-muted mb-8">
        {meta('title')}
      </p>
      <h1 className="font-serif text-5xl md:text-7xl font-light text-center max-w-4xl leading-[1.1] tracking-[-0.02em]">
        {t('title')}
      </h1>
      <p className="mt-6 text-xl text-ink-muted font-light text-center">
        {t('subtitle')}
      </p>
    </main>
  )
}
