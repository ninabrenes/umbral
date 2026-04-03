export type Locale = 'en' | 'es'

export type NodeId = 'ground' | 'roots' | 'spore' | 'weave' | 'fruit' | 'canopy'

export type Polarity = 'masculine' | 'feminine' | 'both'

export interface FrameworkNode {
  id: NodeId
  name: { en: string; es: string }
  tagline: { en: string; es: string }
  description: { en: string; es: string }
  polarity: Polarity
  chakra?: { name: string; sanskrit: string }
  icon: string
}

export interface JournalPrompt {
  id: string
  nodeId: NodeId
  text: { en: string; es: string }
  phase: 'preparation' | 'integration'
}

export interface Source {
  id: string
  title: string
  authors: string
  year: number
  url: string
  type: 'paper' | 'book' | 'organization' | 'podcast' | 'video'
}

export interface CrisisResource {
  name: { en: string; es: string }
  description: { en: string; es: string }
  contact: string
  href: string
  locales: Locale[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  locale: Locale
  category: string
  sources: Source[]
}

export interface LegalJurisdiction {
  country: string
  status: 'legal' | 'decriminalized' | 'medical' | 'illegal' | 'gray-area'
  notes: { en: string; es: string }
}
