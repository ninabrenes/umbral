export type Severity = 'critical' | 'high' | 'moderate' | 'unknown'

export interface Contraindication {
  id: string
  name: { en: string; es: string }
  risk: { en: string; es: string }
  severity: Severity
  action: { en: string; es: string }
  sources: string[]
}

export const contraindications: Contraindication[] = [
  {
    id: 'lithium',
    name: { en: 'Lithium', es: 'Litio' },
    risk: { en: 'Seizures', es: 'Convulsiones' },
    severity: 'critical',
    action: {
      en: 'Do not combine psilocybin with lithium under any circumstances. Consult your prescribing physician.',
      es: 'No combines psilocibina con litio bajo ninguna circunstancia. Consulta a tu médico.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/34348413/'],
  },
  {
    id: 'psychosis-history',
    name: {
      en: 'Personal or family history of psychotic disorders',
      es: 'Historia personal o familiar de trastornos psicóticos',
    },
    risk: {
      en: 'Triggered or worsened psychosis',
      es: 'Psicosis desencadenada o empeorada',
    },
    severity: 'critical',
    action: {
      en: 'Screen carefully with a mental health professional before any psychedelic experience. Family history of schizophrenia or bipolar I is a strong contraindication.',
      es: 'Evalúa cuidadosamente con un profesional de salud mental antes de cualquier experiencia psicodélica.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
  {
    id: 'ssri',
    name: { en: 'SSRIs / SNRIs', es: 'ISRS / IRSN' },
    risk: {
      en: 'Reduced effects or serotonin syndrome risk',
      es: 'Efectos reducidos o riesgo de síndrome serotoninérgico',
    },
    severity: 'high',
    action: {
      en: 'Do not discontinue medication without medical supervision. Discuss timing and risks with your prescribing physician.',
      es: 'No descontinúes medicación sin supervisión médica. Discute tiempos y riesgos con tu médico.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/34348413/'],
  },
  {
    id: 'maoi',
    name: { en: 'MAOIs', es: 'IMAOs' },
    risk: {
      en: 'Dangerous interactions, hypertensive crisis',
      es: 'Interacciones peligrosas, crisis hipertensiva',
    },
    severity: 'critical',
    action: {
      en: 'MAOIs combined with certain psychedelics (especially ayahuasca combinations) can be life-threatening. Consult your physician.',
      es: 'Los IMAOs combinados con ciertos psicodélicos pueden ser potencialmente mortales. Consulta a tu médico.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
  {
    id: 'cardiovascular',
    name: {
      en: 'Cardiovascular conditions',
      es: 'Condiciones cardiovasculares',
    },
    risk: {
      en: 'Elevated heart rate and blood pressure',
      es: 'Frecuencia cardíaca y presión arterial elevadas',
    },
    severity: 'high',
    action: {
      en: 'Psychedelics can temporarily increase heart rate and blood pressure. Consult your cardiologist.',
      es: 'Los psicodélicos pueden aumentar temporalmente la frecuencia cardíaca y la presión arterial. Consulta a tu cardiólogo.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
  {
    id: 'pregnancy',
    name: { en: 'Pregnancy', es: 'Embarazo' },
    risk: {
      en: 'Unknown fetal effects',
      es: 'Efectos fetales desconocidos',
    },
    severity: 'high',
    action: {
      en: 'There is insufficient research on psychedelic use during pregnancy. Consult your healthcare provider.',
      es: 'No hay suficiente investigación sobre el uso de psicodélicos durante el embarazo. Consulta a tu profesional de salud.',
    },
    sources: [],
  },
  {
    id: 'tramadol',
    name: { en: 'Tramadol', es: 'Tramadol' },
    risk: {
      en: 'Seizures and serotonin syndrome',
      es: 'Convulsiones y síndrome serotoninérgico',
    },
    severity: 'critical',
    action: {
      en: 'Tramadol lowers seizure threshold and has serotonergic activity. Combining with psychedelics can cause seizures or serotonin syndrome. Consult your prescribing physician.',
      es: 'El tramadol reduce el umbral convulsivo y tiene actividad serotoninérgica. Combinarlo con psicodélicos puede causar convulsiones o síndrome serotoninérgico. Consulta a tu médico.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
  {
    id: 'bipolar-disorder',
    name: {
      en: 'Bipolar disorder (Type I and II)',
      es: 'Trastorno bipolar (Tipo I y II)',
    },
    risk: {
      en: 'Manic episodes or psychotic breaks',
      es: 'Episodios maníacos o brotes psicóticos',
    },
    severity: 'critical',
    action: {
      en: 'Bipolar disorder, especially Type I, is a strong contraindication for psychedelic use due to risk of triggering manic or psychotic episodes. Most clinical trials exclude participants with bipolar disorder. Consult your psychiatrist.',
      es: 'El trastorno bipolar, especialmente Tipo I, es una fuerte contraindicación para el uso de psicodélicos debido al riesgo de desencadenar episodios maníacos o psicóticos. La mayoría de los ensayos clínicos excluyen a participantes con trastorno bipolar. Consulta a tu psiquiatra.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
  {
    id: 'seizure-disorders',
    name: {
      en: 'Seizure disorders / Epilepsy',
      es: 'Trastornos convulsivos / Epilepsia',
    },
    risk: {
      en: 'Lowered seizure threshold',
      es: 'Umbral convulsivo reducido',
    },
    severity: 'high',
    action: {
      en: 'Some psychedelics may lower seizure threshold. If you have epilepsy or a seizure disorder, consult your neurologist before any psychedelic experience.',
      es: 'Algunos psicodélicos pueden reducir el umbral convulsivo. Si tienes epilepsia o un trastorno convulsivo, consulta a tu neurólogo antes de cualquier experiencia psicodélica.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
]
