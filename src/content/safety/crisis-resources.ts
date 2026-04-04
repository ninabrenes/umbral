import type { CrisisResource } from '@/types'

export const crisisResources: CrisisResource[] = [
  {
    name: { en: 'Fireside Project', es: 'Fireside Project' },
    description: {
      en: 'Psychedelic peer support — call or text 62-FIRESIDE',
      es: 'Apoyo entre pares psicodélico — llama o envía mensaje al 62-FIRESIDE',
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
  {
    name: { en: 'SAMHSA Spanish Line', es: 'Línea en Español de SAMHSA' },
    description: {
      en: 'SAMHSA helpline with Spanish-speaking specialists — 24/7',
      es: 'Línea de ayuda de SAMHSA con especialistas hispanohablantes — 24/7',
    },
    contact: '1-800-662-4357 (press 2)',
    href: 'tel:18006624357',
    locales: ['es'],
  },
  {
    name: { en: 'Samaritans (UK & Ireland)', es: 'Samaritans (Reino Unido e Irlanda)' },
    description: {
      en: 'Emotional support for anyone in distress — 24/7, free to call',
      es: 'Apoyo emocional para cualquier persona en crisis — 24/7, llamada gratuita',
    },
    contact: '116 123',
    href: 'tel:116123',
    locales: ['en'],
  },
  {
    name: {
      en: 'International Association for Suicide Prevention',
      es: 'Asociación Internacional para la Prevención del Suicidio',
    },
    description: {
      en: 'Directory of crisis centers worldwide — find help in your country',
      es: 'Directorio de centros de crisis en todo el mundo — encuentra ayuda en tu país',
    },
    contact: 'https://www.iasp.info/resources/Crisis_Centres/',
    href: 'https://www.iasp.info/resources/Crisis_Centres/',
    locales: ['en', 'es'],
  },
  {
    name: { en: 'TRIPsit', es: 'TRIPsit' },
    description: {
      en: 'Online peer support chat for substance-related crises — 24/7',
      es: 'Chat de apoyo entre pares en línea para crisis relacionadas con sustancias — 24/7',
    },
    contact: 'https://chat.tripsit.me/',
    href: 'https://chat.tripsit.me/',
    locales: ['en'],
  },
  {
    name: { en: 'Línea de la Vida (Mexico)', es: 'Línea de la Vida (México)' },
    description: {
      en: 'Mexican crisis and mental health line — 24/7',
      es: 'Línea mexicana de crisis y salud mental — 24/7',
    },
    contact: '800-911-2000',
    href: 'tel:8009112000',
    locales: ['es'],
  },
]
