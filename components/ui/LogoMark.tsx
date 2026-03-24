"use client"

interface LogoMarkProps {
  className?: string
  size?: number
  animated?: boolean
}

export function LogoMark({ className = "", size = 32, animated = false }: LogoMarkProps) {
  const w = size * (56 / 36)
  const h = size

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 56 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-mark ${animated ? "logo-mark--animated" : ""} ${className}`}
      aria-hidden="true"
    >
      {/* Eye outline — almond/vesica shape */}
      <path
        d="M 2,18 C 14,3 42,3 54,18 C 42,33 14,33 2,18 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        className="logo-eye"
      />

      {/* Iris ring — subtle inner circle */}
      <circle
        cx="28"
        cy="18"
        r="9"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
        opacity="0.25"
        className="logo-iris"
      />

      {/* Fork / diverging path — the pupil.
          Stem rises from bottom, splits at junction into two branches.
          Reads as: "I see the decision point ahead." */}
      <path
        d="M 28,25.5 L 28,18"
        stroke="var(--accent-brass, #A3863A)"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="logo-stem"
      />
      <path
        d="M 28,18 L 21.5,11"
        stroke="var(--accent-brass, #A3863A)"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="logo-branch-left"
      />
      <path
        d="M 28,18 L 34.5,11"
        stroke="var(--accent-brass, #A3863A)"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="logo-branch-right"
      />

      {/* Junction dot — the decision point */}
      <circle
        cx="28"
        cy="18"
        r="2.25"
        fill="var(--accent-brass, #A3863A)"
        className="logo-dot"
      />
    </svg>
  )
}
