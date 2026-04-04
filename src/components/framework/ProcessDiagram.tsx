import type { Locale } from '@/types'

const phases = [
  {
    id: 'receive',
    label: { en: 'Receive', es: 'Recibir' },
    quality: { en: 'feminine', es: 'femenino' },
    question: { en: 'what is here?', es: '¿qué hay aquí?' },
  },
  {
    id: 'recognize',
    label: { en: 'Recognize', es: 'Reconocer' },
    quality: { en: 'balance', es: 'equilibrio' },
    question: { en: 'what does this mean?', es: '¿qué significa esto?' },
  },
  {
    id: 'return',
    label: { en: 'Return', es: 'Retornar' },
    quality: { en: 'masculine', es: 'masculino' },
    question: { en: 'what will I do with this?', es: '¿qué haré con esto?' },
  },
] as const

const CIRCLE_R = 64
const SPACING = 250
const START_X = 100
const CENTER_Y = 140
const VIEWBOX_W = 800
const VIEWBOX_H = 300

// sage-toned colors for the three phases
const phaseColors = [
  'oklch(0.50 0.07 155)', // receive — deeper sage
  'oklch(0.55 0.08 150)', // recognize — mid sage
  'oklch(0.60 0.06 85)',  // return — warm sage/gold
]

interface ProcessDiagramProps {
  locale: Locale
}

export function ProcessDiagram({ locale }: ProcessDiagramProps) {
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      className="w-full max-w-[800px] h-auto"
      role="img"
      aria-label={
        locale === 'en'
          ? 'Process: Receive, Recognize, Return'
          : 'Proceso: Recibir, Reconocer, Retornar'
      }
    >
      <defs>
        {/* Gradient arrows between phases */}
        {[0, 1].map((i) => (
          <linearGradient
            key={`arrow-grad-${i}`}
            id={`arrow-grad-${i}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={phaseColors[i]} stopOpacity={0.5} />
            <stop offset="100%" stopColor={phaseColors[i + 1]} stopOpacity={0.5} />
          </linearGradient>
        ))}
      </defs>

      {/* ── connecting arrows ── */}
      {[0, 1].map((i) => {
        const x1 = START_X + i * SPACING + CIRCLE_R + 12
        const x2 = START_X + (i + 1) * SPACING - CIRCLE_R - 12
        const midX = (x1 + x2) / 2

        return (
          <g key={`arrow-${i}`}>
            {/* line with gradient stroke */}
            <line
              x1={x1}
              y1={CENTER_Y}
              x2={x2 - 8}
              y2={CENTER_Y}
              stroke={`url(#arrow-grad-${i})`}
              strokeWidth={1.8}
              strokeDasharray="8 5"
            />
            {/* arrowhead */}
            <polygon
              points={`${x2 - 10},${CENTER_Y - 5} ${x2},${CENTER_Y} ${x2 - 10},${CENTER_Y + 5}`}
              fill={phaseColors[i + 1]}
              fillOpacity={0.5}
            />
            {/* decorative dot at midpoint */}
            <circle
              cx={midX}
              cy={CENTER_Y}
              r={2.5}
              fill={phaseColors[i]}
              fillOpacity={0.3}
            />
          </g>
        )
      })}

      {/* ── phase circles ── */}
      {phases.map((phase, i) => {
        const cx = START_X + i * SPACING
        const color = phaseColors[i]

        return (
          <g key={phase.id}>
            {/* subtle outer glow ring */}
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CIRCLE_R + 8}
              fill="none"
              stroke={color}
              strokeWidth={0.5}
              strokeOpacity={0.12}
            />

            {/* outer circle */}
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CIRCLE_R}
              fill={color}
              fillOpacity={0.08}
              stroke={color}
              strokeWidth={1.5}
              strokeOpacity={0.35}
            />

            {/* inner ring */}
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CIRCLE_R - 12}
              fill="none"
              stroke={color}
              strokeWidth={0.7}
              strokeOpacity={0.18}
            />

            {/* phase label */}
            <text
              x={cx}
              y={CENTER_Y - 6}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={color}
              fontSize={17}
              fontFamily="var(--font-serif), Georgia, serif"
              fontWeight={400}
              fontStyle="italic"
            >
              {phase.label[locale]}
            </text>

            {/* quality label below name */}
            <text
              x={cx}
              y={CENTER_Y + 16}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="oklch(0.50 0.02 150)"
              fontSize={10}
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={300}
              letterSpacing="0.12em"
              style={{ textTransform: 'uppercase' }}
            >
              {phase.quality[locale]}
            </text>

            {/* guiding question below circle */}
            <text
              x={cx}
              y={CENTER_Y + CIRCLE_R + 26}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="oklch(0.45 0.02 150)"
              fontSize={13}
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={300}
              fontStyle="italic"
            >
              {phase.question[locale]}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
