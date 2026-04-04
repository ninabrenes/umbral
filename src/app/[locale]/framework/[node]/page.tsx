import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { NodeIcon } from '@/components/framework/NodeIcon'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { nodes } from '@/content/framework/nodes'
import { nodePrompts } from '@/content/framework/prompts'
import { nodeDetails } from '@/content/framework/nodes-expanded'
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
    aboutLabel: 'About this node',
    practicesLabel: 'Practices',
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
    aboutLabel: 'Acerca de este nodo',
    practicesLabel: 'Practicas',
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

  const prompts = nodePrompts[nodeId]
  const journalPrompts = prompts.prompts[loc]
  const detail = nodeDetails[nodeId]

  // find next node for navigation
  const currentIndex = validNodeIds.indexOf(nodeId)
  const nextNodeId = validNodeIds[(currentIndex + 1) % validNodeIds.length]
  const nextNode = nodes.find((n) => n.id === nextNodeId)

  return (
    <>
      {/* ── HERO ── */}
      <Section spacing="none" className="min-h-[60dvh] flex items-center bg-deep">
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
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs text-cloud/30 font-sans tabular-nums">
                  {String(currentIndex + 1).padStart(2, '0')}/06
                </span>
                <div className="text-sage">
                  <NodeIcon nodeId={nodeId} size={28} />
                </div>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.0] tracking-[-0.03em] text-white">
                {node.name[loc]}
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-cloud font-light">
                {node.tagline[loc]}
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              {/* metadata */}
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
            </div>
          </div>
        </div>
      </Section>

      {/* ── ABOUT THIS NODE (description + why it matters merged) ── */}
      <Section spacing="default" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                {t.aboutLabel}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-8">
              <p className="text-xl md:text-2xl text-cloud font-light leading-relaxed">
                {node.description[loc]}
              </p>
              <p className="text-lg text-cloud/70 font-light leading-relaxed">
                {detail.whyItMatters[loc]}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── PRACTICES ── */}
      <Section spacing="default" className="bg-deep">
        <ScrollReveal variant="fade-up">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-12 font-sans">
            {t.practicesLabel}
          </p>
        </ScrollReveal>
        <div className="space-y-0">
          {detail.practices.slice(0, 5).map((practice, i) => (
            <ScrollReveal key={practice.name[loc]} variant="fade-up" delay={i * 0.06}>
              <div className="py-6 border-b border-cloud/[0.06]">
                <h3 className="font-serif text-xl font-light tracking-[-0.01em] text-white mb-2">
                  {practice.name[loc]}
                </h3>
                <p className="text-sm text-cloud/60 font-light leading-relaxed max-w-[65ch]">
                  {practice.description[loc]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
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
        <Section spacing="lg" className="bg-deep">
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
