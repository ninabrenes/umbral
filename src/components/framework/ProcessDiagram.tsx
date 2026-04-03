import type { Locale } from '@/types'

const phases = [
  {
    id: 'receive',
    label: { en: 'Receive', es: 'Recibir' },
    quality: { en: 'feminine', es: 'femenino' },
    question: { en: 'what is here?', es: '\u00bfqu\u00e9 hay aqu\u00ed?' },
  },
  {
    id: 'recognize',
    label: { en: 'Recognize', es: 'Reconocer' },
    quality: { en: 'balance', es: 'equilibrio' },
    question: { en: 'what does this mean?', es: '\u00bfqu\u00e9 significa esto?' },
  },
  {
    id: 'return',
    label: { en: 'Return', es: 'Retornar' },
    quality: { en: 'masculine', es: 'masculino' },
    question: { en: 'what will I do with this?', es: '\u00bfqu\u00e9 har\u00e9 con esto?' },
  },
] as const

const CIRCLE_R = 52
const SPACING = 220
const START_X = 80
const CENTER_Y = 120
const VIEWBOX_W = 700
const VIEWBOX_H = 260

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
      className="w-full max-w-[700px] h-auto"
      role="img"
      aria-label={
        locale === 'en'
          ? 'Process: Receive, Recognize, Return'
          : 'Proceso: Recibir, Reconocer, Retornar'
      }
    >
      {/* ── connecting arrows ── */}
      {[0, 1].map((i) => {
        const x1 = START_X + i * SPACING + CIRCLE_R + 8
        const x2 = START_X + (i + 1) * SPACING - CIRCLE_R - 8
        const midX = (x1 + x2) / 2

        return (
          <g key={`arrow-${i}`}>
            {/* line */}
            <line
              x1={x1}
              y1={CENTER_Y}
              x2={x2 - 6}
              y2={CENTER_Y}
              stroke="oklch(0.45 0.03 150)"
              strokeWidth={1.2}
              strokeOpacity={0.3}
              strokeDasharray="6 4"
            />
            {/* arrowhead */}
            <polygon
              points={`${x2 - 6},${CENTER_Y - 4} ${x2},${CENTER_Y} ${x2 - 6},${CENTER_Y + 4}`}
              fill="oklch(0.45 0.03 150)"
              fillOpacity={0.3}
            />
            {/* decorative dot at midpoint */}
            <circle
              cx={midX}
              cy={CENTER_Y}
              r={2}
              fill="oklch(0.45 0.03 150)"
              fillOpacity={0.2}
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
            {/* outer circle */}
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CIRCLE_R}
              fill={color}
              fillOpacity={0.06}
              stroke={color}
              strokeWidth={1.2}
              strokeOpacity={0.3}
            />

            {/* inner ring */}
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CIRCLE_R - 10}
              fill="none"
              stroke={color}
              strokeWidth={0.6}
              strokeOpacity={0.15}
            />

            {/* phase label */}
            <text
              x={cx}
              y={CENTER_Y - 4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={color}
              fontSize={15}
              fontFamily="var(--font-serif), Georgia, serif"
              fontWeight={400}
              fontStyle="italic"
            >
              {phase.label[locale]}
            </text>

            {/* quality label below name */}
            <text
              x={cx}
              y={CENTER_Y + 14}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="oklch(0.45 0.02 150)"
              fontSize={10}
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={300}
              letterSpacing="0.1em"
              style={{ textTransform: 'uppercase' }}
            >
              {phase.quality[locale]}
            </text>

            {/* guiding question below circle */}
            <text
              x={cx}
              y={CENTER_Y + CIRCLE_R + 22}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="oklch(0.40 0.02 150)"
              fontSize={12}
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
