import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Callout } from '@/components/ui/Callout'
import { Button } from '@/components/ui/Button'
import { InteractiveNode } from '@/components/framework/InteractiveNode'
import { NetworkDiagram } from '@/components/framework/NetworkDiagram'
import { ProcessDiagram } from '@/components/framework/ProcessDiagram'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { nodes } from '@/content/framework/nodes'
import { pageImages } from '@/content/framework/images'
import type { Locale } from '@/types'

const content = {
  en: {
    hero: {
      label: 'Integration Framework',
      title: 'The Mycelial\nNetwork',
      subtitle:
        'Below the surface, a vast mycelial network connects every tree in the forest. Sharing nutrients, sending signals, supporting the weakest members.',
      body: 'Psychedelic integration works the same way. Body, mind, relationships, values, nature, meaning. Not separate containers. Nodes in a living network. When one shifts, all shift.',
    },
    nodes: {
      label: 'The Six Nodes',
      heading: 'Each node is a concentration of integration work.',
      subtitle:
        'Like trees in a forest, each has its own character, but none exists without the others.',
    },
    callout: {
      quote: 'Nothing in the forest thrives alone.',
    },
    process: {
      label: 'The Process Layer',
      heading: 'Receive. Recognize. Return.',
      subtitle:
        'Within each node, integration moves through three phases. The process spirals.',
      phases: [
        {
          name: 'Receive',
          polarity: 'feminine',
          question: 'What is here?',
          description:
            'Be with what arose. Don\u2019t analyze or fix. Feel it in your body. Let it be present without needing to understand.',
          practices:
            'Raw journaling, body scanning, somatic processing, nature immersion, sitting in silence.',
        },
        {
          name: 'Recognize',
          polarity: 'balance',
          question: 'What does this mean?',
          description:
            'Name what you see. Connect to patterns. Understand with the whole self, not the intellect alone.',
          practices:
            'Reflective journaling, IFS parts dialogue, pattern identification, integration therapy.',
        },
        {
          name: 'Return',
          polarity: 'masculine',
          question: 'What will I do with this?',
          description:
            'Bring it back. Commit. Act. Change something in your daily life. Without return, insights remain beautiful but inert.',
          practices:
            'Behavioral commitments, values alignment, lifestyle changes, relational repair, service.',
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
    cta: {
      heading: 'Explore each node.',
      subtitle:
        'Dive deeper into the six domains of integration.',
      button: 'Begin with Ground',
    },
  },
  es: {
    hero: {
      label: 'Marco de Integracion',
      title: 'La Red\nMicelial',
      subtitle:
        'Debajo de la superficie, una vasta red micelial conecta cada arbol del bosque. Compartiendo nutrientes, enviando senales, apoyando a los mas debiles.',
      body: 'La integracion psicodelica funciona igual. Cuerpo, mente, relaciones, valores, naturaleza, significado. No contenedores separados. Nodos en una red viviente. Cuando uno cambia, todos cambian.',
    },
    nodes: {
      label: 'Los Seis Nodos',
      heading: 'Cada nodo es una concentracion de trabajo de integracion.',
      subtitle:
        'Como arboles en un bosque, cada uno tiene su propio caracter, pero ninguno existe sin los otros.',
    },
    callout: {
      quote: 'Nada en el bosque prospera solo.',
    },
    process: {
      label: 'La Capa de Proceso',
      heading: 'Recibir. Reconocer. Retornar.',
      subtitle:
        'Dentro de cada nodo, la integracion se mueve a traves de tres fases. El proceso es espiral.',
      phases: [
        {
          name: 'Recibir',
          polarity: 'femenino',
          question: 'Que hay aqui?',
          description:
            'Estar con lo que surgio. No analizar. No arreglar. Sentirlo en el cuerpo. Dejar que este presente sin necesidad de entender.',
          practices:
            'Escritura libre, escaneo corporal, procesamiento somatico, inmersion en la naturaleza, silencio.',
        },
        {
          name: 'Reconocer',
          polarity: 'equilibrio',
          question: 'Que significa esto?',
          description:
            'Nombrar lo que ves. Conectar con patrones. Entender con todo el ser, no solo con el intelecto.',
          practices:
            'Escritura reflexiva, dialogo de partes IFS, identificacion de patrones, terapia de integracion.',
        },
        {
          name: 'Retornar',
          polarity: 'masculino',
          question: 'Que hare con esto?',
          description:
            'Traerlo de vuelta. Comprometerse. Actuar. Cambiar algo en la vida diaria. Sin el retorno, las ideas son hermosas pero inertes.',
          practices:
            'Compromisos de comportamiento, alineacion de valores, cambios de estilo de vida, reparacion relacional, servicio.',
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
    cta: {
      heading: 'Explora cada nodo.',
      subtitle:
        'Profundiza en los seis dominios de integracion.',
      button: 'Comenzar con Tierra',
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
      <Section spacing="none" className="min-h-[85dvh] flex items-center bg-deep">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-32">
          <div className="md:col-span-7 lg:col-span-6">
            <ScrollReveal variant="fade-in">
              <p className="text-xs tracking-[0.2em] uppercase text-cloud/60 mb-8 font-sans">
                {t.hero.label}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line text-white">
                {t.hero.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.25}>
              <p className="mt-8 text-xl md:text-2xl text-cloud/60 font-light leading-relaxed max-w-[50ch]">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 lg:col-span-5 lg:col-start-8">
            <ScrollReveal variant="fade-up" delay={0.35}>
              <p className="text-lg text-cloud/60 font-light leading-relaxed">
                {t.hero.body}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ── FRAMEWORK IMAGE (parallax) ── */}
      <ParallaxImage
        src={pageImages.framework.src}
        alt={pageImages.framework.alt[locale as Locale]}
        className="h-[50vh] md:h-[60vh]"
        speed={0.12}
        overlay="bg-deep/50"
      />

      {/* ── SIX NODES ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <SectionHeader
            label={t.nodes.label}
            heading={t.nodes.heading}
            subtitle={t.nodes.subtitle}
          />
        </ScrollReveal>

        {/* Network diagram above node cards */}
        <ScrollReveal variant="scale" className="flex justify-center mb-16 md:mb-24">
          <NetworkDiagram locale={locale as Locale} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nodes.map((node, i) => (
            <ScrollReveal
              key={node.id}
              variant="fade-up"
              delay={i * 0.08}
            >
              <InteractiveNode
                node={node}
                locale={locale as Locale}
                index={i}
                href={`/${locale}/framework/${node.id}`}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── CALLOUT ── */}
      <section>
        <ScrollReveal variant="scale">
          <Callout quote={t.callout.quote} />
        </ScrollReveal>
      </section>

      {/* ── PROCESS LAYER ── */}
      <Section spacing="lg" className="bg-teal">
        <ScrollReveal variant="fade-in">
          <SectionHeader
            label={t.process.label}
            heading={t.process.heading}
            subtitle={t.process.subtitle}
          />
        </ScrollReveal>

        {/* Process diagram */}
        <ScrollReveal variant="fade-in" className="flex justify-center mb-16 md:mb-24">
          <ProcessDiagram locale={locale as Locale} />
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {t.process.phases.map((phase, i) => (
            <ScrollReveal key={phase.name} variant="fade-up" delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Left: big number + name + question */}
                <div className="md:col-span-5 lg:col-span-4">
                  <span className="block font-sans text-7xl md:text-8xl lg:text-9xl font-light text-white/[0.05] leading-none tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] -mt-4 md:-mt-6 text-white">
                    {phase.name}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-sage mt-4 font-sans">
                    {phase.polarity}
                  </p>
                  <p className="font-serif text-2xl md:text-3xl italic text-sage mt-8 leading-[1.3]">
                    &ldquo;{phase.question}&rdquo;
                  </p>
                </div>

                {/* Right: description + practices */}
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-lg text-cloud/60 font-light leading-relaxed mb-8">
                    {phase.description}
                  </p>
                  <p className="text-sm text-cloud/40 font-light leading-relaxed">
                    {phase.practices}
                  </p>
                </div>
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
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-white">
                {t.cornerstones.heading}
              </h2>
              <p className="mt-5 text-lg text-cloud/60 font-light leading-relaxed max-w-[40ch]">
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
                      <p className="text-cloud/60 font-light leading-relaxed max-w-[55ch]">
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

      {/* ── CTA ── */}
      <Section spacing="lg" className="bg-forest">
        <ScrollReveal variant="fade-up">
          <div className="max-w-2xl">
            <SectionHeader
              heading={t.cta.heading}
              subtitle={t.cta.subtitle}
            />
            <Button href={`/${locale}/framework/ground`}>{t.cta.button}</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
