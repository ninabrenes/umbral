# The Portal — Vision Redesign Spec

**Date:** 2026-04-02
**Status:** Approved
**Scope:** Full platform vision pivot + Phase 1 build spec

---

## Vision

The Portal is a free, community-first platform for women to engage with their cycles, archetypes, and inner life. Everything is free — courses, books, readings, resources. Revenue comes later through optional patronage. The platform builds audience through a newsletter, deepens engagement through personalized content paths, and eventually grows into virtual calls and in-person events.

---

## Information Architecture

### Public layer (no account needed)
- **Homepage** — editorial landing with ritual quiz CTA woven throughout
- **The Embody Course** — all 12 modules browseable, content open. Supports video (AI avatar + captions), written content (MDX), and practice blocks
- **Soul Guide** — teaser/waitlist (AI features Phase 3)
- **Book Library** — unlimited books (Foundational 50 is the seed, not the ceiling). Each book: title, author, summary, key highlights (3-5 takeaways), Goodreads link, tags (life stage, cycle phase, pain points, topics). Filterable and searchable.
- **Resources** — future home for articles, practices, meditations. Launches with "coming soon" state. Filterable by content type, life stage, cycle phase, topic.
- **About** — who you are and why this exists

### Personalized layer (after ritual quiz + email)
- **Mirror letter** — AI-generated reflection from quiz answers, sent to inbox, viewable at shareable URL
- **Your Path** — curated starting sequence (3-5 items from library/course) based on profile
- **Profile** — persistent page with garden/bloom visualization, cycle wheel, saved content, journal entries

### Engagement layer (grows over time)
- Newsletter segmented by profile type
- Shared anonymous reflections (Phase 3)
- Virtual calls announced through newsletter (Phase 4)
- Community space when critical mass exists (Phase 4)

### Removed from current build
- Login/signup auth flow (replaced by quiz + email as identity)
- Pricing page (everything is free)
- Dashboard (replaced by profile/path pages)
- PayPal/Stripe (replaced by optional donation link in footer)

---

## The Onboarding Ritual

**Name:** "The Mirror" or "Begin Here"
**URL:** `/begin`
**UX:** Full-screen, immersive, one question at a time. Serif font at large scale. Slow, spacious transitions. Not a quiz — a self-discovery experience.

### Flow

1. **Entry screen** — "Before we guide you, let us see you." One button: "Begin."
2. **10-12 questions**, one per screen with transitions:
   - **Life stage (3 questions):** age range, where you are in life (seeking / building / releasing / returning), relationship to your body right now
   - **Cycle awareness (2 questions):** do you track your cycle, how connected do you feel to your rhythms
   - **Pain points (3 questions):** what feels heavy right now, what you've tried that hasn't worked, what you're hungry for
   - **Intent (2 questions):** what drew you here, what would shift if this worked
   - **Spirit (1-2 questions):** relationship to spirituality/inner life, open-ended "what do you want to be asked that no one asks you"
3. **The Pause** — breathing moment before result. Screen dims, breathing circle animation, 3-4 seconds.
4. **The Mirror Letter** — AI-generated reflection (2-3 paragraphs). Warm, direct, Soul Guide voice. Names what they shared back to them.
5. **Email capture** — "We'll send this to your inbox so you can return to it." Name + email. Framed as receiving, not giving.
6. **Your Path** — "Based on what you've shared, here's where to begin." 3-5 curated starting points.

### Question formats
- Single select (large tap targets, not radio buttons)
- Sliding scale with warm gradient ("not at all — deeply")
- One open-ended text field (final spirit question)

### Mirror letter generation
- Anthropic API with pre-built prompt template
- Quiz answers injected into prompt
- Result stored in Supabase, viewable at `/mirror/[id]`
- Sent to email via Resend

---

## Content System

### Module pages (mixed media)
Each module supports any combination — page adapts to what's available:
- **Video block** — embedded player with captions, AI avatar. Full-width or contained. Top of module when present.
- **Written content** — MDX with custom components (breathwork timers, journaling prompts, reflection questions)
- **Practice block** — guided exercise tagged by cycle phase. Breathing, body scan, journaling, movement.
- **Reading list** — auto-linked books from library based on module tags

### Book library (unlimited, growing)
- Stored in Supabase (not hardcoded) — add books without code deploys
- Fields: title, author, summary, key highlights (3-5), Goodreads URL, cover image, tags (life stage, cycle phase, pain points, topics), category
- Filterable by category, life stage, cycle phase, topic
- Book detail page with full summary, highlights, and related books

### Resources section
- Launches with "coming soon" state
- Filterable by: content type (read, listen, watch, practice), life stage, cycle phase, topic
- Grows as content is created

### Newsletter
- Resend for delivery
- Segmented by profile data: life stage, primary pain point, intent
- Not built into platform — written externally, delivered via Resend
- Email capture at: ritual completion, footer subscribe, "save your path" prompt

---

## Design Language: Feminine, Gamified, Interactive

### Design principles
- **Cyclical, not linear** — progress as wheel/spiral/moon phases, not progress bars
- **Relational, not transactional** — interactions acknowledge the woman, not just the task
- **Embodied** — organic rhythms in animation (breathing, flowing, pulsing). Nothing mechanical.
- **Warm and intimate** — terracotta, fig, rose, sand palette. Linen grain textures, soft edges, hand-drawn SVG accents.

### Gamification (feminine, not masculine)
- **Garden/bloom metaphor** — profile "garden" grows as women engage. Each module, book, or practice adds a bloom. Visual, personal, not competitive.
- **Cycle wheel** — circular visual on profile showing cycle phase, aligned content, suggested practices. Rotates through the month.
- **Ritual streaks** — "You've returned to yourself 4 times this moon cycle." Devotion framing, not productivity.
- **Unlockable reflections** — Soul Guide reflections appear after engaging with certain content. Easter egg, not gate.
- **Path milestones** — gentle markers. "You've crossed the threshold of Module 3. Here's what's opening next."

### Interactive elements
- Breathwork timer (expanding/contracting circle, haptic on mobile)
- Journaling prompts (expandable text, private, saved to profile)
- Cycle phase selector (always accessible, changes content suggestions)
- Book rating/reflection (private note or shared anonymous reflection)
- Progress as visual journey (flowing path illustration, not checklist)

### What this is NOT
- No badges, points, XP
- No leaderboards or social comparison
- No daily streak guilt
- No push notification nagging

---

## Technical Architecture

### Stack (unchanged)
- Next.js 16 + TypeScript + Tailwind CSS v4 (OKLCH tokens)
- GSAP + ScrollTrigger + Lenis (scroll animation)
- Motion (page transitions, UI interactions)
- Resend (email delivery)
- Vercel (deployment)

### Supabase (new role)
- **profiles** — quiz answers, life stage, pain points, intent, email, name, garden state, cycle info
- **books** — replaces hardcoded array. Full book data with tags.
- **mirror_letters** — generated reflections stored with shareable ID
- **journal_entries** — private per-profile journaling (Phase 2)
- **reflections** — anonymous shared reflections (Phase 3)
- No auth login/password — email from quiz IS the identity. Returning users enter their email to receive a magic link to access their profile/path. Simple single-field form, not a login page.

### Anthropic API
- Mirror letter generation (one call per quiz completion, stored in Supabase)
- Soul Guide chat (Phase 3)

### New pages
- `/begin` — onboarding ritual (full-screen immersive)
- `/mirror/[id]` — shareable mirror letter
- `/path` — curated starting path
- `/profile` — garden, cycle wheel, saved content, journal
- `/resources` — filterable content hub
- `/library` — upgraded book library (replaces current)
- `/library/[slug]` — individual book page

### Removed pages
- `/login`, `/signup` — replaced by quiz email capture
- `/pricing` — everything is free
- `/dashboard/*` — replaced by `/profile`, `/path`

### Video hosting
- TBD. Module component accepts a video URL.
- Options: YouTube unlisted, Vimeo, or dedicated host. Decision deferred.

---

## Launch Phases

### Phase 1 — The Seed (NOW)
- Redesigned homepage with ritual CTA
- Onboarding ritual (`/begin`) — full 10-12 question experience
- Mirror letter generation + email capture
- Curated path page
- Book library upgraded (summaries, highlights, Goodreads links, tags, unlimited, stored in Supabase)
- Newsletter infrastructure (Resend, segmented by profile)
- Footer donation link
- All public, no login required

### Phase 2 — The Roots
- Embody Course modules with written content (MDX)
- Video modules (AI avatar + captions) as produced
- Practice blocks (breathwork timer, journaling, cycle phase selector)
- Profile page with garden/bloom visualization
- Cycle wheel
- Book reflections (private notes)

### Phase 3 — The Bloom
- Soul Guide AI chat (Attune, Create, Integrate modes)
- Resources hub with filtering
- Shared anonymous reflections
- Unlockable Soul Guide reflections
- Path milestone visualizations

### Phase 4 — The Gathering
- Virtual call announcements through newsletter
- Community reflections wall
- Collective energy visualization
- Optional patronage/donation system
- Community space (when audience warrants)

---

## Open Decisions

| Decision | Status | Notes |
|---|---|---|
| Platform name (final) | OPEN | "The Portal" is working title |
| Domain | OPEN | |
| Video hosting provider | DEFERRED | Phase 2 |
| Ritual quiz exact questions | OPEN | Framework defined, exact wording TBD |
| Garden/bloom visual style | DEFERRED | Phase 2 |
| Community platform (Discord/Circle/custom) | DEFERRED | Phase 4 |
