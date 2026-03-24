"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { SectionReveal } from "@/components/animations/SectionReveal"

interface BeforeAfterSliderProps {
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPosition(percent)
    },
    []
  )

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true)
      updatePosition(e.clientX)
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [updatePosition]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      updatePosition(e.clientX)
    },
    [isDragging, updatePosition]
  )

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Keyboard support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 2))
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 2))
    }
  }, [])

  return (
    <SectionReveal className={className}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-[12px] border border-[var(--border-subtle)] select-none"
        style={{ aspectRatio: "16 / 9" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* After image (full, underneath) */}
        <div className="absolute inset-0">
          <Image
            src={after.src}
            alt={after.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 800px"
            draggable={false}
          />
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 800px"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[var(--accent-brass)] z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--accent-brass)] shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white"
            >
              <path
                d="M4.5 3L1.5 8L4.5 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 3L14.5 8L11.5 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div
          className="absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.08em] uppercase"
          style={{
            background: "rgba(28, 25, 23, 0.75)",
            color: "var(--accent-deep)",
            backdropFilter: "blur(8px)",
          }}
        >
          {beforeLabel}
        </div>
        <div
          className="absolute top-4 right-4 z-10 rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.08em] uppercase"
          style={{
            background: "rgba(28, 25, 23, 0.75)",
            color: "var(--accent-deep)",
            backdropFilter: "blur(8px)",
          }}
        >
          {afterLabel}
        </div>
      </div>
    </SectionReveal>
  )
}
