import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { serif, sans } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CrisisBar } from '@/components/ui/CrisisBar'
import type { Locale } from '@/types'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Umbral — Psychedelic Preparation & Integration',
  description:
    'Free, open-source, evidence-informed psychedelic preparation and integration portal.',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream text-ink font-sans font-light antialiased">
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale as Locale} />
          <main className="pt-16 pb-16">{children}</main>
          <Footer locale={locale as Locale} />
          <CrisisBar locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
