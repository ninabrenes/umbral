export const EASE_OUT_EXPO = [0.25, 0.1, 0.25, 1] as const

export const SCROLL_REVEAL = {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.1,
} as const

export const TEXT_REVEAL = {
  y: '100%',
  duration: 0.7,
  ease: 'power3.out',
  stagger: 0.06,
} as const

export const FADE_IN = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE_OUT_EXPO },
} as const

export const PAGE_TRANSITION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' },
} as const

export const PARALLAX = {
  speed: 0.15,
  scale: 1.15,
} as const

export const STAGGER = {
  fast: 0.04,
  normal: 0.08,
  slow: 0.12,
} as const

export const DURATION = {
  fast: 0.5,
  normal: 0.8,
  slow: 1.2,
} as const
