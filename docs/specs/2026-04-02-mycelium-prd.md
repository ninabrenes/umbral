# mycelium — product requirements document

version: 1.0
date: 2026-04-02
status: approved design, pending implementation plan
research base: 16 research agents, 18 published papers, 13 organizations, 13 books
full research synthesis: [`docs/research/00-mycelium-research-synthesis.md`](../research/00-mycelium-research-synthesis.md)

---

## 1. product identity

**name:** umbral (Spanish: "threshold")
**project directory:** `~/projects/umbral/`
**tagline:** preparation. experience. integration. the network that connects it all.
**framework name:** the mycelial network (the framework keeps the mycelium name — it's the underlying intelligence)

**what it is:** a free, open-source, bilingual (EN/ES) psychedelic preparation and integration portal. evidence-informed, culturally grounded, privacy-first. a curation and journaling tool that organizes, guides, and holds space.

**what it is not:**
- not medical or therapeutic advice
- not a replacement for professional guidance
- not a ceremony simulator or "digital velada"
- not a gamified wellness app (no streaks, levels, achievements)
- not tied to any single substance, tradition, or methodology
- not a content host — we curate and link to the best public resources

**who it's for:**
- people preparing for an upcoming psychedelic experience (any substance, any context)
- people integrating after an experience they already had
- the full arc: preparation → experience (grounding resources only) → integration
- english and spanish speakers worldwide
- both first-timers and experienced practitioners
- the spiritually curious and the clinically minded (layers for both)

**product intent:** open source / public good. free tool for the psychedelic community. MIT license. community contributions welcome.

---

## 2. philosophical foundation

### 2.1 core principles

| principle | source | implementation |
|---|---|---|
| **sitting, not guiding** | zendo project | the tool is a companion, never an authority. we do not direct the experience or tell users what their insights mean. |
| **harm reduction** | dancesafe, fireside | neither condones nor condemns. non-judgmental. respects autonomy. evidence over ideology. |
| **culturally grounded** | chacruna institute, lancet 2023 8 principles | acknowledges indigenous origins. practices reciprocity. never extracts without context. |
| **the polarity model** | original synthesis | preparation = structured (masculine). experience = surrendered (feminine). integration = both, in spiral. |
| **practice first** | nina's learning methodology | show the practice → explain why it works → show when it breaks. |
| **privacy as safety** | MAPS code of ethics | psychedelic use data is legally sensitive. encryption by default. zero PII linked to substance use. |

### 2.2 what we believe

- the psychedelic experience is 20% of the value. integration is 80%.
- music is not background — it is a primary therapeutic variable.
- integration is cyclical, not linear. the same material surfaces at deeper layers.
- the body holds what the mind cannot process. somatic practices are not optional.
- nature connection is a first-class integration domain, not a nice-to-have.
- community and service are how individual insight becomes collective healing.
- indigenous traditions are the root system. we honor, credit, and reciprocate.

---

## 3. the mycelial network framework

**full framework documentation:** [`docs/framework/00-the-mycelial-network.md`](../framework/00-the-mycelial-network.md)

### 3.1 the metaphor

mycelium is the underground network that connects trees in a forest. no single tree survives alone — they share nutrients, send signals, support each other through the network. the mycelial network IS the intelligence.

integration works the same way. there are no isolated domains. everything connects. body affects mind affects relationships affects meaning affects nature affects body again. the network is the framework.

### 3.2 six nodes

| node | focus | polarity | chakra layer (optional) |
|---|---|---|---|
| **GROUND** | body, nervous system, physical resilience | masculine | muladhara (root) |
| **ROOTS** | nature, ecology, earth connection | feminine | muladhara + svadhisthana |
| **SPORE** | inner self, shadow, parts work | feminine | svadhisthana + ajna |
| **WEAVE** | relationships, community, service | both | anahata + vishuddha |
| **FRUIT** | values, meaning, committed action | masculine | manipura + vishuddha |
| **CANOPY** | existential, transcendent, sacred | feminine | ajna + sahasrara |

### 3.3 cross-cutting practices (the mycelium itself)

these run through all 6 nodes:
- **music** — preparation, session, and integration playlists per phase
- **journaling** — raw (feminine), reflective (balance), action (masculine)
- **breathwork** — bridges GROUND and CANOPY
- **meditation** — the skill that makes everything else work

### 3.4 the process layer (within each node)

1. **Receive** (feminine) — be with what arose. don't analyze yet. feel it.
2. **Recognize** (balance) — name what you see. connect to patterns. understand.
3. **Return** (masculine) — bring it back to daily life. commit to change. act.

### 3.5 four cornerstones

1. **trauma-informed** — all content designed with awareness that psychedelics surface traumatic material. the tool never pushes, always invites.
2. **culturally grounded** — acknowledges indigenous origins. practices reciprocity. presents cultural context as inseparable from practical content.
3. **ethically rooted** — no guru dynamic. no dependency creation. always redirects to professional support. crisis resources always visible.
4. **collectively held** — integration is not solo. community, peer support, service as integration.

### 3.6 the temporal-energetic map

| phase | timing | dominant energy | active nodes |
|---|---|---|---|
| **orient** | first interaction | — | all (overview) |
| **ground** | throughout prep | masculine | GROUND, ROOTS |
| **settle** | 2+ weeks before | feminine | SPORE, CANOPY |
| **connect** | 1-2 weeks before | both | WEAVE, FRUIT |
| **threshold** | day before/of | balance | all |
| **afterglow** | days 1-3 | feminine | SPORE, ROOTS, CANOPY |
| **integrate** | weeks 1-8+ | both | all (Receive → Recognize → Return) |
| **spiral** | ongoing | spiral | all (lifelong practice) |

### 3.7 optional layers

| layer | default | toggle ON adds |
|---|---|---|
| **spiritual** | secular, evidence-based language | contemplative language, sacred framing, ceremony acknowledgment |
| **energy/chakra** | somatic/nervous system language | chakra mapping, kundalini practices, energy body framework |

these layers change the LANGUAGE and add PRACTICES. the underlying framework is the same.

---

## 4. access model

### 4.1 public (no login)

- landing page + philosophy
- the science (evidence base, research links)
- the framework explained (6 nodes, polarity model)
- safety + contraindications education
- crisis resources (always visible)
- **blog / articles** — original content, EN + ES, SEO-optimized
- resource library (curated external links)
- legal status by jurisdiction
- about, open source info, reciprocity commitments

### 4.2 private (login required)

- personalized preparation pathway (adapts to timeline)
- integration journal (E2E encrypted, domain-specific prompts)
- screening awareness flow (educational, never diagnostic)
- music companion (curated public links + personal playlist builder)
- progress tracking across the 6 nodes
- breathwork & meditation guides (curated YouTube/public links)
- optional chakra/energy layer toggle
- optional spiritual layer toggle
- data export and deletion at any time

### 4.3 informed consent flow (before portal access)

```
sign up (email) → email verification → informed consent:
  1. "this is an education tool, not medical advice" → must acknowledge
  2. "psychedelic substances have different legal statuses" → must acknowledge
  3. "your data is encrypted and private" → explanation
  4. "crisis resources are always available" → shown, not just stated
  5. comprehension check (2-3 questions verifying understanding)
→ portal access granted
```

---

## 5. product architecture

### 5.1 the preparation pathway

**not fixed at 21 days.** adapts to the user's timeline.

onboarding: "when is your experience?"

| timeline | pathway |
|---|---|
| 2+ weeks out | full preparation across all 6 nodes. daily practices. gradual deepening. |
| 1 week out | condensed essentials. GROUND + SPORE + CANOPY focus. |
| days away | immediate prep. breathwork, intention review, logistics, surrender practice. |
| already happened | skip to integration. afterglow guidance. |
| no date set | exploration mode. browse framework, practices, resources freely. |

each day surfaces: 1-2 practices (YouTube/public links), 1 journal prompt, 1 optional music recommendation. no more (Hick's Law).

### 5.2 the integration journal

the primary feature. where the real work happens.

- entries tagged to one or more of the 6 nodes
- linkable to a specific experience date
- Receive → Recognize → Return process built into the flow
- domain-specific prompts rotate (never repeat consecutively)
- free-writing mode always available
- searchable, filterable by node and date
- exportable as plain text / JSON
- E2E encrypted — server cannot read content
- no animation on the textarea (high-frequency interaction)

### 5.3 music companion

all via public links. zero hosted content.

| layer | content | source |
|---|---|---|
| curated playlists | preparation (per node), session (JHU 6-phase arc), integration, breathwork | Spotify / YouTube Music public links |
| personal playlist | user builds integration playlist, links songs to journal entries | Spotify / YouTube links stored in user data |
| practice audio | breathwork, meditation — linked, not hosted | YouTube links to existing high-quality guides |

### 5.4 screening awareness flow

educational, never diagnostic.

- presents contraindication information interactively
- "are you currently taking lithium?" → educational content about seizure risk → "please consult your doctor"
- never says "you should not proceed"
- says "here's what the research shows. please discuss with your healthcare provider."
- results stored locally only. never transmitted. never linked to PII.

### 5.5 resource library

| section | contents | link format |
|---|---|---|
| research | key papers by topic | PubMed / PMC links |
| books | the reading list | Amazon / publisher links |
| organizations | Fireside, MAPS, Chacruna, ICEERS, Zendo | website links |
| find support | therapist directories, integration circles | Psychedelic Support, MAPS links |
| music | curated playlists, JHU playlist | Spotify / YouTube links |
| meditation | curated guides per node | YouTube links |
| breathwork | guides per technique | YouTube links |
| legal | jurisdiction status | Psychedelic Alpha, gov links |
| reciprocity | IRI, Chacruna, how to give back | donation / org links |

### 5.6 blog / articles

original content, EN + ES, properly sourced.

| category | examples | SEO intent |
|---|---|---|
| the science | research summaries, neuroscience explainers | "psilocybin research 2026" |
| preparation | practical guides per substance/context | "how to prepare for psilocybin" |
| integration | node deep dives, practice guides | "psychedelic integration guide" |
| safety | contraindications, medication interactions | "psilocybin SSRI interaction" |
| traditions | indigenous knowledge (with attribution) | "mazatec ceremony history" |
| practice | breathwork, meditation, journaling methods | "breathwork for psychedelics" |
| perspectives | guest contributors, community voices | authority building |
| legal | jurisdiction updates, access guides | "psilocybin legal costa rica" |

---

## 6. visual identity

### 6.1 direction: nature editorial (C) + dark forest (A)

**public site + blog:** light, editorial, nature photography, bold serif typography. approachable, educational, trustworthy.

**portal (logged in):** dark, introspective, focused. the journal lives here. reduced stimulation. UI gets out of the way.

**the transition mirrors the journey:** daylight education → threshold (login) → dark introspective space.

### 6.2 typography

- display/headings: Cormorant Garamond (serif, already in both codebases)
- body/UI: DM Sans or Jost (clean sans-serif)
- self-hosted WOFF2, variable fonts preferred, total payload <100KB

### 6.3 color system (OKLCH)

**public site palette:**
- backgrounds: warm neutrals (moon, sand, cream)
- text: deep forest/ink (never pure black)
- accents: forest green, sage
- photography: natural light, forests, water, earth, canopy light

**portal palette:**
- background: deep forest dark (`oklch(0.10 0.02 150)`)
- text: ivory hierarchy through opacity
- accents: sage (nodes), gold (sacred/spiritual layer)
- crisis resources: high-contrast regardless of context

### 6.4 photography direction

- nature: forests, light through canopy, water, earth textures, roots, mycelium
- human: silhouettes, hands, contemplative poses (never faces — privacy metaphor)
- editorial: bold type over landscape (Quartr reference)
- no stock wellness imagery. no gradient orbs. no AI-generated art.

### 6.5 motion system

carried forward from the original Mycelium code specs (CLAUDE_CODE_START_v2.md):

- user-driven interactions → spring animations
- system announcements → eased transitions
- high-frequency interactions (typing, toggling) → no animation
- journal textarea → zero animation
- progress bars → linear easing only
- crisis resources → no entrance animation (instant, always available)
- all animations respect `prefers-reduced-motion`

full motion system: [`docs/framework/motion-system.md`](../framework/motion-system.md) (to be created from CLAUDE_CODE_START_v2.md)

---

## 7. privacy & security

### 7.1 architecture

| data type | storage | encryption | syncs |
|---|---|---|---|
| journal entries | Supabase Postgres | E2E encrypted (client-side libsodium) | yes (encrypted blob) |
| screening results | IndexedDB (local only) | n/a (never leaves device) | no |
| progress data | Supabase Postgres | E2E encrypted | yes |
| music preferences | Supabase Postgres | E2E encrypted | yes |
| user profile | Supabase Auth | email only | yes |
| blog content | public (no auth) | n/a | n/a |

### 7.2 principles

- email is the only PII. never linked to substance use data in plaintext.
- server cannot read journal content (E2E encryption, keys derived from user password)
- no analytics tracking substance-related behavior
- plausible analytics (privacy-respecting) or none
- full data export (JSON/text) at any time
- account deletion = immediate, complete, no retention
- open-source encryption implementation (auditable)
- screening data never leaves the device

### 7.3 legal disclaimers (modeled on fireside project)

required on every page:
- "this tool does not encourage or condone any illegal activities"
- "does NOT provide medical care, medical assessments, or psychotherapy"
- "not a substitute for emergency services"
- geo-aware: "psychedelic substances have different legal statuses in different jurisdictions"

screening language:
- always: "people with these conditions should consult their healthcare provider"
- never: "based on your answers, you should not proceed"

---

## 8. bilingual architecture (EN/ES)

- URL-based i18n: `[locale]` route segments (`/en/portal`, `/es/portal`)
- all content in both languages: UI, journal prompts, blog articles, crisis resources
- language toggle always accessible
- crisis resources localized per region
- professionally written, not machine-translated
- cultural adaptation: curanderismo context for ES, specific Latin American legal info
- contributor content accepted in either language

---

## 9. tech stack

| layer | tool | rationale |
|---|---|---|
| framework | Next.js App Router + TypeScript | SSR for public/SEO, client for portal |
| styling | Tailwind CSS v4 (OKLCH, @theme) | design system coherence |
| animation | Motion (UI) + GSAP + ScrollTrigger + Lenis (scroll) | original Mycelium motion specs |
| auth | Supabase Auth (required for portal) | proven, your existing stack |
| database | Supabase Postgres | E2E encrypted journals |
| encryption | libsodium / tweetnacl (client-side) | open-source, auditable |
| media | all external public links (YouTube, Spotify) | zero licensing, zero hosting |
| i18n | next-intl | URL-based locale segments |
| blog | MDX (local files) or Notion as CMS | your existing content patterns |
| deployment | Vercel | your stack |
| analytics | Plausible or none | privacy-respecting |
| license | MIT | open source |

---

## 10. ethical commitments

### 10.1 indigenous reciprocity

- credit traditions by name in all content
- link to living practitioners and organizations
- include a reciprocity mechanism: prominent link to [Indigenous Reciprocity Initiative](https://chacruna.net/indigenous-reciprocity-initiative/)
- present cultural context as inseparable from practical content
- use accurate terminology (onanya, curandera, not generic "shaman")
- never use sacred imagery decoratively

### 10.2 the 8 lancet principles (embedded)

1. reverence — medicines as sacred, not commodities
2. respect — engage indigenous scholars; FPIC
3. responsibility — prevent appropriation; equitable benefit-sharing
4. relevance — indigenous perspectives in content creation
5. regulation — respect for indigenous IP
6. reparation — fair compensation where applicable
7. restoration — indigenous authority over their traditions
8. reconciliation — restorative justice

### 10.3 crisis safety

| resource | contact | always visible |
|---|---|---|
| 988 Suicide & Crisis Lifeline | 988 | yes |
| Fireside Project | 623-473-7433 | yes |
| Crisis Text Line | text HOME to 741741 | yes |
| SAMHSA | 1-800-662-4357 | yes |
| local emergency | 911 / localized | yes |

crisis resources: no entrance animation. instant render. one-tap call. minimal UI during crisis states. large buttons. simple language.

---

## 11. content sources — all must be cited and linked

### 11.1 published papers (18+)

full list in research synthesis: [`docs/research/00-mycelium-research-synthesis.md`](../research/00-mycelium-research-synthesis.md)

### 11.2 key organizations

- [Johns Hopkins Center for Psychedelic and Consciousness Research](https://hopkinspsychedelic.org/)
- [MAPS](https://maps.org/)
- [Fireside Project](https://firesideproject.org/)
- [Zendo Project](https://zendoproject.org/)
- [Chacruna Institute](https://chacruna.net/)
- [Indigenous Reciprocity Initiative](https://chacruna.net/indigenous-reciprocity-initiative/)
- [ICEERS](https://www.iceers.org/)
- [Psychedelic Support](https://psychedelic.support/)
- [Wavepaths](https://wavepaths.com/)
- [EMBARK](https://embarkapproach.com/)
- [DanceSafe](https://dancesafe.org/)
- [Compass Pathways](https://compasspathways.com/)
- [Usona Institute](https://www.usona.org/)

### 11.3 books (13+)

full list in research synthesis.

---

## 12. build phases

### phase 1: foundation + public site
- project scaffold (Next.js, TS, Tailwind v4, fonts, i18n)
- design tokens (OKLCH, light + dark palettes)
- public site: landing, science, framework, safety, about
- blog infrastructure (MDX)
- crisis resources component (always visible)
- deploy to Vercel

### phase 2: auth + portal foundation
- Supabase project + auth flow
- informed consent onboarding
- E2E encryption layer (libsodium)
- portal shell (dark theme, navigation)
- screening awareness flow
- basic journal (free-write, node tagging)

### phase 3: the preparation pathway
- timeline-adaptive pathway engine
- daily practice delivery (YouTube/public links)
- journal prompts per node per phase
- breathwork + meditation curated links
- music companion (curated playlists, Spotify/YouTube links)
- progress tracking

### phase 4: full integration journal
- Receive → Recognize → Return flow
- domain-specific rotating prompts
- personal playlist builder (link songs to entries)
- track-by-track journaling
- search, filter, export
- spiritual + energy layer toggles

### phase 5: content + blog
- first 10-15 articles (EN + ES)
- resource library (fully curated)
- SEO optimization
- contributor guidelines

### phase 6: polish + launch
- responsive audit (375 / 768 / 1440)
- accessibility pass (WCAG AA)
- performance pass
- security audit (encryption, data handling)
- open-source launch (GitHub, README, contributing guide)
- community announcement

---

## 13. open decisions

| decision | status | notes |
|---|---|---|
| domain name | OPEN | mycelium.xyz? mycelium.guide? |
| blog CMS (MDX vs Notion) | OPEN | MDX aligns with open-source; Notion aligns with your workflow |
| photography sourcing | OPEN | Unsplash? commissioned? |
| original audio compositions | OPEN | CC-licensed breathwork/meditation if YouTube links insufficient |
| contributor model | OPEN | how do external contributors submit content? |
| reciprocity mechanism | OPEN | donation links? percentage of any future funding? |

---

## 14. success metrics (for an open-source public good)

not revenue. not DAU. instead:

- number of GitHub stars / forks / contributors
- number of journal entries created (aggregate, anonymized)
- number of articles published in both languages
- community size (integration circle connections)
- press / citations from researchers and practitioners
- user feedback quality (not quantity)
- zero data breaches
- zero cultural harm complaints from indigenous communities

---

*this PRD is a living document. update as research completes and implementation begins.*
*research base: [`docs/research/00-mycelium-research-synthesis.md`](../research/00-mycelium-research-synthesis.md)*
*framework detail: [`docs/framework/00-the-mycelial-network.md`](../framework/00-the-mycelial-network.md)*
