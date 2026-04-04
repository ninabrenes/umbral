'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { Locale } from '@/types'

interface Practice {
  name: { en: string; es: string }
  icon: string
}

interface Phase {
  id: string
  number: string
  name: { en: string; es: string }
  polarity: { en: string; es: string }
  question: { en: string; es: string }
  description: { en: string; es: string }
  extendedDescription: { en: string; es: string }
  practicesList: Practice[]
}

const phases: Phase[] = [
  {
    id: 'receive',
    number: '01',
    name: { en: 'Receive', es: 'Recibir' },
    polarity: { en: 'feminine', es: 'femenino' },
    question: { en: 'What is here?', es: 'Que hay aqui?' },
    description: {
      en: 'Be with what arose. Don\u2019t analyze or fix. Feel it in your body. Let it be present without needing to understand.',
      es: 'Estar con lo que surgio. No analizar. No arreglar. Sentirlo en el cuerpo. Dejar que este presente sin necesidad de entender.',
    },
    extendedDescription: {
      en: 'This is the feminine phase. Receptive. Open. The body knows before the mind names it. Your only job is to let the experience land without rushing to make sense of it.',
      es: 'Esta es la fase femenina. Receptiva. Abierta. El cuerpo sabe antes de que la mente lo nombre. Tu unico trabajo es dejar que la experiencia aterrice sin apresurarte a darle sentido.',
    },
    practicesList: [
      { name: { en: 'Raw journaling', es: 'Escritura libre' }, icon: '\u270D' },
      { name: { en: 'Body scanning', es: 'Escaneo corporal' }, icon: '\u2728' },
      { name: { en: 'Somatic processing', es: 'Procesamiento somatico' }, icon: '\u2B55' },
      { name: { en: 'Nature immersion', es: 'Inmersion en la naturaleza' }, icon: '\uD83C\uDF3F' },
      { name: { en: 'Sitting in silence', es: 'Silencio' }, icon: '\uD83E\uDDD8' },
    ],
  },
  {
    id: 'recognize',
    number: '02',
    name: { en: 'Recognize', es: 'Reconocer' },
    polarity: { en: 'balance', es: 'equilibrio' },
    question: { en: 'What does this mean?', es: 'Que significa esto?' },
    description: {
      en: 'Name what you see. Connect to patterns. Understand with the whole self, not the intellect alone.',
      es: 'Nombrar lo que ves. Conectar con patrones. Entender con todo el ser, no solo con el intelecto.',
    },
    extendedDescription: {
      en: 'The balance phase. Neither pushing nor retreating. Here you begin to notice the threads between what arose and how you live. Patterns emerge. Parts of you speak up. Let them.',
      es: 'La fase de equilibrio. Sin empujar ni retirarse. Aqui empiezas a notar los hilos entre lo que surgio y como vives. Los patrones emergen. Partes de ti hablan. Dejalas.',
    },
    practicesList: [
      { name: { en: 'Reflective journaling', es: 'Escritura reflexiva' }, icon: '\uD83D\uDCD3' },
      { name: { en: 'IFS parts dialogue', es: 'Dialogo de partes IFS' }, icon: '\uD83D\uDDE3' },
      { name: { en: 'Pattern identification', es: 'Identificacion de patrones' }, icon: '\uD83D\uDD0D' },
      { name: { en: 'Integration therapy', es: 'Terapia de integracion' }, icon: '\uD83E\uDE7A' },
    ],
  },
  {
    id: 'return',
    number: '03',
    name: { en: 'Return', es: 'Retornar' },
    polarity: { en: 'masculine', es: 'masculino' },
    question: {
      en: 'What will I do with this?',
      es: 'Que hare con esto?',
    },
    description: {
      en: 'Bring it back. Commit. Act. Change something in your daily life. Without return, insights remain beautiful but inert.',
      es: 'Traerlo de vuelta. Comprometerse. Actuar. Cambiar algo en la vida diaria. Sin el retorno, las ideas son hermosas pero inertes.',
    },
    extendedDescription: {
      en: 'The masculine phase. Directed. Committed. The insight has been received and recognized. Now it must be lived. This is where integration becomes transformation, or fades into memory.',
      es: 'La fase masculina. Dirigida. Comprometida. La percepcion ha sido recibida y reconocida. Ahora debe ser vivida. Aqui es donde la integracion se convierte en transformacion, o se desvanece en recuerdo.',
    },
    practicesList: [
      { name: { en: 'Behavioral commitments', es: 'Compromisos de comportamiento' }, icon: '\u2705' },
      { name: { en: 'Values alignment', es: 'Alineacion de valores' }, icon: '\uD83C\uDFAF' },
      { name: { en: 'Lifestyle changes', es: 'Cambios de estilo de vida' }, icon: '\uD83D\uDD04' },
      { name: { en: 'Relational repair', es: 'Reparacion relacional' }, icon: '\uD83E\uDD1D' },
      { name: { en: 'Service', es: 'Servicio' }, icon: '\uD83C\uDF31' },
    ],
  },
]

const transition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1] as const,
}

interface StickyProcessProps {
  locale: Locale
}

export function StickyProcess({ locale }: StickyProcessProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])

  const setPhaseRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      phaseRefs.current[index] = el
    },
    [],
  )

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    phaseRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index)
            }
          })
        },
        { threshold: 0.4, rootMargin: '-20% 0px -20% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  const active = phases[activeIndex]

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[200vh]">
      {/* Left: sticky panel (hidden on mobile, replaced by inline content) */}
      <div className="hidden md:block md:col-span-5 md:sticky md:top-32 md:self-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={transition}
          >
            <span className="block font-serif text-[8rem] font-light text-white/[0.06] leading-none tabular-nums select-none">
              {active.number}
            </span>
            <h3 className="font-serif text-3xl font-light tracking-[-0.02em] text-white -mt-8">
              {active.name[locale]}
            </h3>
            <p className="text-sm tracking-[0.2em] uppercase text-sage mt-4 font-sans">
              {active.polarity[locale]}
            </p>
            <p className="text-lg text-cloud/60 italic mt-6 font-serif leading-relaxed">
              &ldquo;{active.question[locale]}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: scrollable content */}
      <div className="md:col-span-7 space-y-[50vh]">
        {phases.map((phase, i) => (
          <div
            key={phase.id}
            id={phase.id}
            ref={setPhaseRef(i)}
            className="min-h-[50vh] flex items-center"
          >
            <div className="w-full">
              {/* Mobile-only: show phase header inline */}
              <div className="md:hidden mb-8">
                <span className="block font-serif text-6xl font-light text-white/[0.06] leading-none tabular-nums">
                  {phase.number}
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[-0.02em] text-white -mt-4">
                  {phase.name[locale]}
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase text-sage mt-3 font-sans">
                  {phase.polarity[locale]}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-cloud font-light leading-relaxed mb-4">
                {phase.description[locale]}
              </p>
              <p className="text-base text-cloud/50 font-light leading-relaxed mb-8">
                {phase.extendedDescription[locale]}
              </p>

              {/* Practices list */}
              <div className="bg-white/[0.03] rounded-xl p-5 mb-8">
                <p className="text-xs tracking-[0.15em] uppercase text-cloud/40 font-sans mb-4">
                  {locale === 'es' ? 'Practicas' : 'Practices'}
                </p>
                <ul className="space-y-2.5">
                  {phase.practicesList.map((practice) => (
                    <li
                      key={practice.name[locale]}
                      className="flex items-center gap-3 text-sm text-cloud/70 font-light"
                    >
                      <span className="text-base leading-none shrink-0">{practice.icon}</span>
                      {practice.name[locale]}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Question repeated large */}
              <p className="font-serif text-2xl md:text-3xl font-light italic text-cloud/40 leading-[1.3] tracking-[-0.01em]">
                &ldquo;{phase.question[locale]}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
