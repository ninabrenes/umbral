# CLAUDE.md — Umbral

Read this before touching any file. Update the Build Status at the end of every session.

---

## Project Identity

**Name:** Umbral ("threshold" in Spanish)
**What:** Free, open-source, bilingual psychedelic preparation and integration portal.
**Who:** Anyone preparing for or integrating a psychedelic experience. Researchers. Facilitators. Harm reduction advocates.
**Not:** A marketplace. A dosing guide. A medical advice platform. A commercial product.
**Framework:** The Mycelial Network — 6 nodes: Ground, Roots, Spore, Weave, Fruit, Canopy.
**License:** MIT
**Intent:** Public good. Evidence-informed. Culturally respectful. Always free.

---

## Tech Stack

```
Framework:    Next.js 16 (App Router) + TypeScript
Styling:      Tailwind CSS v4 (CSS-first @theme, OKLCH tokens)
Animation:    GSAP + ScrollTrigger + Lenis (scroll), Motion (UI interactions)
i18n:         next-intl v4 (URL-based [locale] segments, EN + ES)
Blog:         MDX via @next/mdx
Icons:        lucide-react
Deployment:   Vercel
```

**Not yet in use:** Supabase (Phase 2 — portal/auth). No database needed for Phase 1.

---

## Design Tokens

Defined in `src/styles/globals.css` via Tailwind v4 `@theme`:

```css
/* ── PUBLIC SITE (light editorial) ── */
--color-cream:      oklch(0.96 0.01 80);
--color-sand:       oklch(0.92 0.03 65);
--color-moon:       oklch(0.97 0.005 80);
--color-ink:        oklch(0.20 0.02 150);
--color-ink-muted:  oklch(0.45 0.02 150);

/* ── FOREST PALETTE (portal + accents) ── */
--color-forest-deep: oklch(0.10 0.02 150);
--color-forest:      oklch(0.15 0.03 150);
--color-moss:        oklch(0.35 0.06 150);
--color-sage:        oklch(0.55 0.08 150);
--color-sage-light:  oklch(0.70 0.06 150);

/* ── ACCENTS ── */
--color-gold:        oklch(0.70 0.12 85);
--color-gold-muted:  oklch(0.60 0.08 85);
--color-ivory:       oklch(0.95 0.01 80);

/* ── CRISIS (high contrast always) ── */
--color-crisis-bg:     oklch(0.20 0.05 25);
--color-crisis-text:   oklch(0.95 0.01 80);
--color-crisis-accent: oklch(0.65 0.15 25);

/* ── TYPOGRAPHY ── */
--font-serif: var(--font-serif);   /* Cormorant Garamond */
--font-sans:  var(--font-sans);    /* DM Sans */

/* ── SPACING ── */
--space-section:    8rem;
--space-section-lg: 12rem;
```

**Dual palette:** Light editorial (cream/sand/ink) for the public site. Dark forest (forest-deep/moss/sage) for the portal. Gold as the sole accent. Crisis resources use their own high-contrast palette.

---

## Fonts

Cormorant Garamond (display/headings) + DM Sans (body/UI). Loaded via `next/font/google` in `src/lib/fonts.ts`.

- Serif: weights 300, 400, 500, 600 + italic. Variable `--font-serif`.
- Sans: weights 300, 400, 500. Variable `--font-sans`.

---

## Project Structure

```
src/
  app/
    favicon.ico
    [locale]/
      layout.tsx              Locale layout — fonts, Nav, Footer, CrisisBar
      page.tsx                Home (editorial landing)
      about/page.tsx
      blog/
        page.tsx              Blog index
        [slug]/page.tsx       Individual post
      framework/
        page.tsx              Mycelial Network overview
        [node]/page.tsx       Individual node (ground, roots, etc.)
      legal/page.tsx          Legal status by jurisdiction
      portal/page.tsx         Portal landing (Phase 2 entry)
      safety/page.tsx         Safety, contraindications, crisis
      science/page.tsx        Research and evidence base
  components/
    framework/
      NodeCard.tsx
      NodeIcon.tsx
    layout/
      Footer.tsx
      MobileMenu.tsx
      Nav.tsx
    ui/
      Button.tsx
      CrisisBar.tsx
      Section.tsx
      SectionHeader.tsx
  content/
    blog/
      posts.ts                Blog post data
    framework/
      nodes.ts                6 Mycelial Network nodes
      prompts.ts              Journal prompts by node
      sources.ts              Research sources
    safety/
      contraindications.ts
      crisis-resources.ts
      legal-status.ts
  i18n/
    request.ts                next-intl request config
    routing.ts                Locale routing (en, es)
  lib/
    animations.ts             GSAP + Motion config constants
    fonts.ts                  Font loading
  styles/
    globals.css               Tailwind v4 @theme tokens
  types/
    index.ts                  Locale, NodeId, FrameworkNode, JournalPrompt, Source, CrisisResource, BlogPost, LegalJurisdiction
messages/
  en.json                     English translations
  es.json                     Spanish translations
```

---

## i18n Pattern

Uses `next-intl` v4 with URL-based locale segments.

- Routes: `src/app/[locale]/...`
- Default locale: `en`. Supported: `en`, `es`.
- Every page component receives `params: Promise<{ locale: string }>` and must call `setRequestLocale(locale)`.
- Translation files: `messages/en.json` and `messages/es.json`.
- Request config: `src/i18n/request.ts`. Routing config: `src/i18n/routing.ts`.
- next-intl plugin configured in `next.config.ts` pointing to `./src/i18n/request.ts`.

---

## Content Pattern

All content uses bilingual objects:

```ts
{ en: string; es: string }
```

Content lives in `src/content/` as typed TypeScript data files — not in the messages JSON. The messages JSON is for UI strings (nav labels, button text, headings). Content data (framework nodes, crisis resources, blog metadata) lives in `src/content/`.

---

## Component Rules

- Server Components by default. `'use client'` only when interaction requires it.
- Named exports always.
- Type all props. Type all returns.
- Components receive `locale` as a prop (typed as `Locale`) when they need to render bilingual content.
- `next/image` for images. Never raw `<img>`.
- `.env.local` for secrets. Never hardcode.

---

## Animation System

Two systems coexisting:

**GSAP + ScrollTrigger + Lenis** for scroll-driven creative:
```ts
SCROLL_REVEAL: { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1 }
TEXT_REVEAL:   { y: '100%', duration: 0.7, ease: 'power3.out', stagger: 0.06 }
```

**Motion (framer motion)** for React UI interactions:
```ts
FADE_IN:         { opacity: 0, y: 24 } → { opacity: 1, y: 0 }, 0.7s
PAGE_TRANSITION: { opacity: 0 } → { opacity: 1 } → { opacity: 0 }, 0.5s
```

Config in `src/lib/animations.ts`. Ease curve: `[0.25, 0.1, 0.25, 1]`.

All animations respect `prefers-reduced-motion` — global override in `globals.css`.

---

## Design Rules

- Typography IS the design. Cormorant Garamond at massive scale for headings.
- Body text: DM Sans, font-weight 300, minimum 18px on dark backgrounds.
- Breathing space: 128-200px between sections on desktop (`--space-section` / `--space-section-lg`).
- Asymmetric editorial layouts. Not centered-everything.
- Light editorial palette for public pages. Dark forest palette for portal (Phase 2).
- Gold accent used sparingly — CTAs and emphasis only.
- No glassmorphism, gradient text, blobs, starfields, or decorative effects.
- No card grids without purpose. No generic layouts.
- Hovers: 200ms max, simple opacity/color shifts.
- Crisis resources: no animation, instant render, always visible, high-contrast palette.

---

## Content Rules

- All content bilingual EN/ES. No page ships in one language only.
- Educational tone: "here's what the research shows" not "you should/shouldn't."
- Never diagnostic: "consult your healthcare provider" not "you should not proceed."
- Credit indigenous traditions by name — Mazatec, Shipibo, etc. Never "ancient wisdom" without attribution.
- Source everything. The `Source` type exists for a reason.
- Crisis resources always accessible — the `CrisisBar` component is in every layout.
- Legal information includes disclaimer: not legal advice.

---

## The Mycelial Network (Framework)

6 nodes, each with bilingual name/tagline/description, polarity, and optional chakra mapping:

| Node | EN | ES | Polarity |
|------|----|----|----------|
| ground | Ground | Tierra | masculine |
| roots | Roots | Raíces | feminine |
| spore | Spore | Espora | feminine |
| weave | Weave | Tejido | both |
| fruit | Fruit | Fruto | masculine |
| canopy | Canopy | Dosel | feminine |

Data: `src/content/framework/nodes.ts`
Prompts: `src/content/framework/prompts.ts`
Sources: `src/content/framework/sources.ts`

---

## Environment Variables

**Phase 1 (current):** None required. Static site.

**Phase 2 (portal):**
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
```

Never commit `.env.local`.

---

## Build Phase Tracker

### Phase 1 — Foundation + Public Site
- [x] Project scaffold (Next.js 16, TS, Tailwind v4)
- [x] Design tokens in globals.css (OKLCH dual palette)
- [x] Fonts (Cormorant Garamond + DM Sans via next/font/google)
- [x] Type system (Locale, NodeId, FrameworkNode, JournalPrompt, Source, CrisisResource, BlogPost, LegalJurisdiction)
- [x] i18n setup (next-intl v4, EN/ES, URL-based locale segments)
- [x] Animation system (GSAP + Motion config constants)
- [x] UI primitives (Button, Section, SectionHeader, CrisisBar)
- [x] Layout (Nav, Footer, MobileMenu)
- [x] Content data layer (framework nodes, prompts, sources, crisis resources, contraindications, legal status, blog posts)
- [x] Editorial home page
- [x] All public pages (framework, safety, science, blog, about, legal, portal landing)
- [x] Framework node detail pages (`/framework/[node]`)
- [x] Blog post detail pages (`/blog/[slug]`)
- [ ] MDX blog content (actual articles)
- [ ] SEO metadata per page (title, description, OG)
- [ ] Sitemap + robots.txt
- [ ] Deploy to Vercel
- [ ] Visual QA + dogfood testing

### Phase 2 — The Portal (authenticated)
- [ ] Supabase setup (auth + database)
- [ ] User profiles + onboarding
- [ ] Journal system (prompts by node, saved entries)
- [ ] Progress tracking through Mycelial Network
- [ ] Dark forest theme for portal pages
- [ ] Preparation checklist builder
- [ ] Integration timeline

### Phase 3 — Community + Content
- [ ] Community reflections (anonymous)
- [ ] Facilitator directory
- [ ] Research library with filtering
- [ ] Newsletter integration

### Phase 4 — Advanced
- [ ] AI integration companion (evidence-based, not therapeutic)
- [ ] Printable preparation workbook (PDF)
- [ ] API for third-party harm reduction tools

---

## Open Decisions

| Decision | Status |
|---|---|
| Domain name | OPEN |
| Supabase project | DEFERRED — Phase 2 |
| Community features scope | DEFERRED — Phase 3 |
| AI companion model/approach | DEFERRED — Phase 4 |
| Self-hosted fonts vs Google Fonts | OPEN — currently Google, should migrate to WOFF2 |

---

## Build Log

### Session 2026-04-02
BUILT: Full Phase 1 foundation — scaffold, design tokens, i18n, type system, all public pages, framework data, content layer, UI components, layout
NEXT: MDX blog content, SEO metadata, deploy to Vercel
