import type { FrameworkNode } from '@/types'

export const nodes: FrameworkNode[] = [
  {
    id: 'ground',
    name: { en: 'Ground', es: 'Tierra' },
    tagline: {
      en: 'Body, nervous system, physical resilience',
      es: 'Cuerpo, sistema nervioso, resiliencia física',
    },
    description: {
      en: 'The physical container that holds the experience. Sleep, nutrition, exercise, breathwork, somatic awareness, nervous system regulation.',
      es: 'El contenedor físico que sostiene la experiencia. Sueño, nutrición, ejercicio, respiración, conciencia somática, regulación del sistema nervioso.',
    },
    polarity: 'masculine',
    chakra: { name: 'Root', sanskrit: 'Muladhara' },
    icon: 'ground',
  },
  {
    id: 'roots',
    name: { en: 'Roots', es: 'Raíces' },
    tagline: {
      en: 'Nature, ecology, earth connection',
      es: 'Naturaleza, ecología, conexión con la tierra',
    },
    description: {
      en: 'Your relationship with the natural world. Ecological awareness, biophilia, the felt sense of interconnection that psychedelic experiences produce.',
      es: 'Tu relación con el mundo natural. Conciencia ecológica, biofilia, la sensación de interconexión que las experiencias psicodélicas producen.',
    },
    polarity: 'feminine',
    chakra: { name: 'Root + Sacral', sanskrit: 'Muladhara + Svadhisthana' },
    icon: 'roots',
  },
  {
    id: 'spore',
    name: { en: 'Spore', es: 'Espora' },
    tagline: {
      en: 'Inner self, shadow, parts work',
      es: 'Yo interior, sombra, trabajo de partes',
    },
    description: {
      en: 'Psychological insight. Defense mechanisms. Ego dissolution processing. Shadow material. Parts work. Self-awareness. Mindfulness. Creative expression.',
      es: 'Percepción psicológica. Mecanismos de defensa. Procesamiento de disolución del ego. Material de sombra. Trabajo de partes. Autoconciencia. Expresión creativa.',
    },
    polarity: 'feminine',
    chakra: { name: 'Sacral + Third Eye', sanskrit: 'Svadhisthana + Ajna' },
    icon: 'spore',
  },
  {
    id: 'weave',
    name: { en: 'Weave', es: 'Tejido' },
    tagline: {
      en: 'Relationships, community, service',
      es: 'Relaciones, comunidad, servicio',
    },
    description: {
      en: 'How the experience affects your relationships. Attachment patterns. Communication. Community. Peer support. Service as integration — turning insight into action for others.',
      es: 'Cómo la experiencia afecta tus relaciones. Patrones de apego. Comunicación. Comunidad. Apoyo entre pares. Servicio como integración.',
    },
    polarity: 'both',
    chakra: { name: 'Heart + Throat', sanskrit: 'Anahata + Vishuddha' },
    icon: 'weave',
  },
  {
    id: 'fruit',
    name: { en: 'Fruit', es: 'Fruto' },
    tagline: {
      en: 'Values, meaning, committed action',
      es: 'Valores, significado, acción comprometida',
    },
    description: {
      en: 'Values clarification. Alignment between what you say matters and how you actually live. Behavioral commitments. Lifestyle changes. This is where revelation becomes daily practice.',
      es: 'Clarificación de valores. Alineación entre lo que dices que importa y cómo realmente vives. Compromisos de comportamiento. Cambios de estilo de vida.',
    },
    polarity: 'masculine',
    chakra: { name: 'Solar Plexus + Throat', sanskrit: 'Manipura + Vishuddha' },
    icon: 'fruit',
  },
  {
    id: 'canopy',
    name: { en: 'Canopy', es: 'Dosel' },
    tagline: {
      en: 'Existential, transcendent, sacred',
      es: 'Existencial, trascendente, sagrado',
    },
    description: {
      en: 'Mystical experience processing. Encounters with death, impermanence, infinity. Ego dissolution. The sacred and numinous. Meaning-making beyond the personal.',
      es: 'Procesamiento de experiencias místicas. Encuentros con la muerte, la impermanencia, el infinito. Disolución del ego. Lo sagrado y numinoso.',
    },
    polarity: 'feminine',
    chakra: { name: 'Third Eye + Crown', sanskrit: 'Ajna + Sahasrara' },
    icon: 'canopy',
  },
]
