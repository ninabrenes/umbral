// ─────────────────────────────────────────────────────────────────────────────
// Expanded research sources for Umbral
// Papers, books, and organizations in psychedelic preparation & integration
// ─────────────────────────────────────────────────────────────────────────────

export interface Paper {
  id: string
  title: string
  authors: string
  year: number
  journal: string
  url: string
  summary: { en: string; es: string }
  category: string
}

export interface Book {
  id: string
  title: string
  author: string
  year: number
  description: { en: string; es: string }
  category: string
}

export interface Organization {
  id: string
  name: string
  url: string
  focus: string
  description: { en: string; es: string }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAPERS (30)
// ─────────────────────────────────────────────────────────────────────────────

export const papers: Paper[] = [
  // ── psilocybin therapy clinical trials ──
  {
    id: 'griffiths-2006',
    title: 'Psilocybin can occasion mystical-type experiences having substantial and sustained personal meaning and spiritual significance',
    authors: 'Griffiths, R.R. et al.',
    year: 2006,
    journal: 'Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16826400/',
    summary: {
      en: 'Landmark double-blind study demonstrating that psilocybin reliably produces mystical experiences rated among the most personally meaningful events in participants\' lives.',
      es: 'Estudio pionero doble ciego que demuestra que la psilocibina produce de forma fiable experiencias místicas calificadas entre los eventos más significativos en la vida de los participantes.',
    },
    category: 'psilocybin-clinical',
  },
  {
    id: 'griffiths-2016',
    title: 'Psilocybin produces substantial and sustained decreases in depression and anxiety in patients with life-threatening cancer: a randomized double-blind trial',
    authors: 'Griffiths, R.R. et al.',
    year: 2016,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/27909165/',
    summary: {
      en: 'High-dose psilocybin produced large and sustained decreases in clinician-rated and self-rated depression and anxiety in cancer patients, with 80% showing clinically significant reductions at 6 months.',
      es: 'Dosis altas de psilocibina produjeron disminuciones grandes y sostenidas en depresión y ansiedad en pacientes con cáncer, con un 80% mostrando reducciones clínicamente significativas a los 6 meses.',
    },
    category: 'psilocybin-clinical',
  },
  {
    id: 'carhart-harris-2021',
    title: 'Trial of psilocybin versus escitalopram for depression',
    authors: 'Carhart-Harris, R.L. et al.',
    year: 2021,
    journal: 'New England Journal of Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33852780/',
    summary: {
      en: 'First head-to-head comparison of psilocybin versus a leading SSRI for major depression, finding psilocybin was not inferior on the primary outcome and showed advantages on several secondary measures.',
      es: 'Primera comparación directa de psilocibina versus un ISRS líder para depresión mayor, encontrando que la psilocibina no fue inferior en el resultado primario y mostró ventajas en varias medidas secundarias.',
    },
    category: 'psilocybin-clinical',
  },
  {
    id: 'davis-2021',
    title: 'Effects of psilocybin-assisted therapy on major depressive disorder: a randomized clinical trial',
    authors: 'Davis, A.K. et al.',
    year: 2021,
    journal: 'JAMA Psychiatry',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33146667/',
    summary: {
      en: 'Johns Hopkins randomized trial showing psilocybin-assisted therapy produced rapid, large, and sustained antidepressant effects in patients with major depressive disorder.',
      es: 'Ensayo aleatorizado de Johns Hopkins que muestra que la terapia asistida con psilocibina produjo efectos antidepresivos rápidos, grandes y sostenidos en pacientes con trastorno depresivo mayor.',
    },
    category: 'psilocybin-clinical',
  },
  {
    id: 'goodwin-2022',
    title: 'Single-dose psilocybin for a treatment-resistant episode of major depression',
    authors: 'Goodwin, G.M. et al.',
    year: 2022,
    journal: 'New England Journal of Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36322843/',
    summary: {
      en: 'COMPASS Pathways Phase IIb trial demonstrating that a single 25mg dose of synthetic psilocybin significantly reduced depression scores in treatment-resistant patients at 3 weeks.',
      es: 'Ensayo de fase IIb de COMPASS Pathways que demuestra que una dosis única de 25mg de psilocibina sintética redujo significativamente las puntuaciones de depresión en pacientes resistentes al tratamiento a las 3 semanas.',
    },
    category: 'psilocybin-clinical',
  },

  // ── MDMA-assisted therapy ──
  {
    id: 'mitchell-2021',
    title: 'MDMA-assisted therapy for severe PTSD: a randomized, double-blind, placebo-controlled phase 3 study',
    authors: 'Mitchell, J.M. et al.',
    year: 2021,
    journal: 'Nature Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33972795/',
    summary: {
      en: 'Phase 3 MAPS trial showing MDMA-assisted therapy led to significant and clinically meaningful improvement in PTSD symptoms, with 67% of participants no longer qualifying for a PTSD diagnosis.',
      es: 'Ensayo de fase 3 de MAPS que muestra que la terapia asistida con MDMA llevó a una mejora significativa y clínicamente relevante en síntomas de TEPT, con un 67% de participantes que ya no cumplían criterios diagnósticos.',
    },
    category: 'mdma-therapy',
  },
  {
    id: 'mithoefer-2019',
    title: 'MDMA-assisted psychotherapy for treatment of PTSD: study design and rationale for phase 3 trials based on pooled analysis of six phase 2 randomized controlled trials',
    authors: 'Mithoefer, M.C. et al.',
    year: 2019,
    journal: 'Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30604183/',
    summary: {
      en: 'Pooled analysis of six Phase 2 MDMA-PTSD trials showing large effect sizes and durable treatment responses, providing the basis for Phase 3 trial design.',
      es: 'Análisis agrupado de seis ensayos de fase 2 de MDMA-TEPT que muestra grandes tamaños de efecto y respuestas terapéuticas duraderas, proporcionando la base para el diseño de ensayos de fase 3.',
    },
    category: 'mdma-therapy',
  },

  // ── integration frameworks ──
  {
    id: 'brennan-2022',
    title: 'An open clinical framework for psychedelic-assisted therapy: EMBARK',
    authors: 'Brennan, W. & Belser, A.B.',
    year: 2022,
    journal: 'Frontiers in Psychology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35719571/',
    summary: {
      en: 'Introduces EMBARK, a transdiagnostic clinical framework for psychedelic-assisted therapy organized around six domains: Existential-Spiritual, Mindfulness, Body Aware, Affective-Cognitive, Relational, and Keeping Momentum.',
      es: 'Introduce EMBARK, un marco clínico transdiagnóstico para terapia asistida con psicodélicos organizado en seis dominios: Existencial-Espiritual, Atención Plena, Conciencia Corporal, Afectivo-Cognitivo, Relacional y Mantener el Impulso.',
    },
    category: 'integration-frameworks',
  },
  {
    id: 'bathje-2022',
    title: 'Psychedelic integration: an analysis of the concept and its practice',
    authors: 'Bathje, G.J. et al.',
    year: 2022,
    journal: 'Frontiers in Psychology',
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.824077/full',
    summary: {
      en: 'Comprehensive analysis defining psychedelic integration as a process of making sense of and incorporating psychedelic experiences into daily life, identifying key practices and therapeutic approaches.',
      es: 'Análisis integral que define la integración psicodélica como un proceso de dar sentido e incorporar experiencias psicodélicas en la vida cotidiana, identificando prácticas clave y enfoques terapéuticos.',
    },
    category: 'integration-frameworks',
  },
  {
    id: 'watts-2020',
    title: 'The use of the psychological flexibility model to support psychedelic-assisted therapy',
    authors: 'Watts, R. & Luoma, J.B.',
    year: 2020,
    journal: 'Journal of Contextual Behavioral Science',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33777674/',
    summary: {
      en: 'Proposes the ACE (Accept, Connect, Embody) model linking Acceptance and Commitment Therapy\'s psychological flexibility framework with psychedelic-assisted therapy processes.',
      es: 'Propone el modelo ACE (Aceptar, Conectar, Encarnar) que vincula el marco de flexibilidad psicológica de la Terapia de Aceptación y Compromiso con los procesos de terapia asistida con psicodélicos.',
    },
    category: 'integration-frameworks',
  },

  // ── music and psychedelics ──
  {
    id: 'kaelen-2018',
    title: 'The hidden therapist: evidence for a central role of music in psychedelic therapy',
    authors: 'Kaelen, M. et al.',
    year: 2018,
    journal: 'Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29285609/',
    summary: {
      en: 'Demonstrates that music plays a central therapeutic role in psychedelic sessions, with the degree of resonance between music and subjective experience predicting therapeutic outcomes.',
      es: 'Demuestra que la música juega un papel terapéutico central en las sesiones psicodélicas, con el grado de resonancia entre la música y la experiencia subjetiva prediciendo los resultados terapéuticos.',
    },
    category: 'music-psychedelics',
  },
  {
    id: 'barrett-2017',
    title: 'Qualitative and quantitative features of music reported to support peak mystical experiences during psychedelic therapy sessions',
    authors: 'Barrett, F.S. et al.',
    year: 2017,
    journal: 'Frontiers in Psychology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28790944/',
    summary: {
      en: 'Identifies specific musical features — regular, predictable, slow tempo with sustained tones — that best support peak mystical experiences during psilocybin sessions.',
      es: 'Identifica características musicales específicas — tempo regular, predecible y lento con tonos sostenidos — que mejor apoyan las experiencias místicas cumbre durante sesiones con psilocibina.',
    },
    category: 'music-psychedelics',
  },

  // ── nature-relatedness ──
  {
    id: 'lyons-2018',
    title: 'Increased nature-relatedness and decreased authoritarian political views after psilocybin for treatment-resistant depression',
    authors: 'Lyons, T. & Carhart-Harris, R.L.',
    year: 2018,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29442493/',
    summary: {
      en: 'Patients with treatment-resistant depression showed lasting increases in nature-relatedness after psilocybin therapy, suggesting psychedelics can shift ecological awareness.',
      es: 'Pacientes con depresión resistente al tratamiento mostraron aumentos duraderos en la conexión con la naturaleza después de terapia con psilocibina, sugiriendo que los psicodélicos pueden cambiar la conciencia ecológica.',
    },
    category: 'nature-relatedness',
  },
  {
    id: 'kettner-2019',
    title: 'From egoism to ecoism: psychedelics increase nature relatedness in a state-mediated and context-dependent manner',
    authors: 'Kettner, H. et al.',
    year: 2019,
    journal: 'International Journal of Environmental Research and Public Health',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31905937/',
    summary: {
      en: 'Large survey study showing psychedelic use increases nature-relatedness, mediated by ego-dissolution and context (ceremonial settings showed stronger effects).',
      es: 'Estudio de encuesta a gran escala que muestra que el uso de psicodélicos aumenta la conexión con la naturaleza, mediado por la disolución del ego y el contexto (entornos ceremoniales mostraron efectos más fuertes).',
    },
    category: 'nature-relatedness',
  },

  // ── mystical experience and outcomes ──
  {
    id: 'griffiths-2011',
    title: 'Psilocybin occasioned mystical-type experiences: immediate and persisting dose-related effects',
    authors: 'Griffiths, R.R. et al.',
    year: 2011,
    journal: 'Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21674151/',
    summary: {
      en: 'Established dose-response relationship for psilocybin-occasioned mystical experiences and showed that higher doses produce more complete mystical experiences with sustained positive outcomes.',
      es: 'Estableció la relación dosis-respuesta para experiencias místicas ocasionadas por psilocibina y mostró que dosis más altas producen experiencias místicas más completas con resultados positivos sostenidos.',
    },
    category: 'mystical-experience',
  },
  {
    id: 'barrett-2016',
    title: 'The Challenging Experience Questionnaire: characterization of challenging experiences with psilocybin mushrooms',
    authors: 'Barrett, F.S. et al.',
    year: 2016,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/27578767/',
    summary: {
      en: 'Developed and validated the Challenging Experience Questionnaire (CEQ) to measure difficult dimensions of psychedelic experiences including grief, fear, physical distress, insanity, isolation, death, and paranoia.',
      es: 'Desarrolló y validó el Cuestionario de Experiencias Desafiantes (CEQ) para medir dimensiones difíciles de las experiencias psicodélicas incluyendo duelo, miedo, malestar físico, locura, aislamiento, muerte y paranoia.',
    },
    category: 'mystical-experience',
  },

  // ── safety and contraindications ──
  {
    id: 'johnson-2008',
    title: 'Human hallucinogen research: guidelines for safety',
    authors: 'Johnson, M.W., Richards, W.A. & Griffiths, R.R.',
    year: 2008,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18593735/',
    summary: {
      en: 'Foundational safety guidelines for human hallucinogen research covering screening, preparation, session conduct, and follow-up — the gold standard reference for clinical psychedelic safety.',
      es: 'Directrices fundamentales de seguridad para investigación con alucinógenos en humanos que cubren evaluación, preparación, conducción de sesiones y seguimiento — la referencia estándar para seguridad clínica psicodélica.',
    },
    category: 'safety',
  },
  {
    id: 'johnson-2019',
    title: 'Classic psychedelics: an integrative review of epidemiology, therapeutics, mystical experience, and brain network function',
    authors: 'Johnson, M.W., Hendricks, P.S., Barrett, F.S. & Griffiths, R.R.',
    year: 2019,
    journal: 'Pharmacology & Therapeutics',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30521880/',
    summary: {
      en: 'Comprehensive integrative review covering psychedelic epidemiology, therapeutic applications, the role of mystical experience, and brain network mechanisms of action.',
      es: 'Revisión integradora completa que cubre epidemiología psicodélica, aplicaciones terapéuticas, el papel de la experiencia mística y los mecanismos de acción en redes cerebrales.',
    },
    category: 'safety',
  },

  // ── neuroscience (REBUS, DMN, neuroplasticity) ──
  {
    id: 'carhart-harris-2012',
    title: 'Neural correlates of the psychedelic state as determined by fMRI studies with psilocybin',
    authors: 'Carhart-Harris, R.L. et al.',
    year: 2012,
    journal: 'Proceedings of the National Academy of Sciences',
    url: 'https://pubmed.ncbi.nlm.nih.gov/22308440/',
    summary: {
      en: 'Landmark neuroimaging study showing that psilocybin decreases activity in the default mode network (DMN), challenging the assumption that psychedelic effects come from increased brain activity and establishing the DMN disruption model.',
      es: 'Estudio pionero de neuroimagen que muestra que la psilocibina disminuye la actividad en la red de modo predeterminado (DMN), desafiando la suposición de que los efectos psicodélicos provienen de mayor actividad cerebral y estableciendo el modelo de interrupción del DMN.',
    },
    category: 'neuroscience',
  },
  {
    id: 'carhart-harris-2019',
    title: 'REBUS and the Anarchic Brain: toward a unified model of the brain action of psychedelics',
    authors: 'Carhart-Harris, R.L. & Friston, K.J.',
    year: 2019,
    journal: 'Pharmacological Reviews',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31221820/',
    summary: {
      en: 'Presents the REBUS (Relaxed Beliefs Under Psychedelics) model proposing that psychedelics work by relaxing the precision of high-level priors, increasing brain entropy, and enabling revision of entrenched beliefs.',
      es: 'Presenta el modelo REBUS (Creencias Relajadas Bajo Psicodélicos) proponiendo que los psicodélicos funcionan relajando la precisión de los priors de alto nivel, aumentando la entropía cerebral y permitiendo la revisión de creencias arraigadas.',
    },
    category: 'neuroscience',
  },
  {
    id: 'palhano-fontes-2019',
    title: 'Rapid antidepressant effects of the psychedelic ayahuasca in treatment-resistant depression: a randomized placebo-controlled trial',
    authors: 'Palhano-Fontes, F. et al.',
    year: 2019,
    journal: 'Psychological Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28655341/',
    summary: {
      en: 'First randomized placebo-controlled trial of ayahuasca for treatment-resistant depression, showing significant antidepressant effects within 7 days of a single dose.',
      es: 'Primer ensayo aleatorizado controlado con placebo de ayahuasca para depresión resistente al tratamiento, mostrando efectos antidepresivos significativos dentro de los 7 días posteriores a una dosis única.',
    },
    category: 'neuroscience',
  },
  {
    id: 'doss-2021',
    title: 'Psilocybin therapy increases cognitive and neural flexibility in patients with major depressive disorder',
    authors: 'Doss, M.K. et al.',
    year: 2021,
    journal: 'Translational Psychiatry',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34819489/',
    summary: {
      en: 'Demonstrates that psilocybin therapy increases both cognitive flexibility and neural flexibility (measured by fMRI) in depressed patients, with changes persisting weeks after treatment.',
      es: 'Demuestra que la terapia con psilocibina aumenta tanto la flexibilidad cognitiva como la flexibilidad neural (medida por fMRI) en pacientes deprimidos, con cambios que persisten semanas después del tratamiento.',
    },
    category: 'neuroscience',
  },
  {
    id: 'ly-2018',
    title: 'Psychedelics promote structural and functional neural plasticity',
    authors: 'Ly, C. et al.',
    year: 2018,
    journal: 'Cell Reports',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29898390/',
    summary: {
      en: 'Shows that psychedelics including LSD, psilocin, and DMT promote neuritogenesis and spinogenesis comparable to ketamine, suggesting neuroplasticity as a shared mechanism of action.',
      es: 'Muestra que psicodélicos incluyendo LSD, psilocina y DMT promueven la neuritogénesis y la espinogénesis de forma comparable a la ketamina, sugiriendo la neuroplasticidad como un mecanismo de acción compartido.',
    },
    category: 'neuroscience',
  },

  // ── indigenous knowledge and ethics ──
  {
    id: 'lancet-2023',
    title: 'Ethical principles of traditional indigenous medicine to guide Western psychedelic research and practice',
    authors: 'The Lancet Regional Health Americas',
    year: 2023,
    journal: 'The Lancet Regional Health — Americas',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9950658/',
    summary: {
      en: 'Proposes ethical principles for Western psychedelic research derived from indigenous medicinal traditions, addressing reciprocity, benefit-sharing, and cultural respect.',
      es: 'Propone principios éticos para la investigación psicodélica occidental derivados de tradiciones medicinales indígenas, abordando reciprocidad, distribución de beneficios y respeto cultural.',
    },
    category: 'indigenous-ethics',
  },
  {
    id: 'george-2020',
    title: 'Ancient roots of today\'s emerging renaissance in psychedelic medicine',
    authors: 'George, J.R. et al.',
    year: 2020,
    journal: 'Culture, Medicine, and Psychiatry',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31782063/',
    summary: {
      en: 'Traces the lineage of contemporary psychedelic therapy to indigenous traditions including Mazatec, Amazonian, and Native American practices, arguing for cultural acknowledgment and ethical engagement.',
      es: 'Traza el linaje de la terapia psicodélica contemporánea a tradiciones indígenas incluyendo prácticas Mazatecas, Amazónicas y Nativas Americanas, argumentando por el reconocimiento cultural y el compromiso ético.',
    },
    category: 'indigenous-ethics',
  },

  // ── harm reduction ──
  {
    id: 'gorman-2021',
    title: 'Psychedelic harm reduction and integration: a transtheoretical model for clinical practice',
    authors: 'Gorman, I. et al.',
    year: 2021,
    journal: 'Frontiers in Psychology',
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.645246/full',
    summary: {
      en: 'Proposes a transtheoretical model for psychedelic harm reduction and integration in clinical practice, bridging multiple therapeutic orientations.',
      es: 'Propone un modelo transteórico para la reducción de daños e integración psicodélica en la práctica clínica, uniendo múltiples orientaciones terapéuticas.',
    },
    category: 'harm-reduction',
  },
  {
    id: 'zendo-2021',
    title: 'Psychedelic peer support: analysis of support provided to individuals reporting psychedelic crises at music festivals',
    authors: 'Gael, A. et al.',
    year: 2021,
    journal: 'Psychedelic Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39850530/',
    summary: {
      en: 'Analysis of Zendo Project peer support at music festivals showing that compassionate, non-clinical psychedelic crisis intervention effectively reduces emergency medical utilization.',
      es: 'Análisis del apoyo entre pares del Proyecto Zendo en festivales de música que muestra que la intervención compasiva y no clínica en crisis psicodélicas reduce efectivamente la utilización de emergencias médicas.',
    },
    category: 'harm-reduction',
  },

  // ── set and setting ──
  {
    id: 'carhart-harris-2018',
    title: 'The importance of context: set and setting in psychedelic-assisted therapy',
    authors: 'Carhart-Harris, R.L. et al.',
    year: 2018,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29446697/',
    summary: {
      en: 'Provides empirical evidence for the critical role of set (mindset) and setting (environment) in determining psychedelic therapy outcomes, formalizing what indigenous traditions have long known.',
      es: 'Proporciona evidencia empírica del papel crítico del set (estado mental) y setting (entorno) en los resultados de la terapia psicodélica, formalizando lo que las tradiciones indígenas han sabido desde hace mucho.',
    },
    category: 'set-and-setting',
  },
  {
    id: 'haijen-2018',
    title: 'Predicting responses to psychedelics: a prospective study',
    authors: 'Haijen, E.C.H.M. et al.',
    year: 2018,
    journal: 'Frontiers in Pharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30459605/',
    summary: {
      en: 'Prospective study identifying psychological variables — including absorption, openness, and intention — that predict the quality and character of psychedelic experiences.',
      es: 'Estudio prospectivo que identifica variables psicológicas — incluyendo absorción, apertura e intención — que predicen la calidad y el carácter de las experiencias psicodélicas.',
    },
    category: 'set-and-setting',
  },

  // ── long-term outcomes ──
  {
    id: 'griffiths-2008',
    title: 'Mystical-type experiences occasioned by psilocybin mediate the attribution of personal meaning and spiritual significance 14 months later',
    authors: 'Griffiths, R.R. et al.',
    year: 2008,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18593734/',
    summary: {
      en: '14-month follow-up demonstrating sustained positive changes in attitudes, mood, and behavior following psilocybin-occasioned mystical experiences, with 67% rating it among their top 5 most meaningful life experiences.',
      es: 'Seguimiento a 14 meses que demuestra cambios positivos sostenidos en actitudes, estado de ánimo y comportamiento después de experiencias místicas ocasionadas por psilocibina, con un 67% calificándola entre sus 5 experiencias más significativas.',
    },
    category: 'long-term-outcomes',
  },
  {
    id: 'agin-liebes-2020',
    title: 'Long-term follow-up of psilocybin-assisted psychotherapy for psychiatric and existential distress in patients with life-threatening cancer',
    authors: 'Agin-Liebes, G.I. et al.',
    year: 2020,
    journal: 'Journal of Psychopharmacology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31916890/',
    summary: {
      en: '4.5-year follow-up showing psilocybin-assisted therapy produced sustained reductions in anxiety and depression in cancer patients, with approximately 70-80% attributing positive life changes to the experience.',
      es: 'Seguimiento a 4.5 años que muestra que la terapia asistida con psilocibina produjo reducciones sostenidas en ansiedad y depresión en pacientes con cáncer, con aproximadamente 70-80% atribuyendo cambios vitales positivos a la experiencia.',
    },
    category: 'long-term-outcomes',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// BOOKS (20)
// ─────────────────────────────────────────────────────────────────────────────

export const books: Book[] = [
  {
    id: 'pollan-2018',
    title: 'How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence',
    author: 'Michael Pollan',
    year: 2018,
    description: {
      en: 'Accessible investigation of the psychedelic renaissance blending the author\'s personal experimentation with reporting on cutting-edge neuroscience and clinical research.',
      es: 'Investigación accesible del renacimiento psicodélico que combina la experimentación personal del autor con reportajes sobre neurociencia de vanguardia e investigación clínica.',
    },
    category: 'science',
  },
  {
    id: 'van-der-kolk-2014',
    title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    author: 'Bessel van der Kolk',
    year: 2014,
    description: {
      en: 'Seminal work on how trauma reshapes the body and brain, and why somatic approaches — relevant to psychedelic preparation — are essential to healing.',
      es: 'Obra fundamental sobre cómo el trauma remodela el cuerpo y el cerebro, y por qué los enfoques somáticos — relevantes para la preparación psicodélica — son esenciales para la sanación.',
    },
    category: 'integration',
  },
  {
    id: 'kornfield-2000',
    title: 'After the Ecstasy, the Laundry: How the Heart Grows Wise on the Spiritual Path',
    author: 'Jack Kornfield',
    year: 2000,
    description: {
      en: 'Essential guide to the integration challenge: what happens when peak spiritual experiences meet the demands of ordinary life.',
      es: 'Guía esencial sobre el desafío de la integración: qué sucede cuando las experiencias espirituales cumbre se encuentran con las demandas de la vida cotidiana.',
    },
    category: 'contemplative',
  },
  {
    id: 'grof-1980',
    title: 'LSD Psychotherapy: The Healing Potential of Psychedelic Medicine',
    author: 'Stanislav Grof',
    year: 1980,
    description: {
      en: 'Foundational text from the pioneer of psychedelic-assisted psychotherapy, documenting therapeutic frameworks developed over thousands of supervised LSD sessions.',
      es: 'Texto fundacional del pionero de la psicoterapia asistida con psicodélicos, documentando marcos terapéuticos desarrollados a lo largo de miles de sesiones supervisadas con LSD.',
    },
    category: 'science',
  },
  {
    id: 'grof-1985',
    title: 'Beyond the Brain: Birth, Death, and Transcendence in Psychotherapy',
    author: 'Stanislav Grof',
    year: 1985,
    description: {
      en: 'Proposes the concept of perinatal and transpersonal matrices of consciousness, expanding the cartography of psychedelic experience beyond the biographical.',
      es: 'Propone el concepto de matrices perinatales y transpersonales de la conciencia, expandiendo la cartografía de la experiencia psicodélica más allá de lo biográfico.',
    },
    category: 'science',
  },
  {
    id: 'fadiman-2011',
    title: 'The Psychedelic Explorer\'s Guide: Safe, Therapeutic, and Sacred Journeys',
    author: 'James Fadiman',
    year: 2011,
    description: {
      en: 'Practical handbook covering preparation, session management, and integration protocols drawn from decades of psychedelic research and personal guidance.',
      es: 'Manual práctico que cubre protocolos de preparación, manejo de sesiones e integración basados en décadas de investigación psicodélica y guía personal.',
    },
    category: 'practice',
  },
  {
    id: 'ram-dass-1971',
    title: 'Be Here Now',
    author: 'Ram Dass',
    year: 1971,
    description: {
      en: 'Countercultural classic bridging psychedelic experience and Eastern contemplative practice, influential in shaping the spiritual integration of psychedelics.',
      es: 'Clásico contracultural que une la experiencia psicodélica con la práctica contemplativa oriental, influyente en la integración espiritual de los psicodélicos.',
    },
    category: 'contemplative',
  },
  {
    id: 'huxley-1954',
    title: 'The Doors of Perception',
    author: 'Aldous Huxley',
    year: 1954,
    description: {
      en: 'Foundational essay on mescaline experience that introduced psychedelic phenomenology to Western intellectual culture and coined the "reducing valve" theory of consciousness.',
      es: 'Ensayo fundacional sobre la experiencia con mescalina que introdujo la fenomenología psicodélica en la cultura intelectual occidental y acuñó la teoría de la "válvula reductora" de la conciencia.',
    },
    category: 'science',
  },
  {
    id: 'schwartz-2021',
    title: 'No Bad Parts: Healing Trauma and Restoring Wholeness with the Internal Family Systems Model',
    author: 'Richard C. Schwartz',
    year: 2021,
    description: {
      en: 'Accessible introduction to Internal Family Systems therapy, increasingly used as an integration framework for working with psychedelic material involving inner parts and protectors.',
      es: 'Introducción accesible a la terapia de Sistemas Familiares Internos, cada vez más utilizada como marco de integración para trabajar con material psicodélico que involucra partes internas y protectores.',
    },
    category: 'integration',
  },
  {
    id: 'mate-2022',
    title: 'The Myth of Normal: Trauma, Illness, and Healing in a Toxic Culture',
    author: 'Gabor Maté',
    year: 2022,
    description: {
      en: 'Argues that trauma and chronic illness are products of a disconnected culture, providing context for why psychedelic healing resonates so deeply in modern society.',
      es: 'Argumenta que el trauma y la enfermedad crónica son productos de una cultura desconectada, proporcionando contexto sobre por qué la sanación psicodélica resuena tan profundamente en la sociedad moderna.',
    },
    category: 'integration',
  },
  {
    id: 'mate-2008',
    title: 'In the Realm of Hungry Ghosts: Close Encounters with Addiction',
    author: 'Gabor Maté',
    year: 2008,
    description: {
      en: 'Explores the roots of addiction in trauma and disconnection, providing essential context for understanding psychedelic-assisted approaches to substance use disorders.',
      es: 'Explora las raíces de la adicción en el trauma y la desconexión, proporcionando contexto esencial para entender los enfoques asistidos con psicodélicos para trastornos por uso de sustancias.',
    },
    category: 'integration',
  },
  {
    id: 'levine-1997',
    title: 'Waking the Tiger: Healing Trauma',
    author: 'Peter A. Levine',
    year: 1997,
    description: {
      en: 'Introduces Somatic Experiencing, a body-based approach to trauma resolution directly relevant to the somatic dimensions of psychedelic experience and integration.',
      es: 'Introduce la Experiencia Somática, un enfoque corporal para la resolución del trauma directamente relevante a las dimensiones somáticas de la experiencia psicodélica y la integración.',
    },
    category: 'integration',
  },
  {
    id: 'estes-1992',
    title: 'Women Who Run With the Wolves: Myths and Stories of the Wild Woman Archetype',
    author: 'Clarissa Pinkola Estés',
    year: 1992,
    description: {
      en: 'Jungian analysis of myths and fairy tales as maps of the psyche, used as an archetypal framework for making sense of psychedelic imagery and inner journeys.',
      es: 'Análisis junguiano de mitos y cuentos de hadas como mapas de la psique, utilizado como marco arquetípico para dar sentido a las imágenes psicodélicas y los viajes interiores.',
    },
    category: 'contemplative',
  },
  {
    id: 'salzberg-2017',
    title: 'Real Love: The Art of Mindful Connection',
    author: 'Sharon Salzberg',
    year: 2017,
    description: {
      en: 'Teaches lovingkindness meditation and compassion practices that serve as powerful preparation and integration tools for psychedelic experiences.',
      es: 'Enseña meditación de bondad amorosa y prácticas de compasión que sirven como herramientas poderosas de preparación e integración para experiencias psicodélicas.',
    },
    category: 'contemplative',
  },
  {
    id: 'harris-2014',
    title: 'Waking Up: A Guide to Spirituality Without Religion',
    author: 'Sam Harris',
    year: 2014,
    description: {
      en: 'Neuroscientist\'s exploration of meditation and consciousness that contextualizes psychedelic experience within a secular contemplative framework.',
      es: 'Exploración de un neurocientífico sobre meditación y conciencia que contextualiza la experiencia psicodélica dentro de un marco contemplativo secular.',
    },
    category: 'contemplative',
  },
  {
    id: 'strassman-2001',
    title: 'DMT: The Spirit Molecule',
    author: 'Rick Strassman',
    year: 2001,
    description: {
      en: 'Account of the first FDA-approved clinical research with DMT in decades, documenting the extraordinary range of reported experiences from 60 volunteers.',
      es: 'Relato de la primera investigación clínica aprobada por la FDA con DMT en décadas, documentando la extraordinaria gama de experiencias reportadas por 60 voluntarios.',
    },
    category: 'science',
  },
  {
    id: 'mckenna-1992',
    title: 'Food of the Gods: The Search for the Original Tree of Knowledge',
    author: 'Terence McKenna',
    year: 1992,
    description: {
      en: 'Provocative exploration of the relationship between psychoactive plants and the development of human culture, language, and consciousness.',
      es: 'Exploración provocadora de la relación entre plantas psicoactivas y el desarrollo de la cultura humana, el lenguaje y la conciencia.',
    },
    category: 'indigenous',
  },
  {
    id: 'bourzat-2019',
    title: 'Consciousness Medicine: Indigenous Wisdom, Entheogens, and Expanded States of Consciousness for Healing and Growth',
    author: 'Françoise Bourzat',
    year: 2019,
    description: {
      en: 'Bridges indigenous Mazatec mushroom healing traditions with modern therapeutic practice, offering a comprehensive guide to preparation, ceremony, and integration.',
      es: 'Conecta las tradiciones de sanación con hongos Mazatecas con la práctica terapéutica moderna, ofreciendo una guía completa de preparación, ceremonia e integración.',
    },
    category: 'indigenous',
  },
  {
    id: 'richards-2015',
    title: 'Sacred Knowledge: Psychedelics and Religious Experiences',
    author: 'William A. Richards',
    year: 2015,
    description: {
      en: 'Draws on 50+ years of clinical psychedelic research to explore the relationship between psychedelic mystical experiences and the world\'s contemplative traditions.',
      es: 'Se basa en más de 50 años de investigación clínica psicodélica para explorar la relación entre las experiencias místicas psicodélicas y las tradiciones contemplativas del mundo.',
    },
    category: 'science',
  },
  {
    id: 'brennan-belser-2024',
    title: 'EMBARK Psychedelic Therapy: A Practitioner\'s Guide',
    author: 'Bill Brennan & Alexander B. Belser',
    year: 2024,
    description: {
      en: 'The definitive clinical manual for the EMBARK framework, providing therapists with a structured, transdiagnostic approach to psychedelic-assisted therapy across its six clinical domains.',
      es: 'El manual clínico definitivo del marco EMBARK, proporcionando a los terapeutas un enfoque estructurado y transdiagnóstico para la terapia asistida con psicodélicos a través de sus seis dominios clínicos.',
    },
    category: 'practice',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// ORGANIZATIONS (18)
// ─────────────────────────────────────────────────────────────────────────────

export const organizations: Organization[] = [
  {
    id: 'johns-hopkins',
    name: 'Johns Hopkins Center for Psychedelic & Consciousness Research',
    url: 'https://hopkinspsychedelic.org/',
    focus: 'research',
    description: {
      en: 'Leading academic research center conducting clinical trials on psilocybin for depression, addiction, existential distress, and other conditions.',
      es: 'Centro de investigación académica líder que realiza ensayos clínicos con psilocibina para depresión, adicción, angustia existencial y otras condiciones.',
    },
  },
  {
    id: 'maps',
    name: 'Multidisciplinary Association for Psychedelic Studies (MAPS)',
    url: 'https://maps.org/',
    focus: 'research',
    description: {
      en: 'Nonprofit research organization that has led the effort to make MDMA-assisted therapy an FDA-approved treatment for PTSD since 1986.',
      es: 'Organización de investigación sin fines de lucro que ha liderado el esfuerzo para hacer de la terapia asistida con MDMA un tratamiento aprobado por la FDA para TEPT desde 1986.',
    },
  },
  {
    id: 'imperial-college',
    name: 'Imperial College Centre for Psychedelic Research',
    url: 'https://www.imperial.ac.uk/psychedelic-research-centre/',
    focus: 'research',
    description: {
      en: 'World\'s first academic center dedicated to psychedelic research, led by Robin Carhart-Harris, pioneering neuroimaging studies and the REBUS model.',
      es: 'Primer centro académico del mundo dedicado a la investigación psicodélica, dirigido por Robin Carhart-Harris, pionero en estudios de neuroimagen y el modelo REBUS.',
    },
  },
  {
    id: 'fireside-project',
    name: 'Fireside Project',
    url: 'https://firesideproject.org/',
    focus: 'support',
    description: {
      en: 'Free peer support line (62-FIRESIDE) providing confidential emotional support during and after psychedelic experiences, available via phone and text.',
      es: 'Línea gratuita de apoyo entre pares (62-FIRESIDE) que proporciona apoyo emocional confidencial durante y después de experiencias psicodélicas, disponible por teléfono y mensaje de texto.',
    },
  },
  {
    id: 'zendo-project',
    name: 'Zendo Project (MAPS)',
    url: 'https://zfrprjct.org/',
    focus: 'harm-reduction',
    description: {
      en: 'MAPS-affiliated harm reduction service providing psychedelic peer support at festivals and events using compassionate, non-clinical crisis intervention.',
      es: 'Servicio de reducción de daños afiliado a MAPS que proporciona apoyo entre pares psicodélico en festivales y eventos usando intervención compasiva y no clínica en crisis.',
    },
  },
  {
    id: 'chacruna',
    name: 'Chacruna Institute for Psychedelic Plant Medicines',
    url: 'https://chacruna.net/',
    focus: 'indigenous-advocacy',
    description: {
      en: 'Bridges the worlds of plant medicine communities and psychedelic science, centering indigenous knowledge, cultural preservation, and equitable access.',
      es: 'Conecta los mundos de las comunidades de medicina vegetal y la ciencia psicodélica, centrando el conocimiento indígena, la preservación cultural y el acceso equitativo.',
    },
  },
  {
    id: 'iceers',
    name: 'International Center for Ethnobotanical Education, Research, and Service (ICEERS)',
    url: 'https://www.iceers.org/',
    focus: 'indigenous-advocacy',
    description: {
      en: 'International nonprofit dedicated to integrating traditional plant medicines into modern society through education, research, and legal defense.',
      es: 'Organización internacional sin fines de lucro dedicada a integrar las medicinas vegetales tradicionales en la sociedad moderna a través de educación, investigación y defensa legal.',
    },
  },
  {
    id: 'usona',
    name: 'Usona Institute',
    url: 'https://www.usonainstitute.org/',
    focus: 'research',
    description: {
      en: 'Nonprofit conducting large-scale clinical trials of psilocybin for major depressive disorder, working toward FDA approval as a public benefit.',
      es: 'Organización sin fines de lucro que realiza ensayos clínicos a gran escala de psilocibina para trastorno depresivo mayor, trabajando hacia la aprobación de la FDA como beneficio público.',
    },
  },
  {
    id: 'compass-pathways',
    name: 'COMPASS Pathways',
    url: 'https://compasspathways.com/',
    focus: 'research',
    description: {
      en: 'Mental health care company developing psilocybin therapy (COMP360) for treatment-resistant depression, with the largest Phase IIb psilocybin trial to date.',
      es: 'Empresa de salud mental que desarrolla terapia con psilocibina (COMP360) para depresión resistente al tratamiento, con el mayor ensayo de fase IIb de psilocibina hasta la fecha.',
    },
  },
  {
    id: 'beckley-foundation',
    name: 'Beckley Foundation',
    url: 'https://www.beckleyfoundation.org/',
    focus: 'research',
    description: {
      en: 'Research foundation pioneering studies on consciousness and drug policy reform, collaborating with Imperial College on landmark LSD and psilocybin neuroimaging studies.',
      es: 'Fundación de investigación pionera en estudios sobre conciencia y reforma de políticas de drogas, colaborando con Imperial College en estudios de neuroimagen de LSD y psilocibina.',
    },
  },
  {
    id: 'heffter',
    name: 'Heffter Research Institute',
    url: 'https://heffter.org/',
    focus: 'research',
    description: {
      en: 'Nonprofit funding rigorous scientific research on psilocybin since 1993, supporting key studies at Johns Hopkins, NYU, and other leading institutions.',
      es: 'Organización sin fines de lucro que financia investigación científica rigurosa sobre psilocibina desde 1993, apoyando estudios clave en Johns Hopkins, NYU y otras instituciones líderes.',
    },
  },
  {
    id: 'dancesafe',
    name: 'DanceSafe',
    url: 'https://dancesafe.org/',
    focus: 'harm-reduction',
    description: {
      en: 'Public health organization promoting safety at music events through drug checking services, education, and evidence-based harm reduction.',
      es: 'Organización de salud pública que promueve la seguridad en eventos musicales a través de servicios de verificación de sustancias, educación y reducción de daños basada en evidencia.',
    },
  },
  {
    id: 'psychedelic-support',
    name: 'Psychedelic Support',
    url: 'https://psychedelic.support/',
    focus: 'support',
    description: {
      en: 'Online directory connecting people with psychedelic integration therapists, guides, and coaches, plus educational resources for practitioners.',
      es: 'Directorio en línea que conecta a las personas con terapeutas de integración psicodélica, guías y coaches, además de recursos educativos para profesionales.',
    },
  },
  {
    id: 'wavepaths',
    name: 'Wavepaths',
    url: 'https://wavepaths.com/',
    focus: 'research',
    description: {
      en: 'Music technology platform founded by Mendel Kaelen creating adaptive, generative music designed specifically for psychedelic and therapeutic experiences.',
      es: 'Plataforma de tecnología musical fundada por Mendel Kaelen que crea música adaptativa y generativa diseñada específicamente para experiencias psicodélicas y terapéuticas.',
    },
  },
  {
    id: 'embark',
    name: 'EMBARK',
    url: 'https://www.embarktraining.com/',
    focus: 'training',
    description: {
      en: 'Training program teaching the EMBARK clinical framework for psychedelic-assisted therapy, developed by Bill Brennan and Alexander Belser.',
      es: 'Programa de formación que enseña el marco clínico EMBARK para terapia asistida con psicodélicos, desarrollado por Bill Brennan y Alexander Belser.',
    },
  },
  {
    id: 'fluence',
    name: 'Fluence',
    url: 'https://fluencetraining.com/',
    focus: 'training',
    description: {
      en: 'Leading psychedelic therapy training program offering evidence-based education for licensed clinicians preparing to incorporate psychedelics into their practice.',
      es: 'Programa líder de formación en terapia psicodélica que ofrece educación basada en evidencia para clínicos licenciados que se preparan para incorporar psicodélicos en su práctica.',
    },
  },
  {
    id: 'numinus',
    name: 'Numinus Wellness',
    url: 'https://numinus.com/',
    focus: 'research',
    description: {
      en: 'Healthcare company offering psychedelic-assisted therapy services and conducting clinical trials, operating treatment centers in North America.',
      es: 'Empresa de salud que ofrece servicios de terapia asistida con psicodélicos y realiza ensayos clínicos, operando centros de tratamiento en Norteamérica.',
    },
  },
  {
    id: 'trip',
    name: 'TRIPsit',
    url: 'https://tripsit.me/',
    focus: 'harm-reduction',
    description: {
      en: 'Volunteer-run harm reduction organization providing 24/7 online peer support, drug interaction charts, and factsheets for psychoactive substances.',
      es: 'Organización de reducción de daños dirigida por voluntarios que proporciona apoyo entre pares en línea 24/7, gráficos de interacciones de sustancias y fichas informativas sobre sustancias psicoactivas.',
    },
  },
]
