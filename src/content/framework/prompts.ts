import type { NodeId } from '@/types'

export interface NodeQuote {
  text: string
  author: string
}

export interface NodePrompts {
  quotes: { en: NodeQuote[]; es: NodeQuote[] }
  prompts: { en: string[]; es: string[] }
}

export const nodePrompts: Record<NodeId, NodePrompts> = {
  ground: {
    quotes: {
      en: [{ text: 'The body keeps the score.', author: 'Bessel van der Kolk' }],
      es: [{ text: 'El cuerpo lleva la cuenta.', author: 'Bessel van der Kolk' }],
    },
    prompts: {
      en: [
        'What is your body holding right now?',
        'Where in your body do you feel the residue of the experience?',
        'What does your body need today?',
        'What physical sensations keep returning since the experience?',
        'When do you feel most grounded? What makes that possible?',
        'What habits is your body asking you to change?',
      ],
      es: [
        '¿Qué está sosteniendo tu cuerpo ahora mismo?',
        '¿Dónde en tu cuerpo sientes el residuo de la experiencia?',
        '¿Qué necesita tu cuerpo hoy?',
        '¿Qué sensaciones físicas siguen regresando desde la experiencia?',
        '¿Cuándo te sientes más enraizado/a? ¿Qué lo hace posible?',
        '¿Qué hábitos te está pidiendo tu cuerpo que cambies?',
      ],
    },
  },
  roots: {
    quotes: {
      en: [
        {
          text: 'Look deep into nature, and then you will understand everything better.',
          author: 'Albert Einstein',
        },
      ],
      es: [
        {
          text: 'Mira profundamente en la naturaleza y entonces comprenderás todo mejor.',
          author: 'Albert Einstein',
        },
      ],
    },
    prompts: {
      en: [
        'What did the natural world show you during the experience?',
        'Where do you feel most connected to the earth?',
        'How has your relationship with nature changed since the experience?',
        'What in nature mirrors what you\u2019re going through right now?',
        'If a tree could speak about your process, what would it say?',
        'What does the earth need from you?',
      ],
      es: [
        '¿Qué te mostró el mundo natural durante la experiencia?',
        '¿Dónde te sientes más conectado/a con la tierra?',
        '¿Cómo ha cambiado tu relación con la naturaleza desde la experiencia?',
        '¿Qué en la naturaleza refleja lo que estás viviendo ahora?',
        'Si un árbol pudiera hablar de tu proceso, ¿qué diría?',
        '¿Qué necesita la tierra de ti?',
      ],
    },
  },
  spore: {
    quotes: {
      en: [
        {
          text: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
          author: 'Carl Jung',
        },
      ],
      es: [
        {
          text: 'Hasta que hagas consciente lo inconsciente, dirigirá tu vida y lo llamarás destino.',
          author: 'Carl Jung',
        },
      ],
    },
    prompts: {
      en: [
        'What part of you showed up during the experience?',
        'What did you see that you\u2019ve been avoiding?',
        'If the experience had a message, what was it?',
        'What feels different about how you see yourself?',
        'What defense mechanism did the experience bypass? What did you see underneath?',
        'What part of you needs compassion right now?',
        'What is your inner critic saying about the experience? And what would your wisest self say instead?',
        'Draw or describe the most vivid image from the experience.',
      ],
      es: [
        '¿Qué parte de ti apareció durante la experiencia?',
        '¿Qué viste que has estado evitando?',
        'Si la experiencia tuviera un mensaje, ¿cuál sería?',
        '¿Qué se siente diferente en cómo te ves a ti mismo/a?',
        '¿Qué mecanismo de defensa traspasó la experiencia? ¿Qué viste debajo?',
        '¿Qué parte de ti necesita compasión ahora mismo?',
        '¿Qué dice tu crítico interno sobre la experiencia? ¿Y qué diría tu yo más sabio?',
        'Dibuja o describe la imagen más vívida de la experiencia.',
      ],
    },
  },
  weave: {
    quotes: {
      en: [
        {
          text: 'We are not human beings having a spiritual experience. We are spiritual beings having a human experience.',
          author: 'Pierre Teilhard de Chardin',
        },
        {
          text: 'The only way to complete the journey is to bring the gift back.',
          author: 'Joseph Campbell',
        },
      ],
      es: [
        {
          text: 'No somos seres humanos teniendo una experiencia espiritual. Somos seres espirituales teniendo una experiencia humana.',
          author: 'Pierre Teilhard de Chardin',
        },
        {
          text: 'La única forma de completar el viaje es traer el regalo de vuelta.',
          author: 'Joseph Campbell',
        },
      ],
    },
    prompts: {
      en: [
        'How do you want to show up differently in your relationships?',
        'Who do you need to have a conversation with?',
        'What would service look like as an expression of what you learned?',
        'What relationship pattern did the experience reveal?',
        'Who held space for you? How did that feel?',
        'What does love mean to you now \u2014 has it changed?',
        'If you could share one thing from this experience with the world, what would it be?',
      ],
      es: [
        '¿Cómo quieres mostrarte diferente en tus relaciones?',
        '¿Con quién necesitas tener una conversación?',
        '¿Cómo se vería el servicio como expresión de lo que aprendiste?',
        '¿Qué patrón relacional reveló la experiencia?',
        '¿Quién sostuvo espacio para ti? ¿Cómo se sintió?',
        '¿Qué significa el amor para ti ahora \u2014 ha cambiado?',
        'Si pudieras compartir una cosa de esta experiencia con el mundo, ¿qué sería?',
      ],
    },
  },
  fruit: {
    quotes: {
      en: [
        {
          text: 'Between stimulus and response there is a space. In that space is our freedom and our power to choose our response.',
          author: 'Viktor Frankl',
        },
      ],
      es: [
        {
          text: 'Entre el estímulo y la respuesta hay un espacio. En ese espacio está nuestra libertad y nuestro poder de elegir nuestra respuesta.',
          author: 'Viktor Frankl',
        },
      ],
    },
    prompts: {
      en: [
        'What one thing would you change about how you live based on what you learned?',
        'Where is the gap between what you say matters and how you spend your time?',
        'What are you willing to give up?',
        'What commitment feels both scary and true?',
        'What small action could you take today that honors what the experience showed you?',
        'If you keep living exactly as you are now, where will you be in a year? Is that where you want to be?',
      ],
      es: [
        '¿Qué cosa cambiarías de cómo vives basado en lo que aprendiste?',
        '¿Dónde está la brecha entre lo que dices que importa y cómo usas tu tiempo?',
        '¿A qué estás dispuesto/a a renunciar?',
        '¿Qué compromiso se siente aterrador y verdadero al mismo tiempo?',
        '¿Qué pequeña acción podrías tomar hoy que honre lo que la experiencia te mostró?',
        'Si sigues viviendo exactamente como ahora, ¿dónde estarás en un año? ¿Es ahí donde quieres estar?',
      ],
    },
  },
  canopy: {
    quotes: {
      en: [
        {
          text: 'The most beautiful thing we can experience is the mysterious.',
          author: 'Albert Einstein',
        },
        {
          text: 'After the ecstasy, the laundry.',
          author: 'Jack Kornfield',
        },
      ],
      es: [
        {
          text: 'Lo más hermoso que podemos experimentar es lo misterioso.',
          author: 'Albert Einstein',
        },
        {
          text: 'Después del éxtasis, la ropa sucia.',
          author: 'Jack Kornfield',
        },
      ],
    },
    prompts: {
      en: [
        'What felt sacred about the experience?',
        'How has your relationship with death or impermanence changed?',
        'What can\u2019t you put into words \u2014 and can you sit with that?',
        'Did you encounter something larger than yourself? What was it like?',
        'What does meaning look like for you now?',
        'If you had to describe the most transcendent moment to a child, what would you say?',
        'What remains when everything else falls away?',
      ],
      es: [
        '¿Qué se sintió sagrado de la experiencia?',
        '¿Cómo ha cambiado tu relación con la muerte o la impermanencia?',
        '¿Qué no puedes poner en palabras \u2014 y puedes estar con eso?',
        '¿Encontraste algo más grande que tú? ¿Cómo fue?',
        '¿Cómo se ve el sentido de la vida para ti ahora?',
        'Si tuvieras que describir el momento más trascendente a un niño, ¿qué dirías?',
        '¿Qué queda cuando todo lo demás se desvanece?',
      ],
    },
  },
}
