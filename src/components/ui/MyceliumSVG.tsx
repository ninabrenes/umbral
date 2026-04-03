interface MyceliumSVGProps {
  className?: string
}

export function MyceliumSVG({ className = '' }: MyceliumSVGProps) {
  return (
    <svg
      viewBox="0 0 500 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="oklch(0.20 0.02 150)" opacity="0.10">
        {/* main trunk — rising organic curve */}
        <path
          d="M250 580 C245 520 260 460 240 400 C220 340 255 290 250 230 C245 170 230 120 260 60"
          strokeWidth="1.4"
        />

        {/* left primary branch */}
        <path
          d="M240 400 C200 380 160 370 110 340 C80 325 60 300 40 260"
          strokeWidth="1.2"
        />
        {/* left secondary branches */}
        <path
          d="M160 370 C140 340 120 330 80 320"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <path
          d="M110 340 C100 310 80 290 50 280"
          strokeWidth="0.7"
          opacity="0.6"
        />
        <path
          d="M200 380 C180 360 150 350 120 360 C100 366 80 355 60 340"
          strokeWidth="0.8"
          opacity="0.7"
        />

        {/* right primary branch */}
        <path
          d="M250 230 C290 220 330 200 380 170 C410 152 440 140 470 110"
          strokeWidth="1.2"
        />
        {/* right secondary branches */}
        <path
          d="M330 200 C350 180 380 175 420 180"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <path
          d="M380 170 C400 150 420 155 450 160"
          strokeWidth="0.7"
          opacity="0.6"
        />

        {/* upper left branch */}
        <path
          d="M250 230 C220 210 180 200 140 180 C110 165 80 160 40 150"
          strokeWidth="1.1"
        />
        <path
          d="M180 200 C160 180 130 175 100 180"
          strokeWidth="0.7"
          opacity="0.6"
        />
        <path
          d="M140 180 C120 160 90 150 60 155"
          strokeWidth="0.7"
          opacity="0.5"
        />

        {/* mid-right branch */}
        <path
          d="M255 290 C300 280 340 290 390 300 C420 306 450 295 480 280"
          strokeWidth="1.0"
        />
        <path
          d="M340 290 C360 310 380 320 420 330"
          strokeWidth="0.7"
          opacity="0.6"
        />
        <path
          d="M390 300 C400 320 410 340 430 360"
          strokeWidth="0.7"
          opacity="0.5"
        />

        {/* lower left tendrils */}
        <path
          d="M245 520 C210 510 170 500 130 480 C100 465 70 460 30 450"
          strokeWidth="0.9"
        />
        <path
          d="M170 500 C150 480 120 475 90 480"
          strokeWidth="0.6"
          opacity="0.5"
        />

        {/* lower right tendrils */}
        <path
          d="M245 520 C280 515 320 530 370 540 C400 545 430 535 460 520"
          strokeWidth="0.9"
        />
        <path
          d="M320 530 C340 550 365 560 400 565"
          strokeWidth="0.6"
          opacity="0.5"
        />

        {/* upper fine tendrils */}
        <path
          d="M260 60 C280 40 310 30 340 25"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path
          d="M260 60 C240 40 210 35 180 40"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path
          d="M260 60 C265 30 270 15 275 5"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </g>

      {/* nodes at branch points */}
      <g fill="oklch(0.20 0.02 150)" opacity="0.12">
        {/* main trunk nodes */}
        <circle cx="250" cy="580" r="3" />
        <circle cx="240" cy="400" r="3.5" />
        <circle cx="250" cy="230" r="4" />
        <circle cx="255" cy="290" r="2.5" />
        <circle cx="245" cy="520" r="2.5" />
        <circle cx="260" cy="60" r="3" />

        {/* branch junction nodes */}
        <circle cx="110" cy="340" r="2.5" />
        <circle cx="160" cy="370" r="2" />
        <circle cx="40" cy="260" r="2" />
        <circle cx="80" cy="320" r="1.5" />
        <circle cx="200" cy="380" r="2" />
        <circle cx="60" cy="340" r="1.5" />

        <circle cx="380" cy="170" r="2.5" />
        <circle cx="330" cy="200" r="2" />
        <circle cx="470" cy="110" r="2" />
        <circle cx="420" cy="180" r="1.5" />

        <circle cx="140" cy="180" r="2.5" />
        <circle cx="180" cy="200" r="2" />
        <circle cx="40" cy="150" r="1.5" />
        <circle cx="100" cy="180" r="1.5" />

        <circle cx="390" cy="300" r="2" />
        <circle cx="340" cy="290" r="2" />
        <circle cx="480" cy="280" r="1.5" />
        <circle cx="420" cy="330" r="1.5" />

        <circle cx="130" cy="480" r="2" />
        <circle cx="170" cy="500" r="1.5" />
        <circle cx="370" cy="540" r="2" />
        <circle cx="320" cy="530" r="1.5" />

        {/* terminal nodes — small */}
        <circle cx="50" cy="280" r="1" />
        <circle cx="450" cy="160" r="1" />
        <circle cx="60" cy="155" r="1" />
        <circle cx="430" cy="360" r="1" />
        <circle cx="90" cy="480" r="1" />
        <circle cx="400" cy="565" r="1" />
        <circle cx="340" cy="25" r="1" />
        <circle cx="180" cy="40" r="1" />
        <circle cx="275" cy="5" r="1" />
      </g>
    </svg>
  )
}
