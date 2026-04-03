export interface BlogMeta {
  slug: string
  title: { en: string; es: string }
  description: { en: string; es: string }
  date: string
  category: string
}

export const posts: BlogMeta[] = [
  {
    slug: 'what-is-psychedelic-integration',
    title: {
      en: 'What is psychedelic integration?',
      es: '¿Qué es la integración psicodélica?',
    },
    description: {
      en: 'The experience opens the door. Integration is the work of walking through it. A practical look at what integration actually means and why it matters more than the journey itself.',
      es: 'La experiencia abre la puerta. La integración es el trabajo de cruzarla. Una mirada práctica a lo que realmente significa la integración y por qué importa más que el viaje mismo.',
    },
    date: '2026-03-15',
    category: 'integration',
  },
  {
    slug: 'the-science-of-psilocybin',
    title: {
      en: 'The science of psilocybin',
      es: 'La ciencia de la psilocibina',
    },
    description: {
      en: 'What happens in your brain during a psilocybin experience? From default mode network disruption to neuroplasticity windows, the research is catching up to what indigenous cultures have known for millennia.',
      es: '¿Qué sucede en tu cerebro durante una experiencia con psilocibina? Desde la interrupción de la red de modo predeterminado hasta las ventanas de neuroplasticidad, la investigación está alcanzando lo que las culturas indígenas han sabido por milenios.',
    },
    date: '2026-03-22',
    category: 'science',
  },
  {
    slug: 'preparing-for-your-first-experience',
    title: {
      en: 'Preparing for your first experience',
      es: 'Preparándote para tu primera experiencia',
    },
    description: {
      en: 'Preparation is not about controlling the experience. It is about building the container strong enough to hold whatever arises. Set, setting, intention, and the practical steps that matter most.',
      es: 'La preparación no se trata de controlar la experiencia. Se trata de construir un contenedor lo suficientemente fuerte para sostener lo que surja. Set, setting, intención y los pasos prácticos que más importan.',
    },
    date: '2026-03-29',
    category: 'preparation',
  },
]

export function getPostBySlug(slug: string): BlogMeta | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}
