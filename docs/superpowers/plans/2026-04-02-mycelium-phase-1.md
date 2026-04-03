# Mycelium Phase 1: Foundation + Public Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold the Mycelium project from zero to deployed public site with bilingual content, blog infrastructure, the Mycelial Network framework pages, and crisis resources — ready for Phase 2 (auth + portal).

**Architecture:** Next.js App Router with `[locale]` route segments for EN/ES. Public site is all server components (SSR for SEO). Light/editorial aesthetic for public pages. Blog via MDX. Crisis resources component rendered on every page. No auth in this phase — portal pages show a "coming soon" state with email capture.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4 (OKLCH @theme tokens), GSAP + ScrollTrigger + Lenis (scroll animations), Motion (page transitions), next-intl (i18n), MDX (blog), Vercel (deploy).

**Spec:** [`docs/specs/2026-04-02-mycelium-prd.md`](../../specs/2026-04-02-mycelium-prd.md)
**Framework:** [`docs/framework/00-the-mycelial-network.md`](../../framework/00-the-mycelial-network.md)
**Research:** [`docs/research/00-mycelium-research-synthesis.md`](../../research/00-mycelium-research-synthesis.md)

---

## File Structure

```
mycelium/
  src/
    app/
      [locale]/
        layout.tsx                 # root layout: fonts, metadata, nav, footer, crisis bar, lenis
        page.tsx                   # home / landing page
        science/page.tsx           # the evidence base
        framework/page.tsx         # the mycelial network explained
        framework/[node]/page.tsx  # individual node deep dive (ground, roots, spore, weave, fruit, canopy)
        safety/page.tsx            # contraindications, crisis resources, harm reduction
        about/page.tsx             # open source, reciprocity, team
        blog/page.tsx              # blog index
        blog/[slug]/page.tsx       # individual blog post (MDX)
        legal/page.tsx             # legal status by jurisdiction + disclaimers
        portal/page.tsx            # coming soon + email capture
      api/
        waitlist/route.ts          # email capture endpoint (Resend or simple storage)
    components/
      ui/
        Button.tsx                 # primary, secondary, ghost variants
        Section.tsx                # consistent section wrapper with spacing
        SectionHeader.tsx          # label + heading + subtitle pattern
        Card.tsx                   # glass card for dark contexts, warm card for light
        CrisisBar.tsx              # always-visible crisis resources strip
        CrisisPanel.tsx            # expanded crisis resources (safety page)
        ScrollReveal.tsx           # GSAP scroll-triggered reveal
        TextReveal.tsx             # GSAP character/word reveal for headings
        ImageReveal.tsx            # GSAP curtain wipe for images
        Badge.tsx                  # node badges, category badges
        LanguageToggle.tsx         # EN/ES switcher
      layout/
        Nav.tsx                    # editorial nav with language toggle
        Footer.tsx                 # links, crisis resources, reciprocity
        PageWrapper.tsx            # motion page transitions
        Logo.tsx                   # mycelium wordmark
        LenisProvider.tsx          # smooth scroll wrapper
      framework/
        NodeCard.tsx               # visual card for each of the 6 nodes
        PolarityDiagram.tsx        # the temporal-energetic arc visualization
        ProcessSteps.tsx           # receive → recognize → return visual
    lib/
      fonts.ts                     # cormorant garamond + dm sans / jost via next/font
      animations.ts                # GSAP config, scroll reveal defaults, motion presets
      i18n/
        request.ts                 # next-intl request config
        routing.ts                 # locale routing config
      metadata.ts                  # shared metadata helpers
    content/
      blog/
        en/
          what-is-psychedelic-integration.mdx
          the-science-of-psilocybin.mdx
          preparing-for-your-first-experience.mdx
        es/
          que-es-la-integracion-psicodelica.mdx
          la-ciencia-de-la-psilocibina.mdx
          preparandote-para-tu-primera-experiencia.mdx
      framework/
        nodes.ts                   # 6 node definitions (name, description, polarity, chakra, icon)
        prompts.ts                 # journal prompts per node (EN + ES)
        sources.ts                 # cited sources per node with URLs
      safety/
        contraindications.ts       # structured contraindication data
        crisis-resources.ts        # crisis hotlines per locale
        legal-status.ts            # jurisdiction data
    messages/
      en.json                      # next-intl English translations
      es.json                      # next-intl Spanish translations
    styles/
      globals.css                  # tailwind v4 @theme tokens (light + dark palettes, OKLCH)
    types/
      index.ts                     # BlogPost, Node, Prompt, Source, CrisisResource, Locale
  middleware.ts                    # next-intl locale detection + routing
  next.config.ts                   # next-intl plugin, MDX config
  tailwind.config.ts               # if needed beyond @theme (v4 may not need this)
  mdx-components.tsx               # MDX component overrides
```

---

## Task 1: Project Scaffold

**Files:**
- Create: entire project structure via `create-next-app`
- Create: `src/styles/globals.css`
- Create: `src/lib/fonts.ts`
- Create: `src/types/index.ts`
- Create: `tailwind.config.ts` (if needed)
- Create: `next.config.ts`

- [ ] **Step 1: Create Next.js project**

```bash
npx create-next-app@latest mycelium --typescript --tailwind --app --src-dir --turbopack
cd mycelium
```

- [ ] **Step 2: Install dependencies**

```bash
npm install gsap @gsap/react lenis motion lucide-react next-intl @next/mdx @mdx-js/loader @mdx-js/react
npm install -D @types/mdx
```

Note: check next-intl and @next/mdx docs via context7 before configuring — APIs may have changed.

- [ ] **Step 3: Create types**

```typescript
// src/types/index.ts

export type Locale = 'en' | 'es'

export type NodeId = 'ground' | 'roots' | 'spore' | 'weave' | 'fruit' | 'canopy'

export type Polarity = 'masculine' | 'feminine' | 'both'

export interface FrameworkNode {
  id: NodeId
  name: { en: string; es: string }
  tagline: { en: string; es: string }
  description: { en: string; es: string }
  polarity: Polarity
  chakra?: { name: string; sanskrit: string }
  icon: string
}

export interface JournalPrompt {
  id: string
  nodeId: NodeId
  text: { en: string; es: string }
  phase: 'preparation' | 'integration'
}

export interface Source {
  id: string
  title: string
  authors: string
  year: number
  url: string
  type: 'paper' | 'book' | 'organization' | 'podcast' | 'video'
}

export interface CrisisResource {
  name: { en: string; es: string }
  description: { en: string; es: string }
  contact: string
  href: string
  locales: Locale[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  locale: Locale
  category: string
  sources: Source[]
}

export interface LegalJurisdiction {
  country: string
  status: 'legal' | 'decriminalized' | 'medical' | 'illegal' | 'gray-area'
  notes: { en: string; es: string }
}
```

- [ ] **Step 4: Create font configuration**

```typescript
// src/lib/fonts.ts
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

export const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})
```

- [ ] **Step 5: Create design tokens in globals.css**

```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  /* ── PUBLIC SITE (light editorial) ── */
  --color-cream: oklch(0.96 0.01 80);
  --color-sand: oklch(0.92 0.03 65);
  --color-moon: oklch(0.97 0.005 80);
  --color-ink: oklch(0.20 0.02 150);
  --color-ink-muted: oklch(0.45 0.02 150);

  /* ── FOREST PALETTE (portal + accents) ── */
  --color-forest-deep: oklch(0.10 0.02 150);
  --color-forest: oklch(0.15 0.03 150);
  --color-moss: oklch(0.35 0.06 150);
  --color-sage: oklch(0.55 0.08 150);
  --color-sage-light: oklch(0.70 0.06 150);

  /* ── ACCENTS ── */
  --color-gold: oklch(0.70 0.12 85);
  --color-gold-muted: oklch(0.60 0.08 85);
  --color-ivory: oklch(0.95 0.01 80);

  /* ── CRISIS (high contrast always) ── */
  --color-crisis-bg: oklch(0.20 0.05 25);
  --color-crisis-text: oklch(0.95 0.01 80);
  --color-crisis-accent: oklch(0.65 0.15 25);

  /* ── TYPOGRAPHY ── */
  --font-serif: var(--font-serif);
  --font-sans: var(--font-sans);

  /* ── SPACING ── */
  --space-section: 8rem;
  --space-section-lg: 12rem;

  /* ── BORDER RADIUS ── */
  --radius-card: 1.25rem;
  --radius-pill: 9999px;
}

/* ── BASE ── */
body {
  font-family: var(--font-sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

/* ── REDUCED MOTION ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: successful build with no errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "scaffold: init mycelium with next.js, tailwind v4, fonts, types, design tokens"
```

---

## Task 2: i18n Setup (next-intl)

**Files:**
- Create: `src/lib/i18n/request.ts`
- Create: `src/lib/i18n/routing.ts`
- Create: `src/messages/en.json`
- Create: `src/messages/es.json`
- Create: `middleware.ts`
- Modify: `next.config.ts`

**Important:** Check next-intl docs via context7 BEFORE implementing — the API changes frequently.

- [ ] **Step 1: Check next-intl docs**

```bash
# Use context7 MCP tool to fetch current next-intl docs
```

Read the App Router setup guide. Note the exact middleware, routing, and request configuration patterns for the current version.

- [ ] **Step 2: Create routing config**

```typescript
// src/lib/i18n/routing.ts
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
})
```

- [ ] **Step 3: Create request config**

```typescript
// src/lib/i18n/request.ts
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  }
})
```

- [ ] **Step 4: Create initial message files**

```json
// src/messages/en.json
{
  "meta": {
    "title": "Mycelium — Psychedelic Preparation & Integration",
    "description": "Free, open-source, evidence-informed psychedelic preparation and integration portal."
  },
  "nav": {
    "science": "Science",
    "framework": "The Framework",
    "safety": "Safety",
    "blog": "Blog",
    "about": "About",
    "portal": "Enter Portal",
    "language": "ES"
  },
  "crisis": {
    "title": "Crisis Resources",
    "subtitle": "If you need immediate support",
    "emergency": "If you are in immediate danger, call emergency services.",
    "fireside": "Fireside Project — Psychedelic Support",
    "988": "988 Suicide & Crisis Lifeline",
    "text": "Crisis Text Line — Text HOME to 741741",
    "samhsa": "SAMHSA Helpline"
  },
  "footer": {
    "disclaimer": "Mycelium is an educational tool. It does not provide medical care, therapy, or professional services.",
    "openSource": "Open source",
    "reciprocity": "Indigenous Reciprocity",
    "privacy": "Your data is yours"
  }
}
```

```json
// src/messages/es.json
{
  "meta": {
    "title": "Mycelium — Preparacion e Integracion Psicodelica",
    "description": "Portal gratuito, de codigo abierto e informado por evidencia para la preparacion e integracion psicodelica."
  },
  "nav": {
    "science": "Ciencia",
    "framework": "El Marco",
    "safety": "Seguridad",
    "blog": "Blog",
    "about": "Acerca de",
    "portal": "Entrar al Portal",
    "language": "EN"
  },
  "crisis": {
    "title": "Recursos de Crisis",
    "subtitle": "Si necesitas apoyo inmediato",
    "emergency": "Si estas en peligro inmediato, llama a servicios de emergencia.",
    "fireside": "Fireside Project — Apoyo Psicodelico",
    "988": "988 Linea de Suicidio y Crisis",
    "text": "Crisis Text Line — Envia HOME al 741741",
    "samhsa": "Linea de Ayuda SAMHSA"
  },
  "footer": {
    "disclaimer": "Mycelium es una herramienta educativa. No proporciona atencion medica, terapia ni servicios profesionales.",
    "openSource": "Codigo abierto",
    "reciprocity": "Reciprocidad Indigena",
    "privacy": "Tus datos son tuyos"
  }
}
```

- [ ] **Step 5: Create middleware**

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/lib/i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
```

- [ ] **Step 6: Update next.config.ts**

Follow the exact pattern from next-intl docs (checked in step 1). This typically involves the `createNextIntlPlugin` wrapper.

- [ ] **Step 7: Create the [locale] layout**

```typescript
// src/app/[locale]/layout.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/lib/i18n/routing'
import { serif, sans } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mycelium — Psychedelic Preparation & Integration',
  description: 'Free, open-source, evidence-informed psychedelic preparation and integration portal.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream text-ink font-sans font-light antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 8: Create a minimal home page to verify i18n works**

```typescript
// src/app/[locale]/page.tsx
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('meta')
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-serif text-5xl font-light">{t('title')}</h1>
    </main>
  )
}
```

- [ ] **Step 9: Verify i18n routing**

```bash
npm run dev
# Visit http://localhost:3000/en — should show English title
# Visit http://localhost:3000/es — should show Spanish title
# Visit http://localhost:3000 — should redirect to /en
```

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "add bilingual i18n with next-intl, EN/ES message files, locale routing"
```

---

## Task 3: Content Data Layer

**Files:**
- Create: `src/content/framework/nodes.ts`
- Create: `src/content/framework/sources.ts`
- Create: `src/content/safety/crisis-resources.ts`
- Create: `src/content/safety/contraindications.ts`
- Create: `src/content/safety/legal-status.ts`

- [ ] **Step 1: Create the 6 framework nodes**

```typescript
// src/content/framework/nodes.ts
import type { FrameworkNode } from '@/types'

export const nodes: FrameworkNode[] = [
  {
    id: 'ground',
    name: { en: 'Ground', es: 'Tierra' },
    tagline: {
      en: 'Body, nervous system, physical resilience',
      es: 'Cuerpo, sistema nervioso, resiliencia fisica',
    },
    description: {
      en: 'The physical container that holds the experience. Sleep, nutrition, exercise, breathwork, somatic awareness, nervous system regulation.',
      es: 'El contenedor fisico que sostiene la experiencia. Sueno, nutricion, ejercicio, respiracion, conciencia somatica, regulacion del sistema nervioso.',
    },
    polarity: 'masculine',
    chakra: { name: 'Root', sanskrit: 'Muladhara' },
    icon: '⬡',
  },
  {
    id: 'roots',
    name: { en: 'Roots', es: 'Raices' },
    tagline: {
      en: 'Nature, ecology, earth connection',
      es: 'Naturaleza, ecologia, conexion con la tierra',
    },
    description: {
      en: 'Your relationship with the natural world. Ecological awareness, biophilia, the felt sense of interconnection that psychedelic experiences produce.',
      es: 'Tu relacion con el mundo natural. Conciencia ecologica, biofilia, la sensacion de interconexion que las experiencias psicodelicas producen.',
    },
    polarity: 'feminine',
    chakra: { name: 'Root + Sacral', sanskrit: 'Muladhara + Svadhisthana' },
    icon: '◎',
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
      es: 'Percepcion psicologica. Mecanismos de defensa. Procesamiento de disolucion del ego. Material de sombra. Trabajo de partes. Autoconciencia. Atencion plena. Expresion creativa.',
    },
    polarity: 'feminine',
    chakra: { name: 'Sacral + Third Eye', sanskrit: 'Svadhisthana + Ajna' },
    icon: '◇',
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
      es: 'Como la experiencia afecta tus relaciones. Patrones de apego. Comunicacion. Comunidad. Apoyo entre pares. Servicio como integracion — convertir la percepcion en accion para otros.',
    },
    polarity: 'both',
    chakra: { name: 'Heart + Throat', sanskrit: 'Anahata + Vishuddha' },
    icon: '◈',
  },
  {
    id: 'fruit',
    name: { en: 'Fruit', es: 'Fruto' },
    tagline: {
      en: 'Values, meaning, committed action',
      es: 'Valores, significado, accion comprometida',
    },
    description: {
      en: 'Values clarification. Alignment between what you say matters and how you actually live. Behavioral commitments. Lifestyle changes. This is where revelation becomes daily practice.',
      es: 'Clarificacion de valores. Alineacion entre lo que dices que importa y como realmente vives. Compromisos de comportamiento. Cambios de estilo de vida. Aqui es donde la revelacion se convierte en practica diaria.',
    },
    polarity: 'masculine',
    chakra: { name: 'Solar Plexus + Throat', sanskrit: 'Manipura + Vishuddha' },
    icon: '◉',
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
      es: 'Procesamiento de experiencias misticas. Encuentros con la muerte, la impermanencia, el infinito. Disolucion del ego. Lo sagrado y numinoso. Creacion de significado mas alla de lo personal.',
    },
    polarity: 'feminine',
    chakra: { name: 'Third Eye + Crown', sanskrit: 'Ajna + Sahasrara' },
    icon: '✦',
  },
]
```

- [ ] **Step 2: Create crisis resources data**

```typescript
// src/content/safety/crisis-resources.ts
import type { CrisisResource } from '@/types'

export const crisisResources: CrisisResource[] = [
  {
    name: { en: 'Fireside Project', es: 'Fireside Project' },
    description: {
      en: 'Psychedelic peer support — before, during, and after',
      es: 'Apoyo entre pares psicodelico — antes, durante y despues',
    },
    contact: '623-473-7433',
    href: 'tel:6234737433',
    locales: ['en', 'es'],
  },
  {
    name: { en: '988 Suicide & Crisis Lifeline', es: '988 Linea de Suicidio y Crisis' },
    description: {
      en: 'US national mental health crisis line',
      es: 'Linea nacional de crisis de salud mental de EE.UU.',
    },
    contact: '988',
    href: 'tel:988',
    locales: ['en', 'es'],
  },
  {
    name: { en: 'Crisis Text Line', es: 'Crisis Text Line' },
    description: {
      en: 'Text HOME to 741741',
      es: 'Envia HOME al 741741',
    },
    contact: '741741',
    href: 'sms:741741',
    locales: ['en', 'es'],
  },
  {
    name: { en: 'SAMHSA Helpline', es: 'Linea de Ayuda SAMHSA' },
    description: {
      en: 'Substance use & mental health — 24/7',
      es: 'Uso de sustancias y salud mental — 24/7',
    },
    contact: '1-800-662-4357',
    href: 'tel:18006624357',
    locales: ['en', 'es'],
  },
]
```

- [ ] **Step 3: Create contraindications data**

```typescript
// src/content/safety/contraindications.ts

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
      es: 'No combines psilocibina con litio bajo ninguna circunstancia. Consulta a tu medico.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/34348413/'],
  },
  {
    id: 'psychosis-history',
    name: {
      en: 'Personal or family history of psychotic disorders',
      es: 'Historia personal o familiar de trastornos psicoticos',
    },
    risk: {
      en: 'Triggered or worsened psychosis',
      es: 'Psicosis desencadenada o empeorada',
    },
    severity: 'high',
    action: {
      en: 'People with personal or family history of schizophrenia, schizoaffective disorder, or bipolar I should consult a mental health professional before considering psychedelic experiences.',
      es: 'Las personas con historia personal o familiar de esquizofrenia, trastorno esquizoafectivo o trastorno bipolar I deben consultar a un profesional de salud mental antes de considerar experiencias psicodelicas.',
    },
    sources: ['https://pubmed.ncbi.nlm.nih.gov/18593735/'],
  },
  {
    id: 'ssri-snri',
    name: { en: 'SSRIs / SNRIs', es: 'ISRS / IRSN' },
    risk: {
      en: 'Serotonin syndrome risk, blunted effects',
      es: 'Riesgo de sindrome de serotonina, efectos atenuados',
    },
    severity: 'high',
    action: {
      en: 'Do not stop these medications without medical supervision. Discuss with your prescribing physician before making any changes.',
      es: 'No dejes de tomar estos medicamentos sin supervision medica. Habla con tu medico antes de hacer cualquier cambio.',
    },
    sources: ['https://pmc.ncbi.nlm.nih.gov/articles/PMC10851641/'],
  },
  {
    id: 'maoi',
    name: { en: 'MAOIs', es: 'IMAOs' },
    risk: {
      en: 'Dangerous serotonin interaction',
      es: 'Interaccion serotoninergica peligrosa',
    },
    severity: 'high',
    action: {
      en: 'MAOIs combined with serotonergic psychedelics carry significant risk. Consult your physician.',
      es: 'Los IMAOs combinados con psicodelicos serotoninergicos conllevan un riesgo significativo. Consulta a tu medico.',
    },
    sources: ['https://pmc.ncbi.nlm.nih.gov/articles/PMC10851641/'],
  },
  {
    id: 'cardiovascular',
    name: {
      en: 'Cardiovascular conditions',
      es: 'Condiciones cardiovasculares',
    },
    risk: {
      en: 'Transient blood pressure and heart rate elevation',
      es: 'Elevacion transitoria de presion arterial y frecuencia cardiaca',
    },
    severity: 'moderate',
    action: {
      en: 'Psychedelics can temporarily increase heart rate and blood pressure. Discuss with your cardiologist.',
      es: 'Los psicodelicos pueden aumentar temporalmente la frecuencia cardiaca y la presion arterial. Habla con tu cardiologo.',
    },
    sources: ['https://psychedelics.ucsf.edu/blog/medical-contraindications-to-classic-psychedelic-use'],
  },
  {
    id: 'pregnancy',
    name: { en: 'Pregnancy', es: 'Embarazo' },
    risk: {
      en: 'Insufficient safety data',
      es: 'Datos de seguridad insuficientes',
    },
    severity: 'unknown',
    action: {
      en: 'There is insufficient safety data on psychedelic use during pregnancy. Avoid.',
      es: 'No hay datos de seguridad suficientes sobre el uso de psicodelicos durante el embarazo. Evitar.',
    },
    sources: [],
  },
]
```

- [ ] **Step 4: Create legal status data**

```typescript
// src/content/safety/legal-status.ts
import type { LegalJurisdiction } from '@/types'

export const jurisdictions: LegalJurisdiction[] = [
  {
    country: 'United States (federal)',
    status: 'illegal',
    notes: {
      en: 'Schedule I. Oregon and Colorado have state-level exceptions for supervised use.',
      es: 'Lista I. Oregon y Colorado tienen excepciones a nivel estatal para uso supervisado.',
    },
  },
  {
    country: 'Mexico',
    status: 'gray-area',
    notes: {
      en: 'Illegal, but Art. 195 bis exempts spiritual/ceremonial use of psilocybin.',
      es: 'Ilegal, pero el Art. 195 bis exime el uso espiritual/ceremonial de psilocibina.',
    },
  },
  {
    country: 'Costa Rica',
    status: 'gray-area',
    notes: {
      en: 'No specific prohibition on psilocybin mushrooms. ~80 retreat centers operate openly.',
      es: 'Sin prohibicion especifica de hongos de psilocibina. ~80 centros de retiro operan abiertamente.',
    },
  },
  {
    country: 'Spain',
    status: 'decriminalized',
    notes: {
      en: 'Private use decriminalized. Commercial sale illegal.',
      es: 'Uso privado despenalizado. Venta comercial ilegal.',
    },
  },
  {
    country: 'Jamaica',
    status: 'legal',
    notes: {
      en: 'Psilocybin never prohibited under the Dangerous Drugs Act.',
      es: 'La psilocibina nunca fue prohibida bajo la Ley de Drogas Peligrosas.',
    },
  },
  {
    country: 'Netherlands',
    status: 'gray-area',
    notes: {
      en: 'Psilocybin truffles legal. Dried mushrooms illegal.',
      es: 'Trufas de psilocibina legales. Hongos secos ilegales.',
    },
  },
  {
    country: 'Brazil',
    status: 'gray-area',
    notes: {
      en: 'Ayahuasca legal for religious use. Psilocybin mushroom status ambiguous.',
      es: 'Ayahuasca legal para uso religioso. Estado de hongos de psilocibina ambiguo.',
    },
  },
  {
    country: 'Peru',
    status: 'legal',
    notes: {
      en: 'Traditional ayahuasca ceremonies legally protected.',
      es: 'Ceremonias tradicionales de ayahuasca legalmente protegidas.',
    },
  },
  {
    country: 'Colombia',
    status: 'decriminalized',
    notes: {
      en: 'Small quantities for personal use decriminalized.',
      es: 'Pequenas cantidades para uso personal despenalizadas.',
    },
  },
  {
    country: 'Australia',
    status: 'medical',
    notes: {
      en: 'Authorized psychiatrists can prescribe psilocybin for treatment-resistant depression since 2023.',
      es: 'Psiquiatras autorizados pueden recetar psilocibina para depresion resistente al tratamiento desde 2023.',
    },
  },
]
```

- [ ] **Step 5: Create framework sources data**

```typescript
// src/content/framework/sources.ts
import type { Source } from '@/types'

export const keySources: Source[] = [
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
    title: 'REBUS and the Anarchic Brain',
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
    id: 'davis-2021',
    title: 'Effects of Psilocybin-Assisted Therapy on Major Depressive Disorder',
    authors: 'Davis, A.K. et al.',
    year: 2021,
    url: 'https://pubmed.ncbi.nlm.nih.gov/33146667/',
    type: 'paper',
  },
  {
    id: 'bathje-2022',
    title: 'Psychedelic integration: An analysis of the concept and its practice',
    authors: 'Bathje, G.J., Majeski, E., & Kudowor, M.',
    year: 2022,
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.824077/full',
    type: 'paper',
  },
  {
    id: 'griffiths-2016',
    title: 'Psilocybin produces substantial and sustained decreases in depression and anxiety',
    authors: 'Griffiths, R.R. et al.',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27909165/',
    type: 'paper',
  },
  {
    id: 'barrett-2017',
    title: 'Qualitative and Quantitative Features of Music Reported to Support Peak Mystical Experiences',
    authors: 'Barrett, F.S. et al.',
    year: 2017,
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.01238/full',
    type: 'paper',
  },
  {
    id: 'nutt-2010',
    title: 'Drug harms in the UK: a multicriteria decision analysis',
    authors: 'Nutt, D.J. et al.',
    year: 2010,
    url: 'https://pubmed.ncbi.nlm.nih.gov/21036393/',
    type: 'paper',
  },
  {
    id: 'pollan-2018',
    title: 'How to Change Your Mind',
    authors: 'Michael Pollan',
    year: 2018,
    url: 'https://michaelpollan.com/books/how-to-change-your-mind/',
    type: 'book',
  },
  {
    id: 'van-der-kolk-2014',
    title: 'The Body Keeps the Score',
    authors: 'Bessel van der Kolk',
    year: 2014,
    url: 'https://www.besselvanderkolk.com/resources/the-body-keeps-the-score',
    type: 'book',
  },
  {
    id: 'maps',
    title: 'Multidisciplinary Association for Psychedelic Studies',
    authors: 'MAPS',
    year: 1986,
    url: 'https://maps.org/',
    type: 'organization',
  },
  {
    id: 'fireside',
    title: 'Fireside Project — Psychedelic Peer Support',
    authors: 'Fireside Project',
    year: 2021,
    url: 'https://firesideproject.org/',
    type: 'organization',
  },
  {
    id: 'chacruna',
    title: 'Chacruna Institute for Psychedelic Plant Medicines',
    authors: 'Chacruna',
    year: 2017,
    url: 'https://chacruna.net/',
    type: 'organization',
  },
]
```

- [ ] **Step 6: Commit**

```bash
git add src/content/
git commit -m "add content data layer: framework nodes, crisis resources, contraindications, legal status, sources"
```

---

## Task 4: UI Primitives

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Section.tsx`
- Create: `src/components/ui/SectionHeader.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/CrisisBar.tsx`
- Create: `src/components/ui/LanguageToggle.tsx`
- Create: `src/components/ui/index.ts`

This task creates the base component library. Each component should be server-compatible by default (no `'use client'` unless interaction requires it).

- [ ] **Step 1: Create Button component**

Primary: forest bg, ivory text (light context) or ivory bg, forest text (dark context).
Secondary: bordered, transparent.
Ghost: text + underline.
All use pill shape.

```typescript
// src/components/ui/Button.tsx
import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  icon?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center gap-3 font-sans text-[11px] font-medium tracking-[0.18em] uppercase ' +
    'bg-forest-deep text-ivory rounded-full ' +
    'hover:bg-moss transition-colors duration-150 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:pointer-events-none',
  secondary:
    'inline-flex items-center gap-3 font-sans text-[11px] font-medium tracking-[0.18em] uppercase ' +
    'border border-ink/20 text-ink rounded-full ' +
    'hover:bg-ink/5 transition-colors duration-150 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ' +
    'disabled:opacity-40 disabled:pointer-events-none',
  ghost:
    'inline-flex items-center gap-2 font-sans text-[13px] font-light tracking-[0.04em] ' +
    'text-ink-muted border-b border-ink/20 pb-px ' +
    'hover:text-ink hover:border-ink/40 transition-colors duration-150',
}

const sizeStyles: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: { sm: 'px-5 py-2.5', md: 'px-8 py-4', lg: 'px-11 py-[18px]' },
  secondary: { sm: 'px-5 py-2.5', md: 'px-7 py-4', lg: 'px-10 py-[18px]' },
  ghost: { sm: '', md: '', lg: '' },
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
}: ButtonProps) {
  const classes = `${variantStyles[variant]} ${sizeStyles[variant][size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
```

- [ ] **Step 2: Create Section and SectionHeader**

```typescript
// src/components/ui/Section.tsx
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[var(--space-section)] lg:py-[var(--space-section-lg)] ${
        dark ? 'bg-forest-deep text-ivory' : 'bg-cream text-ink'
      } ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {children}
      </div>
    </section>
  )
}
```

```typescript
// src/components/ui/SectionHeader.tsx
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : ''

  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      <div className="flex items-center gap-3">
        <span className="block w-8 h-px bg-sage flex-shrink-0" />
        <span className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-sage">
          {label}
        </span>
      </div>
      <h2 className="font-serif text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[17px] font-light leading-relaxed text-ink-muted max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Create CrisisBar**

This appears on EVERY page. No animation. Instant render. One-tap call.

```typescript
// src/components/ui/CrisisBar.tsx
import { crisisResources } from '@/content/safety/crisis-resources'
import { useTranslations } from 'next-intl'

export function CrisisBar() {
  const t = useTranslations('crisis')

  return (
    <div className="bg-crisis-bg text-crisis-text py-2 px-4">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between gap-4 text-[11px]">
        <span className="font-medium tracking-wide uppercase">{t('title')}</span>
        <div className="flex items-center gap-4">
          {crisisResources.slice(0, 2).map((r) => (
            <a
              key={r.contact}
              href={r.href}
              className="hover:text-crisis-accent transition-colors duration-150 underline underline-offset-2"
            >
              {r.contact}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create remaining components (Card, Badge, LanguageToggle)**

```typescript
// src/components/ui/Card.tsx
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] p-6 lg:p-8 ${
        dark
          ? 'bg-white/[0.04] border border-white/[0.08]'
          : 'bg-moon border border-ink/[0.06]'
      } ${className}`}
    >
      {children}
    </div>
  )
}
```

```typescript
// src/components/ui/Badge.tsx
import type { Polarity } from '@/types'

interface BadgeProps {
  children: string
  polarity?: Polarity
  className?: string
}

const polarityColors: Record<Polarity, string> = {
  masculine: 'bg-sage/10 text-sage border-sage/20',
  feminine: 'bg-gold/10 text-gold border-gold/20',
  both: 'bg-ink/5 text-ink-muted border-ink/10',
}

export function Badge({ children, polarity, className = '' }: BadgeProps) {
  const colors = polarity ? polarityColors[polarity] : 'bg-ink/5 text-ink-muted border-ink/10'

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-medium tracking-[0.14em] uppercase border ${colors} ${className}`}
    >
      {children}
    </span>
  )
}
```

```typescript
// src/components/ui/LanguageToggle.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const targetLocale = locale === 'en' ? 'es' : 'en'
  const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`)

  return (
    <button
      onClick={() => router.push(targetPath)}
      className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted hover:text-ink transition-colors duration-150 border border-ink/10 rounded-full px-3 py-1.5"
    >
      {targetLocale.toUpperCase()}
    </button>
  )
}
```

- [ ] **Step 5: Create barrel export**

```typescript
// src/components/ui/index.ts
export { Button } from './Button'
export { Section } from './Section'
export { SectionHeader } from './SectionHeader'
export { Card } from './Card'
export { Badge } from './Badge'
export { CrisisBar } from './CrisisBar'
export { LanguageToggle } from './LanguageToggle'
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: successful build.

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/
git commit -m "add ui primitives: button, section, card, badge, crisis bar, language toggle"
```

---

## Task 5: Layout Components (Nav, Footer, LenisProvider)

**Files:**
- Create: `src/components/layout/Nav.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/LenisProvider.tsx`
- Create: `src/components/layout/Logo.tsx`
- Create: `src/components/layout/index.ts`
- Modify: `src/app/[locale]/layout.tsx`

- [ ] **Step 1: Create Logo**

```typescript
// src/components/layout/Logo.tsx
import Link from 'next/link'
import { useLocale } from 'next-intl'

export function Logo() {
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}`}
      className="font-serif text-[22px] font-light tracking-[0.04em]"
    >
      <span className="text-sage">myc</span>elium
    </Link>
  )
}
```

- [ ] **Step 2: Create Nav**

Editorial nav: logo left, links center, language toggle + CTA right.

```typescript
// src/components/layout/Nav.tsx
import { useTranslations, useLocale } from 'next-intl'
import { Logo } from './Logo'
import { Button, LanguageToggle } from '@/components/ui'

export function Nav() {
  const t = useTranslations('nav')
  const locale = useLocale()

  const links = [
    { href: `/${locale}/science`, label: t('science') },
    { href: `/${locale}/framework`, label: t('framework') },
    { href: `/${locale}/safety`, label: t('safety') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/about`, label: t('about') },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/[0.06]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 flex items-center justify-between h-16">
        <Logo />

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-[13px] font-light tracking-[0.03em] text-ink-muted hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button href={`/${locale}/portal`} variant="primary" size="sm">
            {t('portal')}
          </Button>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 3: Create Footer**

```typescript
// src/components/layout/Footer.tsx
import { useTranslations, useLocale } from 'next-intl'
import { Logo } from './Logo'
import { crisisResources } from '@/content/safety/crisis-resources'

export function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-forest-deep text-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-[13px] text-ivory/40 leading-relaxed mt-4 max-w-xs">
              {t('disclaimer')}
            </p>
          </div>

          {/* Crisis resources */}
          <div>
            <h3 className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-sage mb-4">
              Crisis Resources
            </h3>
            <ul className="space-y-2">
              {crisisResources.map((r) => (
                <li key={r.contact}>
                  <a
                    href={r.href}
                    className="text-[13px] text-ivory/50 hover:text-ivory transition-colors duration-150"
                  >
                    {r.name[locale as 'en' | 'es']} — {r.contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-sage mb-4">
              Community
            </h3>
            <ul className="space-y-2 text-[13px] text-ivory/50">
              <li>
                <a href="https://github.com/" className="hover:text-ivory transition-colors duration-150">
                  {t('openSource')}
                </a>
              </li>
              <li>
                <a href="https://chacruna.net/indigenous-reciprocity-initiative/" className="hover:text-ivory transition-colors duration-150">
                  {t('reciprocity')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/[0.06] pt-8 text-[11px] text-ivory/25">
          {t('privacy')} · MIT License · 2026
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Create LenisProvider**

```typescript
// src/components/layout/LenisProvider.tsx
'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      {children}
    </ReactLenis>
  )
}
```

Check lenis docs — the React integration API may have changed.

- [ ] **Step 5: Create barrel export and update layout**

```typescript
// src/components/layout/index.ts
export { Nav } from './Nav'
export { Footer } from './Footer'
export { LenisProvider } from './LenisProvider'
export { Logo } from './Logo'
```

Update `src/app/[locale]/layout.tsx` to include Nav, Footer, CrisisBar, and LenisProvider:

```typescript
// src/app/[locale]/layout.tsx — updated
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/lib/i18n/routing'
import { serif, sans } from '@/lib/fonts'
import { Nav, Footer, LenisProvider } from '@/components/layout'
import { CrisisBar } from '@/components/ui'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mycelium — Psychedelic Preparation & Integration',
  description: 'Free, open-source, evidence-informed psychedelic preparation and integration portal.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream text-ink font-sans font-light antialiased">
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <CrisisBar />
            <Nav />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 6: Verify in browser**

```bash
npm run dev
# Check: nav renders, footer renders, crisis bar at top, language toggle switches locale
# Check: /en and /es both render with correct translations
```

- [ ] **Step 7: Commit**

```bash
git add src/components/layout/ src/app/
git commit -m "add layout: nav, footer, crisis bar, lenis smooth scroll, logo"
```

---

## Task 6: Animation System

**Files:**
- Create: `src/lib/animations.ts`
- Create: `src/components/ui/ScrollReveal.tsx`
- Create: `src/components/ui/TextReveal.tsx`

- [ ] **Step 1: Create animation config**

```typescript
// src/lib/animations.ts

export const scrollReveal = {
  y: 60,
  duration: 0.9,
  ease: 'power3.out',
  stagger: 0.04,
  trigger: { start: 'top 85%' },
}

export const textReveal = {
  y: '100%',
  duration: 0.7,
  ease: 'power3.out',
  stagger: 0.03,
}

export const imageReveal = {
  clipPath: 'inset(0 0 100% 0)',
  duration: 1.2,
  ease: 'power3.inOut',
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: 'easeInOut' },
}
```

- [ ] **Step 2: Create ScrollReveal component**

```typescript
// src/components/ui/ScrollReveal.tsx
'use client'

import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollReveal } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: scrollReveal.y },
      {
        opacity: 1,
        y: 0,
        duration: scrollReveal.duration,
        ease: scrollReveal.ease,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: scrollReveal.trigger.start,
          once: true,
        },
      }
    )
  }, [delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
```

- [ ] **Step 3: Export and commit**

Add `ScrollReveal` to `src/components/ui/index.ts`.

```bash
git add src/lib/animations.ts src/components/ui/ScrollReveal.tsx src/components/ui/index.ts
git commit -m "add animation system: GSAP scroll reveal, motion presets, reduced-motion support"
```

---

## Task 7: Home Page

**Files:**
- Modify: `src/app/[locale]/page.tsx`
- Create: `src/components/framework/NodeCard.tsx`

This is the editorial landing page. 5-6 sections:
1. Hero — bold serif heading, tagline, CTA
2. The problem — why integration matters (the 80/20 insight)
3. The framework preview — 6 node cards
4. Evidence — key stats from research
5. Safety commitment — crisis resources, contraindications summary
6. CTA — enter the portal (coming soon)

- [ ] **Step 1: Create NodeCard component**

```typescript
// src/components/framework/NodeCard.tsx
import type { FrameworkNode, Locale } from '@/types'
import { Badge } from '@/components/ui'

interface NodeCardProps {
  node: FrameworkNode
  locale: Locale
}

export function NodeCard({ node, locale }: NodeCardProps) {
  return (
    <div className="bg-moon border border-ink/[0.06] rounded-[var(--radius-card)] p-6 lg:p-8 hover:border-sage/30 transition-colors duration-200">
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl">{node.icon}</span>
        <Badge polarity={node.polarity}>
          {node.polarity === 'masculine' ? (locale === 'es' ? 'estructura' : 'structure') :
           node.polarity === 'feminine' ? (locale === 'es' ? 'receptivo' : 'receptive') :
           (locale === 'es' ? 'ambos' : 'both')}
        </Badge>
      </div>
      <h3 className="font-serif text-2xl font-light mb-2">
        {node.name[locale]}
      </h3>
      <p className="text-[13px] text-ink-muted leading-relaxed mb-3">
        {node.tagline[locale]}
      </p>
      <p className="text-[14px] text-ink/60 leading-relaxed">
        {node.description[locale]}
      </p>
    </div>
  )
}
```

- [ ] **Step 2: Build the home page**

```typescript
// src/app/[locale]/page.tsx
import { useLocale, useTranslations } from 'next-intl'
import { Section, SectionHeader, Button, Card } from '@/components/ui'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { NodeCard } from '@/components/framework/NodeCard'
import { nodes } from '@/content/framework/nodes'
import type { Locale } from '@/types'

export default function Home() {
  const locale = useLocale() as Locale

  return (
    <>
      {/* ── HERO ── */}
      <Section className="min-h-[80vh] flex items-center">
        <div className="max-w-3xl">
          <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-sage mb-6">
            {locale === 'es' ? 'preparacion · experiencia · integracion' : 'preparation · experience · integration'}
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-6">
            {locale === 'es'
              ? 'la red que conecta todo'
              : 'the network that connects it all'}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-xl">
            {locale === 'es'
              ? 'Apoyo gratuito, de codigo abierto e informado por evidencia para la preparacion e integracion psicodelica. Enraizado en la ciencia. Fundamentado en la cultura. Construido para la comunidad.'
              : 'Free, open-source, evidence-informed support for psychedelic preparation and integration. Rooted in science. Grounded in culture. Built for community.'}
          </p>
          <div className="flex items-center gap-4">
            <Button href={`/${locale}/framework`} variant="primary" size="lg">
              {locale === 'es' ? 'Explorar el Marco' : 'Explore the Framework'}
            </Button>
            <Button href={`/${locale}/science`} variant="ghost">
              {locale === 'es' ? 'Ver la ciencia' : 'See the science'}
            </Button>
          </div>
        </div>
      </Section>

      {/* ── THE INTEGRATION GAP ── */}
      <Section>
        <ScrollReveal>
          <SectionHeader
            label={locale === 'es' ? 'Por que importa' : 'Why it matters'}
            title={
              locale === 'es' ? (
                <>La experiencia es el <em className="text-sage italic">20%.</em> La integracion es el 80%.</>
              ) : (
                <>The experience is <em className="text-sage italic">20%.</em> Integration is 80%.</>
              )
            }
            subtitle={
              locale === 'es'
                ? 'Cada fuente clinica converge en esto: sin integracion deliberada, incluso las experiencias mas profundas se desvanecen. Mycelium cierra esa brecha.'
                : 'Every clinical source converges on this: without deliberate integration, even the most profound experiences fade. Mycelium closes that gap.'
            }
          />
        </ScrollReveal>
      </Section>

      {/* ── THE 6 NODES ── */}
      <Section>
        <ScrollReveal>
          <SectionHeader
            label={locale === 'es' ? 'El Marco' : 'The Framework'}
            title={
              locale === 'es'
                ? 'Seis nodos. Una red.'
                : 'Six nodes. One network.'
            }
            subtitle={
              locale === 'es'
                ? 'Como el micelio conecta arboles en un bosque, estos seis dominios de integracion estan todos conectados. Ninguno existe solo.'
                : 'Like mycelium connecting trees in a forest, these six integration domains are all connected. None exists alone.'
            }
            className="mb-12"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node, i) => (
            <ScrollReveal key={node.id} delay={i * 0.04}>
              <NodeCard node={node} locale={locale} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── EVIDENCE ── */}
      <Section dark>
        <ScrollReveal>
          <SectionHeader
            label={locale === 'es' ? 'Informado por Evidencia' : 'Evidence-Informed'}
            title={
              locale === 'es'
                ? 'Fundamentado en 20+ anos de investigacion'
                : 'Grounded in 20+ years of research'
            }
            className="mb-12"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal>
            <Card dark>
              <p className="font-serif text-4xl font-light text-sage mb-2">18+</p>
              <p className="text-[13px] text-ivory/50">
                {locale === 'es' ? 'Articulos de investigacion citados' : 'Cited research papers'}
              </p>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.04}>
            <Card dark>
              <p className="font-serif text-4xl font-light text-sage mb-2">6</p>
              <p className="text-[13px] text-ivory/50">
                {locale === 'es' ? 'Marcos de integracion sintetizados' : 'Integration frameworks synthesized'}
              </p>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <Card dark>
              <p className="font-serif text-4xl font-light text-sage mb-2">2</p>
              <p className="text-[13px] text-ivory/50">
                {locale === 'es' ? 'Idiomas: Ingles + Espanol' : 'Languages: English + Spanish'}
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── SAFETY ── */}
      <Section>
        <ScrollReveal>
          <SectionHeader
            label={locale === 'es' ? 'Seguridad Primero' : 'Safety First'}
            title={
              locale === 'es'
                ? 'Los recursos de crisis estan siempre visibles'
                : 'Crisis resources are always visible'
            }
            subtitle={
              locale === 'es'
                ? 'Mycelium es una herramienta educativa. Nunca reemplaza la orientacion profesional. Los recursos de apoyo estan a un toque de distancia en cada pantalla.'
                : 'Mycelium is an educational tool. It never replaces professional guidance. Support resources are one tap away on every screen.'
            }
          />
        </ScrollReveal>
      </Section>

      {/* ── CTA ── */}
      <Section dark className="text-center">
        <ScrollReveal>
          <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-sage mb-6">
            {locale === 'es' ? 'Codigo Abierto · Gratuito · Privado' : 'Open Source · Free · Private'}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 text-ivory">
            {locale === 'es' ? 'Tu viaje es tuyo.' : 'Your journey is yours.'}
          </h2>
          <Button href={`/${locale}/portal`} variant="primary" size="lg">
            {locale === 'es' ? 'Entrar al Portal' : 'Enter the Portal'}
          </Button>
        </ScrollReveal>
      </Section>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
# Check: all sections render, scroll reveals work, both locales display correctly
# Check: crisis bar stays at top, nav is sticky, footer has crisis resources
```

- [ ] **Step 4: Commit**

```bash
git add src/app/ src/components/framework/
git commit -m "add home page: hero, integration gap, 6 nodes, evidence, safety, CTA — EN + ES"
```

---

## Tasks 8-13: Remaining Public Pages (Architecture Sketches)

These follow the same pattern as Task 7. Each is a server component page with ScrollReveal sections, bilingual content, and links to research sources.

### Task 8: Framework Page (`/framework`)
- Overview of the Mycelial Network metaphor
- The 6 nodes in detail (links to individual node pages)
- The polarity model diagram
- The Receive → Recognize → Return process
- The 4 cornerstones
- Sources cited with links

### Task 9: Individual Node Pages (`/framework/[node]`)
- Dynamic route: `ground`, `roots`, `spore`, `weave`, `fruit`, `canopy`
- Full description, preparation practices, integration practices
- Journal prompt samples
- Optional chakra layer (visible if user toggles — client component)
- Cited sources per practice

### Task 10: Science Page (`/science`)
- Neuroscience explainer (REBUS model, DMN, neuroplasticity)
- Key papers with links (from `sources.ts`)
- The preparation evidence (JHU, Ferriss, Huberman)
- The integration evidence (MAPS, EMBARK, ACE)
- The music evidence (Kaelen, Barrett)

### Task 11: Safety Page (`/safety`)
- Full contraindications table (from `contraindications.ts`)
- Legal status by jurisdiction (from `legal-status.ts`)
- Crisis resources expanded (from `crisis-resources.ts`)
- Harm reduction principles (Zendo, DanceSafe)
- Disclaimers

### Task 12: About Page (`/about`)
- What mycelium is and isn't
- Open source commitment (link to GitHub)
- Indigenous reciprocity commitment (link to IRI)
- The team / community
- How to contribute

### Task 13: Blog Infrastructure
- MDX setup with `@next/mdx`
- Blog index page (`/blog`)
- Individual post page (`/blog/[slug]`)
- 3 seed articles (EN + ES):
  1. "what is psychedelic integration?"
  2. "the science of psilocybin"
  3. "preparing for your first experience"
- Category filtering
- Source citations within articles (links to papers)

### Task 14: Portal Coming Soon + Deploy
- Portal page shows "coming soon" with the framework preview
- Email capture (simple Supabase or Resend integration)
- Vercel deployment
- Domain configuration
- OG images per page
- Final responsive check (375 / 768 / 1440)

---

## Phase 2-6: Architecture Sketches

Each phase gets its own detailed implementation plan when Phase 1 is complete and deployed.

### Phase 2: Auth + Portal Foundation
- Supabase project creation
- Auth flow (email + magic link)
- Informed consent onboarding flow (5 steps)
- E2E encryption layer (libsodium, key derivation from password)
- Portal shell (dark theme layout, sidebar navigation)
- Screening awareness flow (educational, interactive)
- Basic journal (free-write, node tagging, E2E encrypted)

### Phase 3: Preparation Pathway
- Timeline-adaptive pathway engine ("when is your experience?")
- Daily practice delivery (curated YouTube/public links per node per phase)
- Journal prompts per node per phase (rotating, never repeating)
- Breathwork + meditation curated links
- Music companion v1 (curated playlists as Spotify/YouTube links)
- Progress tracking across 6 nodes

### Phase 4: Full Integration Journal
- Receive → Recognize → Return flow in journal UI
- Domain-specific rotating prompts (EN + ES)
- Personal playlist builder (link Spotify/YouTube songs to journal entries)
- Track-by-track journaling feature
- Search, filter by node, filter by date
- Export (JSON + plain text)
- Spiritual + energy layer toggles (changes prompts + adds practices)

### Phase 5: Content Expansion
- 10-15 additional blog articles (EN + ES)
- Full resource library (curated links organized by section)
- Framework deep-dive articles (one per node)
- Contributor guidelines + submission flow
- SEO optimization pass

### Phase 6: Polish + Launch
- Responsive audit (375 / 768 / 1440)
- Accessibility pass (WCAG AA, keyboard navigation, screen reader)
- Performance pass (Core Web Vitals, image optimization)
- Security audit (encryption implementation, data handling)
- Open-source launch (GitHub repo, README, CONTRIBUTING.md, LICENSE)
- Community announcement channels

---

*this plan covers Phase 1 in full task-level detail. each subsequent phase will receive its own implementation plan when ready.*
