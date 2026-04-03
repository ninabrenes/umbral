import type { Source } from '@/types'

export const sources: Source[] = [
  // ── published research ──
  {
    id: 'johnson-2008',
    title: 'Human hallucinogen research: guidelines for safety',
    authors: 'Johnson, M.W., Richards, W.A., & Griffiths, R.R.',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18593735/',
    type: 'paper',
  },
  {
    id: 'carhart-harris-2019',
    title: 'REBUS and the Anarchic Brain: toward a unified model of the brain action of psychedelics',
    authors: 'Carhart-Harris, R.L. & Friston, K.J.',
    year: 2019,
    url: 'https://pubmed.ncbi.nlm.nih.gov/31104773/',
    type: 'paper',
  },
  {
    id: 'kaelen-2018',
    title: 'The hidden therapist: evidence for a central role of music in psychedelic therapy',
    authors: 'Kaelen, M. et al.',
    year: 2018,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5893695/',
    type: 'paper',
  },
  {
    id: 'bathje-2022',
    title: 'Psychedelic integration: an analysis of the concept and its practice',
    authors: 'Bathje, G.J. et al.',
    year: 2022,
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.824077/full',
    type: 'paper',
  },
  {
    id: 'watts-2020',
    title: 'The use of the psychological flexibility model to support psychedelic-assisted therapy',
    authors: 'Watts, R. & Luoma, J.B.',
    year: 2020,
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S2212144719301437',
    type: 'paper',
  },
  {
    id: 'brennan-2022',
    title: 'EMBARK: an open clinical framework for psychedelic-assisted therapy',
    authors: 'Brennan, W. & Belser, A.B.',
    year: 2022,
    url: 'https://pubmed.ncbi.nlm.nih.gov/35719571/',
    type: 'paper',
  },
  {
    id: 'lyons-2018',
    title: 'Increased nature-relatedness and decreased authoritarian political views after psilocybin',
    authors: 'Lyons, T. & Carhart-Harris, R.L.',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29442493/',
    type: 'paper',
  },
  {
    id: 'barrett-2017',
    title: 'Qualitative and quantitative features of music reported to support peak mystical experiences during psychedelic therapy sessions',
    authors: 'Barrett, F.S. et al.',
    year: 2017,
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.01238/full',
    type: 'paper',
  },
  {
    id: 'lancet-2023',
    title: 'Ethical principles of traditional indigenous medicine to guide Western psychedelic research and practice',
    authors: 'The Lancet Regional Health Americas',
    year: 2023,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9950658/',
    type: 'paper',
  },

  // ── organizations ──
  {
    id: 'johns-hopkins',
    title: 'Johns Hopkins Center for Psychedelic and Consciousness Research',
    authors: 'Johns Hopkins University',
    year: 2019,
    url: 'https://hopkinspsychedelic.org/',
    type: 'organization',
  },
  {
    id: 'maps',
    title: 'Multidisciplinary Association for Psychedelic Studies (MAPS)',
    authors: 'MAPS',
    year: 1986,
    url: 'https://maps.org/',
    type: 'organization',
  },
  {
    id: 'fireside-project',
    title: 'Fireside Project',
    authors: 'Fireside Project',
    year: 2020,
    url: 'https://firesideproject.org/',
    type: 'organization',
  },
  {
    id: 'chacruna',
    title: 'Chacruna Institute for Psychedelic Plant Medicines',
    authors: 'Chacruna Institute',
    year: 2017,
    url: 'https://chacruna.net/',
    type: 'organization',
  },

  // ── books ──
  {
    id: 'pollan-2018',
    title: 'How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence',
    authors: 'Pollan, Michael',
    year: 2018,
    url: 'https://michaelpollan.com/books/how-to-change-your-mind/',
    type: 'book',
  },
  {
    id: 'van-der-kolk-2014',
    title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    authors: 'van der Kolk, Bessel',
    year: 2014,
    url: 'https://www.besselvanderkolk.com/resources/the-body-keeps-the-score',
    type: 'book',
  },
  {
    id: 'kornfield-2000',
    title: 'After the Ecstasy, the Laundry: How the Heart Grows Wise on the Spiritual Path',
    authors: 'Kornfield, Jack',
    year: 2000,
    url: 'https://jackkornfield.com/after-the-ecstasy-the-laundry/',
    type: 'book',
  },
]

export const papers = sources.filter((s) => s.type === 'paper')
export const organizations = sources.filter((s) => s.type === 'organization')
export const books = sources.filter((s) => s.type === 'book')
