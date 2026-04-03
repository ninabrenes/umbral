import type { NodeId } from '@/types'

export const nodeImages: Record<NodeId, { src: string; alt: { en: string; es: string } }> = {
  ground: {
    src: '/images/node-ground.jpg',
    alt: {
      en: 'Earth and stone textures representing the physical body',
      es: 'Texturas de tierra y piedra representando el cuerpo físico',
    },
  },
  roots: {
    src: '/images/node-roots.jpg',
    alt: {
      en: 'Forest ferns and green growth representing nature connection',
      es: 'Helechos del bosque y crecimiento verde representando la conexión con la naturaleza',
    },
  },
  spore: {
    src: '/images/node-spore.jpg',
    alt: {
      en: 'Misty forest representing the inner landscape and shadow work',
      es: 'Bosque neblinoso representando el paisaje interior y el trabajo de sombra',
    },
  },
  weave: {
    src: '/images/node-weave.jpg',
    alt: {
      en: 'Hands together in nature representing community and connection',
      es: 'Manos juntas en la naturaleza representando comunidad y conexión',
    },
  },
  fruit: {
    src: '/images/node-fruit.jpg',
    alt: {
      en: 'Golden sunlight through leaves representing values and committed action',
      es: 'Luz dorada a través de hojas representando valores y acción comprometida',
    },
  },
  canopy: {
    src: '/images/node-canopy.jpg',
    alt: {
      en: 'Looking up through tree canopy to sky representing the transcendent',
      es: 'Mirando hacia arriba a través del dosel del bosque al cielo representando lo trascendente',
    },
  },
}

export const pageImages = {
  hero: {
    src: '/images/hero.jpg',
    alt: {
      en: 'Sunlight filtering through a forest canopy',
      es: 'Luz del sol filtrándose a través del dosel del bosque',
    },
  },
  framework: {
    src: '/images/framework.jpg',
    alt: {
      en: 'Tree roots intertwining underground',
      es: 'Raíces de árboles entrelazándose bajo tierra',
    },
  },
  about: {
    src: '/images/about.jpg',
    alt: {
      en: 'Close-up of tree roots and bark texture',
      es: 'Primer plano de raíces y textura de corteza de árbol',
    },
  },
  portal: {
    src: '/images/portal.jpg',
    alt: {
      en: 'Dark forest path at twilight',
      es: 'Sendero de bosque oscuro al atardecer',
    },
  },
}
