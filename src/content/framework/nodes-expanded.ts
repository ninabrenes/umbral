// ─────────────────────────────────────────────────────────────────────────────
// Expanded node content for the Mycelial Network
// Rich descriptions, research backing, practices, connections, and warning signs
// Source of truth: docs/framework/00-the-mycelial-network.md
// ─────────────────────────────────────────────────────────────────────────────

import type { NodeId } from '@/types'

export interface NodePractice {
  name: { en: string; es: string }
  description: { en: string; es: string }
  source?: string
}

export interface NodeConnection {
  toNode: NodeId
  description: { en: string; es: string }
}

export interface NodeDetail {
  id: NodeId
  whyItMatters: { en: string; es: string }
  researchBacking: { en: string; es: string }
  processLayer: {
    receive: { en: string; es: string }
    recognize: { en: string; es: string }
    return: { en: string; es: string }
  }
  practices: NodePractice[]
  connections: NodeConnection[]
  warningSignsOfNeglect: { en: string[]; es: string[] }
  useCases: { en: string[]; es: string[] }
}

// ─────────────────────────────────────────────────────────────────────────────
// GROUND — Body, Nervous System, Physical Resilience
// ─────────────────────────────────────────────────────────────────────────────

const ground: NodeDetail = {
  id: 'ground',
  whyItMatters: {
    en: 'The body is the first thing affected by a psychedelic experience and the first thing that needs care afterward. Psychedelics produce intense somatic responses: trembling, crying, energy surges, nausea, waves of heat or cold. These are not side effects to suppress. They are the body completing processes that were frozen or held. Without body awareness, these signals get intellectualized or numbed instead of processed. The 24 to 72 hour window after a psychedelic experience is a period of heightened neuroplasticity. Quality sleep, gentle movement, and clean nutrition during this window determine whether new neural connections consolidate or dissolve. GROUND is the foundation the entire network rests on.',
    es: 'El cuerpo es lo primero que se ve afectado por una experiencia psicodélica y lo primero que necesita cuidado después. Los psicodélicos producen respuestas somáticas intensas: temblores, llanto, oleadas de energía, náuseas, olas de calor o frío. Estos no son efectos secundarios que deben suprimirse. Son el cuerpo completando procesos que estaban congelados o retenidos. Sin conciencia corporal, estas señales se intelectualizan o se adormecen en lugar de procesarse. La ventana de 24 a 72 horas después de una experiencia psicodélica es un período de neuroplasticidad elevada. El sueño de calidad, el movimiento suave y la nutrición limpia durante esta ventana determinan si las nuevas conexiones neuronales se consolidan o se disuelven. TIERRA es el cimiento sobre el cual descansa toda la red.',
  },
  researchBacking: {
    en: 'Bessel van der Kolk\'s research on trauma and the body demonstrates that trauma is stored somatically, not just cognitively. His work shows that body-based interventions are often more effective than talk therapy for processing traumatic material. Peter Levine\'s Somatic Experiencing framework identifies how the body completes interrupted survival responses through trembling, shaking, and other involuntary movements. These responses, commonly observed during psychedelic experiences, are the nervous system discharging stored activation. Stephen Porges\' Polyvagal Theory maps the autonomic nervous system into three states: ventral vagal (safe social engagement), sympathetic (fight/flight), and dorsal vagal (freeze/shutdown). GROUND practices work with vagal tone, helping the system move from shutdown or hyperactivation toward the ventral vagal state where integration becomes possible. Andrew Huberman\'s work on BDNF (brain-derived neurotrophic factor) and sleep demonstrates that the neuroplasticity window after psychedelic experiences requires quality sleep for consolidation of new neural pathways.',
    es: 'La investigación de Bessel van der Kolk sobre trauma y el cuerpo demuestra que el trauma se almacena somáticamente, no solo cognitivamente. Su trabajo muestra que las intervenciones corporales suelen ser más efectivas que la terapia verbal para procesar material traumático. El marco de Experiencia Somática de Peter Levine identifica cómo el cuerpo completa respuestas de supervivencia interrumpidas a través de temblores, sacudidas y otros movimientos involuntarios. Estas respuestas, comúnmente observadas durante experiencias psicodélicas, son el sistema nervioso descargando activación almacenada. La Teoría Polivagal de Stephen Porges mapea el sistema nervioso autónomo en tres estados: vagal ventral (interacción social segura), simpático (lucha/huida) y vagal dorsal (congelamiento/apagado). Las prácticas de TIERRA trabajan con el tono vagal, ayudando al sistema a moverse del apagado o la hiperactivación hacia el estado vagal ventral donde la integración se hace posible. El trabajo de Andrew Huberman sobre BDNF (factor neurotrófico derivado del cerebro) y el sueño demuestra que la ventana de neuroplasticidad después de experiencias psicodélicas requiere sueño de calidad para la consolidación de nuevas vías neuronales.',
  },
  processLayer: {
    receive: {
      en: 'Feel what your body is holding without trying to change it. Notice where sensation lives: the tightness in your chest, the weight in your belly, the tingling in your hands. Allow trembling, crying, or shaking if they arise. These are completions, not breakdowns. Practice body scanning daily. Let the body speak before the mind interprets.',
      es: 'Siente lo que tu cuerpo está sosteniendo sin intentar cambiarlo. Observa dónde vive la sensación: la tensión en tu pecho, el peso en tu vientre, el hormigueo en tus manos. Permite los temblores, el llanto o las sacudidas si surgen. Son completaciones, no colapsos. Practica el escaneo corporal diariamente. Deja que el cuerpo hable antes de que la mente interprete.',
    },
    recognize: {
      en: 'Name the patterns your body reveals. Which nervous system state do you default to: hyperactivation (anxiety, restlessness, racing heart) or shutdown (numbness, fatigue, disconnection)? What triggers move you between states? Where does your body hold specific emotions? Begin to map the relationship between physical sensation and psychological material.',
      es: 'Nombra los patrones que tu cuerpo revela. ¿A qué estado del sistema nervioso recurres por defecto: hiperactivación (ansiedad, inquietud, corazón acelerado) o apagado (entumecimiento, fatiga, desconexión)? ¿Qué detonantes te mueven entre estados? ¿Dónde retiene tu cuerpo emociones específicas? Empieza a mapear la relación entre la sensación física y el material psicológico.',
    },
    return: {
      en: 'Build daily practices that support your nervous system. Commit to a sleep schedule that protects the plasticity window. Choose one breathwork technique and practice it daily. Move your body gently and consistently. Remove substances that interfere with integration. The body that held your experience deserves ongoing care, not a return to the habits that preceded it.',
      es: 'Construye prácticas diarias que apoyen tu sistema nervioso. Comprométete con un horario de sueño que proteja la ventana de plasticidad. Elige una técnica de respiración y practícala diariamente. Mueve tu cuerpo suave y consistentemente. Elimina sustancias que interfieran con la integración. El cuerpo que sostuvo tu experiencia merece cuidado continuo, no un regreso a los hábitos que lo precedieron.',
    },
  },
  practices: [
    {
      name: { en: 'Sleep Optimization', es: 'Optimización del sueño' },
      description: {
        en: '7 to 9 hours for several nights before and after the experience. Circadian rhythm alignment: consistent wake time, morning sunlight, no screens 1 hour before bed. During the 24 to 72 hour plasticity window post-experience, sleep is when new neural connections consolidate. Protecting sleep is protecting your integration.',
        es: '7 a 9 horas durante varias noches antes y después de la experiencia. Alineación del ritmo circadiano: hora de despertar consistente, luz solar matutina, sin pantallas 1 hora antes de dormir. Durante la ventana de plasticidad de 24 a 72 horas post-experiencia, el sueño es cuando las nuevas conexiones neuronales se consolidan. Proteger el sueño es proteger tu integración.',
      },
      source: 'Huberman Sleep Toolkit',
    },
    {
      name: { en: 'Physiological Sigh', es: 'Suspiro fisiológico' },
      description: {
        en: 'Double inhale through the nose (short + long) followed by a slow exhale through the mouth. This is the fastest known real-time method to reduce sympathetic nervous system activation. Use it during moments of overwhelm, anxiety, or when the body is stuck in fight-or-flight. One to three cycles can shift your state within 30 seconds.',
        es: 'Doble inhalación por la nariz (corta + larga) seguida de una exhalación lenta por la boca. Este es el método conocido más rápido para reducir la activación del sistema nervioso simpático en tiempo real. Úsalo durante momentos de agobio, ansiedad o cuando el cuerpo está atrapado en lucha o huida. Uno a tres ciclos pueden cambiar tu estado en 30 segundos.',
      },
      source: 'Huberman Lab',
    },
    {
      name: { en: 'Box Breathing', es: 'Respiración cuadrada' },
      description: {
        en: 'Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat for 5 to 10 minutes. Balances the sympathetic and parasympathetic nervous system. Used by Navy SEALs and meditators alike. A reliable anchor when emotional intensity rises during integration.',
        es: 'Inhala durante 4 tiempos, retén 4, exhala 4, retén 4. Repite durante 5 a 10 minutos. Equilibra el sistema nervioso simpático y parasimpático. Utilizado tanto por Navy SEALs como por meditadores. Un ancla confiable cuando la intensidad emocional aumenta durante la integración.',
      },
    },
    {
      name: { en: 'Nadi Shodhana', es: 'Nadi Shodhana' },
      description: {
        en: 'Alternate nostril breathing from the yogic pranayama tradition. Close the right nostril, inhale through the left. Close the left, exhale through the right. Inhale right, close right, exhale left. This practice balances the two branches of the autonomic nervous system. 5 to 10 minutes daily builds a measurable shift in resting vagal tone over time.',
        es: 'Respiración alterna por las fosas nasales de la tradición yóguica de pranayama. Cierra la fosa derecha, inhala por la izquierda. Cierra la izquierda, exhala por la derecha. Inhala derecha, cierra derecha, exhala izquierda. Esta práctica equilibra las dos ramas del sistema nervioso autónomo. De 5 a 10 minutos diarios construyen un cambio medible en el tono vagal de reposo con el tiempo.',
      },
      source: 'Yogic pranayama tradition',
    },
    {
      name: { en: 'Body Scan Meditation', es: 'Meditación de escaneo corporal' },
      description: {
        en: 'Lie down or sit comfortably. Move attention slowly through each region of the body from feet to crown, noticing sensation without judgment. What is tense? What is numb? What is alive? This practice builds the somatic awareness that makes all other GROUND work possible. 10 to 20 minutes daily. Guided recordings from Tara Brach or Jon Kabat-Zinn are excellent starting points.',
        es: 'Acuéstate o siéntate cómodamente. Mueve la atención lentamente a través de cada región del cuerpo, de los pies a la coronilla, notando las sensaciones sin juicio. ¿Qué está tenso? ¿Qué está adormecido? ¿Qué está vivo? Esta práctica construye la conciencia somática que hace posible todo el trabajo de TIERRA. De 10 a 20 minutos diarios. Las grabaciones guiadas de Tara Brach o Jon Kabat-Zinn son excelentes puntos de partida.',
      },
      source: 'MBSR (Kabat-Zinn)',
    },
    {
      name: { en: 'Gentle Movement', es: 'Movimiento suave' },
      description: {
        en: 'Walking, yoga, stretching, swimming. No intense training for 3 to 7 days post-experience. The body needs to process, not perform. Movement helps discharge stored activation and supports lymphatic and nervous system function. Let the movement be slow, intentional, and pleasurable.',
        es: 'Caminar, yoga, estiramientos, nadar. Sin entrenamiento intenso durante 3 a 7 días post-experiencia. El cuerpo necesita procesar, no rendir. El movimiento ayuda a descargar activación almacenada y apoya la función linfática y del sistema nervioso. Deja que el movimiento sea lento, intencional y placentero.',
      },
    },
    {
      name: { en: 'Dietary Preparation', es: 'Preparación dietética' },
      description: {
        en: 'Clean eating 1 to 2 weeks before. No alcohol. Reduce caffeine gradually. Light or fasted on session day to reduce nausea. After the experience, nourish with whole foods, hydrate, and avoid alcohol and cannabis for at least 1 week. What you put into your body during the plasticity window matters.',
        es: 'Alimentación limpia de 1 a 2 semanas antes. Sin alcohol. Reducir la cafeína gradualmente. Ligero o en ayunas el día de la sesión para reducir náuseas. Después de la experiencia, nutre con alimentos integrales, hidrátate y evita el alcohol y el cannabis durante al menos 1 semana. Lo que introduces en tu cuerpo durante la ventana de plasticidad importa.',
      },
      source: 'Ferriss 4-week protocol',
    },
  ],
  connections: [
    {
      toNode: 'spore',
      description: {
        en: 'Somatic awareness enables psychological processing. The body often knows what the mind has not yet named. When you feel tightness in your throat, heaviness in your chest, or tension in your jaw, the body is pointing toward psychological material that SPORE work can explore. Without GROUND, SPORE work stays intellectual. With it, insight drops from the head into the body where it can transform.',
        es: 'La conciencia somática permite el procesamiento psicológico. El cuerpo a menudo sabe lo que la mente aún no ha nombrado. Cuando sientes opresión en la garganta, pesadez en el pecho o tensión en la mandíbula, el cuerpo está señalando material psicológico que el trabajo de ESPORA puede explorar. Sin TIERRA, el trabajo de ESPORA se queda intelectual. Con ella, la percepción baja de la cabeza al cuerpo donde puede transformarse.',
      },
    },
    {
      toNode: 'roots',
      description: {
        en: 'Body awareness connects to nature awareness. The body is nature. When you attune to your heartbeat, your breath, your circadian rhythm, you are already in relationship with ecological systems. GROUND prepares the sensory channels that ROOTS uses to perceive interconnection with the natural world.',
        es: 'La conciencia corporal se conecta con la conciencia de la naturaleza. El cuerpo es naturaleza. Cuando te sintonizas con tu latido, tu respiración, tu ritmo circadiano, ya estás en relación con sistemas ecológicos. TIERRA prepara los canales sensoriales que RAÍCES usa para percibir la interconexión con el mundo natural.',
      },
    },
    {
      toNode: 'canopy',
      description: {
        en: 'Breathwork bridges body and transcendence. Many mystical experiences during psychedelic sessions are accompanied by profound shifts in breathing pattern. The body is the vehicle through which transcendent experience is received. Without somatic grounding, transcendent experiences can feel destabilizing rather than illuminating. GROUND anchors what CANOPY opens.',
        es: 'La respiración conecta el cuerpo con la trascendencia. Muchas experiencias místicas durante sesiones psicodélicas están acompañadas de cambios profundos en el patrón respiratorio. El cuerpo es el vehículo a través del cual se recibe la experiencia trascendente. Sin enraizamiento somático, las experiencias trascendentes pueden sentirse desestabilizadoras en vez de iluminadoras. TIERRA ancla lo que DOSEL abre.',
      },
    },
    {
      toNode: 'fruit',
      description: {
        en: 'Physical habits are the most concrete expression of values. When FRUIT identifies a value like "health" or "presence," GROUND is where that value becomes a daily practice: sleep, nutrition, movement, breathwork. Values that never reach the body remain aspirational.',
        es: 'Los hábitos físicos son la expresión más concreta de los valores. Cuando FRUTO identifica un valor como "salud" o "presencia," TIERRA es donde ese valor se convierte en práctica diaria: sueño, nutrición, movimiento, respiración. Los valores que nunca llegan al cuerpo se quedan en aspiraciones.',
      },
    },
    {
      toNode: 'weave',
      description: {
        en: 'A regulated nervous system enables authentic connection. When your body is in a ventral vagal state (safe, engaged, present), you can listen deeply, speak truthfully, and hold space for others. Dysregulated bodies create defensive relationships. GROUND supports WEAVE by making genuine relational presence possible.',
        es: 'Un sistema nervioso regulado permite la conexión auténtica. Cuando tu cuerpo está en estado vagal ventral (seguro, comprometido, presente), puedes escuchar profundamente, hablar con verdad y sostener espacio para otros. Los cuerpos desregulados crean relaciones defensivas. TIERRA apoya a TEJIDO haciendo posible la presencia relacional genuina.',
      },
    },
  ],
  warningSignsOfNeglect: {
    en: [
      'Ignoring or intellectualizing physical sensations instead of feeling them',
      'Poor sleep quality, especially in the first week after an experience',
      'Skipping meals or using food, caffeine, or alcohol to manage emotional states',
      'Returning to intense exercise too quickly as a way to "feel normal"',
      'Using cannabis, alcohol, or other substances during the plasticity window',
      'Persistent physical symptoms (headaches, jaw tension, stomach distress) that are dismissed as unrelated',
      'Spending all integration time in the head (journaling, analyzing) and none in the body',
      'Numbness or disconnection from physical sensation that persists beyond the first 48 hours',
    ],
    es: [
      'Ignorar o intelectualizar las sensaciones físicas en lugar de sentirlas',
      'Mala calidad de sueño, especialmente en la primera semana después de una experiencia',
      'Saltarse comidas o usar comida, cafeína o alcohol para manejar estados emocionales',
      'Regresar al ejercicio intenso demasiado pronto como forma de "sentirse normal"',
      'Usar cannabis, alcohol u otras sustancias durante la ventana de plasticidad',
      'Síntomas físicos persistentes (dolores de cabeza, tensión mandibular, malestar estomacal) que se desestiman como no relacionados',
      'Dedicar todo el tiempo de integración a la cabeza (escribir, analizar) y nada al cuerpo',
      'Entumecimiento o desconexión de la sensación física que persiste más allá de las primeras 48 horas',
    ],
  },
  useCases: {
    en: [
      'Someone who experienced intense physical responses during a session (trembling, crying, energy surges) and wants to understand what their body was doing',
      'Someone whose body is "holding" unprocessed material from the experience, manifesting as tension, pain, or restlessness',
      'Someone preparing physically for an upcoming experience who wants to optimize sleep, nutrition, and nervous system readiness',
      'Someone who tends to live in their head and needs to develop somatic awareness before deeper psychological work',
      'Someone experiencing sleep disruption or appetite changes after a psychedelic experience',
      'Someone with a trauma history whose body may need extra support during the integration window',
    ],
    es: [
      'Alguien que experimentó respuestas físicas intensas durante una sesión (temblores, llanto, oleadas de energía) y quiere entender qué estaba haciendo su cuerpo',
      'Alguien cuyo cuerpo está "sosteniendo" material no procesado de la experiencia, manifestándose como tensión, dolor o inquietud',
      'Alguien que se prepara físicamente para una experiencia próxima y quiere optimizar el sueño, la nutrición y la preparación del sistema nervioso',
      'Alguien que tiende a vivir en su cabeza y necesita desarrollar conciencia somática antes del trabajo psicológico más profundo',
      'Alguien que experimenta alteraciones del sueño o cambios de apetito después de una experiencia psicodélica',
      'Alguien con historial de trauma cuyo cuerpo puede necesitar apoyo extra durante la ventana de integración',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOTS — Nature, Ecology, Earth Connection
// ─────────────────────────────────────────────────────────────────────────────

const roots: NodeDetail = {
  id: 'roots',
  whyItMatters: {
    en: 'Nature-relatedness is one of the most commonly reported lasting changes after psilocybin experiences. This is not a pleasant side effect. It is a core dimension of integration. The felt sense of interconnection with the living world is not a metaphor for what happened during the experience. It IS what happened. The boundary between self and environment softened, and the relationship that was always there became visible. ROOTS tends this relationship so it does not fade when the afterglow does. Nature is also one of the most accessible and reliable sources of nervous system regulation, awe, and presence. The same forest that holds a deer holds your process too. Tending your relationship with the natural world after a psychedelic experience is tending the experience itself.',
    es: 'La conexión con la naturaleza es uno de los cambios duraderos más comúnmente reportados después de experiencias con psilocibina. No es un efecto secundario agradable. Es una dimensión central de la integración. La sensación de interconexión con el mundo vivo no es una metáfora de lo que ocurrió durante la experiencia. ES lo que ocurrió. La frontera entre el yo y el entorno se suavizó, y la relación que siempre estuvo ahí se hizo visible. RAÍCES cuida esta relación para que no se desvanezca cuando el resplandor pasa. La naturaleza también es una de las fuentes más accesibles y confiables de regulación del sistema nervioso, asombro y presencia. El mismo bosque que sostiene a un venado sostiene tu proceso también. Cuidar tu relación con el mundo natural después de una experiencia psicodélica es cuidar la experiencia misma.',
  },
  researchBacking: {
    en: 'Lyons and Carhart-Harris (2018) found significant and lasting increases in nature-relatedness following psilocybin experiences, with changes persisting well beyond the acute effects. Kettner et al. (2019) further demonstrated that increases in nature-relatedness mediated improvements in well-being after psychedelic use. Shinrin-yoku (forest bathing) research from Japan shows that time in forests reduces cortisol, lowers blood pressure, increases natural killer cell activity, and shifts the nervous system toward parasympathetic dominance. The MAPS 6 Domains and the THRIVE model both include nature connection as a distinct integration domain, recognizing that ecological awareness is not reducible to other psychological or relational categories. Research on awe (Keltner, 2023) shows that awe experiences in nature produce measurable reductions in inflammation markers, increased prosocial behavior, and expanded time perception.',
    es: 'Lyons y Carhart-Harris (2018) encontraron aumentos significativos y duraderos en la conexión con la naturaleza después de experiencias con psilocibina, con cambios que persisten mucho más allá de los efectos agudos. Kettner et al. (2019) demostraron además que los aumentos en la conexión con la naturaleza mediaron mejoras en el bienestar después del uso de psicodélicos. La investigación de shinrin-yoku (baño de bosque) de Japón muestra que el tiempo en bosques reduce el cortisol, baja la presión arterial, aumenta la actividad de células asesinas naturales y desplaza el sistema nervioso hacia la dominancia parasimpática. Los 6 Dominios de MAPS y el modelo THRIVE incluyen la conexión con la naturaleza como un dominio de integración distinto, reconociendo que la conciencia ecológica no es reducible a otras categorías psicológicas o relacionales. La investigación sobre el asombro (Keltner, 2023) muestra que las experiencias de asombro en la naturaleza producen reducciones medibles en marcadores de inflamación, mayor comportamiento prosocial y percepción expandida del tiempo.',
  },
  processLayer: {
    receive: {
      en: 'Go outside. Not to exercise, not to accomplish, not to photograph. Go to be with the living world. Sit under a tree. Watch water move. Feel wind on skin. Let the sensory experience of nature wash through you without narrating it. If the experience showed you something about interconnection, let nature re-show you daily. No agenda. No destination. Receive what the land offers.',
      es: 'Sal afuera. No para hacer ejercicio, no para lograr algo, no para fotografiar. Sal para estar con el mundo vivo. Siéntate bajo un árbol. Observa el agua moverse. Siente el viento en la piel. Deja que la experiencia sensorial de la naturaleza te atraviese sin narrarla. Si la experiencia te mostró algo sobre la interconexión, deja que la naturaleza te lo vuelva a mostrar diariamente. Sin agenda. Sin destino. Recibe lo que la tierra ofrece.',
    },
    recognize: {
      en: 'Notice what in nature mirrors your inner process. Are you in winter (dormancy, quiet, death of old patterns) or spring (new growth, tenderness, vulnerability)? What ecosystems feel like home to your nervous system? Where in the natural world do you feel most yourself? Begin to identify the specific ways nature supports your integration. Name them.',
      es: 'Observa qué en la naturaleza refleja tu proceso interior. ¿Estás en invierno (latencia, quietud, muerte de viejos patrones) o en primavera (nuevo crecimiento, ternura, vulnerabilidad)? ¿Qué ecosistemas se sienten como hogar para tu sistema nervioso? ¿Dónde en el mundo natural te sientes más tú? Empieza a identificar las formas específicas en que la naturaleza apoya tu integración. Nómbralas.',
    },
    return: {
      en: 'Make ecological reciprocity a practice, not a sentiment. What can you give back to the land that held your experience? Clean a trail. Plant native species. Reduce consumption. Compost. Support conservation. The relationship with nature is not one-directional. Integration asks you to participate in the web, not just benefit from it.',
      es: 'Haz de la reciprocidad ecológica una práctica, no un sentimiento. ¿Qué puedes devolver a la tierra que sostuvo tu experiencia? Limpia un sendero. Planta especies nativas. Reduce el consumo. Composta. Apoya la conservación. La relación con la naturaleza no es unidireccional. La integración te pide participar en la red, no solo beneficiarte de ella.',
    },
  },
  practices: [
    {
      name: { en: 'Forest Bathing (Shinrin-yoku)', es: 'Baño de bosque (Shinrin-yoku)' },
      description: {
        en: 'Unhurried time in a forest. No phone. No destination. No goals. Walk slowly or sit. Let all five senses open. Smell the soil. Touch bark. Listen to layers of sound. 20 minutes minimum, but longer is better. This practice reliably reduces cortisol and shifts the nervous system toward parasympathetic dominance. Let the trees hold your process.',
        es: 'Tiempo sin prisa en un bosque. Sin teléfono. Sin destino. Sin metas. Camina lento o siéntate. Deja que los cinco sentidos se abran. Huele la tierra. Toca la corteza. Escucha las capas de sonido. 20 minutos mínimo, pero más tiempo es mejor. Esta práctica reduce el cortisol de forma confiable y desplaza el sistema nervioso hacia la dominancia parasimpática. Deja que los árboles sostengan tu proceso.',
      },
      source: 'Shinrin-yoku research (Li, 2010)',
    },
    {
      name: { en: 'Nature Journaling', es: 'Diario de naturaleza' },
      description: {
        en: 'Take a notebook outside. Observe and record what you notice: light quality, cloud formations, bird behavior, plant growth stages, insect activity. Date each entry. Over weeks, you will begin to see patterns, cycles, and changes. This practice trains the same quality of attention that integration requires: patient, non-judgmental, curious observation.',
        es: 'Lleva un cuaderno afuera. Observa y registra lo que notas: calidad de la luz, formaciones de nubes, comportamiento de aves, etapas de crecimiento de plantas, actividad de insectos. Pon fecha a cada entrada. Con las semanas, empezarás a ver patrones, ciclos y cambios. Esta práctica entrena la misma cualidad de atención que la integración requiere: observación paciente, sin juicio, curiosa.',
      },
    },
    {
      name: { en: 'Barefoot Walking', es: 'Caminar descalzo' },
      description: {
        en: 'Walk barefoot on earth, grass, sand, or stone. Earthing research suggests direct skin contact with the ground reduces inflammation markers and shifts autonomic nervous system balance. But beyond the research, the practice is simple and ancient: feel the ground beneath you. Reconnect with the surface of the planet through the soles of your feet.',
        es: 'Camina descalzo/a sobre tierra, pasto, arena o piedra. La investigación sobre earthing sugiere que el contacto directo de la piel con el suelo reduce marcadores de inflamación y equilibra el sistema nervioso autónomo. Pero más allá de la investigación, la práctica es simple y antigua: siente el suelo debajo de ti. Reconéctate con la superficie del planeta a través de las plantas de tus pies.',
      },
    },
    {
      name: { en: 'Sunrise and Sunset Practice', es: 'Práctica de amanecer y atardecer' },
      description: {
        en: 'Bookend your days with sky. No screens, just witnessing the light change. Morning light sets your circadian clock (supporting GROUND). Evening light signals transition and rest. Both moments offer a daily encounter with awe that costs nothing and requires nothing but your presence.',
        es: 'Enmarca tus días con cielo. Sin pantallas, solo presenciando el cambio de luz. La luz matutina ajusta tu reloj circadiano (apoyando TIERRA). La luz vespertina señala transición y descanso. Ambos momentos ofrecen un encuentro diario con el asombro que no cuesta nada y no requiere nada más que tu presencia.',
      },
    },
    {
      name: { en: 'Gardening', es: 'Jardinería' },
      description: {
        en: 'Hands in soil. Tending growth. Patience. Cycles of planting and harvest. Gardening teaches the rhythm of integration itself: you plant, you water, you wait, you tend, you harvest. Not everything grows at the pace you want. Some things need to be composted before new growth is possible.',
        es: 'Manos en la tierra. Cuidando el crecimiento. Paciencia. Ciclos de siembra y cosecha. La jardinería enseña el ritmo de la integración misma: siembras, riegas, esperas, cuidas, cosechas. No todo crece al ritmo que quieres. Algunas cosas necesitan ser compostadas antes de que sea posible un nuevo crecimiento.',
      },
    },
    {
      name: { en: 'Water Time', es: 'Tiempo con agua' },
      description: {
        en: 'Sit near water: a river, the ocean, rain falling. Water is associated with the unconscious, emotional flow, and cleansing across many traditions. The sound of moving water reliably shifts the nervous system toward calm. If you are near a body of water, spend time with it. If not, rain and even a bath can hold this space.',
        es: 'Siéntate cerca del agua: un río, el océano, la lluvia cayendo. El agua está asociada con el inconsciente, el flujo emocional y la limpieza en muchas tradiciones. El sonido del agua en movimiento desplaza el sistema nervioso hacia la calma de forma confiable. Si estás cerca de un cuerpo de agua, pasa tiempo con él. Si no, la lluvia e incluso un baño pueden sostener este espacio.',
      },
      source: 'Indigenous traditions',
    },
    {
      name: { en: 'Ecological Reciprocity', es: 'Reciprocidad ecológica' },
      description: {
        en: 'What can you give back to the land that gave you this experience? Clean a trail. Plant a tree. Reduce your consumption. Support indigenous land rights. Donate to conservation. Reciprocity is a practice, not a slogan. The Chacruna Indigenous Reciprocity Initiative offers concrete ways to give back to the traditions that hold these medicines.',
        es: '¿Qué puedes devolver a la tierra que te dio esta experiencia? Limpia un sendero. Planta un árbol. Reduce tu consumo. Apoya los derechos territoriales indígenas. Dona a la conservación. La reciprocidad es una práctica, no un eslogan. La Iniciativa de Reciprocidad Indígena de Chacruna ofrece formas concretas de devolver a las tradiciones que sostienen estas medicinas.',
      },
      source: 'Chacruna Indigenous Reciprocity Initiative',
    },
  ],
  connections: [
    {
      toNode: 'ground',
      description: {
        en: 'Nature grounds the body. Time outdoors regulates the nervous system, resets circadian rhythm, and reduces cortisol. Forest bathing research shows that nature contact produces the same physiological shifts that GROUND practices target. Nature is not separate from body work. It is body work.',
        es: 'La naturaleza enraíza el cuerpo. El tiempo al aire libre regula el sistema nervioso, reinicia el ritmo circadiano y reduce el cortisol. La investigación sobre baño de bosque muestra que el contacto con la naturaleza produce los mismos cambios fisiológicos que las prácticas de TIERRA buscan. La naturaleza no está separada del trabajo corporal. Es trabajo corporal.',
      },
    },
    {
      toNode: 'canopy',
      description: {
        en: 'Awe in nature connects to transcendence. Standing at the base of an ancient tree, watching a storm roll across a valley, witnessing a sunset that stops your thoughts. These are encounters with the numinous that do not require any belief system. Nature is one of the most reliable doorways to the same quality of experience that CANOPY processes.',
        es: 'El asombro en la naturaleza conecta con la trascendencia. Estar al pie de un árbol ancestral, ver una tormenta cruzar un valle, presenciar un atardecer que detiene tus pensamientos. Son encuentros con lo numinoso que no requieren ningún sistema de creencias. La naturaleza es una de las puertas más confiables hacia la misma cualidad de experiencia que DOSEL procesa.',
      },
    },
    {
      toNode: 'weave',
      description: {
        en: 'Ecological awareness leads to community service. When you feel the interconnection of living systems, the impulse toward reciprocity and service arises naturally. ROOTS feeds WEAVE because understanding your place in the web of life extends to understanding your place in the web of relationships. Ecological reciprocity IS community engagement.',
        es: 'La conciencia ecológica conduce al servicio comunitario. Cuando sientes la interconexión de los sistemas vivos, el impulso hacia la reciprocidad y el servicio surge naturalmente. RAÍCES alimenta a TEJIDO porque entender tu lugar en la red de la vida se extiende a entender tu lugar en la red de relaciones. La reciprocidad ecológica ES compromiso comunitario.',
      },
    },
    {
      toNode: 'spore',
      description: {
        en: 'Nature mirrors the inner landscape. What you notice in the natural world often reflects what is alive in your psyche. The dying tree that is also host to new growth. The river that carves its path slowly over centuries. Nature journaling becomes a form of self-reflection when you learn to read these mirrors.',
        es: 'La naturaleza refleja el paisaje interior. Lo que notas en el mundo natural a menudo refleja lo que está vivo en tu psique. El árbol que muere y a la vez alberga nuevo crecimiento. El río que labra su camino lentamente durante siglos. El diario de naturaleza se convierte en una forma de autorreflexión cuando aprendes a leer estos espejos.',
      },
    },
    {
      toNode: 'fruit',
      description: {
        en: 'Nature connection clarifies values. Time in the natural world strips away the noise of productivity culture and reveals what actually matters. Many people report that their psychedelic experiences showed them the absurdity of certain lifestyle patterns. ROOTS keeps that clarity alive. Nature does not care about your to-do list.',
        es: 'La conexión con la naturaleza clarifica los valores. El tiempo en el mundo natural despoja el ruido de la cultura de productividad y revela lo que realmente importa. Muchas personas reportan que sus experiencias psicodélicas les mostraron lo absurdo de ciertos patrones de vida. RAÍCES mantiene viva esa claridad. A la naturaleza no le importa tu lista de pendientes.',
      },
    },
  ],
  warningSignsOfNeglect: {
    en: [
      'Staying indoors during integration, especially in the first two weeks',
      'Excessive screen time replacing time outdoors',
      'Disconnection from seasons, weather, and natural cycles',
      'Treating nature as a backdrop or aesthetic rather than a living relationship',
      'Consuming nature content (documentaries, photos) instead of experiencing nature directly',
      'Feeling that nature connection was "just part of the trip" rather than a lasting shift',
      'No outdoor time in daily routine despite the experience revealing ecological interconnection',
    ],
    es: [
      'Quedarse adentro durante la integración, especialmente en las primeras dos semanas',
      'Tiempo excesivo de pantalla reemplazando el tiempo al aire libre',
      'Desconexión de las estaciones, el clima y los ciclos naturales',
      'Tratar la naturaleza como escenario o estética en lugar de una relación viva',
      'Consumir contenido de naturaleza (documentales, fotos) en vez de experimentar la naturaleza directamente',
      'Sentir que la conexión con la naturaleza fue "solo parte del viaje" en lugar de un cambio duradero',
      'Ningún tiempo al aire libre en la rutina diaria a pesar de que la experiencia reveló interconexión ecológica',
    ],
  },
  useCases: {
    en: [
      'Someone whose experience revealed a deep sense of connection with the natural world and who wants to maintain and deepen that connection',
      'Someone living in an urban environment who needs accessible ways to connect with nature during integration',
      'Someone interested in the ecological dimensions of consciousness and how psychedelic experiences relate to environmental awareness',
      'Someone who felt the living intelligence of plants, fungi, or ecosystems during their experience',
      'Someone seeking non-verbal, non-analytical integration methods that work through sensory presence',
      'Someone wanting to practice reciprocity with the traditions and ecosystems connected to psychedelic medicines',
    ],
    es: [
      'Alguien cuya experiencia reveló una profunda conexión con el mundo natural y que quiere mantener y profundizar esa conexión',
      'Alguien que vive en un entorno urbano y necesita formas accesibles de conectar con la naturaleza durante la integración',
      'Alguien interesado en las dimensiones ecológicas de la conciencia y cómo las experiencias psicodélicas se relacionan con la conciencia ambiental',
      'Alguien que sintió la inteligencia viva de las plantas, hongos o ecosistemas durante su experiencia',
      'Alguien que busca métodos de integración no verbales y no analíticos que funcionen a través de la presencia sensorial',
      'Alguien que quiere practicar reciprocidad con las tradiciones y ecosistemas conectados a las medicinas psicodélicas',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// SPORE — Inner Self, Shadow, Parts Work
// ─────────────────────────────────────────────────────────────────────────────

const spore: NodeDetail = {
  id: 'spore',
  whyItMatters: {
    en: 'Psychedelics relax top-down predictions in the brain (the REBUS model), allowing unconscious material to surface with unusual clarity. This includes shadow material (Jung): the parts of yourself you have rejected, repressed, or refused to see. It includes defense mechanisms that normally keep this material hidden: intellectualization, projection, denial, rationalization. And it includes the "parts" described by Internal Family Systems: the protectors, the exiles, the inner child, the inner critic. Without SPORE work, these revelations slip back below the surface within days or weeks. The default prediction machinery of the brain reasserts itself. The defense mechanisms rebuild. The insights that felt so clear during the experience become memories of insight rather than lived understanding. SPORE is where you catch what surfaced before it sinks back down.',
    es: 'Los psicodélicos relajan las predicciones de arriba hacia abajo en el cerebro (el modelo REBUS), permitiendo que material inconsciente emerja con claridad inusual. Esto incluye material de sombra (Jung): las partes de ti que has rechazado, reprimido o te has negado a ver. Incluye mecanismos de defensa que normalmente mantienen este material oculto: intelectualización, proyección, negación, racionalización. E incluye las "partes" descritas por Sistemas de Familia Interna (IFS): los protectores, los exiliados, el niño interior, el crítico interno. Sin el trabajo de ESPORA, estas revelaciones se hunden de nuevo bajo la superficie en días o semanas. La maquinaria predictiva por defecto del cerebro se reafirma. Los mecanismos de defensa se reconstruyen. Las percepciones que se sentían tan claras durante la experiencia se convierten en recuerdos de percepción en lugar de comprensión vivida. ESPORA es donde atrapas lo que salió a la superficie antes de que se hunda de nuevo.',
  },
  researchBacking: {
    en: 'Carhart-Harris and Friston\'s REBUS (Relaxed Beliefs Under Psychedelics) model (2019) provides the neuroscientific framework for understanding why psychedelics reveal unconscious material. By reducing the weight of prior beliefs and predictions, psychedelics allow bottom-up sensory and emotional information to reach consciousness that is normally filtered out. Richard Schwartz\'s Internal Family Systems (IFS) framework maps directly onto common psychedelic experiences: encounters with distinct "parts" of the self, each with its own emotional age, fears, and protective strategies. Conti\'s structure and function of self model explains how psychedelics bypass defense mechanisms, providing direct access to unconscious material that typically requires years of therapy to surface. Tara Brach\'s RAIN method (Recognize, Allow, Investigate, Nurture) provides the most accessible integration practice for working with what SPORE reveals. The Kaelen "hidden therapist" research demonstrates that music during psychedelic sessions serves as a vehicle for emotional processing, and that re-listening to session music post-experience can recover insights that seemed to fade.',
    es: 'El modelo REBUS (Creencias Relajadas Bajo Psicodélicos) de Carhart-Harris y Friston (2019) proporciona el marco neurocientífico para entender por qué los psicodélicos revelan material inconsciente. Al reducir el peso de las creencias y predicciones previas, los psicodélicos permiten que información sensorial y emocional ascendente llegue a la conciencia que normalmente se filtra. El marco de Sistemas de Familia Interna (IFS) de Richard Schwartz se mapea directamente con experiencias psicodélicas comunes: encuentros con "partes" distintas del yo, cada una con su propia edad emocional, miedos y estrategias protectoras. El modelo de estructura y función del yo de Conti explica cómo los psicodélicos pasan por alto los mecanismos de defensa, proporcionando acceso directo al material inconsciente que típicamente requiere años de terapia para salir a la superficie. El método RAIN de Tara Brach (Reconocer, Permitir, Investigar, Nutrir) provee la práctica de integración más accesible para trabajar con lo que ESPORA revela. La investigación del "terapeuta oculto" de Kaelen demuestra que la música durante sesiones psicodélicas sirve como vehículo para el procesamiento emocional, y que volver a escuchar la música de la sesión post-experiencia puede recuperar percepciones que parecían desvanecerse.',
  },
  processLayer: {
    receive: {
      en: 'Be with what arose without analyzing it yet. Write it raw. Draw it. Speak it aloud to yourself. Do not edit, interpret, or make it tidy. The first task is to capture what surfaced before the mind begins to rationalize, minimize, or reframe it. RAIN\'s first two steps live here: Recognize what is present, and Allow it to be here without pushing it away or clinging to it.',
      es: 'Está con lo que surgió sin analizarlo aún. Escríbelo crudo. Dibújalo. Dilo en voz alta. No edites, interpretes ni lo hagas prolijo. La primera tarea es capturar lo que salió a la superficie antes de que la mente empiece a racionalizar, minimizar o reencuadrar. Los primeros dos pasos de RAIN viven aquí: Reconocer lo que está presente, y Permitir que esté aquí sin empujarlo ni aferrarte a ello.',
    },
    recognize: {
      en: 'Name what you see. Which parts showed up? What defense mechanisms did the experience bypass? What patterns became visible? This is where IFS parts dialogue happens: "What does this part need? What is it protecting me from? How old does this part feel?" This is also where themes emerge from the raw journal: patterns of abandonment, control, perfectionism, unworthiness. Name them without judgment. RAIN\'s third step: Investigate with curiosity and care.',
      es: 'Nombra lo que ves. ¿Qué partes aparecieron? ¿Qué mecanismos de defensa traspasó la experiencia? ¿Qué patrones se hicieron visibles? Aquí es donde ocurre el diálogo de partes IFS: "¿Qué necesita esta parte? ¿De qué me está protegiendo? ¿Qué edad siente esta parte?" También es donde emergen temas del diario crudo: patrones de abandono, control, perfeccionismo, indignidad. Nómbralos sin juicio. El tercer paso de RAIN: Investigar con curiosidad y cuidado.',
    },
    return: {
      en: 'Bring compassion to what you found. RAIN\'s fourth step: Nurture. What does the wounded part need? What would it feel like to offer it safety instead of exile? Then commit to ongoing practice: continue journaling, continue meditating, consider working with a therapist trained in IFS or psychedelic integration. The shadow does not integrate in a weekend. It integrates through sustained, compassionate attention.',
      es: 'Lleva compasión a lo que encontraste. El cuarto paso de RAIN: Nutrir. ¿Qué necesita la parte herida? ¿Cómo se sentiría ofrecerle seguridad en vez de exilio? Luego comprométete a la práctica continua: sigue escribiendo, sigue meditando, considera trabajar con un terapeuta entrenado en IFS o integración psicodélica. La sombra no se integra en un fin de semana. Se integra a través de atención sostenida y compasiva.',
    },
  },
  practices: [
    {
      name: { en: 'RAIN Method', es: 'Método RAIN' },
      description: {
        en: 'Recognize what is happening. Allow it to be here. Investigate with kindness (where do I feel this in my body? what does this part believe? what does it need?). Nurture with self-compassion. This four-step process is the core integration practice for psychological material. Use it whenever difficult emotions, memories, or parts arise. 15 to 30 minutes, seated or lying down.',
        es: 'Reconoce lo que está pasando. Permite que esté aquí. Investiga con amabilidad (¿dónde siento esto en mi cuerpo? ¿qué cree esta parte? ¿qué necesita?). Nutre con autocompasión. Este proceso de cuatro pasos es la práctica central de integración para material psicológico. Úsalo cuando surjan emociones difíciles, recuerdos o partes. De 15 a 30 minutos, sentado/a o acostado/a.',
      },
      source: 'Tara Brach',
    },
    {
      name: { en: 'Raw Journaling', es: 'Escritura cruda' },
      description: {
        en: 'Write everything. No editing. No analyzing. No making it pretty. The day after the experience, write 10 to 20 pages if needed. Let the pen move without the editor. What came up? What images? What feelings? What did you see? This is capture, not composition. Return to these pages in the following days and weeks. They contain more than you will notice on the first read.',
        es: 'Escribe todo. Sin editar. Sin analizar. Sin hacerlo bonito. El día después de la experiencia, escribe 10 a 20 páginas si es necesario. Deja que la pluma se mueva sin el editor. ¿Qué surgió? ¿Qué imágenes? ¿Qué sentimientos? ¿Qué viste? Esto es captura, no composición. Regresa a estas páginas en los días y semanas siguientes. Contienen más de lo que notarás en la primera lectura.',
      },
      source: 'Ferriss integration protocol',
    },
    {
      name: { en: 'IFS Parts Dialogue', es: 'Diálogo de partes IFS' },
      description: {
        en: 'Sit quietly and turn attention inward. Address a part that showed up during the experience: the inner critic, the child, the protector. Ask it: "What do you need? What are you protecting me from? What would it look like if you felt safe?" Listen for the answer. It may come as words, images, sensations, or emotions. This is not fantasy. It is a structured practice backed by extensive clinical research.',
        es: 'Siéntate en silencio y dirige la atención hacia adentro. Dirígete a una parte que apareció durante la experiencia: el crítico interno, el niño, el protector. Pregúntale: "¿Qué necesitas? ¿De qué me estás protegiendo? ¿Cómo se vería si te sintieras seguro/a?" Escucha la respuesta. Puede venir como palabras, imágenes, sensaciones o emociones. Esto no es fantasía. Es una práctica estructurada respaldada por extensa investigación clínica.',
      },
      source: 'Schwartz, IFS Institute',
    },
    {
      name: { en: 'Creative Processing', es: 'Procesamiento creativo' },
      description: {
        en: 'Art, music, movement as non-verbal processing channels. What cannot be spoken can often be painted, sung, or danced. Create without concern for quality. The goal is expression, not art. Clay, watercolors, collage, voice recording, free movement in a private space. Let the material find its own form.',
        es: 'Arte, música, movimiento como canales de procesamiento no verbal. Lo que no se puede decir a menudo se puede pintar, cantar o bailar. Crea sin preocupación por la calidad. El objetivo es la expresión, no el arte. Arcilla, acuarelas, collage, grabación de voz, movimiento libre en un espacio privado. Deja que el material encuentre su propia forma.',
      },
      source: 'MAPS integration guidelines',
    },
    {
      name: { en: 'Track-by-Track Music Journaling', es: 'Diario musical pista por pista' },
      description: {
        en: 'If music was part of your experience, re-listen to the playlist track by track. Pause after each piece. Write what comes up: memories, emotions, images, body sensations. Music is a powerful anchor for psychedelic memory. Research by Kaelen shows that music functions as a "hidden therapist" during psychedelic sessions, and re-listening can recover insights that seemed lost.',
        es: 'Si la música fue parte de tu experiencia, vuelve a escuchar la lista de reproducción pista por pista. Pausa después de cada pieza. Escribe lo que surge: recuerdos, emociones, imágenes, sensaciones corporales. La música es un ancla poderosa para la memoria psicodélica. La investigación de Kaelen muestra que la música funciona como un "terapeuta oculto" durante las sesiones psicodélicas, y volver a escucharla puede recuperar percepciones que parecían perdidas.',
      },
      source: 'Kaelen, "The Hidden Therapist" (2018)',
    },
    {
      name: { en: 'Meditation Continuity', es: 'Continuidad meditativa' },
      description: {
        en: 'Do not stop meditating after the experience. The practice that prepared you IS the integration practice. MBSR-style sitting meditation (20 to 30 minutes daily) maintains the quality of open, non-judgmental awareness that the psychedelic experience widened. The experience opened a door. Meditation keeps it from closing.',
        es: 'No dejes de meditar después de la experiencia. La práctica que te preparó ES la práctica de integración. La meditación sentada estilo MBSR (20 a 30 minutos diarios) mantiene la cualidad de conciencia abierta y sin juicio que la experiencia psicodélica amplió. La experiencia abrió una puerta. La meditación evita que se cierre.',
      },
      source: 'Kornfield, Kabat-Zinn',
    },
    {
      name: { en: 'Fear Inventory', es: 'Inventario de miedos' },
      description: {
        en: 'Name your fears explicitly and in writing. "I am afraid of losing control." "I am afraid of what I will see." "I am afraid of being vulnerable." Naming reduces the power of fear. This is a preparation practice, but it becomes an integration practice when you return to your list after the experience and notice which fears were confirmed, which dissolved, and which transformed into something unexpected.',
        es: 'Nombra tus miedos explícitamente y por escrito. "Tengo miedo de perder el control." "Tengo miedo de lo que veré." "Tengo miedo de ser vulnerable." Nombrar reduce el poder del miedo. Esta es una práctica de preparación, pero se convierte en práctica de integración cuando regresas a tu lista después de la experiencia y notas cuáles miedos se confirmaron, cuáles se disolvieron y cuáles se transformaron en algo inesperado.',
      },
      source: 'Ferriss preparation protocol',
    },
  ],
  connections: [
    {
      toNode: 'weave',
      description: {
        en: 'Understanding yourself enables better relationships. The patterns SPORE reveals (attachment style, defense mechanisms, communication habits, shadow projections) are the same patterns that shape your relationships. When you see your inner critic clearly, you stop projecting it onto your partner. When you befriend your inner child, you stop demanding others parent you. SPORE work is WEAVE preparation.',
        es: 'Comprenderte a ti mismo/a permite mejores relaciones. Los patrones que ESPORA revela (estilo de apego, mecanismos de defensa, hábitos de comunicación, proyecciones de sombra) son los mismos patrones que dan forma a tus relaciones. Cuando ves a tu crítico interno claramente, dejas de proyectarlo en tu pareja. Cuando te haces amigo/a de tu niño/a interior, dejas de exigir que otros te cuiden. El trabajo de ESPORA es preparación para TEJIDO.',
      },
    },
    {
      toNode: 'fruit',
      description: {
        en: 'Self-knowledge informs values. You cannot align your life with your values if you do not know which values are truly yours and which are inherited, performed, or defensive. SPORE peels back the layers of conditioning to reveal what actually matters underneath the social programming. FRUIT needs SPORE because authentic values emerge from honest self-examination.',
        es: 'El autoconocimiento informa los valores. No puedes alinear tu vida con tus valores si no sabes cuáles valores son verdaderamente tuyos y cuáles son heredados, actuados o defensivos. ESPORA pela las capas de condicionamiento para revelar lo que realmente importa debajo de la programación social. FRUTO necesita a ESPORA porque los valores auténticos emergen de la autoexaminación honesta.',
      },
    },
    {
      toNode: 'ground',
      description: {
        en: 'Psychological processing manifests somatically. When you touch a painful memory or encounter a defended part, the body responds: throat tightens, stomach drops, shoulders brace, breath shallows. SPORE work that ignores these somatic signals stays intellectual. Following the body\'s response back into GROUND practices (breathwork, movement, body scan) allows the processing to complete at both levels.',
        es: 'El procesamiento psicológico se manifiesta somáticamente. Cuando tocas un recuerdo doloroso o encuentras una parte defendida, el cuerpo responde: la garganta se aprieta, el estómago cae, los hombros se tensan, la respiración se vuelve superficial. El trabajo de ESPORA que ignora estas señales somáticas se queda intelectual. Seguir la respuesta del cuerpo de vuelta a las prácticas de TIERRA (respiración, movimiento, escaneo corporal) permite que el procesamiento se complete en ambos niveles.',
      },
    },
    {
      toNode: 'canopy',
      description: {
        en: 'The inner landscape mirrors the cosmic landscape. Ego dissolution (CANOPY territory) and shadow work (SPORE territory) are two sides of the same coin. When the ego relaxes its grip, both the transcendent and the repressed become visible simultaneously. SPORE helps you navigate the personal content that arises within mystical experience.',
        es: 'El paisaje interior refleja el paisaje cósmico. La disolución del ego (territorio de DOSEL) y el trabajo de sombra (territorio de ESPORA) son dos caras de la misma moneda. Cuando el ego relaja su agarre, tanto lo trascendente como lo reprimido se hacen visibles simultáneamente. ESPORA te ayuda a navegar el contenido personal que surge dentro de la experiencia mística.',
      },
    },
    {
      toNode: 'roots',
      description: {
        en: 'The inner world mirrors the outer world. Patterns in your psyche have ecological parallels: cycles of growth and decay, symbiosis and parasitism, dormancy and bloom. Nature journaling becomes shadow work when you notice what in the natural world catches your attention and ask why.',
        es: 'El mundo interior refleja el mundo exterior. Los patrones en tu psique tienen paralelos ecológicos: ciclos de crecimiento y decadencia, simbiosis y parasitismo, latencia y florecimiento. El diario de naturaleza se convierte en trabajo de sombra cuando notas qué del mundo natural captura tu atención y te preguntas por qué.',
      },
    },
  ],
  warningSignsOfNeglect: {
    en: [
      'Intellectualizing the experience instead of feeling it ("it was just neurochemistry")',
      'Avoiding the journal, skipping reflection time, filling the schedule to stay busy',
      'Spiritual bypassing: using transcendent language to avoid difficult psychological content',
      'Rapid return to "normal life" without sitting with what arose',
      'Telling the story of the experience repeatedly without processing it (performance vs. integration)',
      'Dismissing shadow material as "not real" or "just the drug"',
      'Persistent anxiety, irritability, or emotional flatness that goes unexamined',
      'Compulsive behavior returning quickly (substances, screens, work) as a way to avoid what was revealed',
    ],
    es: [
      'Intelectualizar la experiencia en vez de sentirla ("fue solo neuroquímica")',
      'Evitar el diario, saltarse el tiempo de reflexión, llenar la agenda para estar ocupado/a',
      'Bypass espiritual: usar lenguaje trascendente para evitar contenido psicológico difícil',
      'Regreso rápido a la "vida normal" sin sentarse con lo que surgió',
      'Contar la historia de la experiencia repetidamente sin procesarla (actuación vs. integración)',
      'Desestimar material de sombra como "no real" o "solo la droga"',
      'Ansiedad persistente, irritabilidad o aplanamiento emocional que no se examina',
      'Comportamiento compulsivo que regresa rápido (sustancias, pantallas, trabajo) como forma de evitar lo revelado',
    ],
  },
  useCases: {
    en: [
      'Someone who encountered shadow material during their experience: repressed memories, difficult emotions, aspects of self they usually avoid',
      'Someone processing ego dissolution and the disorientation of returning to "normal" identity',
      'Someone working with inner critic or inner child parts that became visible during the experience',
      'Someone who had a "difficult trip" and needs support processing challenging psychological content',
      'Someone whose defense mechanisms were temporarily bypassed and who needs help integrating what they saw underneath',
      'Someone with a meditation or therapy practice who wants to deepen their self-understanding using psychedelic insights',
    ],
    es: [
      'Alguien que encontró material de sombra durante su experiencia: recuerdos reprimidos, emociones difíciles, aspectos del yo que usualmente evita',
      'Alguien procesando disolución del ego y la desorientación de regresar a la identidad "normal"',
      'Alguien trabajando con partes del crítico interno o niño interior que se hicieron visibles durante la experiencia',
      'Alguien que tuvo un "viaje difícil" y necesita apoyo para procesar contenido psicológico desafiante',
      'Alguien cuyos mecanismos de defensa fueron temporalmente traspasados y necesita ayuda para integrar lo que vio debajo',
      'Alguien con práctica de meditación o terapia que quiere profundizar su autocomprensión usando percepciones psicodélicas',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// WEAVE — Relationships, Community, Service
// ─────────────────────────────────────────────────────────────────────────────

const weave: NodeDetail = {
  id: 'weave',
  whyItMatters: {
    en: 'Integration is not solo work. The most ancient psychedelic traditions are communal: the Mazatec velada, the ayahuasca ceremony, the Bwiti initiation. These are not individual therapeutic sessions. They are community events witnessed, held, and processed by the group. Modern psychedelic use has become individualized, but the need for relational processing has not changed. The experience reveals patterns in how you relate: attachment style, communication habits, boundaries, the ways you seek love and the ways you push it away. And beyond personal relationships, there is service. Joseph Campbell called it "the return with the elixir": the hero\'s journey is not complete until you bring back what you learned and offer it to your community. Ram Dass spent decades teaching that service IS integration, that love expressed through action is how individual transformation becomes collective healing. WEAVE holds all of this: the personal relationships that need tending, and the larger community that needs your gift.',
    es: 'La integración no es trabajo solitario. Las tradiciones psicodélicas más antiguas son comunitarias: la velada mazateca, la ceremonia de ayahuasca, la iniciación Bwiti. No son sesiones terapéuticas individuales. Son eventos comunitarios presenciados, sostenidos y procesados por el grupo. El uso moderno de psicodélicos se ha individualizado, pero la necesidad de procesamiento relacional no ha cambiado. La experiencia revela patrones en cómo te relacionas: estilo de apego, hábitos de comunicación, límites, las formas en que buscas amor y las formas en que lo rechazas. Y más allá de las relaciones personales, está el servicio. Joseph Campbell lo llamó "el regreso con el elixir": el viaje del héroe no se completa hasta que traes de vuelta lo que aprendiste y lo ofreces a tu comunidad. Ram Dass dedicó décadas a enseñar que el servicio ES integración, que el amor expresado a través de la acción es cómo la transformación individual se convierte en sanación colectiva. TEJIDO sostiene todo esto: las relaciones personales que necesitan cuidado, y la comunidad más amplia que necesita tu regalo.',
  },
  researchBacking: {
    en: 'The EMBARK framework (Brennan and Belser, 2022) includes a relational domain that examines both the therapeutic relationship and broader relational patterns revealed during psychedelic experiences. MAPS\' 6 Domains of Integration includes relationships as a core domain. Ram Dass\'s decades of teaching on loving awareness and service provide the philosophical foundation for understanding service as integration, not as an afterthought. Sharon Salzberg\'s research on lovingkindness (metta) meditation shows measurable increases in positive affect, social connection, and prosocial behavior. Campbell\'s monomyth framework establishes that the hero who does not return with the elixir has failed the journey. The Zendo Project\'s peer support model demonstrates that non-professional, compassionate presence is often the most effective immediate support for people in psychedelic crisis.',
    es: 'El marco EMBARK (Brennan y Belser, 2022) incluye un dominio relacional que examina tanto la relación terapéutica como los patrones relacionales más amplios revelados durante experiencias psicodélicas. Los 6 Dominios de Integración de MAPS incluyen las relaciones como dominio central. Las décadas de enseñanza de Ram Dass sobre la conciencia amorosa y el servicio proporcionan la base filosófica para entender el servicio como integración, no como un añadido. La investigación de Sharon Salzberg sobre la meditación de bondad amorosa (metta) muestra aumentos medibles en afecto positivo, conexión social y comportamiento prosocial. El marco del monomito de Campbell establece que el héroe que no regresa con el elixir ha fallado el viaje. El modelo de apoyo entre pares del Proyecto Zendo demuestra que la presencia compasiva no profesional suele ser el apoyo inmediato más efectivo para personas en crisis psicodélica.',
  },
  processLayer: {
    receive: {
      en: 'Notice what the experience revealed about your relationships. What patterns surfaced? What felt like love? What felt like fear? Who came to mind during the experience, and what emotions accompanied them? Receive these relational insights the same way you receive psychological ones: without rushing to act on them. Some relationships need repair. Some need boundaries. Some need more love. Feel which is which before moving.',
      es: 'Observa lo que la experiencia reveló sobre tus relaciones. ¿Qué patrones salieron a la superficie? ¿Qué se sintió como amor? ¿Qué se sintió como miedo? ¿Quién vino a tu mente durante la experiencia, y qué emociones los acompañaron? Recibe estas percepciones relacionales de la misma forma que recibes las psicológicas: sin apresurarte a actuar. Algunas relaciones necesitan reparación. Algunas necesitan límites. Algunas necesitan más amor. Siente cuál es cuál antes de moverte.',
    },
    recognize: {
      en: 'Name the relational patterns. Do you withdraw when things get intense? Do you over-give to avoid being abandoned? Do you intellectualize to avoid vulnerability? Do you perform strength to avoid asking for help? These are not character flaws. They are strategies you developed to survive. Name them with the same compassion you bring to SPORE work. Then look at who in your life mirrors these patterns back to you.',
      es: 'Nombra los patrones relacionales. ¿Te retiras cuando las cosas se intensifican? ¿Das de más para evitar ser abandonado/a? ¿Intelectualizas para evitar la vulnerabilidad? ¿Actúas fortaleza para evitar pedir ayuda? Estos no son defectos de carácter. Son estrategias que desarrollaste para sobrevivir. Nómbralos con la misma compasión que traes al trabajo de ESPORA. Luego mira quién en tu vida te refleja estos patrones.',
    },
    return: {
      en: 'Have the conversations. Share with trusted people. Begin relational repair where it is needed. And look beyond your immediate circle: how can what you learned serve others? Integration circles, volunteer work, mentoring, community care. The journey is not complete until the gift comes back. Campbell is right: the return with the elixir is not optional.',
      es: 'Ten las conversaciones. Comparte con personas de confianza. Inicia la reparación relacional donde sea necesaria. Y mira más allá de tu círculo inmediato: ¿cómo puede lo que aprendiste servir a otros? Círculos de integración, voluntariado, mentoría, cuidado comunitario. El viaje no se completa hasta que el regalo regresa. Campbell tiene razón: el retorno con el elixir no es opcional.',
    },
  },
  practices: [
    {
      name: { en: 'Sharing with Trusted People', es: 'Compartir con personas de confianza' },
      description: {
        en: 'Tell your experience to 1 to 2 people who can hold space without judgment, advice-giving, or dismissal. Not everyone. Not social media. Choose people who listen more than they speak, who can sit with difficulty without trying to fix it. The Zendo principle applies: sit with them, do not guide them.',
        es: 'Cuenta tu experiencia a 1 o 2 personas que puedan sostener el espacio sin juicio, sin dar consejos ni desestimar. No a todos. No en redes sociales. Elige personas que escuchen más de lo que hablan, que puedan sentarse con lo difícil sin intentar arreglarlo. El principio Zendo aplica: siéntate con ellos, no los guíes.',
      },
      source: 'Ferriss, Zendo Project principles',
    },
    {
      name: { en: 'Integration Circles', es: 'Círculos de integración' },
      description: {
        en: 'Group settings where people process their experiences together. Peer support, not therapy. Witnessing and being witnessed. The power of integration circles is that they normalize the experience: you are not alone in what you felt, saw, or struggled with. Psychedelic Support and Fireside Project maintain directories of integration circles.',
        es: 'Espacios grupales donde las personas procesan sus experiencias juntas. Apoyo entre pares, no terapia. Presenciar y ser presenciado. El poder de los círculos de integración es que normalizan la experiencia: no estás solo/a en lo que sentiste, viste o con lo que luchaste. Psychedelic Support y Fireside Project mantienen directorios de círculos de integración.',
      },
      source: 'Psychedelic Support, Fireside Project',
    },
    {
      name: { en: 'Relational Repair', es: 'Reparación relacional' },
      description: {
        en: 'If the experience revealed relational patterns that need attention (poor boundaries, avoidant attachment, unspoken resentments, love that has not been expressed), begin addressing them. Not all at once. Start with one conversation. One apology. One boundary. One expression of love that you have been withholding.',
        es: 'Si la experiencia reveló patrones relacionales que necesitan atención (límites pobres, apego evitativo, resentimientos no hablados, amor que no se ha expresado), empieza a abordarlos. No todos a la vez. Empieza con una conversación. Una disculpa. Un límite. Una expresión de amor que has estado reteniendo.',
      },
      source: 'EMBARK relational domain',
    },
    {
      name: { en: 'Metta Meditation (Lovingkindness)', es: 'Meditación Metta (Bondad amorosa)' },
      description: {
        en: 'Sit comfortably. Begin by directing lovingkindness toward yourself: "May I be happy. May I be healthy. May I be safe. May I live with ease." Then extend to a loved one, a neutral person, a difficult person, and finally all beings. 10 to 20 minutes daily. This practice builds the emotional capacity for relational repair and service. Sharon Salzberg\'s guided recordings are excellent.',
        es: 'Siéntate cómodamente. Empieza dirigiendo bondad amorosa hacia ti: "Que sea feliz. Que esté sano/a. Que esté seguro/a. Que viva con tranquilidad." Luego extiende a un ser querido, una persona neutral, una persona difícil y finalmente a todos los seres. De 10 a 20 minutos diarios. Esta práctica construye la capacidad emocional para la reparación relacional y el servicio. Las grabaciones guiadas de Sharon Salzberg son excelentes.',
      },
      source: 'Salzberg, Real Love',
    },
    {
      name: { en: 'Service / Karma Yoga', es: 'Servicio / Karma Yoga' },
      description: {
        en: '"How could what I learned serve someone else?" This question transforms integration from self-focused processing into outward-facing action. Service does not have to be grand. Cook a meal for someone. Listen to a friend who is struggling. Volunteer. Mentor. Donate. The gift must return to the village.',
        es: '"¿Cómo puede lo que aprendí servir a alguien más?" Esta pregunta transforma la integración de procesamiento centrado en uno mismo a acción dirigida hacia afuera. El servicio no tiene que ser grandioso. Cocina una comida para alguien. Escucha a un amigo que está pasándola difícil. Sé voluntario/a. Mentora. Dona. El regalo debe regresar al pueblo.',
      },
      source: 'Ram Dass',
    },
    {
      name: { en: 'The Conversation', es: 'La conversación' },
      description: {
        en: 'Talk to your partner, close friend, or family member about what you experienced and what it means for your relationship. This is not oversharing. It is honest communication about a significant experience. Use the preparation phase to have this conversation before the experience too. The people who love you deserve to know what you are exploring and why.',
        es: 'Habla con tu pareja, amigo/a cercano/a o familiar sobre lo que experimentaste y lo que significa para tu relación. Esto no es compartir de más. Es comunicación honesta sobre una experiencia significativa. Usa la fase de preparación para tener esta conversación antes de la experiencia también. Las personas que te aman merecen saber qué estás explorando y por qué.',
      },
    },
  ],
  connections: [
    {
      toNode: 'fruit',
      description: {
        en: 'Service leads to values clarification. When you offer your gifts to others, you discover what you actually value, not in theory but in practice. WEAVE and FRUIT form a feedback loop: values inform service, and service refines values. The person who serves consistently knows their values by what they choose to give.',
        es: 'El servicio conduce a la clarificación de valores. Cuando ofreces tus dones a otros, descubres lo que realmente valoras, no en teoría sino en la práctica. TEJIDO y FRUTO forman un ciclo de retroalimentación: los valores informan el servicio, y el servicio refina los valores. La persona que sirve consistentemente conoce sus valores por lo que elige dar.',
      },
    },
    {
      toNode: 'spore',
      description: {
        en: 'Relationships mirror inner patterns. Your closest relationships are the most accurate mirrors of your unconscious material. The partner who triggers you is showing you a part you have not befriended. The friend who frustrates you is reflecting a quality you reject in yourself. WEAVE and SPORE are inseparable: relational work IS inner work, seen from the outside.',
        es: 'Las relaciones reflejan patrones internos. Tus relaciones más cercanas son los espejos más precisos de tu material inconsciente. La pareja que te activa te está mostrando una parte que no has aceptado. El amigo/a que te frustra te está reflejando una cualidad que rechazas en ti mismo/a. TEJIDO y ESPORA son inseparables: el trabajo relacional ES trabajo interior, visto desde afuera.',
      },
    },
    {
      toNode: 'canopy',
      description: {
        en: 'Community holds the transcendent. Mystical experiences can be isolating when there is no one who understands. Integration circles and trusted relationships provide a container for experiences that words cannot fully capture. The community does not need to understand your experience perfectly. It needs to hold space for it.',
        es: 'La comunidad sostiene lo trascendente. Las experiencias místicas pueden ser aislantes cuando no hay nadie que comprenda. Los círculos de integración y las relaciones de confianza proveen un contenedor para experiencias que las palabras no pueden capturar completamente. La comunidad no necesita entender tu experiencia perfectamente. Necesita sostener espacio para ella.',
      },
    },
    {
      toNode: 'ground',
      description: {
        en: 'Connection regulates the nervous system. Porges\' Polyvagal Theory shows that the ventral vagal state (safety, calm, presence) is fundamentally a social state. Safe relationships are nervous system regulators. A hug from someone you trust does more for your vagal tone than most breathwork exercises. WEAVE supports GROUND through co-regulation.',
        es: 'La conexión regula el sistema nervioso. La Teoría Polivagal de Porges muestra que el estado vagal ventral (seguridad, calma, presencia) es fundamentalmente un estado social. Las relaciones seguras son reguladores del sistema nervioso. Un abrazo de alguien en quien confías hace más por tu tono vagal que la mayoría de los ejercicios de respiración. TEJIDO apoya a TIERRA a través de la co-regulación.',
      },
    },
    {
      toNode: 'roots',
      description: {
        en: 'Community service extends to ecological service. The same impulse that drives WEAVE (how can I serve?) extends to ROOTS (how can I serve the living world?). Environmental activism, conservation, indigenous land rights, and ecological reciprocity are WEAVE practices directed toward the non-human community.',
        es: 'El servicio comunitario se extiende al servicio ecológico. El mismo impulso que motiva TEJIDO (¿cómo puedo servir?) se extiende a RAÍCES (¿cómo puedo servir al mundo vivo?). El activismo ambiental, la conservación, los derechos territoriales indígenas y la reciprocidad ecológica son prácticas de TEJIDO dirigidas hacia la comunidad no humana.',
      },
    },
  ],
  warningSignsOfNeglect: {
    en: [
      'Isolating after the experience, withdrawing from relationships and social contact',
      'Oversharing on social media or with people who cannot hold the experience safely',
      'Avoiding difficult conversations that the experience showed you need to have',
      'Feeling superior to people who have not had psychedelic experiences',
      'Not seeking professional support (therapist, integration circle) when processing is difficult',
      'All insight, no relational action: understanding patterns without changing behavior in relationships',
      'Using the experience as an excuse to end relationships impulsively',
      'Forgetting the return: taking from the experience without giving anything back to community',
    ],
    es: [
      'Aislarse después de la experiencia, retirarse de relaciones y contacto social',
      'Compartir de más en redes sociales o con personas que no pueden sostener la experiencia de forma segura',
      'Evitar conversaciones difíciles que la experiencia te mostró que necesitas tener',
      'Sentirse superior a personas que no han tenido experiencias psicodélicas',
      'No buscar apoyo profesional (terapeuta, círculo de integración) cuando el procesamiento es difícil',
      'Toda percepción, ninguna acción relacional: entender patrones sin cambiar comportamiento en las relaciones',
      'Usar la experiencia como excusa para terminar relaciones impulsivamente',
      'Olvidar el retorno: tomar de la experiencia sin devolver nada a la comunidad',
    ],
  },
  useCases: {
    en: [
      'Someone whose experience revealed relationship patterns (attachment, communication, boundaries) that need attention',
      'Someone feeling isolated after a powerful experience and needing peer support',
      'Someone ready to have a difficult conversation that the experience showed them is necessary',
      'Someone wanting to find an integration circle or community of practice',
      'Someone exploring how their experience can serve others (mentoring, volunteering, sharing)',
      'Someone processing the gap between who they are in relationships and who they want to be',
    ],
    es: [
      'Alguien cuya experiencia reveló patrones relacionales (apego, comunicación, límites) que necesitan atención',
      'Alguien que se siente aislado/a después de una experiencia poderosa y necesita apoyo entre pares',
      'Alguien listo/a para tener una conversación difícil que la experiencia le mostró que es necesaria',
      'Alguien que quiere encontrar un círculo de integración o comunidad de práctica',
      'Alguien explorando cómo su experiencia puede servir a otros (mentoría, voluntariado, compartir)',
      'Alguien procesando la brecha entre quién es en sus relaciones y quién quiere ser',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// FRUIT — Values, Meaning, Committed Action
// ─────────────────────────────────────────────────────────────────────────────

const fruit: NodeDetail = {
  id: 'fruit',
  whyItMatters: {
    en: 'Insights without action are beautiful but inert. This is the central paradox of psychedelic integration: the experience can show you everything that needs to change, and then the next morning you wake up in the same bed, in the same apartment, with the same habits. The EMBARK framework calls this "keeping momentum." Tim Ferriss calls it the integration problem. ACT (Acceptance and Commitment Therapy) calls it the gap between values and behavior. FRUIT is where revelation becomes daily practice. It is the most masculine node in the network: it requires discipline, commitment, specificity, and accountability. Not "I want to be more present." Instead: "I will meditate for 20 minutes every morning before checking my phone, starting tomorrow, and I will tell my partner so they can hold me accountable." The difference between insight and transformation is a verb.',
    es: 'Las percepciones sin acción son hermosas pero inertes. Esta es la paradoja central de la integración psicodélica: la experiencia puede mostrarte todo lo que necesita cambiar, y luego a la mañana siguiente te despiertas en la misma cama, en el mismo departamento, con los mismos hábitos. El marco EMBARK lo llama "mantener el impulso." Tim Ferriss lo llama el problema de la integración. ACT (Terapia de Aceptación y Compromiso) lo llama la brecha entre valores y comportamiento. FRUTO es donde la revelación se convierte en práctica diaria. Es el nodo más masculino de la red: requiere disciplina, compromiso, especificidad y rendición de cuentas. No "quiero ser más presente." Sino: "Meditaré 20 minutos cada mañana antes de revisar mi teléfono, empezando mañana, y le diré a mi pareja para que me sostenga en la rendición de cuentas." La diferencia entre percepción y transformación es un verbo.',
  },
  researchBacking: {
    en: 'Watts and Luoma\'s ACE (Accept, Connect, Embody) model (2020) identifies "embody" as the critical bridge between psychedelic insight and lasting change, emphasizing values clarification and committed action. ACT\'s psychological flexibility model provides the theoretical framework: the goal is not rigid adherence to rules but the ability to flexibly pursue what matters even when it is uncomfortable. The EMBARK framework\'s "keeping momentum" domain directly addresses the challenge of maintaining psychedelic insights over time. Ferriss emphasizes a practical rule: make no major life decisions for at least 2 weeks after a psychedelic experience. This protects against impulsive action while the integration process unfolds. The insight is real, but the timing of action matters. Campbell\'s "return with the elixir" provides the mythological framework: the journey is incomplete until the gift is embodied in daily life and shared with the community.',
    es: 'El modelo ACE (Aceptar, Conectar, Encarnar) de Watts y Luoma (2020) identifica "encarnar" como el puente crítico entre la percepción psicodélica y el cambio duradero, enfatizando la clarificación de valores y la acción comprometida. El modelo de flexibilidad psicológica de ACT proporciona el marco teórico: el objetivo no es la adherencia rígida a reglas sino la capacidad de perseguir flexiblemente lo que importa incluso cuando es incómodo. El dominio de "mantener el impulso" de EMBARK aborda directamente el desafío de mantener las percepciones psicodélicas a lo largo del tiempo. Ferriss enfatiza una regla práctica: no tomes decisiones importantes de vida durante al menos 2 semanas después de una experiencia psicodélica. Esto protege contra la acción impulsiva mientras el proceso de integración se desarrolla. La percepción es real, pero el momento de la acción importa. El "retorno con el elixir" de Campbell proporciona el marco mitológico: el viaje está incompleto hasta que el regalo se encarna en la vida diaria y se comparte con la comunidad.',
  },
  processLayer: {
    receive: {
      en: 'Collect the insights without acting on them immediately. What did the experience show you about your values? What felt misaligned? What felt true? Write these down. Hold them loosely. Ferriss is right: no major decisions for 2 weeks. The insights are real, but your capacity to evaluate their implications needs time to stabilize. Receive first. Act later.',
      es: 'Recoge las percepciones sin actuar sobre ellas inmediatamente. ¿Qué te mostró la experiencia sobre tus valores? ¿Qué se sintió desalineado? ¿Qué se sintió verdadero? Escríbelo. Sostenlo suavemente. Ferriss tiene razón: ninguna decisión importante durante 2 semanas. Las percepciones son reales, pero tu capacidad para evaluar sus implicaciones necesita tiempo para estabilizarse. Recibe primero. Actúa después.',
    },
    recognize: {
      en: 'Identify the 2 to 3 most important insights. Not 20. What are the core misalignments between your stated values and your daily behavior? Where is the gap widest? Which changes would create the most meaningful shift? Be specific. "I value creativity but spend zero hours per week creating" is more useful than "I need to be more creative."',
      es: 'Identifica las 2 a 3 percepciones más importantes. No 20. ¿Cuáles son las desalineaciones centrales entre tus valores declarados y tu comportamiento diario? ¿Dónde es la brecha más ancha? ¿Qué cambios crearían el desplazamiento más significativo? Sé específico/a. "Valoro la creatividad pero paso cero horas por semana creando" es más útil que "necesito ser más creativo/a."',
    },
    return: {
      en: 'Make behavioral commitments: "I will [specific action] by [specific date]." Tell someone. Build accountability. Start small. The person who commits to meditating 5 minutes a day and actually does it is further along than the person who commits to an hour and quits after three days. Weekly values audit: "Am I living closer to my values this week than last?" Adjust. Repeat. This is not a one-time event. It is an ongoing practice.',
      es: 'Haz compromisos de comportamiento: "Haré [acción específica] para [fecha específica]." Díselo a alguien. Construye rendición de cuentas. Empieza pequeño. La persona que se compromete a meditar 5 minutos al día y realmente lo hace está más adelante que la persona que se compromete a una hora y abandona a los tres días. Auditoría semanal de valores: "¿Estoy viviendo más cerca de mis valores esta semana que la semana pasada?" Ajusta. Repite. Esto no es un evento único. Es una práctica continua.',
    },
  },
  practices: [
    {
      name: { en: 'Values Inventory', es: 'Inventario de valores' },
      description: {
        en: 'Write your top 5 values without filtering or performing for anyone. Not what you think you should value. What you actually value. Health? Freedom? Creativity? Connection? Security? Adventure? Truth? Then look at your calendar and bank statements from the last month. Where does your time and money actually go? The gap between your list and your behavior is the territory FRUIT works with.',
        es: 'Escribe tus 5 valores principales sin filtrar ni actuar para nadie. No lo que crees que deberías valorar. Lo que realmente valoras. ¿Salud? ¿Libertad? ¿Creatividad? ¿Conexión? ¿Seguridad? ¿Aventura? ¿Verdad? Luego mira tu calendario y estados de cuenta del último mes. ¿A dónde va realmente tu tiempo y dinero? La brecha entre tu lista y tu comportamiento es el territorio con el que FRUTO trabaja.',
      },
      source: 'ACT values exercises',
    },
    {
      name: { en: 'Misalignment Scan', es: 'Escaneo de desalineación' },
      description: {
        en: 'For each of your top values, rate on a scale of 1 to 10: how closely does your daily life reflect this value? A 3 in "health" when you say health is your top value is information. Not judgment. Information. The scan reveals where the work is. Start with the widest gap.',
        es: 'Para cada uno de tus valores principales, califica en una escala de 1 a 10: ¿qué tan de cerca refleja tu vida diaria este valor? Un 3 en "salud" cuando dices que la salud es tu valor principal es información. No juicio. Información. El escaneo revela dónde está el trabajo. Empieza con la brecha más ancha.',
      },
    },
    {
      name: { en: 'Behavioral Commitments', es: 'Compromisos de comportamiento' },
      description: {
        en: 'Choose 2 to 3 specific, measurable, time-bound actions that align your behavior with your values. "I will meditate for 10 minutes each morning before checking my phone." "I will eat dinner with my family 4 nights per week without screens." "I will spend 2 hours every Saturday creating." Tell someone. Accountability transforms intention into action.',
        es: 'Elige 2 a 3 acciones específicas, medibles y con plazo que alineen tu comportamiento con tus valores. "Meditaré 10 minutos cada mañana antes de revisar mi teléfono." "Cenaré con mi familia 4 noches por semana sin pantallas." "Dedicaré 2 horas cada sábado a crear." Díselo a alguien. La rendición de cuentas transforma la intención en acción.',
      },
      source: 'ACT committed action',
    },
    {
      name: { en: 'Weekly Values Audit', es: 'Auditoría semanal de valores' },
      description: {
        en: 'Every Sunday (or whatever day works), spend 15 minutes with your journal. Review the week: "Did I live closer to my values this week than last?" What got in the way? What supported me? What needs to adjust? This is not self-punishment. It is self-awareness. The audit is the practice that keeps FRUIT alive over months and years, long after the experience fades.',
        es: 'Cada domingo (o el día que funcione), dedica 15 minutos con tu diario. Revisa la semana: "¿Viví más cerca de mis valores esta semana que la semana pasada?" ¿Qué se interpuso? ¿Qué me apoyó? ¿Qué necesita ajustarse? Esto no es autocastigo. Es autoconciencia. La auditoría es la práctica que mantiene vivo a FRUTO durante meses y años, mucho después de que la experiencia se desvanece.',
      },
    },
    {
      name: { en: 'Small Changes First', es: 'Cambios pequeños primero' },
      description: {
        en: 'Do not quit your job on day 3. Do not end your relationship in the first week. Do not sell everything and move to a cabin. Start with the smallest meaningful change and build from there. The impulse toward radical change is real and often contains truth, but the timing matters. Let the insight settle. Let the plasticity window close. Then act from clarity, not from the residual intensity of the experience.',
        es: 'No renuncies a tu trabajo en el día 3. No termines tu relación en la primera semana. No vendas todo y te mudes a una cabaña. Empieza con el cambio significativo más pequeño y construye desde ahí. El impulso hacia el cambio radical es real y a menudo contiene verdad, pero el momento importa. Deja que la percepción se asiente. Deja que la ventana de plasticidad se cierre. Luego actúa desde la claridad, no desde la intensidad residual de la experiencia.',
      },
      source: 'Ferriss: "no major decisions for 2+ weeks"',
    },
    {
      name: { en: 'Accountability Partners', es: 'Compañeros de rendición de cuentas' },
      description: {
        en: 'Share your behavioral commitments with 1 to 2 people who will check in on you. Not to judge. To witness. "I told you I would meditate every morning. Here is how this week went." Accountability is not surveillance. It is the relational container that holds your commitment when willpower falters.',
        es: 'Comparte tus compromisos de comportamiento con 1 a 2 personas que harán seguimiento contigo. No para juzgar. Para presenciar. "Te dije que meditaría cada mañana. Así me fue esta semana." La rendición de cuentas no es vigilancia. Es el contenedor relacional que sostiene tu compromiso cuando la voluntad flaquea.',
      },
    },
  ],
  connections: [
    {
      toNode: 'ground',
      description: {
        en: 'Values drive daily habits. When FRUIT identifies a value like "health" or "vitality," GROUND is where it becomes real: sleep schedule, nutrition, exercise, breathwork. The most concrete expression of any value is a daily physical practice. FRUIT sets the direction. GROUND walks it.',
        es: 'Los valores impulsan los hábitos diarios. Cuando FRUTO identifica un valor como "salud" o "vitalidad," TIERRA es donde se hace real: horario de sueño, nutrición, ejercicio, respiración. La expresión más concreta de cualquier valor es una práctica física diaria. FRUTO establece la dirección. TIERRA la camina.',
      },
    },
    {
      toNode: 'weave',
      description: {
        en: 'Values express through service. FRUIT clarifies what matters. WEAVE is how you offer it to others. A person who values connection and keeps it private has completed half the work. The return with the elixir (Campbell) requires that values become visible in how you show up for your community.',
        es: 'Los valores se expresan a través del servicio. FRUTO clarifica lo que importa. TEJIDO es cómo lo ofreces a otros. Una persona que valora la conexión y la mantiene privada ha completado la mitad del trabajo. El retorno con el elixir (Campbell) requiere que los valores se hagan visibles en cómo te presentas para tu comunidad.',
      },
    },
    {
      toNode: 'canopy',
      description: {
        en: 'Meaning anchors transcendent experience. Without FRUIT, mystical experiences float unmoored: beautiful, profound, and disconnected from daily life. FRUIT gives CANOPY experiences a place to land. "I experienced unity with all beings" is a CANOPY insight. "I will treat every person I meet today as if they are sacred" is FRUIT turning that insight into action.',
        es: 'El significado ancla la experiencia trascendente. Sin FRUTO, las experiencias místicas flotan sin ancla: hermosas, profundas y desconectadas de la vida diaria. FRUTO le da a las experiencias de DOSEL un lugar donde aterrizar. "Experimenté unidad con todos los seres" es una percepción de DOSEL. "Trataré a cada persona que encuentre hoy como si fuera sagrada" es FRUTO convirtiendo esa percepción en acción.',
      },
    },
    {
      toNode: 'spore',
      description: {
        en: 'Authentic values require honest self-examination. FRUIT without SPORE risks building commitments on values that are inherited, performed, or defensive rather than genuinely held. "I should value hard work" might be a cultural program, not a personal truth. SPORE strips the conditioning. FRUIT builds on what remains.',
        es: 'Los valores auténticos requieren autoexaminación honesta. FRUTO sin ESPORA corre el riesgo de construir compromisos sobre valores heredados, actuados o defensivos en vez de genuinamente sostenidos. "Debería valorar el trabajo duro" podría ser un programa cultural, no una verdad personal. ESPORA despoja el condicionamiento. FRUTO construye sobre lo que queda.',
      },
    },
    {
      toNode: 'roots',
      description: {
        en: 'Values often realign toward simplicity and nature after psychedelic experiences. FRUIT frequently leads people back to ROOTS: less consumption, more time outdoors, slower pace, ecological awareness. When your values shift, your relationship with the natural world often shifts with them.',
        es: 'Los valores a menudo se realinean hacia la simplicidad y la naturaleza después de experiencias psicodélicas. FRUTO frecuentemente lleva a las personas de vuelta a RAÍCES: menos consumo, más tiempo al aire libre, ritmo más lento, conciencia ecológica. Cuando tus valores cambian, tu relación con el mundo natural a menudo cambia con ellos.',
      },
    },
  ],
  warningSignsOfNeglect: {
    en: [
      'Making major life decisions too quickly after the experience (Ferriss: no major decisions for 2+ weeks)',
      'All insight, no action: journaling without changing behavior',
      '"Knowing" without "doing": understanding what needs to change but not changing it',
      'Letting insights fade without anchoring them in specific behavioral commitments',
      'Returning to the pre-experience lifestyle completely within a few weeks',
      'Grand plans without small first steps: "I will transform my entire life" without one concrete action',
      'Abandoning commitments after the initial motivation fades (the 3-week cliff)',
      'Using insight as an identity rather than a practice ("I am someone who had a profound experience" vs. "I am someone who lives differently because of it")',
    ],
    es: [
      'Tomar decisiones importantes de vida demasiado rápido después de la experiencia (Ferriss: ninguna decisión importante por 2+ semanas)',
      'Toda percepción, ninguna acción: escribir en el diario sin cambiar comportamiento',
      '"Saber" sin "hacer": entender lo que necesita cambiar pero no cambiarlo',
      'Dejar que las percepciones se desvanezcan sin anclarlas en compromisos de comportamiento específicos',
      'Regresar al estilo de vida pre-experiencia completamente en pocas semanas',
      'Grandes planes sin primeros pasos pequeños: "Transformaré toda mi vida" sin una acción concreta',
      'Abandonar compromisos después de que la motivación inicial se desvanece (el acantilado de las 3 semanas)',
      'Usar la percepción como identidad en vez de práctica ("Soy alguien que tuvo una experiencia profunda" vs. "Soy alguien que vive diferente por ella")',
    ],
  },
  useCases: {
    en: [
      'Someone with clear insights from their experience but no behavioral change yet',
      'Someone struggling with the gap between what their experience showed them and how they currently live',
      'Someone ready to commit to specific changes but unsure where to start',
      'Someone who has had multiple psychedelic experiences with similar insights but has not integrated them into action',
      'Someone who made impulsive decisions after a previous experience and wants a more structured approach this time',
      'Someone whose initial integration momentum has faded and who needs to reconnect with their commitments',
    ],
    es: [
      'Alguien con percepciones claras de su experiencia pero sin cambio de comportamiento aún',
      'Alguien que lucha con la brecha entre lo que su experiencia le mostró y cómo vive actualmente',
      'Alguien listo/a para comprometerse a cambios específicos pero inseguro/a de por dónde empezar',
      'Alguien que ha tenido múltiples experiencias psicodélicas con percepciones similares pero no las ha integrado en acción',
      'Alguien que tomó decisiones impulsivas después de una experiencia previa y quiere un enfoque más estructurado esta vez',
      'Alguien cuyo impulso inicial de integración se ha desvanecido y necesita reconectarse con sus compromisos',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// CANOPY — Existential, Transcendent, Sacred
// ─────────────────────────────────────────────────────────────────────────────

const canopy: NodeDetail = {
  id: 'canopy',
  whyItMatters: {
    en: 'Mystical experience scores predict long-term positive outcomes. This is one of the most robust findings in psychedelic research. Griffiths and colleagues at Johns Hopkins demonstrated that the quality of the mystical experience (measured by the MEQ-30: unity, sacredness, noetic quality, transcendence of time and space, ineffability) directly predicts therapeutic benefit months and years later. The transcendent dimension of the experience MATTERS. It is not a side effect of neurochemistry. It is the core of the medicine. But processing ego dissolution, encounters with death, infinity, and the numinous requires its own framework. Psychological processing (SPORE) is necessary but not sufficient. The person who experienced cosmic unity needs more than CBT worksheets. They need philosophical engagement, contemplative practice, community that can hold the ineffable, and the patience to let meaning unfold over time. Kornfield captured it perfectly: "After the ecstasy, the laundry." The transcendent experience must eventually meet daily life. CANOPY is where you learn to hold both.',
    es: 'Las puntuaciones de experiencia mística predicen resultados positivos a largo plazo. Este es uno de los hallazgos más robustos en la investigación psicodélica. Griffiths y colegas en Johns Hopkins demostraron que la calidad de la experiencia mística (medida por el MEQ-30: unidad, sacralidad, cualidad noética, trascendencia del tiempo y espacio, inefabilidad) predice directamente el beneficio terapéutico meses y años después. La dimensión trascendente de la experiencia IMPORTA. No es un efecto secundario de la neuroquímica. Es el corazón de la medicina. Pero procesar la disolución del ego, los encuentros con la muerte, el infinito y lo numinoso requiere su propio marco. El procesamiento psicológico (ESPORA) es necesario pero no suficiente. La persona que experimentó unidad cósmica necesita más que hojas de trabajo de TCC. Necesita compromiso filosófico, práctica contemplativa, comunidad que pueda sostener lo inefable, y la paciencia para dejar que el sentido se despliegue con el tiempo. Kornfield lo capturó perfectamente: "Después del éxtasis, la ropa sucia." La experiencia trascendente debe eventualmente encontrarse con la vida diaria. DOSEL es donde aprendes a sostener ambos.',
  },
  researchBacking: {
    en: 'Griffiths\' Mystical Experience Questionnaire (MEQ-30) is the gold standard for measuring the quality of transcendent psychedelic experiences. Multiple studies have confirmed that higher MEQ-30 scores predict better therapeutic outcomes for depression, anxiety, addiction, and existential distress. Kornfield\'s decades of teaching on integrating meditation and peak experiences into daily life provide the practical framework: the insight is not the finish line, it is the starting gun. Sam Harris\'s work on non-dual awareness offers a secular framework for understanding ego dissolution and the nature of consciousness without requiring religious belief. Keltner\'s research on awe demonstrates that experiences of vastness (a core component of mystical experience) produce measurable shifts in self-concept, time perception, and prosocial behavior. Buddhist maranasati (death meditation) and the broader contemplative tradition provide time-tested practices for working with mortality, impermanence, and the nature of consciousness that psychedelic experiences often reveal.',
    es: 'El Cuestionario de Experiencia Mística (MEQ-30) de Griffiths es el estándar de oro para medir la calidad de las experiencias psicodélicas trascendentes. Múltiples estudios han confirmado que puntuaciones más altas en el MEQ-30 predicen mejores resultados terapéuticos para depresión, ansiedad, adicción y malestar existencial. Las décadas de enseñanza de Kornfield sobre integrar la meditación y las experiencias cumbre en la vida diaria proporcionan el marco práctico: la percepción no es la meta, es el disparo de salida. El trabajo de Sam Harris sobre la conciencia no-dual ofrece un marco secular para entender la disolución del ego y la naturaleza de la conciencia sin requerir creencia religiosa. La investigación de Keltner sobre el asombro demuestra que las experiencias de vastedad (un componente central de la experiencia mística) producen cambios medibles en el autoconcepto, la percepción del tiempo y el comportamiento prosocial. La maranasati budista (meditación sobre la muerte) y la tradición contemplativa más amplia proveen prácticas probadas por el tiempo para trabajar con la mortalidad, la impermanencia y la naturaleza de la conciencia que las experiencias psicodélicas a menudo revelan.',
  },
  processLayer: {
    receive: {
      en: 'Sit with awe. You may have experienced something that defies language. That is expected. The MEQ-30 includes "ineffability" as a defining quality of mystical experience. Not everything needs to be named, analyzed, or understood immediately. Let the experience be vast. Let it be mysterious. Do not rush to capture it in a framework or reduce it to a lesson. The ineffable is its own teacher. Be patient with meaning. It unfolds on its own timeline.',
      es: 'Siéntate con el asombro. Puede que hayas experimentado algo que desafía el lenguaje. Eso es esperado. El MEQ-30 incluye "inefabilidad" como cualidad definitoria de la experiencia mística. No todo necesita ser nombrado, analizado o entendido inmediatamente. Deja que la experiencia sea vasta. Deja que sea misteriosa. No te apresures a capturarla en un marco o reducirla a una lección. Lo inefable es su propio maestro. Ten paciencia con el sentido. Se despliega en su propio tiempo.',
    },
    recognize: {
      en: 'Begin to explore what the experience means without forcing an answer. What traditions resonate with what you experienced? What philosophical frameworks speak to the quality of the encounter? Did you experience unity? Ego dissolution? An encounter with death? The sacred? Name the quality without reducing it. Read. Discuss. Explore. Let the resonance guide you rather than force-fitting the experience into a pre-existing belief system.',
      es: 'Empieza a explorar lo que la experiencia significa sin forzar una respuesta. ¿Qué tradiciones resuenan con lo que experimentaste? ¿Qué marcos filosóficos hablan a la cualidad del encuentro? ¿Experimentaste unidad? ¿Disolución del ego? ¿Un encuentro con la muerte? ¿Lo sagrado? Nombra la cualidad sin reducirla. Lee. Discute. Explora. Deja que la resonancia te guíe en vez de forzar la experiencia dentro de un sistema de creencias preexistente.',
    },
    return: {
      en: 'Bring the transcendent into the mundane. This is the hardest work in the network. "After the ecstasy, the laundry." How do you live in a way that honors what you experienced? Not by chasing the next peak experience. Not by building a spiritual identity. But by deepening a daily practice that keeps the door open: meditation, contemplation, presence, service. The mystic who washes dishes with full attention is further along than the seeker who chases another ceremony.',
      es: 'Trae lo trascendente a lo mundano. Este es el trabajo más difícil de la red. "Después del éxtasis, la ropa sucia." ¿Cómo vives de una manera que honre lo que experimentaste? No persiguiendo la próxima experiencia cumbre. No construyendo una identidad espiritual. Sino profundizando una práctica diaria que mantenga la puerta abierta: meditación, contemplación, presencia, servicio. El místico que lava platos con atención plena está más avanzado que el buscador que persigue otra ceremonia.',
    },
  },
  practices: [
    {
      name: { en: 'Contemplative Practice Continuity', es: 'Continuidad de la práctica contemplativa' },
      description: {
        en: 'The practice that connected you to something larger before the experience IS the integration practice. Do not stop. Deepen. If you meditate, meditate more. If you pray, pray more. If you sit in silence, sit longer. The psychedelic experience opened a door. Contemplative practice keeps it from closing. Consistency matters more than intensity.',
        es: 'La práctica que te conectó con algo más grande antes de la experiencia ES la práctica de integración. No pares. Profundiza. Si meditas, medita más. Si rezas, reza más. Si te sientas en silencio, siéntate más tiempo. La experiencia psicodélica abrió una puerta. La práctica contemplativa evita que se cierre. La consistencia importa más que la intensidad.',
      },
      source: 'Kornfield',
    },
    {
      name: { en: 'Sitting with Awe', es: 'Sentarse con el asombro' },
      description: {
        en: 'Deliberately seek and sit with experiences of awe. Stars at night. A massive tree. The ocean. A storm. Awe is not a one-time event. It is an ongoing practice. Keltner\'s research shows that regular awe experiences produce lasting shifts in self-concept, reducing the prominence of the "small self" and increasing connection to something larger. Let awe be a daily practice, not a peak experience to chase.',
        es: 'Busca deliberadamente y siéntate con experiencias de asombro. Estrellas en la noche. Un árbol masivo. El océano. Una tormenta. El asombro no es un evento único. Es una práctica continua. La investigación de Keltner muestra que las experiencias regulares de asombro producen cambios duraderos en el autoconcepto, reduciendo la prominencia del "yo pequeño" y aumentando la conexión con algo más grande. Deja que el asombro sea una práctica diaria, no una experiencia cumbre que perseguir.',
      },
      source: 'Keltner, Awe (2023)',
    },
    {
      name: { en: 'Death Meditation (Maranasati)', es: 'Meditación sobre la muerte (Maranasati)' },
      description: {
        en: 'If the experience involved death (ego death, encounters with mortality, dissolution of self), sit with what death showed you. Buddhist maranasati practice contemplates impermanence directly: "I am of the nature to age. I am of the nature to be ill. I am of the nature to die." This is not morbid. It is clarifying. Many people report that ego death during psychedelic experiences transformed their relationship with mortality. Maranasati keeps that transformation alive.',
        es: 'Si la experiencia involucró la muerte (muerte del ego, encuentros con la mortalidad, disolución del yo), siéntate con lo que la muerte te mostró. La práctica budista de maranasati contempla la impermanencia directamente: "Soy de la naturaleza de envejecer. Soy de la naturaleza de enfermar. Soy de la naturaleza de morir." Esto no es mórbido. Es clarificador. Muchas personas reportan que la muerte del ego durante experiencias psicodélicas transformó su relación con la mortalidad. La maranasati mantiene viva esa transformación.',
      },
      source: 'Buddhist contemplative tradition',
    },
    {
      name: { en: 'Philosophical Engagement', es: 'Compromiso filosófico' },
      description: {
        en: 'Read, discuss, and explore perspectives that speak to your experience. Do not force-fit your experience into a single tradition. Let the resonance guide you. Some people find Buddhism illuminating. Others find Sufism, Kabbalah, Advaita Vedanta, process philosophy, or scientific cosmology. The traditions are maps, not territories. Your experience is the territory. Find the maps that help you navigate it.',
        es: 'Lee, discute y explora perspectivas que hablen a tu experiencia. No fuerces tu experiencia dentro de una sola tradición. Deja que la resonancia te guíe. Algunas personas encuentran el budismo iluminador. Otras encuentran el sufismo, la Cábala, el Advaita Vedanta, la filosofía de proceso o la cosmología científica. Las tradiciones son mapas, no territorios. Tu experiencia es el territorio. Encuentra los mapas que te ayuden a navegarlo.',
      },
    },
    {
      name: { en: 'Meaning-Making Without Forcing', es: 'Construcción de sentido sin forzar' },
      description: {
        en: 'What does the experience mean? Sit with this question. Do not rush to answer. Meaning may unfold over weeks, months, or years. Some aspects of the experience may never resolve into clear meaning, and that is acceptable. The ineffable has its own value. Forcing premature meaning onto a transcendent experience can actually reduce its transformative potential. Trust the process.',
        es: '¿Qué significa la experiencia? Siéntate con esta pregunta. No te apresures a responder. El significado puede desplegarse durante semanas, meses o años. Algunos aspectos de la experiencia pueden nunca resolverse en un significado claro, y eso es aceptable. Lo inefable tiene su propio valor. Forzar significado prematuro sobre una experiencia trascendente puede realmente reducir su potencial transformador. Confía en el proceso.',
      },
      source: 'JHU integration protocol',
    },
    {
      name: { en: 'Surrender Practice', es: 'Práctica de rendición' },
      description: {
        en: 'Practice letting go of control in small, safe ways. Cold water exposure. Improvisational movement. Saying "I don\'t know" when you usually have an answer. Surrender is the core skill of mystical experience. It does not end when the session ends. Building a daily relationship with not-knowing, not-controlling, and not-grasping is how CANOPY insights stabilize.',
        es: 'Practica soltar el control de formas pequeñas y seguras. Exposición al agua fría. Movimiento improvisado. Decir "no sé" cuando usualmente tienes una respuesta. La rendición es la habilidad central de la experiencia mística. No termina cuando la sesión termina. Construir una relación diaria con el no-saber, el no-controlar y el no-aferrarse es cómo las percepciones de DOSEL se estabilizan.',
      },
    },
  ],
  connections: [
    {
      toNode: 'ground',
      description: {
        en: 'Transcendence needs grounding. Ego dissolution without body awareness can become dissociation rather than liberation. The person floating in cosmic consciousness needs the body to land in. GROUND provides the container that makes CANOPY experiences safe rather than destabilizing. "After the ecstasy, the laundry" begins with the body: eat, sleep, walk, breathe.',
        es: 'La trascendencia necesita enraizamiento. La disolución del ego sin conciencia corporal puede convertirse en disociación en vez de liberación. La persona flotando en conciencia cósmica necesita el cuerpo para aterrizar. TIERRA provee el contenedor que hace las experiencias de DOSEL seguras en vez de desestabilizadoras. "Después del éxtasis, la ropa sucia" empieza con el cuerpo: comer, dormir, caminar, respirar.',
      },
    },
    {
      toNode: 'spore',
      description: {
        en: 'Mystical experience illuminates the inner landscape. Ego dissolution does not just reveal the cosmos. It reveals the self that was doing the grasping. CANOPY and SPORE often activate together during psychedelic experiences: the dissolution of self-boundaries reveals both the transcendent and the shadow simultaneously. CANOPY without SPORE risks spiritual bypassing. SPORE without CANOPY risks missing the larger context.',
        es: 'La experiencia mística ilumina el paisaje interior. La disolución del ego no solo revela el cosmos. Revela al yo que estaba aferrándose. DOSEL y ESPORA a menudo se activan juntos durante experiencias psicodélicas: la disolución de los límites del yo revela tanto lo trascendente como la sombra simultáneamente. DOSEL sin ESPORA corre el riesgo de bypass espiritual. ESPORA sin DOSEL corre el riesgo de perder el contexto más amplio.',
      },
    },
    {
      toNode: 'roots',
      description: {
        en: 'Awe in nature mirrors cosmic awe. The wonder you felt at the vastness of consciousness during the experience is the same wonder available at the base of an ancient tree, at the edge of the ocean, in the presence of a thunderstorm. CANOPY and ROOTS share the quality of awe. Nature is the most accessible doorway to ongoing encounters with the numinous.',
        es: 'El asombro en la naturaleza refleja el asombro cósmico. La admiración que sentiste ante la vastedad de la conciencia durante la experiencia es la misma admiración disponible al pie de un árbol ancestral, al borde del océano, en presencia de una tormenta eléctrica. DOSEL y RAÍCES comparten la cualidad del asombro. La naturaleza es la puerta más accesible hacia encuentros continuos con lo numinoso.',
      },
    },
    {
      toNode: 'fruit',
      description: {
        en: 'Transcendent experience demands embodied response. "I experienced the unity of all things" is CANOPY. "Therefore I will live in a way that honors that unity" is FRUIT. Without FRUIT, CANOPY insights remain in the realm of experience rather than becoming the foundation of a transformed life. The mystic must descend from the mountain.',
        es: 'La experiencia trascendente demanda respuesta encarnada. "Experimenté la unidad de todas las cosas" es DOSEL. "Por lo tanto viviré de una manera que honre esa unidad" es FRUTO. Sin FRUTO, las percepciones de DOSEL permanecen en el reino de la experiencia en vez de convertirse en el cimiento de una vida transformada. El místico debe descender de la montaña.',
      },
    },
    {
      toNode: 'weave',
      description: {
        en: 'The transcendent needs community to hold it. Mystical experiences can be profoundly isolating when there is no one who understands. Integration circles, contemplative communities, and trusted relationships provide the relational container for experiences that language cannot fully capture. You do not need people who have had the same experience. You need people who can sit with mystery.',
        es: 'Lo trascendente necesita comunidad para sostenerlo. Las experiencias místicas pueden ser profundamente aislantes cuando no hay nadie que comprenda. Los círculos de integración, las comunidades contemplativas y las relaciones de confianza proveen el contenedor relacional para experiencias que el lenguaje no puede capturar completamente. No necesitas personas que hayan tenido la misma experiencia. Necesitas personas que puedan sentarse con el misterio.',
      },
    },
  ],
  warningSignsOfNeglect: {
    en: [
      'Spiritual materialism: collecting transcendent experiences as achievements or identity markers',
      'Chasing peak experiences: seeking another ceremony before integrating the last one',
      'Avoiding the mundane: using spiritual language to avoid household responsibilities, relationships, or work',
      'Inability to function in daily life because "nothing matters" after ego dissolution',
      'Using spiritual language to avoid psychological work ("it is all one" as a bypass for unprocessed grief)',
      'Building a spiritual identity rather than deepening a practice',
      'Isolating from "ordinary" people because they "would not understand"',
      'Forcing meaning onto the experience prematurely or adopting a belief system wholesale without critical examination',
    ],
    es: [
      'Materialismo espiritual: coleccionar experiencias trascendentes como logros o marcadores de identidad',
      'Perseguir experiencias cumbre: buscar otra ceremonia antes de integrar la última',
      'Evitar lo mundano: usar lenguaje espiritual para evitar responsabilidades del hogar, relaciones o trabajo',
      'Incapacidad de funcionar en la vida diaria porque "nada importa" después de la disolución del ego',
      'Usar lenguaje espiritual para evitar trabajo psicológico ("todo es uno" como bypass para duelo no procesado)',
      'Construir una identidad espiritual en vez de profundizar una práctica',
      'Aislarse de personas "ordinarias" porque "no entenderían"',
      'Forzar significado sobre la experiencia prematuramente o adoptar un sistema de creencias al por mayor sin examen crítico',
    ],
  },
  useCases: {
    en: [
      'Someone who had a mystical or ego-dissolution experience and needs support processing it',
      'Someone processing encounters with death, impermanence, or the dissolution of self',
      'Someone who experienced unity consciousness and wants to understand what happened and how to honor it',
      'Someone exploring the meaning of their experience without forcing it into a pre-existing framework',
      'Someone whose experience revealed something about the nature of consciousness that they cannot explain but cannot ignore',
      'Someone navigating the tension between transcendent experience and daily life ("after the ecstasy, the laundry")',
    ],
    es: [
      'Alguien que tuvo una experiencia mística o de disolución del ego y necesita apoyo para procesarla',
      'Alguien procesando encuentros con la muerte, la impermanencia o la disolución del yo',
      'Alguien que experimentó conciencia de unidad y quiere entender qué pasó y cómo honrarlo',
      'Alguien explorando el significado de su experiencia sin forzarla dentro de un marco preexistente',
      'Alguien cuya experiencia reveló algo sobre la naturaleza de la conciencia que no puede explicar pero no puede ignorar',
      'Alguien navegando la tensión entre la experiencia trascendente y la vida diaria ("después del éxtasis, la ropa sucia")',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const nodeDetails: Record<NodeId, NodeDetail> = {
  ground,
  roots,
  spore,
  weave,
  fruit,
  canopy,
}
