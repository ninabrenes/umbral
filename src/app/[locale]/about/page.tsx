import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Callout } from '@/components/ui/Callout'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/types'

const content = {
  en: {
    hero: {
      label: 'About',
      heading: 'about umbral',
      body: 'Umbral is a free, open-source, bilingual psychedelic preparation and integration portal. Built on evidence-informed practices, grounded in cultural respect, and designed with privacy at its core.',
      not: [
        'This is not medical advice.',
        'This is not a ceremony simulator.',
        'This is not gamified self-improvement.',
      ],
      is: 'It is a tool for people who take this work seriously, built by people who do the same.',
    },
    mycelial: {
      label: 'The Framework',
      heading: 'The Mycelial Network',
      body: 'Beneath every forest, an invisible web of mycelium connects the trees. Nutrients flow through it. Signals pass between organisms separated by hundreds of meters. Nothing in the forest thrives alone.',
      body2: 'The Mycelial Network is our framework for understanding integration. Six nodes, each representing a domain of human experience, connected the way mycelium connects a forest. When one node shifts, the others respond. Integration is never isolated. It is always relational.',
    },
    callout: {
      quote: 'Tools for vulnerable experiences must be transparent in their construction.',
    },
    openSource: {
      label: 'Open Source',
      heading: 'Transparency as trust.',
      body: 'Umbral is MIT-licensed and community-built. Every line of code is public. Every design decision is auditable. We believe that tools for vulnerable experiences must be transparent in their construction.',
      body2: 'If you are a developer, designer, researcher, translator, or someone who has walked this path and wants to help others prepare for it, the repository is open.',
      cta: 'View on GitHub',
    },
    reciprocity: {
      label: 'Indigenous Reciprocity',
      heading: 'These practices have roots.',
      intro: 'Psychedelic medicines did not emerge from laboratories or Silicon Valley. They have been held, protected, and transmitted for centuries by Indigenous communities, including the Mazatec people of Oaxaca, the Shipibo-Conibo of the Peruvian Amazon, and the Wixárika (Huichol) of western Mexico, among many others.',
      body: 'Umbral exists because these traditions exist. We have a responsibility to acknowledge this lineage, not as decoration or disclaimer, but as foundational truth. The current psychedelic renaissance owes a debt that cannot be repaid with citations alone.',
      principles: {
        heading: 'The 8 Principles',
        intro: 'We align with the eight principles articulated in The Lancet for ethical engagement with Indigenous psychedelic knowledge:',
        items: [
          { name: 'Reverence', desc: 'Approaching traditional knowledge with sacred respect.' },
          { name: 'Respect', desc: 'Honoring intellectual and cultural property rights.' },
          { name: 'Responsibility', desc: 'Accountability for impact on Indigenous communities.' },
          { name: 'Relevance', desc: 'Ensuring benefits reach the communities of origin.' },
          { name: 'Regulation', desc: 'Supporting Indigenous self-governance over sacred practices.' },
          { name: 'Reparation', desc: 'Material repair for historical extraction and harm.' },
          { name: 'Restoration', desc: 'Returning knowledge, land, and sovereignty.' },
          { name: 'Reconciliation', desc: 'Building relationships rooted in truth and equity.' },
        ],
      },
      closing: 'Words on a page are insufficient. But silence is worse. We commit to directing resources, attention, and credit toward the communities who have carried this knowledge, and we invite you to do the same.',
      cta: 'Indigenous Reciprocity Initiative',
    },
    privacy: {
      label: 'Privacy',
      heading: 'Your data is yours. Period.',
      body: 'Psychedelic experiences exist in a complex legal and social landscape. We designed Umbral so that using it never puts you at risk.',
      points: [
        {
          title: 'Zero PII linked to substance use',
          desc: 'No account connects your identity to any substance-related data.',
        },
        {
          title: 'End-to-end encrypted journals',
          desc: 'Your reflections are encrypted before they leave your device. We cannot read them. No one can.',
        },
        {
          title: 'No behavioral analytics',
          desc: 'We do not track which substances you explore, which nodes you visit, or how you use the tool.',
        },
        {
          title: 'Export and delete at any time',
          desc: 'Your data belongs to you. Download it or destroy it whenever you choose.',
        },
        {
          title: 'Open-source encryption',
          desc: 'Every encryption implementation is auditable in the public repository. Trust is verified, not promised.',
        },
      ],
    },
    contribute: {
      label: 'Contribute',
      heading: 'Build with us.',
      body: 'Umbral is a living project. It grows through contributions from developers, designers, researchers, translators, and people with lived experience navigating these spaces.',
      github: 'Contribute on GitHub',
      contact: 'Or reach out directly at',
      email: 'hello@umbral.earth',
    },
  },
  es: {
    hero: {
      label: 'Acerca de',
      heading: 'sobre umbral',
      body: 'Umbral es un portal gratuito, de código abierto y bilingüe para la preparación e integración psicodélica. Construido sobre prácticas informadas por la evidencia, fundamentado en respeto cultural, y diseñado con la privacidad como principio central.',
      not: [
        'Esto no es asesoría médica.',
        'Esto no es un simulador de ceremonias.',
        'Esto no es auto-mejora gamificada.',
      ],
      is: 'Es una herramienta para personas que toman este trabajo en serio, construida por personas que hacen lo mismo.',
    },
    mycelial: {
      label: 'El Marco',
      heading: 'La Red Micelial',
      body: 'Debajo de cada bosque, una red invisible de micelio conecta los árboles. Los nutrientes fluyen a través de ella. Las señales pasan entre organismos separados por cientos de metros. Nada en el bosque prospera solo.',
      body2: 'La Red Micelial es nuestro marco para entender la integración. Seis nodos, cada uno representando un dominio de la experiencia humana, conectados como el micelio conecta un bosque. Cuando un nodo cambia, los otros responden. La integración nunca es aislada. Siempre es relacional.',
    },
    callout: {
      quote: 'Las herramientas para experiencias vulnerables deben ser transparentes en su construccion.',
    },
    openSource: {
      label: 'Código Abierto',
      heading: 'Transparencia como confianza.',
      body: 'Umbral tiene licencia MIT y es construido por la comunidad. Cada línea de código es pública. Cada decisión de diseño es auditable. Creemos que las herramientas para experiencias vulnerables deben ser transparentes en su construcción.',
      body2: 'Si eres desarrollador, diseñador, investigador, traductor, o alguien que ha recorrido este camino y quiere ayudar a otros a prepararse, el repositorio está abierto.',
      cta: 'Ver en GitHub',
    },
    reciprocity: {
      label: 'Reciprocidad Indígena',
      heading: 'Estas prácticas tienen raíces.',
      intro: 'Las medicinas psicodélicas no surgieron de laboratorios ni de Silicon Valley. Han sido custodiadas, protegidas y transmitidas durante siglos por comunidades indígenas, incluyendo al pueblo Mazateco de Oaxaca, los Shipibo-Conibo de la Amazonía peruana, y los Wixárika (Huichol) del occidente de México, entre muchos otros.',
      body: 'Umbral existe porque estas tradiciones existen. Tenemos la responsabilidad de reconocer este linaje, no como decoración ni como descargo de responsabilidad, sino como verdad fundacional. El renacimiento psicodélico actual tiene una deuda que no se puede pagar solo con citas.',
      principles: {
        heading: 'Los 8 Principios',
        intro: 'Nos alineamos con los ocho principios articulados en The Lancet para el compromiso ético con el conocimiento psicodélico indígena:',
        items: [
          { name: 'Reverencia', desc: 'Acercarse al conocimiento tradicional con respeto sagrado.' },
          { name: 'Respeto', desc: 'Honrar los derechos de propiedad intelectual y cultural.' },
          { name: 'Responsabilidad', desc: 'Rendición de cuentas por el impacto en las comunidades indígenas.' },
          { name: 'Relevancia', desc: 'Asegurar que los beneficios lleguen a las comunidades de origen.' },
          { name: 'Regulación', desc: 'Apoyar la autogobernanza indígena sobre las prácticas sagradas.' },
          { name: 'Reparación', desc: 'Reparación material por la extracción histórica y el daño.' },
          { name: 'Restauración', desc: 'Devolver conocimiento, tierra y soberanía.' },
          { name: 'Reconciliación', desc: 'Construir relaciones enraizadas en la verdad y la equidad.' },
        ],
      },
      closing: 'Las palabras en una página son insuficientes. Pero el silencio es peor. Nos comprometemos a dirigir recursos, atención y crédito hacia las comunidades que han custodiado este conocimiento, y te invitamos a hacer lo mismo.',
      cta: 'Iniciativa de Reciprocidad Indígena',
    },
    privacy: {
      label: 'Privacidad',
      heading: 'Tus datos son tuyos. Punto.',
      body: 'Las experiencias psicodélicas existen en un paisaje legal y social complejo. Diseñamos Umbral para que usarlo nunca te ponga en riesgo.',
      points: [
        {
          title: 'Cero PII vinculada al uso de sustancias',
          desc: 'Ninguna cuenta conecta tu identidad con datos relacionados con sustancias.',
        },
        {
          title: 'Diarios cifrados de extremo a extremo',
          desc: 'Tus reflexiones se cifran antes de salir de tu dispositivo. No podemos leerlas. Nadie puede.',
        },
        {
          title: 'Sin analítica de comportamiento',
          desc: 'No rastreamos qué sustancias exploras, qué nodos visitas, ni cómo usas la herramienta.',
        },
        {
          title: 'Exporta y elimina en cualquier momento',
          desc: 'Tus datos te pertenecen. Descárgalos o elimínalos cuando quieras.',
        },
        {
          title: 'Cifrado de código abierto',
          desc: 'Cada implementación de cifrado es auditable en el repositorio público. La confianza se verifica, no se promete.',
        },
      ],
    },
    contribute: {
      label: 'Contribuir',
      heading: 'Construye con nosotros.',
      body: 'Umbral es un proyecto vivo. Crece a través de contribuciones de desarrolladores, diseñadores, investigadores, traductores, y personas con experiencia vivida navegando estos espacios.',
      github: 'Contribuir en GitHub',
      contact: 'O escríbenos directamente a',
      email: 'hello@umbral.earth',
    },
  },
}

export default async function AboutPage({
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
      <Section spacing="none" className="min-h-[80dvh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start py-32 md:py-40">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-8 font-sans">
              {t.hero.label}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-[-0.03em]">
              {t.hero.heading}
            </h1>
            <p className="mt-10 md:mt-14 text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-[50ch]">
              {t.hero.body}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-16">
            <div className="border-l border-ink/10 pl-8">
              <ul className="space-y-3">
                {t.hero.not.map((line) => (
                  <li
                    key={line}
                    className="text-sm text-ink-muted font-light leading-relaxed"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-ink/80 font-light leading-relaxed">
                {t.hero.is}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── MYCELIAL NETWORK ── */}
      <Section spacing="lg" className="bg-sand">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4 font-sans">
              {t.mycelial.label}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em]">
              {t.mycelial.heading}
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-ink-muted font-light leading-relaxed mb-6">
              {t.mycelial.body}
            </p>
            <p className="text-lg text-ink/80 font-light leading-relaxed">
              {t.mycelial.body2}
            </p>
          </div>
        </div>
      </Section>

      {/* ── CALLOUT ── */}
      <section className="bg-cream">
        <Callout quote={t.callout.quote} />
      </section>

      {/* ── OPEN SOURCE ── */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <SectionHeader
              label={t.openSource.label}
              heading={t.openSource.heading}
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-ink-muted font-light leading-relaxed mb-6">
              {t.openSource.body}
            </p>
            <p className="text-lg text-ink/80 font-light leading-relaxed mb-10">
              {t.openSource.body2}
            </p>
            <Button
              variant="secondary"
              href="https://github.com/ninabrenes/umbral"
            >
              {t.openSource.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* ── INDIGENOUS RECIPROCITY ── */}
      <Section spacing="lg" className="bg-forest-deep text-ivory">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left column: heading and intro */}
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.2em] uppercase text-gold/80 mb-4 font-sans">
              {t.reciprocity.label}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-ivory">
              {t.reciprocity.heading}
            </h2>
            <p className="mt-8 text-lg text-ivory/70 font-light leading-relaxed">
              {t.reciprocity.intro}
            </p>
          </div>

          {/* Right column: body, principles, closing */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-ivory/70 font-light leading-relaxed mb-16">
              {t.reciprocity.body}
            </p>

            {/* The 8 Principles */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.2] tracking-[-0.01em] text-ivory mb-3">
                {t.reciprocity.principles.heading}
              </h3>
              <p className="text-sm text-ivory/50 font-light leading-relaxed mb-10">
                {t.reciprocity.principles.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {t.reciprocity.principles.items.map((principle) => (
                  <div key={principle.name}>
                    <p className="text-sm tracking-[0.15em] uppercase text-gold font-sans mb-2">
                      {principle.name}
                    </p>
                    <p className="text-sm text-ivory/60 font-light leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-ivory/70 font-light leading-relaxed mb-10">
              {t.reciprocity.closing}
            </p>

            <a
              href="https://chacruna.net/indigenous-reciprocity-initiative/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase font-sans text-gold hover:text-gold-muted transition-colors duration-200"
            >
              {t.reciprocity.cta}
              <span aria-hidden="true" className="text-gold/60">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── PRIVACY ── */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <SectionHeader
              label={t.privacy.label}
              heading={t.privacy.heading}
            />
            <p className="text-lg text-ink-muted font-light leading-relaxed max-w-[45ch]">
              {t.privacy.body}
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="space-y-10">
              {t.privacy.points.map((point) => (
                <li key={point.title}>
                  <h3 className="font-serif text-xl md:text-2xl font-light leading-[1.2] tracking-[-0.01em] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-base text-ink-muted font-light leading-relaxed max-w-[50ch]">
                    {point.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── CONTRIBUTE ── */}
      <Section spacing="lg" className="bg-forest-deep text-ivory">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-gold/80 mb-4 font-sans">
              {t.contribute.label}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.03em] text-ivory">
              {t.contribute.heading}
            </h2>
            <p className="mt-8 text-lg text-ivory/60 font-light leading-relaxed max-w-[50ch]">
              {t.contribute.body}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="flex flex-col gap-6">
              <Button
                variant="primary"
                href="https://github.com/ninabrenes/umbral"
              >
                {t.contribute.github}
              </Button>
              <p className="text-sm text-ivory/40 font-light">
                {t.contribute.contact}{' '}
                <a
                  href="mailto:hello@umbral.earth"
                  className="text-gold underline underline-offset-4 decoration-gold/30 hover:decoration-gold/60 transition-colors duration-200"
                >
                  {t.contribute.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
