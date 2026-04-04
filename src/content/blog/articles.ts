export interface ArticleSection {
  heading: { en: string; es: string }
  body: { en: string; es: string }
}

export interface Article {
  slug: string
  content: { en: string; es: string }
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: 'what-is-psychedelic-integration',
    content: {
      en: 'A comprehensive guide to psychedelic integration: what it means, why it matters more than the experience itself, and how the Mycelial Network framework provides structure for the work.',
      es: 'Una guia completa sobre la integracion psicodelica: que significa, por que importa mas que la experiencia misma, y como el marco de la Red Micelial proporciona estructura para el trabajo.',
    },
    sections: [
      {
        heading: {
          en: 'Integration is not what most people think it is',
          es: 'La integracion no es lo que la mayoria piensa',
        },
        body: {
          en: `Most people who seek out a psychedelic experience spend weeks, sometimes months, preparing for the journey itself. They research substances, choose facilitators, set intentions, arrange logistics. Then the experience happens. It is profound, terrifying, beautiful, confusing, or all of those things at once. And then they go home.

What happens next is where the real work begins. And it is precisely the part that most people skip.

Psychedelic integration is the process of making sense of, and making use of, what a psychedelic experience revealed. It is not journaling once and calling it done. It is not telling the story at a dinner party. It is not waiting passively for "the medicine to keep working." Integration is an active, sustained, often uncomfortable process of translating insight into lasting change.

The distinction matters because the psychedelic experience itself, however powerful, is not the transformation. The experience is a catalyst. It opens a window. Integration is what you build while that window is open.`,
          es: `La mayoria de las personas que buscan una experiencia psicodelica pasan semanas, a veces meses, preparandose para el viaje en si. Investigan sustancias, eligen facilitadores, establecen intenciones, organizan la logistica. Luego la experiencia sucede. Es profunda, aterradora, hermosa, confusa, o todas esas cosas a la vez. Y luego vuelven a casa.

Lo que sucede despues es donde comienza el verdadero trabajo. Y es precisamente la parte que la mayoria de las personas se saltan.

La integracion psicodelica es el proceso de dar sentido y hacer uso de lo que una experiencia psicodelica revelo. No es escribir un diario una vez y darlo por hecho. No es contar la historia en una cena. No es esperar pasivamente a que "la medicina siga trabajando." La integracion es un proceso activo, sostenido y frecuentemente incomodo de traducir la percepcion en cambio duradero.

La distincion importa porque la experiencia psicodelica en si, por poderosa que sea, no es la transformacion. La experiencia es un catalizador. Abre una ventana. La integracion es lo que construyes mientras esa ventana esta abierta.`,
        },
      },
      {
        heading: {
          en: 'The 80/20 rule of psychedelic work',
          es: 'La regla 80/20 del trabajo psicodelico',
        },
        body: {
          en: `There is a pattern among experienced practitioners, therapists, and researchers that points to a rough ratio: the psychedelic experience itself accounts for about 20% of the therapeutic outcome. The remaining 80% comes from what happens before and after.

This is not a precise measurement. It comes from clinical observation and the accumulated wisdom of practitioners like Françoise Bourzat, who has guided over 3,000 sessions, and researchers like Rosalind Watts at Imperial College London. Watts, who led the landmark psilocybin for depression trial, became so concerned about the neglect of integration that she left clinical research to focus on it exclusively, developing the ACER model (Accept, Connect, Embody, Restore) specifically for post-psychedelic integration.

The research supports this framing. Bathje and colleagues (2022), in their comprehensive review published in the Journal of Humanistic Psychology, found that "the quality and duration of integration practices were more predictive of long-term outcomes than characteristics of the acute psychedelic experience itself." Participants who engaged in structured integration showed sustained benefits at 12-month follow-up. Those who did not showed significant regression toward baseline.

Watts and Luoma (2020), in their connectedness model published in Psychopharmacology, demonstrated that the lasting benefits of psilocybin therapy depended on whether participants could maintain the sense of connection (to self, others, and the world) that arose during the experience. Without active integration, that felt sense of connection faded within weeks.

The implication is clear: a powerful experience without integration is like surgery without rehabilitation. The procedure may be successful, but recovery depends on what comes after.`,
          es: `Hay un patron entre practicantes experimentados, terapeutas e investigadores que apunta a una proporcion aproximada: la experiencia psicodelica en si representa alrededor del 20% del resultado terapeutico. El 80% restante proviene de lo que sucede antes y despues.

Esta no es una medicion precisa. Proviene de la observacion clinica y la sabiduria acumulada de practicantes como Françoise Bourzat, quien ha guiado mas de 3,000 sesiones, e investigadores como Rosalind Watts en el Imperial College de Londres. Watts, quien lidero el estudio historico de psilocibina para la depresion, se preocupo tanto por el descuido de la integracion que dejo la investigacion clinica para enfocarse exclusivamente en ella, desarrollando el modelo ACER (Aceptar, Conectar, Encarnar, Restaurar) especificamente para la integracion post-psicodelica.

La investigacion respalda este enfoque. Bathje y colegas (2022), en su revision integral publicada en el Journal of Humanistic Psychology, encontraron que "la calidad y duracion de las practicas de integracion fueron mas predictivas de los resultados a largo plazo que las caracteristicas de la experiencia psicodelica aguda en si." Los participantes que realizaron integracion estructurada mostraron beneficios sostenidos en el seguimiento a 12 meses. Los que no lo hicieron mostraron una regresion significativa hacia la linea base.

Watts y Luoma (2020), en su modelo de conexion publicado en Psychopharmacology, demostraron que los beneficios duraderos de la terapia con psilocibina dependian de si los participantes podian mantener el sentido de conexion (consigo mismos, con otros y con el mundo) que surgio durante la experiencia. Sin integracion activa, esa sensacion de conexion se desvanecia en semanas.

La implicacion es clara: una experiencia poderosa sin integracion es como una cirugia sin rehabilitacion. El procedimiento puede ser exitoso, pero la recuperacion depende de lo que viene despues.`,
        },
      },
      {
        heading: {
          en: 'The Mycelial Network: six dimensions of integration',
          es: 'La Red Micelial: seis dimensiones de la integracion',
        },
        body: {
          en: `Integration is not a single activity. It is a network of practices that touch every dimension of life. The Mycelial Network framework organizes this complexity into six interconnected nodes, inspired by the way mycelial networks in forests connect trees, distribute nutrients, and communicate signals underground.

Ground addresses the body and nervous system. Psychedelic experiences are profoundly physical, and integration begins with the body: sleep quality, nutrition, exercise, breathwork, and somatic practices that help regulate a nervous system that may have been profoundly disrupted.

Roots connects you to the natural world. Many psychedelic experiences produce a vivid sense of ecological interconnection. Integration in this node means tending that relationship through time spent in nature, ecological awareness, and practices that honor the Earth.

Spore is the inner world: psychological insight, shadow material, parts work, and the sometimes painful process of integrating what the experience revealed about your unconscious patterns, defenses, and fears.

Weave addresses relationships and community. Psychedelic experiences can shift how you relate to others. Integration here involves honest communication, examining attachment patterns, finding peer support, and translating personal insight into service.

Fruit is about values and committed action. This is where insight meets behavior. What did the experience clarify about what matters to you? Integration in this node is the daily practice of aligning your life with what you now know to be true.

Canopy holds the existential and transcendent dimensions. Encounters with death, infinity, ego dissolution, and the sacred require their own kind of processing. Not every experience touches this node, but when it does, the integration work is among the most delicate and important.

These six nodes are not a checklist. They are a living system. Work in one area affects the others. A body practice (Ground) may unlock an emotional insight (Spore). A conversation with a friend (Weave) may clarify a value (Fruit). The framework provides structure without rigidity.`,
          es: `La integracion no es una sola actividad. Es una red de practicas que tocan cada dimension de la vida. El marco de la Red Micelial organiza esta complejidad en seis nodos interconectados, inspirados en la forma en que las redes miceliales en los bosques conectan arboles, distribuyen nutrientes y comunican senales bajo tierra.

Tierra aborda el cuerpo y el sistema nervioso. Las experiencias psicodelicas son profundamente fisicas, y la integracion comienza con el cuerpo: calidad del sueno, nutricion, ejercicio, respiracion y practicas somaticas que ayudan a regular un sistema nervioso que pudo haber sido profundamente alterado.

Raices te conecta con el mundo natural. Muchas experiencias psicodelicas producen un vivido sentido de interconexion ecologica. La integracion en este nodo significa cultivar esa relacion a traves del tiempo en la naturaleza, la conciencia ecologica y practicas que honran la Tierra.

Espora es el mundo interior: percepcion psicologica, material de sombra, trabajo de partes, y el proceso a veces doloroso de integrar lo que la experiencia revelo sobre tus patrones inconscientes, defensas y miedos.

Tejido aborda las relaciones y la comunidad. Las experiencias psicodelicas pueden cambiar como te relacionas con otros. La integracion aqui implica comunicacion honesta, examinar patrones de apego, encontrar apoyo entre pares y traducir la percepcion personal en servicio.

Fruto trata sobre valores y accion comprometida. Aqui es donde la percepcion se encuentra con el comportamiento. ¿Que clarifico la experiencia sobre lo que te importa? La integracion en este nodo es la practica diaria de alinear tu vida con lo que ahora sabes que es verdad.

Dosel sostiene las dimensiones existenciales y trascendentes. Encuentros con la muerte, el infinito, la disolucion del ego y lo sagrado requieren su propio tipo de procesamiento. No toda experiencia toca este nodo, pero cuando lo hace, el trabajo de integracion es de los mas delicados e importantes.

Estos seis nodos no son una lista de tareas. Son un sistema vivo. El trabajo en un area afecta a las demas. Una practica corporal (Tierra) puede desbloquear una percepcion emocional (Espora). Una conversacion con un amigo (Tejido) puede clarificar un valor (Fruto). El marco proporciona estructura sin rigidez.`,
        },
      },
      {
        heading: {
          en: 'Why integration matters: what the research shows',
          es: 'Por que importa la integracion: lo que muestra la investigacion',
        },
        body: {
          en: `The clinical evidence for integration is growing rapidly. Several key findings have emerged from recent research:

Duration of benefit depends on integration. The Johns Hopkins psilocybin studies (Griffiths et al., 2006, 2008, 2011) consistently found that participants who engaged in reflective practices after their sessions maintained positive changes for months and years. Those who did not engage in integration showed diminishing returns.

Integration reduces adverse outcomes. Gashi and colleagues (2021), in their survey of over 600 psychedelic users, found that structured integration support was the strongest protective factor against difficult post-experience adjustment. Participants without integration support were significantly more likely to report lasting psychological distress.

The neuroplasticity window is temporary. Psilocybin promotes neuroplasticity, the brain's ability to form new neural connections, for a period of days to weeks after the experience (Ly et al., 2018; Shao et al., 2021). This window of enhanced plasticity is when new patterns of thought and behavior are most easily established. Integration practices during this window have an outsized effect on long-term outcomes.

Community integration outperforms solo integration. Watts and colleagues found that group integration circles produced better outcomes than individual reflection alone. The social dimension of integration, sharing experiences, receiving validation, and hearing others' stories, appears to be a critical component that individual journaling cannot replace.

These findings converge on a single point: the psychedelic experience creates an opportunity. Integration determines whether that opportunity becomes lasting change or a fading memory.`,
          es: `La evidencia clinica para la integracion esta creciendo rapidamente. Varios hallazgos clave han surgido de investigaciones recientes:

La duracion del beneficio depende de la integracion. Los estudios de psilocibina de Johns Hopkins (Griffiths et al., 2006, 2008, 2011) encontraron consistentemente que los participantes que realizaron practicas reflexivas despues de sus sesiones mantuvieron cambios positivos durante meses y anos. Los que no se involucraron en la integracion mostraron rendimientos decrecientes.

La integracion reduce resultados adversos. Gashi y colegas (2021), en su encuesta a mas de 600 usuarios de psicodelicos, encontraron que el apoyo de integracion estructurado fue el factor protector mas fuerte contra el ajuste dificil post-experiencia. Los participantes sin apoyo de integracion fueron significativamente mas propensos a reportar angustia psicologica duradera.

La ventana de neuroplasticidad es temporal. La psilocibina promueve la neuroplasticidad, la capacidad del cerebro para formar nuevas conexiones neuronales, por un periodo de dias a semanas despues de la experiencia (Ly et al., 2018; Shao et al., 2021). Esta ventana de plasticidad mejorada es cuando los nuevos patrones de pensamiento y comportamiento se establecen mas facilmente. Las practicas de integracion durante esta ventana tienen un efecto desproporcionado en los resultados a largo plazo.

La integracion comunitaria supera a la integracion individual. Watts y colegas encontraron que los circulos de integracion grupal produjeron mejores resultados que la reflexion individual sola. La dimension social de la integracion, compartir experiencias, recibir validacion y escuchar las historias de otros, parece ser un componente critico que el diario individual no puede reemplazar.

Estos hallazgos convergen en un solo punto: la experiencia psicodelica crea una oportunidad. La integracion determina si esa oportunidad se convierte en cambio duradero o en un recuerdo que se desvanece.`,
        },
      },
      {
        heading: {
          en: 'Practical first steps for integration',
          es: 'Primeros pasos practicos para la integracion',
        },
        body: {
          en: `If you are reading this after a psychedelic experience, or preparing for one, here are concrete starting points:

Write before you forget. Within 24 hours of your experience, write down everything you can remember. Not analysis, just description. What did you see, feel, think, sense? The raw material of integration fades quickly. Capture it first, interpret it later.

Protect the first 48 hours. The days immediately following a psychedelic experience are a sensitive period. Avoid making major life decisions. Reduce social media and news consumption. Sleep well. Eat nourishing food. The nervous system needs time to restabilize.

Find at least one person to talk to. This does not need to be a therapist (though that helps). It needs to be someone who will listen without judgment. Integration is partly a relational process. Articulating an experience to another person changes how you understand it.

Establish one daily practice. This could be meditation, journaling, walking in nature, breathwork, or yoga. The specific practice matters less than the consistency. Integration happens through repetition, not revelation.

Be patient with confusion. Not everything from a psychedelic experience will make sense immediately. Some material takes weeks or months to become clear. Some may never resolve into neat narrative. That is normal. Integration is not about making the experience tidy. It is about making it useful.

Seek professional support if needed. If you are experiencing persistent anxiety, depersonalization, difficulty sleeping, or intrusive thoughts after a psychedelic experience, seek support from a therapist experienced in psychedelic integration. The Psychedelic Support Network and MAPS directories list trained professionals. There is no merit in suffering alone.

Integration is a practice, not a destination. It does not end. The insights from a single psychedelic experience can continue to unfold for years, if you tend them.`,
          es: `Si estas leyendo esto despues de una experiencia psicodelica, o preparandote para una, aqui hay puntos de partida concretos:

Escribe antes de olvidar. Dentro de las 24 horas de tu experiencia, escribe todo lo que puedas recordar. No analisis, solo descripcion. ¿Que viste, sentiste, pensaste, percibiste? La materia prima de la integracion se desvanece rapido. Capturala primero, interpretala despues.

Protege las primeras 48 horas. Los dias inmediatamente posteriores a una experiencia psicodelica son un periodo sensible. Evita tomar decisiones importantes de vida. Reduce el consumo de redes sociales y noticias. Duerme bien. Come comida nutritiva. El sistema nervioso necesita tiempo para reestabilizarse.

Encuentra al menos una persona con quien hablar. No necesita ser un terapeuta (aunque eso ayuda). Necesita ser alguien que escuche sin juzgar. La integracion es en parte un proceso relacional. Articular una experiencia a otra persona cambia como la entiendes.

Establece una practica diaria. Puede ser meditacion, escritura de diario, caminata en la naturaleza, respiracion o yoga. La practica especifica importa menos que la consistencia. La integracion ocurre a traves de la repeticion, no de la revelacion.

Se paciente con la confusion. No todo de una experiencia psicodelica tendra sentido inmediatamente. Algun material toma semanas o meses en aclararse. Algo puede nunca resolverse en una narrativa ordenada. Eso es normal. La integracion no se trata de hacer la experiencia prolija. Se trata de hacerla util.

Busca apoyo profesional si lo necesitas. Si estas experimentando ansiedad persistente, despersonalizacion, dificultad para dormir o pensamientos intrusivos despues de una experiencia psicodelica, busca apoyo de un terapeuta con experiencia en integracion psicodelica. La Psychedelic Support Network y los directorios de MAPS listan profesionales capacitados. No hay merito en sufrir solo.

La integracion es una practica, no un destino. No termina. Las percepciones de una sola experiencia psicodelica pueden continuar desplegandose durante anos, si las cultivas.`,
        },
      },
    ],
  },
  {
    slug: 'the-science-of-psilocybin',
    content: {
      en: 'A research-informed overview of psilocybin science: how it works in the brain, the landmark clinical trials, the safety profile, and what the future holds for psychedelic medicine.',
      es: 'Una vision general basada en investigacion de la ciencia de la psilocibina: como funciona en el cerebro, los ensayos clinicos historicos, el perfil de seguridad y lo que depara el futuro para la medicina psicodelica.',
    },
    sections: [
      {
        heading: {
          en: 'The study that changed everything',
          es: 'El estudio que lo cambio todo',
        },
        body: {
          en: `In 2006, Roland Griffiths and his team at Johns Hopkins University published a study that reopened a scientific door that had been closed for over 30 years. The paper, "Psilocybin can occasion mystical-type experiences having substantial and sustained personal meaning and spiritual significance," appeared in the journal Psychopharmacology and demonstrated, under rigorous double-blind conditions, that psilocybin could reliably produce profound experiences that participants rated among the most meaningful of their lives.

This was not news to the indigenous cultures of Mesoamerica, who had used psilocybin-containing mushrooms in ceremonial contexts for centuries. The Mazatec tradition, through healers like Maria Sabina, had long understood the sacramental and therapeutic potential of what they called "teonanacatl," the flesh of the gods. But for Western science, which had abandoned psychedelic research in the early 1970s under political pressure, the Griffiths study was a watershed.

The study was remarkable not just for its findings but for its rigor. Griffiths used active placebos, extensive screening, multiple assessment points, and long-term follow-up. At 14-month follow-up, 67% of participants still rated the psilocybin session among the top five most spiritually significant experiences of their lives. This was not a fleeting drug effect. Something lasting had occurred.

The study opened the floodgates. Within a decade, major research institutions including Imperial College London, NYU, UCLA, and the University of Zurich had launched psilocybin research programs. The modern psychedelic renaissance had begun.`,
          es: `En 2006, Roland Griffiths y su equipo en la Universidad Johns Hopkins publicaron un estudio que reabrio una puerta cientifica que habia estado cerrada por mas de 30 anos. El articulo, "La psilocibina puede ocasionar experiencias de tipo mistico con significado personal sustancial y sostenido y significancia espiritual," aparecio en la revista Psychopharmacology y demostro, bajo condiciones rigurosas de doble ciego, que la psilocibina podia producir de manera confiable experiencias profundas que los participantes calificaron entre las mas significativas de sus vidas.

Esto no era novedad para las culturas indigenas de Mesoamerica, que habian usado hongos que contienen psilocibina en contextos ceremoniales durante siglos. La tradicion Mazateca, a traves de curanderas como Maria Sabina, habia comprendido desde hace mucho el potencial sacramental y terapeutico de lo que llamaban "teonanacatl," la carne de los dioses. Pero para la ciencia occidental, que habia abandonado la investigacion psicodelica a principios de la decada de 1970 bajo presion politica, el estudio de Griffiths fue un momento decisivo.

El estudio fue notable no solo por sus hallazgos sino por su rigor. Griffiths uso placebos activos, evaluacion extensiva, multiples puntos de valoracion y seguimiento a largo plazo. En el seguimiento a 14 meses, el 67% de los participantes aun calificaba la sesion de psilocibina entre las cinco experiencias mas espiritualmente significativas de sus vidas. Este no fue un efecto fugaz de una droga. Algo duradero habia ocurrido.

El estudio abrio las compuertas. En una decada, importantes instituciones de investigacion incluyendo el Imperial College de Londres, NYU, UCLA y la Universidad de Zurich habian lanzado programas de investigacion con psilocibina. El renacimiento psicodelico moderno habia comenzado.`,
        },
      },
      {
        heading: {
          en: 'How psilocybin works in the brain',
          es: 'Como funciona la psilocibina en el cerebro',
        },
        body: {
          en: `Psilocybin is a prodrug. When ingested, it is rapidly converted by the body into psilocin, which is the pharmacologically active compound. Psilocin is a partial agonist at serotonin 5-HT2A receptors, which are densely concentrated in the cortex, the brain region responsible for perception, cognition, and sense of self.

But the story is not just about receptor binding. The most compelling model for understanding psilocybin's effects comes from Robin Carhart-Harris and Karl Friston at Imperial College London, who proposed the REBUS model: Relaxed Beliefs Under Psychedelics (Carhart-Harris & Friston, 2019).

The REBUS model proposes that psilocybin relaxes the precision weighting of prior beliefs. In normal waking consciousness, the brain operates as a prediction machine, constantly generating top-down models of reality and comparing them against incoming sensory data. These high-level priors are encoded in hierarchical brain networks, particularly the Default Mode Network (DMN).

The DMN is a set of interconnected brain regions that is most active during self-referential thinking: ruminating, planning, worrying, narrating your life story. It is the neural substrate of the ego, the sense of being a separate, continuous self. In depression, the DMN becomes hyperactive and rigid. The same negative thought loops play on repeat. The system gets stuck.

Psilocybin disrupts the DMN. Neuroimaging studies show decreased activity and connectivity within the DMN during psilocybin experiences (Carhart-Harris et al., 2012). At the same time, connectivity between brain regions that do not normally communicate increases dramatically. The brain becomes more entropic, more flexible, less constrained by habitual patterns.

This is why people report seeing the world "with fresh eyes" during a psilocybin experience. The usual filters and predictions are temporarily suspended. New connections, both neural and psychological, become possible. And the neuroplasticity that follows (Ly et al., 2018) means these new connections can become structural, not just experiential.`,
          es: `La psilocibina es un profarmaco. Cuando se ingiere, el cuerpo la convierte rapidamente en psilocina, que es el compuesto farmacologicamente activo. La psilocina es un agonista parcial en los receptores de serotonina 5-HT2A, que estan densamente concentrados en la corteza, la region cerebral responsable de la percepcion, la cognicion y el sentido del yo.

Pero la historia no se trata solo de la union a receptores. El modelo mas convincente para entender los efectos de la psilocibina proviene de Robin Carhart-Harris y Karl Friston en el Imperial College de Londres, quienes propusieron el modelo REBUS: Creencias Relajadas Bajo Psicodelicos (Carhart-Harris y Friston, 2019).

El modelo REBUS propone que la psilocibina relaja la ponderacion de precision de las creencias previas. En la consciencia normal de vigilia, el cerebro opera como una maquina de prediccion, generando constantemente modelos descendentes de la realidad y comparandolos con los datos sensoriales entrantes. Estos priors de alto nivel estan codificados en redes cerebrales jerarquicas, particularmente la Red de Modo Predeterminado (DMN).

La DMN es un conjunto de regiones cerebrales interconectadas que esta mas activa durante el pensamiento autoreferencial: rumiar, planificar, preocuparse, narrar la historia de tu vida. Es el sustrato neural del ego, el sentido de ser un yo separado y continuo. En la depresion, la DMN se vuelve hiperactiva y rigida. Los mismos bucles de pensamiento negativo se repiten. El sistema se atasca.

La psilocibina interrumpe la DMN. Los estudios de neuroimagen muestran actividad y conectividad disminuidas dentro de la DMN durante experiencias con psilocibina (Carhart-Harris et al., 2012). Al mismo tiempo, la conectividad entre regiones cerebrales que normalmente no se comunican aumenta dramaticamente. El cerebro se vuelve mas entropico, mas flexible, menos constreniido por patrones habituales.

Por eso las personas reportan ver el mundo "con ojos frescos" durante una experiencia con psilocibina. Los filtros y predicciones habituales se suspenden temporalmente. Nuevas conexiones, tanto neurales como psicologicas, se hacen posibles. Y la neuroplasticidad que sigue (Ly et al., 2018) significa que estas nuevas conexiones pueden volverse estructurales, no solo experienciales.`,
        },
      },
      {
        heading: {
          en: 'Key clinical trials: depression, anxiety, and addiction',
          es: 'Ensayos clinicos clave: depresion, ansiedad y adiccion',
        },
        body: {
          en: `The clinical evidence for psilocybin-assisted therapy has grown rapidly since the Griffiths study. Several landmark trials have shaped the field:

Depression. The Imperial College London team, led by Carhart-Harris, published the first modern trial of psilocybin for treatment-resistant depression in 2016. Twelve patients who had failed to respond to at least two conventional antidepressants received two psilocybin sessions with psychological support. Results showed rapid and sustained reductions in depression scores, with 67% of participants meeting criteria for remission at one week. A larger randomized trial (Carhart-Harris et al., 2021) compared psilocybin to escitalopram (a standard SSRI) and found comparable efficacy, with psilocybin showing advantages in secondary outcomes including emotional responsiveness, connectedness, and meaning in life.

End-of-life anxiety. Two simultaneous studies published in 2016, one at Johns Hopkins (Griffiths et al.) and one at NYU (Ross et al.), examined psilocybin-assisted therapy for existential distress in cancer patients. Both found large, rapid, and sustained reductions in anxiety and depression, with effects persisting at 6-month follow-up. Approximately 80% of participants showed clinically significant decreases in distress. Many described their psilocybin session as among the most meaningful experiences of their lives. These studies demonstrated that psilocybin could address suffering that conventional treatments had failed to reach.

Addiction. Matthew Johnson's research group at Johns Hopkins published a pilot study (2014) examining psilocybin-assisted therapy for tobacco addiction. The results were striking: 80% of participants were abstinent at 6-month follow-up, compared to approximately 35% for the best available conventional treatments. A follow-up study (Johnson et al., 2017) showed 67% abstinence at 12 months. Similar approaches have shown promise for alcohol use disorder (Bogenschutz et al., 2022), with a randomized controlled trial showing that psilocybin-assisted therapy roughly doubled the rate of heavy drinking days eliminated compared to placebo.

These trials share a common structure: careful screening, psychological preparation, guided psilocybin sessions in comfortable settings with trained therapists, and structured integration afterward. The drug alone is not the treatment. The therapeutic container is the treatment. Psilocybin is the catalyst within it.`,
          es: `La evidencia clinica para la terapia asistida con psilocibina ha crecido rapidamente desde el estudio de Griffiths. Varios ensayos historicos han dado forma al campo:

Depresion. El equipo del Imperial College de Londres, liderado por Carhart-Harris, publico el primer ensayo moderno de psilocibina para depresion resistente al tratamiento en 2016. Doce pacientes que no habian respondido a al menos dos antidepresivos convencionales recibieron dos sesiones de psilocibina con apoyo psicologico. Los resultados mostraron reducciones rapidas y sostenidas en las puntuaciones de depresion, con el 67% de los participantes cumpliendo criterios de remision a una semana. Un ensayo aleatorizado mas grande (Carhart-Harris et al., 2021) comparo la psilocibina con el escitalopram (un ISRS estandar) y encontro eficacia comparable, con la psilocibina mostrando ventajas en resultados secundarios incluyendo capacidad de respuesta emocional, conexion y significado en la vida.

Ansiedad al final de la vida. Dos estudios simultaneos publicados en 2016, uno en Johns Hopkins (Griffiths et al.) y otro en NYU (Ross et al.), examinaron la terapia asistida con psilocibina para la angustia existencial en pacientes con cancer. Ambos encontraron reducciones grandes, rapidas y sostenidas en ansiedad y depresion, con efectos persistentes en el seguimiento a 6 meses. Aproximadamente el 80% de los participantes mostraron disminuciones clinicamente significativas en la angustia. Muchos describieron su sesion de psilocibina como una de las experiencias mas significativas de sus vidas. Estos estudios demostraron que la psilocibina podia abordar el sufrimiento que los tratamientos convencionales no habian logrado alcanzar.

Adiccion. El grupo de investigacion de Matthew Johnson en Johns Hopkins publico un estudio piloto (2014) examinando la terapia asistida con psilocibina para la adiccion al tabaco. Los resultados fueron impactantes: el 80% de los participantes estaban abstinentes en el seguimiento a 6 meses, comparado con aproximadamente el 35% para los mejores tratamientos convencionales disponibles. Un estudio de seguimiento (Johnson et al., 2017) mostro 67% de abstinencia a los 12 meses. Enfoques similares han mostrado promesa para el trastorno por consumo de alcohol (Bogenschutz et al., 2022), con un ensayo controlado aleatorizado mostrando que la terapia asistida con psilocibina aproximadamente duplico la tasa de dias de consumo excesivo eliminados comparado con placebo.

Estos ensayos comparten una estructura comun: evaluacion cuidadosa, preparacion psicologica, sesiones guiadas de psilocibina en entornos comodos con terapeutas capacitados, e integracion estructurada despues. La sustancia sola no es el tratamiento. El contenedor terapeutico es el tratamiento. La psilocibina es el catalizador dentro de el.`,
        },
      },
      {
        heading: {
          en: 'Safety: what the evidence says',
          es: 'Seguridad: lo que dice la evidencia',
        },
        body: {
          en: `Psilocybin has one of the most favorable safety profiles of any psychoactive substance studied in clinical research. Johnson and colleagues (2008), in their guidelines for safety in human hallucinogen research published in Psychopharmacology, established the framework that has guided all subsequent clinical trials.

The key findings on safety:

Physiological toxicity is extremely low. Psilocybin does not produce organ damage, and the lethal dose in humans has never been reached in any clinical or documented case. It does not cause physical dependence. Tolerance develops rapidly (within days), which makes compulsive use patterns essentially self-limiting.

Psychological risk is real but manageable. The primary risks are psychological: acute anxiety, panic, paranoia, and in rare cases, persisting perceptual disturbances (HPPD). These risks are significantly mitigated by proper screening (excluding individuals with personal or family history of psychotic disorders), preparation, a supportive physical setting, and trained guides or therapists.

Contraindications exist. Psilocybin should not be used by individuals with a personal or family history of schizophrenia or psychotic disorders. Certain medication interactions, particularly with lithium and MAOIs, pose serious risks. SSRIs reduce the subjective effects of psilocybin and may require a carefully managed taper under medical supervision before a psilocybin session. Always consult a healthcare provider about medication interactions.

Population-level data is reassuring. A large population study (Krebs & Johansen, 2013) analyzing data from over 130,000 U.S. adults found no association between lifetime psychedelic use and mental health problems. In fact, psychedelic use was associated with reduced rates of psychological distress and suicidality.

The safety caveat is always the same: these outcomes depend on context. Psilocybin used recklessly, without screening, without preparation, without a safe setting, without integration, carries substantially higher risk. The substance is not inherently dangerous. The conditions of use determine the outcome.`,
          es: `La psilocibina tiene uno de los perfiles de seguridad mas favorables de cualquier sustancia psicoactiva estudiada en investigacion clinica. Johnson y colegas (2008), en sus directrices para la seguridad en investigacion con alucinogenos en humanos publicadas en Psychopharmacology, establecieron el marco que ha guiado todos los ensayos clinicos posteriores.

Los hallazgos clave sobre seguridad:

La toxicidad fisiologica es extremadamente baja. La psilocibina no produce dano a organos, y la dosis letal en humanos nunca se ha alcanzado en ningun caso clinico o documentado. No causa dependencia fisica. La tolerancia se desarrolla rapidamente (en dias), lo que hace que los patrones de uso compulsivo sean esencialmente autolimitantes.

El riesgo psicologico es real pero manejable. Los riesgos principales son psicologicos: ansiedad aguda, panico, paranoia y, en casos raros, alteraciones perceptuales persistentes (HPPD). Estos riesgos se mitigan significativamente con una evaluacion adecuada (excluyendo individuos con historia personal o familiar de trastornos psicoticos), preparacion, un entorno fisico de apoyo y guias o terapeutas capacitados.

Existen contraindicaciones. La psilocibina no debe ser usada por individuos con historia personal o familiar de esquizofrenia o trastornos psicoticos. Ciertas interacciones con medicamentos, particularmente con litio e IMAOs, presentan riesgos serios. Los ISRS reducen los efectos subjetivos de la psilocibina y pueden requerir una reduccion gradual cuidadosamente manejada bajo supervision medica antes de una sesion de psilocibina. Siempre consulta a un proveedor de salud sobre interacciones con medicamentos.

Los datos a nivel poblacional son tranquilizadores. Un estudio poblacional grande (Krebs y Johansen, 2013) analizando datos de mas de 130,000 adultos estadounidenses no encontro asociacion entre el uso de psicodelicos a lo largo de la vida y problemas de salud mental. De hecho, el uso de psicodelicos se asocio con tasas reducidas de angustia psicologica y suicidalidad.

La advertencia de seguridad es siempre la misma: estos resultados dependen del contexto. La psilocibina usada imprudentemente, sin evaluacion, sin preparacion, sin un entorno seguro, sin integracion, conlleva un riesgo sustancialmente mayor. La sustancia no es inherentemente peligrosa. Las condiciones de uso determinan el resultado.`,
        },
      },
      {
        heading: {
          en: 'The future: what comes next',
          es: 'El futuro: lo que viene despues',
        },
        body: {
          en: `The psychedelic research landscape is evolving rapidly. Several developments are shaping what comes next:

COMPASS Pathways, a for-profit pharmaceutical company, is conducting Phase 2b and Phase 3 trials of a synthetic psilocybin formulation (COMP360) for treatment-resistant depression. Their Phase 2b results (2022) showed that a single 25mg dose produced rapid and significant reductions in depression scores, though questions remain about the durability of effects and the company's approach to intellectual property.

The Usona Institute, a nonprofit, is running Phase 2 trials of psilocybin for Major Depressive Disorder with a different philosophy: they are pursuing psilocybin as a public benefit rather than a proprietary product, and have been working to prevent overly broad patents on psilocybin therapy.

Australia became the first country to formally recognize psilocybin as a medicine in 2023, allowing authorized psychiatrists to prescribe it for treatment-resistant depression. This regulatory precedent is being watched closely by other jurisdictions.

Oregon (2020) and Colorado (2022) passed ballot measures creating regulated frameworks for psilocybin-assisted services outside of the traditional medical model, allowing trained facilitators to administer psilocybin in licensed service centers.

The research is expanding beyond depression and anxiety to include eating disorders (Imperial College), OCD (Yale), chronic pain (multiple sites), and neurodegenerative conditions. The question is no longer whether psilocybin works. It is how to make it accessible, equitable, and safe at scale.

A critical challenge remains: ensuring that the medicalization of psilocybin does not erase or exploit the indigenous traditions from which this knowledge comes. Reciprocity, cultural respect, and equitable access must be central to whatever systems emerge. The science confirms what indigenous cultures have known. The question is whether Western institutions can receive that knowledge with the humility it deserves.`,
          es: `El panorama de la investigacion psicodelica esta evolucionando rapidamente. Varios desarrollos estan dando forma a lo que viene:

COMPASS Pathways, una compania farmaceutica con fines de lucro, esta realizando ensayos de Fase 2b y Fase 3 de una formulacion sintetica de psilocibina (COMP360) para la depresion resistente al tratamiento. Sus resultados de Fase 2b (2022) mostraron que una sola dosis de 25mg produjo reducciones rapidas y significativas en las puntuaciones de depresion, aunque quedan preguntas sobre la durabilidad de los efectos y el enfoque de la compania respecto a la propiedad intelectual.

El Instituto Usona, una organizacion sin fines de lucro, esta realizando ensayos de Fase 2 de psilocibina para el Trastorno Depresivo Mayor con una filosofia diferente: estan buscando la psilocibina como un beneficio publico en lugar de un producto propietario, y han estado trabajando para prevenir patentes excesivamente amplias sobre la terapia con psilocibina.

Australia se convirtio en el primer pais en reconocer formalmente la psilocibina como medicina en 2023, permitiendo a psiquiatras autorizados prescribirla para la depresion resistente al tratamiento. Este precedente regulatorio esta siendo observado de cerca por otras jurisdicciones.

Oregon (2020) y Colorado (2022) aprobaron medidas electorales creando marcos regulados para servicios asistidos con psilocibina fuera del modelo medico tradicional, permitiendo a facilitadores capacitados administrar psilocibina en centros de servicio licenciados.

La investigacion se esta expandiendo mas alla de la depresion y la ansiedad para incluir trastornos alimentarios (Imperial College), TOC (Yale), dolor cronico (multiples sitios) y condiciones neurodegenerativas. La pregunta ya no es si la psilocibina funciona. Es como hacerla accesible, equitativa y segura a escala.

Un desafio critico permanece: asegurar que la medicalizacion de la psilocibina no borre ni explote las tradiciones indigenas de las que proviene este conocimiento. La reciprocidad, el respeto cultural y el acceso equitativo deben ser centrales en cualquier sistema que surja. La ciencia confirma lo que las culturas indigenas han sabido. La pregunta es si las instituciones occidentales pueden recibir ese conocimiento con la humildad que merece.`,
        },
      },
    ],
  },
  {
    slug: 'preparing-for-your-first-experience',
    content: {
      en: 'A practical, evidence-informed guide to preparing for your first psilocybin experience: set and setting, physical and mental preparation, logistics, and common mistakes to avoid.',
      es: 'Una guia practica e informada por evidencia para prepararte para tu primera experiencia con psilocibina: set y setting, preparacion fisica y mental, logistica y errores comunes a evitar.',
    },
    sections: [
      {
        heading: {
          en: 'Set and setting: the two variables that matter most',
          es: 'Set y setting: las dos variables que mas importan',
        },
        body: {
          en: `The concepts of "set" and "setting" were formalized by Timothy Leary in the 1960s, but the underlying wisdom is far older. Indigenous ceremonial traditions have always understood that the conditions surrounding a psychedelic experience shape the experience itself.

Set refers to your mindset: your psychological state, expectations, intentions, fears, and emotional baseline going into the experience. Setting refers to the physical and social environment: where you are, who you are with, what the space looks and feels like, and what support is available.

Carhart-Harris and colleagues (2018), in a study examining predictors of therapeutic outcomes in psilocybin-assisted therapy, found that set and setting variables were stronger predictors of outcome than the dose of psilocybin itself. Specifically, participants who reported higher levels of psychological preparedness and trust in their guides experienced more positive outcomes and fewer adverse effects.

This finding should reframe how you think about preparation. The most important work is not logistical. It is psychological. Before you attend to the question of where and when, attend to the question of who you are bringing to the experience.

What are you afraid of? What are you hoping for? What would you do if the experience becomes difficult? What do you need to feel safe? These are the questions that matter. Answering them honestly, ideally with the support of a therapist, guide, or trusted friend, is the foundation of preparation.`,
          es: `Los conceptos de "set" y "setting" fueron formalizados por Timothy Leary en la decada de 1960, pero la sabiduria subyacente es mucho mas antigua. Las tradiciones ceremoniales indigenas siempre han entendido que las condiciones que rodean una experiencia psicodelica dan forma a la experiencia misma.

Set se refiere a tu estado mental: tu estado psicologico, expectativas, intenciones, miedos y linea base emocional al entrar a la experiencia. Setting se refiere al entorno fisico y social: donde estas, con quien estas, como se ve y se siente el espacio, y que apoyo esta disponible.

Carhart-Harris y colegas (2018), en un estudio que examino predictores de resultados terapeuticos en terapia asistida con psilocibina, encontraron que las variables de set y setting fueron predictores mas fuertes del resultado que la dosis de psilocibina en si. Especificamente, los participantes que reportaron niveles mas altos de preparacion psicologica y confianza en sus guias experimentaron resultados mas positivos y menos efectos adversos.

Este hallazgo deberia reformular como piensas sobre la preparacion. El trabajo mas importante no es logistico. Es psicologico. Antes de atender la pregunta de donde y cuando, atiende la pregunta de quien eres tu al llevar a la experiencia.

¿De que tienes miedo? ¿Que esperas? ¿Que harias si la experiencia se vuelve dificil? ¿Que necesitas para sentirte seguro? Estas son las preguntas que importan. Responderlas honestamente, idealmente con el apoyo de un terapeuta, guia o amigo de confianza, es la base de la preparacion.`,
        },
      },
      {
        heading: {
          en: 'Physical preparation: the body is the container',
          es: 'Preparacion fisica: el cuerpo es el contenedor',
        },
        body: {
          en: `Your physical state directly affects the quality of the psychedelic experience. The body is not separate from the mind during a psilocybin session. It is the container that holds everything that unfolds.

Sleep. In the week before the experience, prioritize sleep quality above all else. Sleep deprivation increases anxiety, reduces emotional resilience, and impairs the brain's capacity for the neural flexibility that psilocybin promotes. Aim for 7 to 9 hours per night. Avoid alcohol and caffeine in the days leading up to the session.

Diet. Eat clean, whole foods in the days before the experience. Avoid heavy, processed, or sugary foods. On the day of the session, eat lightly or fast for 4 to 6 hours before ingestion. Nausea is a common side effect of psilocybin, and a light stomach reduces this significantly. Some practitioners recommend ginger tea, which has evidence for antiemetic effects.

Exercise. Moderate exercise in the days before the session helps regulate the nervous system, reduces baseline anxiety, and improves sleep quality. Avoid intense training on the day before or the day of the session. A walk in nature is ideal.

Substances. Discontinue recreational substances (alcohol, cannabis, stimulants) for at least one week before the experience. Cannabis in particular can unpredictably intensify or alter a psilocybin experience. If you are taking prescription medications, consult your healthcare provider well in advance. SSRIs, MAOIs, lithium, and tramadol all have significant interactions with psilocybin that require medical guidance.

The goal of physical preparation is simple: arrive rested, nourished, sober, and physically comfortable. Your body will thank you during the experience.`,
          es: `Tu estado fisico afecta directamente la calidad de la experiencia psicodelica. El cuerpo no esta separado de la mente durante una sesion de psilocibina. Es el contenedor que sostiene todo lo que se despliega.

Sueno. En la semana antes de la experiencia, prioriza la calidad del sueno por encima de todo. La privacion del sueno aumenta la ansiedad, reduce la resiliencia emocional y deteriora la capacidad del cerebro para la flexibilidad neural que la psilocibina promueve. Apunta a 7 a 9 horas por noche. Evita el alcohol y la cafeina en los dias previos a la sesion.

Dieta. Come alimentos limpios e integrales en los dias antes de la experiencia. Evita alimentos pesados, procesados o azucarados. El dia de la sesion, come ligero o ayuna de 4 a 6 horas antes de la ingestion. La nausea es un efecto secundario comun de la psilocibina, y un estomago ligero la reduce significativamente. Algunos practicantes recomiendan te de jengibre, que tiene evidencia de efectos antiemeticos.

Ejercicio. El ejercicio moderado en los dias antes de la sesion ayuda a regular el sistema nervioso, reduce la ansiedad basal y mejora la calidad del sueno. Evita el entrenamiento intenso el dia anterior o el dia de la sesion. Una caminata en la naturaleza es ideal.

Sustancias. Suspende las sustancias recreativas (alcohol, cannabis, estimulantes) al menos una semana antes de la experiencia. El cannabis en particular puede intensificar o alterar impredeciblemente una experiencia con psilocibina. Si estas tomando medicamentos recetados, consulta con tu proveedor de salud con suficiente anticipacion. Los ISRS, IMAOs, litio y tramadol tienen interacciones significativas con la psilocibina que requieren orientacion medica.

El objetivo de la preparacion fisica es simple: llegar descansado, nutrido, sobrio y fisicamente comodo. Tu cuerpo te lo agradecera durante la experiencia.`,
        },
      },
      {
        heading: {
          en: 'Mental preparation: intention, meditation, and parts work',
          es: 'Preparacion mental: intencion, meditacion y trabajo de partes',
        },
        body: {
          en: `Mental preparation is where most people underinvest, and where the greatest returns are found.

Intention setting. An intention is not a goal. It is not "I want to cure my depression" or "I want to have a mystical experience." An intention is a direction: "I want to understand what is beneath my anxiety." "I want to open to whatever needs to be seen." "I want to connect more deeply with myself." A good intention is open-ended, honest, and held lightly. Grasping too tightly at a specific outcome is itself a form of resistance that the experience will likely challenge.

Write your intention down. Return to it daily in the week before the session. Let it evolve. Discuss it with your guide or therapist. The act of clarifying your intention is itself preparation.

Meditation. Even a modest meditation practice, 10 to 15 minutes daily for the two weeks before the session, measurably improves the capacity to navigate a psychedelic experience. Meditation trains the skill that matters most during a psychedelic session: the ability to observe inner experience without reacting to it. When difficult material arises (and it likely will), the meditator has practice in meeting it with awareness rather than panic.

If you do not have a meditation practice, start with simple breath awareness. Sit comfortably, close your eyes, and follow the breath. When the mind wanders, notice that it has wandered, and gently return to the breath. This is the entire practice. And it is exactly the skill you will need when the psilocybin is active.

Parts work. Internal Family Systems (IFS) or similar modalities that work with "parts" of the psyche are particularly valuable preparation. Many psychedelic experiences involve encounters with different parts of yourself: the inner critic, the wounded child, the protector, the exile. If you have some familiarity with these parts before the experience, the encounters are less frightening and more productive.

Consider working with a therapist who uses IFS or similar approaches for at least two or three sessions before the psychedelic experience. This gives you a map of your inner landscape that you can reference during the journey.

Emotional baseline. Be honest with yourself about where you are emotionally. If you are in acute crisis, actively suicidal, or experiencing symptoms of psychosis, now is not the time for a psychedelic experience. Stability does not mean perfection. It means having enough ground beneath you to hold what might be shaken loose.`,
          es: `La preparacion mental es donde la mayoria de las personas subinvierten, y donde se encuentran los mayores retornos.

Establecimiento de intencion. Una intencion no es una meta. No es "quiero curar mi depresion" ni "quiero tener una experiencia mistica." Una intencion es una direccion: "Quiero entender que hay debajo de mi ansiedad." "Quiero abrirme a lo que necesite ser visto." "Quiero conectar mas profundamente conmigo mismo." Una buena intencion es abierta, honesta y sostenida con ligereza. Aferrarse demasiado a un resultado especifico es en si una forma de resistencia que la experiencia probablemente desafiara.

Escribe tu intencion. Vuelve a ella diariamente en la semana antes de la sesion. Dejala evolucionar. Discutela con tu guia o terapeuta. El acto de clarificar tu intencion es en si preparacion.

Meditacion. Incluso una practica modesta de meditacion, de 10 a 15 minutos diarios durante las dos semanas antes de la sesion, mejora mediblemente la capacidad de navegar una experiencia psicodelica. La meditacion entrena la habilidad que mas importa durante una sesion psicodelica: la capacidad de observar la experiencia interna sin reaccionar a ella. Cuando surge material dificil (y probablemente surgira), el meditador tiene practica en encontrarlo con consciencia en lugar de panico.

Si no tienes una practica de meditacion, comienza con simple consciencia de la respiracion. Sientate comodamente, cierra los ojos y sigue la respiracion. Cuando la mente divague, nota que ha divagado, y gentilmente regresa a la respiracion. Esta es toda la practica. Y es exactamente la habilidad que necesitaras cuando la psilocibina este activa.

Trabajo de partes. Los Sistemas Familiares Internos (IFS) o modalidades similares que trabajan con "partes" de la psique son una preparacion particularmente valiosa. Muchas experiencias psicodelicas involucran encuentros con diferentes partes de ti mismo: el critico interno, el nino herido, el protector, el exiliado. Si tienes cierta familiaridad con estas partes antes de la experiencia, los encuentros son menos aterradores y mas productivos.

Considera trabajar con un terapeuta que use IFS o enfoques similares durante al menos dos o tres sesiones antes de la experiencia psicodelica. Esto te da un mapa de tu paisaje interior al que puedes referirte durante el viaje.

Linea base emocional. Se honesto contigo mismo sobre donde estas emocionalmente. Si estas en crisis aguda, activamente suicida o experimentando sintomas de psicosis, ahora no es el momento para una experiencia psicodelica. Estabilidad no significa perfeccion. Significa tener suficiente terreno debajo de ti para sostener lo que pueda ser sacudido.`,
        },
      },
      {
        heading: {
          en: 'Practical logistics: support, space, and the integration plan',
          es: 'Logistica practica: apoyo, espacio y el plan de integracion',
        },
        body: {
          en: `Once the inner preparation is underway, the practical logistics matter too.

Choose your support carefully. Whether this is a trained facilitator, a therapist, a trusted friend, or a partner, the person or people who will be with you during the experience should be someone you genuinely trust. Trust is not a concept here. It is a felt sense. If you have any hesitation, address it before the session. The quality of the relationship with your guide is one of the strongest predictors of a positive outcome.

Prepare the space. The physical environment should be comfortable, private, safe, and free from interruption. Natural light, comfortable surfaces to lie on, blankets, an eye mask, and a carefully curated music playlist are standard elements in clinical settings. Temperature control matters. Access to a bathroom without obstacles matters. Remove anything that could cause anxiety: phones on silent, notifications off, doors locked.

Music. Music is not background during a psilocybin experience. It is a structural element that guides the emotional arc. The Johns Hopkins psilocybin playlist, curated by Bill Richards, has been used in most major clinical trials and is publicly available. It follows a specific trajectory: grounding at the onset, building intensity through the peak, and gentle return during the descent. If you use your own music, avoid songs with lyrics or strong personal associations.

Plan for afterward. Clear your schedule for at least 24 hours after the session. Ideally, take the next day off from work and social obligations. Have simple, nourishing food available. Have your journal ready. Tell the people in your life that you will be unavailable, without needing to explain why.

The integration plan. Before the experience, decide how you will begin integration. Schedule a call or session with your therapist or guide for one to three days after the experience. Identify your daily integration practice (journaling, meditation, walking). Know who you will call if you need support. Having this structure in place before the experience means you do not have to make decisions about it afterward, when your cognitive resources are depleted and the material is still raw.`,
          es: `Una vez que la preparacion interna esta en marcha, la logistica practica tambien importa.

Elige tu apoyo cuidadosamente. Ya sea un facilitador capacitado, un terapeuta, un amigo de confianza o una pareja, la persona o personas que estaran contigo durante la experiencia deben ser alguien en quien genuinamente confies. La confianza no es un concepto aqui. Es una sensacion sentida. Si tienes alguna duda, abordala antes de la sesion. La calidad de la relacion con tu guia es uno de los predictores mas fuertes de un resultado positivo.

Prepara el espacio. El entorno fisico debe ser comodo, privado, seguro y libre de interrupciones. Luz natural, superficies comodas para acostarse, mantas, un antifaz y una lista de musica cuidadosamente curada son elementos estandar en entornos clinicos. El control de temperatura importa. El acceso al bano sin obstaculos importa. Elimina todo lo que pueda causar ansiedad: telefonos en silencio, notificaciones apagadas, puertas cerradas.

Musica. La musica no es fondo durante una experiencia con psilocibina. Es un elemento estructural que guia el arco emocional. La lista de reproduccion de psilocibina de Johns Hopkins, curada por Bill Richards, se ha utilizado en la mayoria de los principales ensayos clinicos y esta disponible publicamente. Sigue una trayectoria especifica: enraizamiento al inicio, intensidad creciente durante el pico y retorno suave durante el descenso. Si usas tu propia musica, evita canciones con letras o asociaciones personales fuertes.

Planifica para despues. Despeja tu agenda por al menos 24 horas despues de la sesion. Idealmente, toma el dia siguiente libre del trabajo y obligaciones sociales. Ten comida simple y nutritiva disponible. Ten tu diario listo. Avisa a las personas en tu vida que estaras no disponible, sin necesidad de explicar por que.

El plan de integracion. Antes de la experiencia, decide como comenzaras la integracion. Programa una llamada o sesion con tu terapeuta o guia de uno a tres dias despues de la experiencia. Identifica tu practica diaria de integracion (escritura de diario, meditacion, caminata). Sabe a quien llamaras si necesitas apoyo. Tener esta estructura en su lugar antes de la experiencia significa que no tienes que tomar decisiones al respecto despues, cuando tus recursos cognitivos estan agotados y el material aun esta crudo.`,
        },
      },
      {
        heading: {
          en: 'What not to do: common mistakes in preparation',
          es: 'Que no hacer: errores comunes en la preparacion',
        },
        body: {
          en: `After thousands of documented clinical sessions and reports from experienced practitioners, certain preparation mistakes appear consistently. Avoid these:

Over-researching trip reports. Reading dozens of experience reports can create rigid expectations and increase anticipatory anxiety. Read enough to understand the general territory, then stop. Your experience will be yours. No amount of reading will prepare you for it, and trying to match someone else's experience is a recipe for disappointment.

Setting specific outcome goals. "I need to resolve my childhood trauma in this session." "I need to have ego death." "I need to cry." These are not intentions. They are demands on the experience. The most therapeutically valuable sessions are often the ones that deliver something completely unexpected. Set a direction, not a destination.

Skipping the medication conversation. If you are on any psychiatric medication, this conversation with your healthcare provider is not optional. SSRI interactions can blunt the experience entirely. Lithium combined with psychedelics can cause seizures. Tramadol combined with psilocybin carries serotonin syndrome risk. These are not theoretical dangers.

Telling everyone. You do not owe anyone an explanation of what you are doing. Many people will have strong opinions about psychedelics, and managing those opinions before the session adds unnecessary stress. Tell the people who need to know (your guide, your emergency contact), and leave the rest for after integration, if at all.

Neglecting the return. Most preparation focuses on the experience itself. Fewer people prepare for the re-entry: the first day back at work, the first social interaction, the moment when the insights start to fade and ordinary life reasserts itself. This is when integration matters most, and it is the part most people are least ready for.

Going alone without experience. A first psychedelic experience without any form of support, whether a therapist, facilitator, or experienced sitter, carries unnecessary risk. The experience can be profoundly disorienting. Having someone present who can offer reassurance, provide water, and simply hold space reduces the probability of adverse outcomes significantly. This is not about weakness. It is about intelligence.

Preparation is not about controlling what will happen. That is not possible. Preparation is about building a container strong enough to hold whatever arises. Physical readiness, psychological honesty, practical planning, and the humility to meet the experience on its own terms, rather than yours.`,
          es: `Despues de miles de sesiones clinicas documentadas e informes de practicantes experimentados, ciertos errores de preparacion aparecen consistentemente. Evita estos:

Sobre-investigar reportes de experiencias. Leer docenas de reportes de experiencias puede crear expectativas rigidas y aumentar la ansiedad anticipatoria. Lee lo suficiente para entender el territorio general, luego detente. Tu experiencia sera tuya. Ninguna cantidad de lectura te preparara para ella, e intentar igualar la experiencia de alguien mas es una receta para la decepcion.

Establecer metas de resultados especificos. "Necesito resolver mi trauma de infancia en esta sesion." "Necesito tener muerte del ego." "Necesito llorar." Estas no son intenciones. Son demandas a la experiencia. Las sesiones mas terapeuticamente valiosas son frecuentemente las que entregan algo completamente inesperado. Establece una direccion, no un destino.

Saltarse la conversacion sobre medicamentos. Si estas tomando algun medicamento psiquiatrico, esta conversacion con tu proveedor de salud no es opcional. Las interacciones con ISRS pueden atenuar la experiencia completamente. El litio combinado con psicodelicos puede causar convulsiones. El tramadol combinado con psilocibina conlleva riesgo de sindrome serotoninergico. Estos no son peligros teoricos.

Contarle a todos. No le debes a nadie una explicacion de lo que estas haciendo. Muchas personas tendran opiniones fuertes sobre los psicodelicos, y manejar esas opiniones antes de la sesion anade estres innecesario. Dile a las personas que necesitan saber (tu guia, tu contacto de emergencia), y deja el resto para despues de la integracion, si acaso.

Descuidar el regreso. La mayoria de la preparacion se enfoca en la experiencia misma. Menos personas se preparan para el reingreso: el primer dia de vuelta al trabajo, la primera interaccion social, el momento en que las percepciones comienzan a desvanecerse y la vida ordinaria se reafirma. Esto es cuando la integracion mas importa, y es la parte para la que la mayoria esta menos preparada.

Ir solo sin experiencia. Una primera experiencia psicodelica sin ninguna forma de apoyo, ya sea un terapeuta, facilitador o acompanante experimentado, conlleva un riesgo innecesario. La experiencia puede ser profundamente desorientadora. Tener a alguien presente que pueda ofrecer tranquilidad, proporcionar agua y simplemente sostener el espacio reduce la probabilidad de resultados adversos significativamente. Esto no es sobre debilidad. Es sobre inteligencia.

La preparacion no se trata de controlar lo que sucedera. Eso no es posible. La preparacion se trata de construir un contenedor lo suficientemente fuerte para sostener lo que surja. Preparacion fisica, honestidad psicologica, planificacion practica, y la humildad de encontrar la experiencia en sus propios terminos, en lugar de los tuyos.`,
        },
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
