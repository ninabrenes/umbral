import type { LegalJurisdiction } from '@/types'

export const legalJurisdictions: LegalJurisdiction[] = [
  {
    country: 'United States',
    status: 'gray-area',
    notes: {
      en: 'Federal Schedule I. Oregon legalized psilocybin therapy (Measure 109, services began 2023). Colorado passed the Natural Medicine Health Act (2022), establishing regulated access to psilocybin and other natural psychedelics. Several cities have deprioritized enforcement. FDA declined the Lykos Therapeutics MDMA therapy application in August 2024, citing study design concerns.',
      es: 'Clasificación federal Schedule I. Oregón legalizó la terapia con psilocibina (Medida 109, servicios desde 2023). Colorado aprobó la Ley de Medicina Natural (2022), estableciendo acceso regulado a la psilocibina y otros psicodélicos naturales. Varias ciudades han reducido la prioridad de aplicación. La FDA rechazó la solicitud de terapia con MDMA de Lykos Therapeutics en agosto de 2024, citando preocupaciones sobre el diseño del estudio.',
    },
  },
  {
    country: 'Canada',
    status: 'illegal',
    notes: {
      en: 'Psilocybin and most psychedelics are Schedule III controlled substances. Individual exemptions granted by Health Canada for research and end-of-life therapy. Growing advocacy for broader access.',
      es: 'La psilocibina y la mayoría de los psicodélicos son sustancias controladas de Schedule III. Se otorgan exenciones individuales por Health Canada para investigación y terapia de fin de vida. Creciente defensa por acceso más amplio.',
    },
  },
  {
    country: 'Brazil',
    status: 'legal',
    notes: {
      en: 'Ayahuasca is legal for religious and ceremonial use, protected since 1992. Psilocybin mushrooms exist in a legal gray area — not explicitly scheduled but sale may be prosecuted.',
      es: 'La ayahuasca es legal para uso religioso y ceremonial, protegida desde 1992. Los hongos de psilocibina existen en un área gris legal — no están explícitamente programados pero su venta puede ser procesada.',
    },
  },
  {
    country: 'Netherlands',
    status: 'gray-area',
    notes: {
      en: 'Psilocybin truffles (sclerotia) are legal and sold in smart shops. Psilocybin mushrooms were banned in 2008. Other psychedelics remain controlled. Retreats using truffles operate legally.',
      es: 'Las trufas de psilocibina (esclerotia) son legales y se venden en smart shops. Los hongos de psilocibina fueron prohibidos en 2008. Otros psicodélicos siguen siendo controlados. Los retiros con trufas operan legalmente.',
    },
  },
  {
    country: 'Jamaica',
    status: 'legal',
    notes: {
      en: 'Psilocybin mushrooms are not scheduled under Jamaican law. Retreat centers operate openly. No specific legislation regulates or restricts their use.',
      es: 'Los hongos de psilocibina no están programados bajo la ley jamaicana. Los centros de retiro operan abiertamente. No existe legislación específica que regule o restrinja su uso.',
    },
  },
  {
    country: 'Costa Rica',
    status: 'gray-area',
    notes: {
      en: 'Psilocybin mushrooms and ayahuasca are not explicitly scheduled. No specific prohibition or legalization exists. Retreat centers operate in this legal ambiguity. Always consult local legal counsel.',
      es: 'Los hongos de psilocibina y la ayahuasca no están explícitamente programados. No existe prohibición ni legalización específica. Los centros de retiro operan en esta ambigüedad legal. Siempre consulte a un abogado local.',
    },
  },
  {
    country: 'Portugal',
    status: 'decriminalized',
    notes: {
      en: 'All drugs decriminalized for personal use since 2001. Possession of small amounts is an administrative offense, not criminal. Sale and trafficking remain illegal. Focus on harm reduction and treatment.',
      es: 'Todas las drogas despenalizadas para uso personal desde 2001. La posesión de pequeñas cantidades es una infracción administrativa, no penal. La venta y el tráfico siguen siendo ilegales. Enfoque en reducción de daños y tratamiento.',
    },
  },
  {
    country: 'Mexico',
    status: 'gray-area',
    notes: {
      en: 'Traditional and ceremonial use of psilocybin mushrooms and peyote by indigenous communities is legally protected. Outside of this context, psychedelics are controlled substances. Small amounts for personal use have been decriminalized.',
      es: 'El uso tradicional y ceremonial de hongos de psilocibina y peyote por comunidades indígenas está legalmente protegido. Fuera de este contexto, los psicodélicos son sustancias controladas. Pequeñas cantidades para uso personal han sido despenalizadas.',
    },
  },
  {
    country: 'Australia',
    status: 'medical',
    notes: {
      en: 'Since July 2023, authorized psychiatrists can prescribe MDMA for PTSD and psilocybin for treatment-resistant depression. Australia is the first country to formally recognize these as medicines. Recreational use remains illegal.',
      es: 'Desde julio de 2023, psiquiatras autorizados pueden recetar MDMA para TEPT y psilocibina para depresión resistente al tratamiento. Australia es el primer país en reconocer formalmente estos como medicamentos. El uso recreativo sigue siendo ilegal.',
    },
  },
  {
    country: 'United Kingdom',
    status: 'illegal',
    notes: {
      en: 'Psilocybin, MDMA, LSD, and DMT are Class A substances under the Misuse of Drugs Act 1971. Research exemptions exist but are difficult to obtain. Active clinical trials at Imperial College London and other institutions.',
      es: 'La psilocibina, MDMA, LSD y DMT son sustancias de Clase A bajo la Ley de Uso Indebido de Drogas de 1971. Existen exenciones para investigación pero son difíciles de obtener. Ensayos clínicos activos en Imperial College London y otras instituciones.',
    },
  },
  {
    country: 'Spain',
    status: 'gray-area',
    notes: {
      en: 'Personal use and private consumption are not criminalized. Smart shops sell psilocybin truffles and related products. Public consumption and sale can be penalized. Ayahuasca retreats operate in legal ambiguity.',
      es: 'El uso personal y el consumo privado no están penalizados. Las smart shops venden trufas de psilocibina y productos relacionados. El consumo público y la venta pueden ser sancionados. Los retiros de ayahuasca operan en ambigüedad legal.',
    },
  },
  {
    country: 'Switzerland',
    status: 'medical',
    notes: {
      en: 'Compassionate use exemptions allow licensed physicians to administer psilocybin, MDMA, and LSD to patients who have not responded to conventional treatments. Switzerland has a growing number of therapists offering psychedelic-assisted therapy under these exemptions. Research is active at the University of Basel and University of Zurich.',
      es: 'Las exenciones de uso compasivo permiten a médicos licenciados administrar psilocibina, MDMA y LSD a pacientes que no han respondido a tratamientos convencionales. Suiza tiene un número creciente de terapeutas que ofrecen terapia asistida con psicodélicos bajo estas exenciones. La investigación está activa en la Universidad de Basilea y la Universidad de Zúrich.',
    },
  },
  {
    country: 'Peru',
    status: 'legal',
    notes: {
      en: 'Ayahuasca is legal and recognized as national cultural patrimony since 2008. Ceremonial and traditional use is protected. A significant retreat and ceremony tourism industry operates openly.',
      es: 'La ayahuasca es legal y reconocida como patrimonio cultural nacional desde 2008. El uso ceremonial y tradicional está protegido. Una industria significativa de retiros y turismo ceremonial opera abiertamente.',
    },
  },
]
