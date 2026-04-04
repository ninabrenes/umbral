import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { HorizontalNodes } from '@/components/framework/HorizontalNodes'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { nodes } from '@/content/framework/nodes'
import type { Locale } from '@/types'

const content = {
  en: {
    hero: {
      label: 'Integration Framework',
      title: 'The Mycelial\nNetwork',
      subtitle:
        'Below the surface, a vast mycelial network connects every tree in the forest. Sharing nutrients, sending signals, supporting the weakest members.',
    },
    nodes: {
      label: 'The Six Nodes',
      heading: 'Each node is a concentration of integration work.',
      subtitle:
        'Like trees in a forest, each has its own character, but none exists without the others.',
    },
    process: {
      label: 'The Process Layer',
      heading: 'Receive. Recognize. Return.',
      subtitle:
        'Within each node, integration moves through three phases. The process spirals.',
      phases: [
        {
          name: 'Receive',
          question: 'What is here?',
          description:
            'Be with what arose. Don\u2019t analyze or fix. Feel it in your body. Let it be present without needing to understand.',
        },
        {
          name: 'Recognize',
          question: 'What does this mean?',
          description:
            'Name what you see. Connect to patterns. Understand with the whole self, not the intellect alone.',
        },
        {
          name: 'Return',
          question: 'What will I do with this?',
          description:
            'Bring it back. Commit. Act. Change something in your daily life. Without return, insights remain beautiful but inert.',
        },
      ],
    },
    cornerstones: {
      label: 'The Four Cornerstones',
      heading: 'The soil it grows in.',
      subtitle:
        'The principles that hold every piece of content, every prompt, every practice.',
      items: [
        {
          name: 'Trauma-informed',
          description:
            'Prompts invite, never push. Grounding resources always accessible. Difficult experiences normalized, not pathologized.',
        },
        {
          name: 'Culturally grounded',
          description:
            'These practices have roots. We name those roots. Cultural context is inseparable from practical content.',
        },
        {
          name: 'Ethically rooted',
          description:
            'A companion, never an authority. No guru dynamic. No gamification. Open source means transparent and auditable.',
        },
        {
          name: 'Collectively held',
          description:
            'The most ancient psychedelic traditions are communal. The tool itself is open source. Collectively built, collectively improved.',
        },
      ],
    },
  },
  es: {
    hero: {
      label: 'Marco de Integracion',
      title: 'La Red\nMicelial',
      subtitle:
        'Debajo de la superficie, una vasta red micelial conecta cada arbol del bosque. Compartiendo nutrientes, enviando senales, apoyando a los mas debiles.',
    },
    nodes: {
      label: 'Los Seis Nodos',
      heading: 'Cada nodo es una concentracion de trabajo de integracion.',
      subtitle:
        'Como arboles en un bosque, cada uno tiene su propio caracter, pero ninguno existe sin los otros.',
    },
    process: {
      label: 'La Capa de Proceso',
      heading: 'Recibir. Reconocer. Retornar.',
      subtitle:
        'Dentro de cada nodo, la integracion se mueve a traves de tres fases. El proceso es espiral.',
      phases: [
        {
          name: 'Recibir',
          question: 'Que hay aqui?',
          description:
            'Estar con lo que surgio. No analizar. No arreglar. Sentirlo en el cuerpo. Dejar que este presente sin necesidad de entender.',
        },
        {
          name: 'Reconocer',
          question: 'Que significa esto?',
          description:
            'Nombrar lo que ves. Conectar con patrones. Entender con todo el ser, no solo con el intelecto.',
        },
        {
          name: 'Retornar',
          question: 'Que hare con esto?',
          description:
            'Traerlo de vuelta. Comprometerse. Actuar. Cambiar algo en la vida diaria. Sin el retorno, las ideas son hermosas pero inertes.',
        },
      ],
    },
    cornerstones: {
      label: 'Las Cuatro Piedras Angulares',
      heading: 'El suelo donde crece.',
      subtitle:
        'Los principios que sostienen cada pieza de contenido, cada pregunta, cada practica.',
      items: [
        {
          name: 'Informado por el trauma',
          description:
            'Las preguntas invitan, nunca empujan. Los recursos de anclaje siempre estan accesibles. Las experiencias dificiles se normalizan, no se patologizan.',
        },
        {
          name: 'Culturalmente fundamentado',
          description:
            'Las practicas tienen raices. Nombramos esas raices. El contexto cultural es inseparable del contenido practico.',
        },
        {
          name: 'Eticamente enraizado',
          description:
            'Un companero, nunca una autoridad. Sin dinamica de guru. Sin gamificacion. Codigo abierto significa transparente y auditable.',
        },
        {
          name: 'Sostenido colectivamente',
          description:
            'Las tradiciones psicodelicas mas antiguas son comunales. La herramienta misma es de codigo abierto. Construida y mejorada colectivamente.',
        },
      ],
    },
  },
}

export default async function FrameworkPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = content[locale as Locale]

  return (
    <>
      {/* ── HERO ── */}
      <Section spacing="none" className="min-h-[70dvh] flex items-center bg-deep">
        <div className="py-32 max-w-3xl">
          <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
            {t.hero.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-white">
            {t.hero.title}
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-cloud font-light leading-relaxed max-w-[50ch]">
            {t.hero.subtitle}
          </p>
        </div>
      </Section>

      {/* ── SIX NODES ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <SectionHeader
            label={t.nodes.label}
            heading={t.nodes.heading}
            subtitle={t.nodes.subtitle}
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <HorizontalNodes nodes={nodes} locale={locale as Locale} />
        </ScrollReveal>
      </Section>

      {/* ── PROCESS LAYER ── */}
      <Section spacing="lg" className="bg-teal">
        <ScrollReveal variant="fade-in">
          <SectionHeader
            label={t.process.label}
            heading={t.process.heading}
            subtitle={t.process.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16">
          {t.process.phases.map((phase, i) => (
            <ScrollReveal key={phase.name} variant="fade-up" delay={i * 0.1}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-cloud/40 font-sans mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-[-0.02em] text-white mb-4">
                  {phase.name}
                </h3>
                <p className="font-serif italic text-lg text-cloud/70 mb-4">
                  {phase.question}
                </p>
                <p className="text-cloud font-light leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── FOUR CORNERSTONES ── */}
      <Section spacing="lg" className="bg-deep">
        <ScrollReveal variant="slide-right">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-4 font-sans">
                {t.cornerstones.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.cornerstones.heading}
              </h2>
              <p className="mt-5 text-lg text-cloud font-light leading-relaxed max-w-[40ch]">
                {t.cornerstones.subtitle}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-12">
                {t.cornerstones.items.map((item, i) => (
                  <div key={item.name} className="flex items-start gap-6">
                    <span className="shrink-0 text-xs text-cloud/20 font-sans tabular-nums mt-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-light tracking-[-0.01em] mb-3 text-white">
                        {item.name}
                      </h3>
                      <p className="text-cloud font-light leading-relaxed max-w-[55ch]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
