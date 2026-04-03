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
        'Que esta sosteniendo tu cuerpo ahora mismo?',
        'Donde en tu cuerpo sientes el residuo de la experiencia?',
        'Que necesita tu cuerpo hoy?',
        'Que sensaciones fisicas siguen regresando desde la experiencia?',
        'Cuando te sientes mas enraizado/a? Que lo hace posible?',
        'Que habitos te esta pidiendo tu cuerpo que cambies?',
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
          text: 'Mira profundamente en la naturaleza y entonces comprenderas todo mejor.',
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
        'Que te mostro el mundo natural durante la experiencia?',
        'Donde te sientes mas conectado/a con la tierra?',
        'Como ha cambiado tu relacion con la naturaleza desde la experiencia?',
        'Que en la naturaleza refleja lo que estas viviendo ahora?',
        'Si un arbol pudiera hablar de tu proceso, que diria?',
        'Que necesita la tierra de ti?',
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
          text: 'Hasta que hagas consciente lo inconsciente, dirigira tu vida y lo llamaras destino.',
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
        'Que parte de ti aparecio durante la experiencia?',
        'Que viste que has estado evitando?',
        'Si la experiencia tuviera un mensaje, cual seria?',
        'Que se siente diferente en como te ves a ti mismo/a?',
        'Que mecanismo de defensa traspaso la experiencia? Que viste debajo?',
        'Que parte de ti necesita compasion ahora mismo?',
        'Que dice tu critico interno sobre la experiencia? Y que diria tu yo mas sabio?',
        'Dibuja o describe la imagen mas vivida de la experiencia.',
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
          text: 'La unica forma de completar el viaje es traer el regalo de vuelta.',
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
        'Como quieres mostrarte diferente en tus relaciones?',
        'Con quien necesitas tener una conversacion?',
        'Como se veria el servicio como expresion de lo que aprendiste?',
        'Que patron relacional revelo la experiencia?',
        'Quien sostuvo espacio para ti? Como se sintio?',
        'Que significa el amor para ti ahora \u2014 ha cambiado?',
        'Si pudieras compartir una cosa de esta experiencia con el mundo, que seria?',
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
          text: 'Entre el estimulo y la respuesta hay un espacio. En ese espacio esta nuestra libertad y nuestro poder de elegir nuestra respuesta.',
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
        'Que cosa cambiarias de como vives basado en lo que aprendiste?',
        'Donde esta la brecha entre lo que dices que importa y como usas tu tiempo?',
        'A que estas dispuesto/a a renunciar?',
        'Que compromiso se siente aterrador y verdadero al mismo tiempo?',
        'Que pequena accion podrias tomar hoy que honre lo que la experiencia te mostro?',
        'Si sigues viviendo exactamente como ahora, donde estaras en un ano? Es ahi donde quieres estar?',
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
          text: 'Lo mas hermoso que podemos experimentar es lo misterioso.',
          author: 'Albert Einstein',
        },
        {
          text: 'Despues del extasis, la ropa sucia.',
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
        'Que se sintio sagrado de la experiencia?',
        'Como ha cambiado tu relacion con la muerte o la impermanencia?',
        'Que no puedes poner en palabras \u2014 y puedes estar con eso?',
        'Encontraste algo mas grande que tu? Como fue?',
        'Como se ve el sentido de la vida para ti ahora?',
        'Si tuvieras que describir el momento mas trascendente a un nino, que dirias?',
        'Que queda cuando todo lo demas se desvanece?',
      ],
    },
  },
}
