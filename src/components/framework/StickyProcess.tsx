'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { Locale } from '@/types'

interface Phase {
  id: string
  number: string
  name: { en: string; es: string }
  polarity: { en: string; es: string }
  question: { en: string; es: string }
  description: { en: string; es: string }
  practices: { en: string; es: string }
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
    practices: {
      en: 'Raw journaling, body scanning, somatic processing, nature immersion, sitting in silence.',
      es: 'Escritura libre, escaneo corporal, procesamiento somatico, inmersion en la naturaleza, silencio.',
    },
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
    practices: {
      en: 'Reflective journaling, IFS parts dialogue, pattern identification, integration therapy.',
      es: 'Escritura reflexiva, dialogo de partes IFS, identificacion de patrones, terapia de integracion.',
    },
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
    practices: {
      en: 'Behavioral commitments, values alignment, lifestyle changes, relational repair, service.',
      es: 'Compromisos de comportamiento, alineacion de valores, cambios de estilo de vida, reparacion relacional, servicio.',
    },
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
            <div>
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
                <p className="text-base text-cloud/60 italic mt-4 font-serif">
                  &ldquo;{phase.question[locale]}&rdquo;
                </p>
              </div>

              <p className="text-lg text-cloud font-light leading-relaxed mb-8">
                {phase.description[locale]}
              </p>
              <p className="text-sm text-cloud/60 font-light leading-relaxed">
                {phase.practices[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
