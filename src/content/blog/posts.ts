export interface BlogMeta {
  slug: string
  title: { en: string; es: string }
  description: { en: string; es: string }
  date: string
  category: string
  readingTime: number
  featured?: boolean
  image?: string
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
    readingTime: 9,
    featured: true,
    image: '/images/art/psychedelic-eye.jpg',
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
    readingTime: 11,
    featured: true,
    image: '/images/art/cosmic-nebula.jpg',
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
    readingTime: 10,
    featured: true,
    image: '/images/art/radiant-silhouette.jpg',
  },
  {
    slug: 'set-and-setting-what-the-research-says',
    title: {
      en: 'Set and setting: what the research actually says',
      es: 'Set y setting: lo que dice realmente la investigación',
    },
    description: {
      en: 'Your mindset and environment shape the experience more than the substance itself. A review of the evidence on how preparation, intention, music, and physical space determine outcomes.',
      es: 'Tu estado mental y tu entorno moldean la experiencia más que la sustancia misma. Una revisión de la evidencia sobre cómo la preparación, la intención, la música y el espacio físico determinan los resultados.',
    },
    date: '2026-04-05',
    category: 'science',
    readingTime: 8,
  },
  {
    slug: 'difficult-experiences-are-not-bad-trips',
    title: {
      en: 'Difficult experiences are not bad trips',
      es: 'Las experiencias difíciles no son malos viajes',
    },
    description: {
      en: 'The most therapeutically valuable psychedelic experiences are often the most challenging. Understanding the difference between difficult and harmful, and why running from discomfort can mean missing the point.',
      es: 'Las experiencias psicodélicas más terapéuticamente valiosas suelen ser las más desafiantes. Entender la diferencia entre difícil y dañino, y por qué huir de la incomodidad puede significar perder lo esencial.',
    },
    date: '2026-04-12',
    category: 'integration',
    readingTime: 7,
  },
  {
    slug: 'medications-and-psychedelics-what-you-need-to-know',
    title: {
      en: 'Medications and psychedelics: what you need to know',
      es: 'Medicamentos y psicodélicos: lo que necesitas saber',
    },
    description: {
      en: 'SSRIs, lithium, MAOIs, tramadol. Some medication interactions are uncomfortable. Others are dangerous. An evidence-based overview of what the research shows about combining psychiatric medications with psychedelics.',
      es: 'ISRS, litio, IMAOs, tramadol. Algunas interacciones con medicamentos son incómodas. Otras son peligrosas. Una revisión basada en evidencia sobre lo que muestra la investigación acerca de combinar medicamentos psiquiátricos con psicodélicos.',
    },
    date: '2026-04-19',
    category: 'safety',
    readingTime: 12,
  },
  {
    slug: 'the-mycelial-network-a-framework-for-integration',
    title: {
      en: 'The Mycelial Network: a framework for integration',
      es: 'La Red Micelial: un marco para la integración',
    },
    description: {
      en: 'Integration is not a checklist. It is tending a living network. Introducing the six nodes of the Mycelial Network framework and how they connect body, mind, nature, relationships, values, and meaning.',
      es: 'La integración no es una lista de tareas. Es cuidar una red viva. Presentamos los seis nodos del marco de la Red Micelial y cómo conectan cuerpo, mente, naturaleza, relaciones, valores y sentido.',
    },
    date: '2026-04-26',
    category: 'framework',
    readingTime: 10,
  },
  {
    slug: 'indigenous-roots-of-psychedelic-healing',
    title: {
      en: 'The indigenous roots of psychedelic healing',
      es: 'Las raíces indígenas de la sanación psicodélica',
    },
    description: {
      en: 'Before clinical trials, there were centuries of ceremony. From Mazatec veladas to Shipibo icaros, the traditions that modern psychedelic therapy draws from, and what reciprocity looks like in practice.',
      es: 'Antes de los ensayos clínicos, hubo siglos de ceremonia. Desde las veladas Mazatecas hasta los ícaros Shipibo, las tradiciones de las que se nutre la terapia psicodélica moderna y cómo se ve la reciprocidad en la práctica.',
    },
    date: '2026-05-03',
    category: 'culture',
    readingTime: 9,
  },
]

export function getPostBySlug(slug: string): BlogMeta | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}

export function getCategories(): string[] {
  return [...new Set(posts.map((post) => post.category))]
}

export function getRelatedPosts(slug: string, count: number = 2): BlogMeta[] {
  const post = getPostBySlug(slug)
  if (!post) return []
  const sameCat = posts.filter((p) => p.slug !== slug && p.category === post.category)
  const others = posts.filter((p) => p.slug !== slug && p.category !== post.category)
  return [...sameCat, ...others].slice(0, count)
}
