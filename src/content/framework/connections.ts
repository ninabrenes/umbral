// ─────────────────────────────────────────────────────────────────────────────
// Node connections for the Mycelial Network
// Maps ALL meaningful connections between the 6 nodes
// The mycelial network is fully connected — every node relates to every other
// but some connections are stronger than others
// ─────────────────────────────────────────────────────────────────────────────

import type { NodeId } from '@/types'

export interface NodeConnection {
  from: NodeId
  to: NodeId
  strength: 'strong' | 'moderate'
  description: { en: string; es: string }
  bidirectional: boolean
}

export const connections: NodeConnection[] = [
  // ── GROUND connections ──

  {
    from: 'ground',
    to: 'spore',
    strength: 'strong',
    description: {
      en: 'Somatic awareness enables psychological processing. The body often knows what the mind has not yet named. Tension, trembling, and pain point toward unprocessed psychological material. Without body awareness, inner work stays intellectual.',
      es: 'La conciencia somática permite el procesamiento psicológico. El cuerpo a menudo sabe lo que la mente aún no ha nombrado. La tensión, los temblores y el dolor señalan material psicológico no procesado. Sin conciencia corporal, el trabajo interior se queda intelectual.',
    },
    bidirectional: true,
  },
  {
    from: 'ground',
    to: 'roots',
    strength: 'strong',
    description: {
      en: 'Body awareness connects to nature awareness. The body IS nature. Attuning to heartbeat, breath, and circadian rhythm is already a relationship with ecological systems. Somatic presence and ecological presence use the same sensory channels.',
      es: 'La conciencia corporal se conecta con la conciencia de la naturaleza. El cuerpo ES naturaleza. Sintonizarse con el latido, la respiración y el ritmo circadiano ya es una relación con sistemas ecológicos. La presencia somática y la presencia ecológica usan los mismos canales sensoriales.',
    },
    bidirectional: true,
  },
  {
    from: 'ground',
    to: 'canopy',
    strength: 'strong',
    description: {
      en: 'Breathwork bridges body and transcendence. The body is the vehicle through which transcendent experience is received. Without somatic grounding, mystical experiences can destabilize rather than illuminate. The body anchors what transcendence opens.',
      es: 'La respiración conecta el cuerpo con la trascendencia. El cuerpo es el vehículo a través del cual se recibe la experiencia trascendente. Sin enraizamiento somático, las experiencias místicas pueden desestabilizar en vez de iluminar. El cuerpo ancla lo que la trascendencia abre.',
    },
    bidirectional: true,
  },
  {
    from: 'ground',
    to: 'fruit',
    strength: 'strong',
    description: {
      en: 'Physical habits are the most concrete expression of values. When values like "health" or "presence" are identified, the body is where they become daily practice: sleep, nutrition, movement, breathwork. Values that never reach the body remain aspirational.',
      es: 'Los hábitos físicos son la expresión más concreta de los valores. Cuando se identifican valores como "salud" o "presencia," el cuerpo es donde se convierten en práctica diaria: sueño, nutrición, movimiento, respiración. Los valores que nunca llegan al cuerpo se quedan en aspiraciones.',
    },
    bidirectional: true,
  },
  {
    from: 'ground',
    to: 'weave',
    strength: 'moderate',
    description: {
      en: 'A regulated nervous system enables authentic connection. The ventral vagal state (safe, present, engaged) makes deep listening and truthful speaking possible. Dysregulated bodies create defensive relationships. Co-regulation with trusted others supports both nodes.',
      es: 'Un sistema nervioso regulado permite la conexión auténtica. El estado vagal ventral (seguro, presente, comprometido) hace posible la escucha profunda y el habla sincera. Los cuerpos desregulados crean relaciones defensivas. La co-regulación con otros de confianza apoya ambos nodos.',
    },
    bidirectional: true,
  },

  // ── ROOTS connections (excluding already defined) ──

  {
    from: 'roots',
    to: 'canopy',
    strength: 'strong',
    description: {
      en: 'Awe in nature connects to transcendence. Standing at the base of an ancient tree, watching a storm, witnessing a sunset. These are encounters with the numinous that require no belief system. Nature is the most accessible doorway to ongoing experiences of the sacred.',
      es: 'El asombro en la naturaleza conecta con la trascendencia. Estar al pie de un árbol ancestral, ver una tormenta, presenciar un atardecer. Son encuentros con lo numinoso que no requieren ningún sistema de creencias. La naturaleza es la puerta más accesible a experiencias continuas de lo sagrado.',
    },
    bidirectional: true,
  },
  {
    from: 'roots',
    to: 'weave',
    strength: 'moderate',
    description: {
      en: 'Ecological awareness leads to community service. When you feel the interconnection of living systems, the impulse toward reciprocity arises naturally. Understanding your place in the web of life extends to understanding your place in the web of relationships.',
      es: 'La conciencia ecológica conduce al servicio comunitario. Cuando sientes la interconexión de los sistemas vivos, el impulso hacia la reciprocidad surge naturalmente. Entender tu lugar en la red de la vida se extiende a entender tu lugar en la red de relaciones.',
    },
    bidirectional: true,
  },
  {
    from: 'roots',
    to: 'spore',
    strength: 'moderate',
    description: {
      en: 'Nature mirrors the inner landscape. What catches your attention in the natural world often reflects what is alive in your psyche. The dying tree hosting new growth, the river carving its path over centuries. Nature journaling becomes self-reflection when you learn to read these mirrors.',
      es: 'La naturaleza refleja el paisaje interior. Lo que captura tu atención en el mundo natural a menudo refleja lo que está vivo en tu psique. El árbol que muere albergando nuevo crecimiento, el río labrando su camino durante siglos. El diario de naturaleza se convierte en autorreflexión cuando aprendes a leer estos espejos.',
    },
    bidirectional: true,
  },
  {
    from: 'roots',
    to: 'fruit',
    strength: 'moderate',
    description: {
      en: 'Nature connection clarifies values. Time in the natural world strips away productivity culture noise and reveals what actually matters. Values often realign toward simplicity, presence, and ecological awareness after psychedelic experiences. Nature does not care about your to-do list.',
      es: 'La conexión con la naturaleza clarifica los valores. El tiempo en el mundo natural despoja el ruido de la cultura de productividad y revela lo que realmente importa. Los valores a menudo se realinean hacia la simplicidad, la presencia y la conciencia ecológica después de experiencias psicodélicas.',
    },
    bidirectional: true,
  },

  // ── SPORE connections (excluding already defined) ──

  {
    from: 'spore',
    to: 'weave',
    strength: 'strong',
    description: {
      en: 'Understanding yourself enables better relationships. Attachment style, defense mechanisms, communication habits, shadow projections — the patterns SPORE reveals are the same patterns that shape your relationships. When you see your inner critic clearly, you stop projecting it onto others.',
      es: 'Comprenderte permite mejores relaciones. Estilo de apego, mecanismos de defensa, hábitos de comunicación, proyecciones de sombra — los patrones que ESPORA revela son los mismos que dan forma a tus relaciones. Cuando ves a tu crítico interno claramente, dejas de proyectarlo en otros.',
    },
    bidirectional: true,
  },
  {
    from: 'spore',
    to: 'fruit',
    strength: 'strong',
    description: {
      en: 'Self-knowledge informs values. You cannot align your life with your values if you do not know which values are truly yours versus inherited, performed, or defensive. SPORE peels back conditioning to reveal what actually matters. Authentic values emerge from honest self-examination.',
      es: 'El autoconocimiento informa los valores. No puedes alinear tu vida con tus valores si no sabes cuáles son verdaderamente tuyos versus heredados, actuados o defensivos. ESPORA pela el condicionamiento para revelar lo que realmente importa. Los valores auténticos emergen de la autoexaminación honesta.',
    },
    bidirectional: true,
  },
  {
    from: 'spore',
    to: 'canopy',
    strength: 'strong',
    description: {
      en: 'The inner landscape mirrors the cosmic landscape. Ego dissolution and shadow work often activate simultaneously during psychedelic experiences. When self-boundaries dissolve, both the transcendent and the repressed become visible. SPORE without CANOPY misses the larger context. CANOPY without SPORE risks spiritual bypassing.',
      es: 'El paisaje interior refleja el paisaje cósmico. La disolución del ego y el trabajo de sombra a menudo se activan simultáneamente durante experiencias psicodélicas. Cuando los límites del yo se disuelven, tanto lo trascendente como lo reprimido se hacen visibles. ESPORA sin DOSEL pierde el contexto más amplio. DOSEL sin ESPORA corre riesgo de bypass espiritual.',
    },
    bidirectional: true,
  },

  // ── WEAVE connections (excluding already defined) ──

  {
    from: 'weave',
    to: 'fruit',
    strength: 'strong',
    description: {
      en: 'Service leads to values clarification. When you offer your gifts to others, you discover what you actually value through practice, not theory. Values inform service, and service refines values. The person who serves consistently knows their values by what they choose to give.',
      es: 'El servicio conduce a la clarificación de valores. Cuando ofreces tus dones a otros, descubres lo que realmente valoras a través de la práctica, no la teoría. Los valores informan el servicio, y el servicio refina los valores. La persona que sirve consistentemente conoce sus valores por lo que elige dar.',
    },
    bidirectional: true,
  },
  {
    from: 'weave',
    to: 'canopy',
    strength: 'moderate',
    description: {
      en: 'Community holds the transcendent. Mystical experiences can be isolating when no one understands. Integration circles and trusted relationships provide a container for experiences that language cannot fully capture. The community does not need to understand perfectly. It needs to hold space.',
      es: 'La comunidad sostiene lo trascendente. Las experiencias místicas pueden ser aislantes cuando nadie comprende. Los círculos de integración y las relaciones de confianza proveen un contenedor para experiencias que el lenguaje no puede capturar completamente. La comunidad no necesita entender perfectamente. Necesita sostener espacio.',
    },
    bidirectional: true,
  },

  // ── FRUIT connections (excluding already defined) ──

  {
    from: 'fruit',
    to: 'canopy',
    strength: 'strong',
    description: {
      en: 'Meaning anchors transcendent experience. Without committed action, mystical experiences float unmoored: beautiful, profound, and disconnected from daily life. "I experienced unity" is CANOPY. "I will live in a way that honors that unity" is FRUIT turning insight into transformation.',
      es: 'El significado ancla la experiencia trascendente. Sin acción comprometida, las experiencias místicas flotan sin ancla: hermosas, profundas y desconectadas de la vida diaria. "Experimenté la unidad" es DOSEL. "Viviré de una manera que honre esa unidad" es FRUTO convirtiendo la percepción en transformación.',
    },
    bidirectional: true,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Get all connections involving a specific node */
export function getNodeConnections(nodeId: NodeId): NodeConnection[] {
  return connections.filter((c) => c.from === nodeId || (c.bidirectional && c.to === nodeId))
}

/** Get connections between two specific nodes */
export function getConnectionBetween(
  nodeA: NodeId,
  nodeB: NodeId,
): NodeConnection | undefined {
  return connections.find(
    (c) =>
      (c.from === nodeA && c.to === nodeB) ||
      (c.bidirectional && c.from === nodeB && c.to === nodeA),
  )
}

/** Get all strong connections for a node */
export function getStrongConnections(nodeId: NodeId): NodeConnection[] {
  return getNodeConnections(nodeId).filter((c) => c.strength === 'strong')
}

/** Total number of unique node pairs connected */
export const totalConnections = connections.length // 15 — all pairs of 6 nodes
