import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { NodeIcon } from '@/components/framework/NodeIcon'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { nodes } from '@/content/framework/nodes'
import { nodePrompts } from '@/content/framework/prompts'
import { nodeImages } from '@/content/framework/images'
import type { Locale, NodeId } from '@/types'

const validNodeIds: NodeId[] = ['ground', 'roots', 'spore', 'weave', 'fruit', 'canopy']

const pageContent = {
  en: {
    backLabel: 'Back to Framework',
    journalLabel: 'Journal Prompts',
    journalHeading: 'Sit with these questions.',
    journalSubtitle:
      'No right answers. Write what comes.',
    polarityLabel: 'Polarity',
    chakraLabel: 'Chakra layer',
    nextLabel: 'Next node',
    polarity: {
      masculine: 'Masculine \u2014 discipline, structure, daily practice',
      feminine: 'Feminine \u2014 witness, receive, feel',
      both: 'Both \u2014 receiving support and actively giving',
    },
  },
  es: {
    backLabel: 'Volver al Marco',
    journalLabel: 'Preguntas de Diario',
    journalHeading: 'Sientate con estas preguntas.',
    journalSubtitle:
      'No hay respuestas correctas. Escribe lo que venga.',
    polarityLabel: 'Polaridad',
    chakraLabel: 'Capa de chakra',
    nextLabel: 'Siguiente nodo',
    polarity: {
      masculine: 'Masculino \u2014 disciplina, estructura, practica diaria',
      feminine: 'Femenino \u2014 observar, recibir, sentir',
      both: 'Ambos \u2014 recibir apoyo y dar activamente',
    },
  },
}

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'es']
  return locales.flatMap((locale) =>
    validNodeIds.map((node) => ({ locale, node }))
  )
}

export default async function NodePage({
  params,
}: {
  params: Promise<{ locale: string; node: string }>
}) {
  const { locale, node: nodeSlug } = await params
  setRequestLocale(locale)

  if (!validNodeIds.includes(nodeSlug as NodeId)) {
    notFound()
  }

  const nodeId = nodeSlug as NodeId
  const loc = locale as Locale
  const t = pageContent[loc]

  const node = nodes.find((n) => n.id === nodeId)
  if (!node) notFound()

  const image = nodeImages[nodeId]
  const prompts = nodePrompts[nodeId]
  const quotes = prompts.quotes[loc]
  const journalPrompts = prompts.prompts[loc]

  // find next node for navigation
  const currentIndex = validNodeIds.indexOf(nodeId)
  const nextNodeId = validNodeIds[(currentIndex + 1) % validNodeIds.length]
  const nextNode = nodes.find((n) => n.id === nextNodeId)

  return (
    <>
      {/* ── HERO ── */}
      <Section spacing="none" className="min-h-[70dvh] flex items-center">
        <div className="py-32">
          {/* back link */}
          <Link
            href={`/${locale}/framework`}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-cloud/60 hover:text-white transition-colors font-sans mb-16 group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            {t.backLabel}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7 lg:col-span-6">
              {/* node number + icon */}
              <ScrollReveal variant="fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs text-cloud/30 font-sans tabular-nums">
                    {String(currentIndex + 1).padStart(2, '0')}/06
                  </span>
                  <div className="text-sage">
                    <NodeIcon nodeId={nodeId} size={28} />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.0] tracking-[-0.03em] text-white">
                  {node.name[loc]}
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.2}>
                <p className="mt-6 text-xl md:text-2xl text-cloud font-light">
                  {node.tagline[loc]}
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              {/* metadata */}
              <ScrollReveal variant="fade-up" delay={0.3}>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-cloud/40 font-sans mb-1">
                      {t.polarityLabel}
                    </p>
                    <p className="text-sm text-cloud/60 font-light">
                      {t.polarity[node.polarity]}
                    </p>
                  </div>
                  {node.chakra && (
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-cloud/40 font-sans mb-1">
                        {t.chakraLabel}
                      </p>
                      <p className="text-sm text-cloud/60 font-light">
                        {node.chakra.name} ({node.chakra.sanskrit})
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ── NODE IMAGE (parallax) ── */}
      <ParallaxImage
        src={image.src}
        alt={image.alt[locale as Locale]}
        className="h-[240px] md:h-[360px]"
        speed={0.1}
        overlay="bg-deep/50"
      />

      {/* ── DESCRIPTION ── */}
      <Section spacing="default" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 md:col-start-1">
              <p className="text-xl md:text-2xl text-cloud font-light leading-relaxed max-w-[55ch]">
                {node.description[loc]}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── QUOTE ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto text-center">
            {quotes.map((quote, i) => (
              <blockquote key={i} className={i > 0 ? 'mt-16' : ''}>
                <div className="bg-teal/40 border border-white/[0.04] rounded-2xl p-8 md:p-12">
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] tracking-[-0.01em] italic text-cloud/70">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm text-cloud/60 font-sans tracking-[0.05em]">
                      {quote.author}
                    </p>
                  </footer>
                </div>
              </blockquote>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* ── JOURNAL PROMPTS ── */}
      <Section spacing="lg" className="bg-forest">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <ScrollReveal variant="fade-up">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                {t.journalLabel}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.journalHeading}
              </h2>
              <p className="mt-5 text-lg text-cloud font-light leading-relaxed max-w-[35ch]">
                {t.journalSubtitle}
              </p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ol className="space-y-8">
              {journalPrompts.map((prompt, i) => (
                <ScrollReveal key={i} variant="slide-left" delay={i * 0.06}>
                  <li className="flex items-start gap-5">
                    <span className="shrink-0 text-xs text-cloud/20 font-sans tabular-nums mt-1.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl text-cloud/80 font-light leading-relaxed">
                      {prompt}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ── NEXT NODE NAV ── */}
      {nextNode && (
        <Section spacing="lg">
          <ScrollReveal variant="fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                  {t.nextLabel}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-white">
                  {nextNode.name[loc]}
                </h3>
                <p className="mt-3 text-lg text-cloud font-light">
                  {nextNode.tagline[loc]}
                </p>
              </div>
              <div className="hidden md:block">
                <Button href={`/${locale}/framework/${nextNodeId}`} variant="secondary">
                  {nextNode.name[loc]} &rarr;
                </Button>
              </div>
            </div>
            <div className="mt-8 md:hidden">
              <Button href={`/${locale}/framework/${nextNodeId}`} variant="secondary">
                {nextNode.name[loc]} &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </Section>
      )}
    </>
  )
}
