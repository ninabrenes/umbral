import type { CrisisResource } from '@/types'

export const crisisResources: CrisisResource[] = [
  {
    name: { en: 'Fireside Project', es: 'Fireside Project' },
    description: {
      en: 'Psychedelic peer support — before, during, and after',
      es: 'Apoyo entre pares psicodélico — antes, durante y después',
    },
    contact: '623-473-7433',
    href: 'tel:6234737433',
    locales: ['en', 'es'],
  },
  {
    name: { en: '988 Suicide & Crisis Lifeline', es: '988 Línea de Suicidio y Crisis' },
    description: {
      en: 'US national mental health crisis line',
      es: 'Línea nacional de crisis de salud mental de EE.UU.',
    },
    contact: '988',
    href: 'tel:988',
    locales: ['en', 'es'],
  },
  {
    name: { en: 'Crisis Text Line', es: 'Crisis Text Line' },
    description: {
      en: 'Text HOME to 741741',
      es: 'Envía HOME al 741741',
    },
    contact: '741741',
    href: 'sms:741741',
    locales: ['en', 'es'],
  },
  {
    name: { en: 'SAMHSA Helpline', es: 'Línea de Ayuda SAMHSA' },
    description: {
      en: 'Substance use & mental health — 24/7',
      es: 'Uso de sustancias y salud mental — 24/7',
    },
    contact: '1-800-662-4357',
    href: 'tel:18006624357',
    locales: ['en', 'es'],
  },
]
