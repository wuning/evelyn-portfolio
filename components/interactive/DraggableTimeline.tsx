"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionReveal } from "@/components/animations/SectionReveal"

interface TimelineEvent {
  id: string
  time: string
  title: string
  detail: string
  insight?: string
}

interface DraggableTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function DraggableTimeline({ events, className = "" }: DraggableTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const x = e.clientX - rect.left
      const ratio = x / rect.width
      const index = Math.round(ratio * (events.length - 1))
      setActiveIndex(Math.max(0, Math.min(events.length - 1, index)))
    },
    [events.length]
  )

  const activeEvent = events[activeIndex]

  return (
    <SectionReveal className={className}>
      <div className="rounded-[16px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8">
        <p className="section-label mb-6 text-center">Timeline</p>

        {/* Active event content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
            className="mb-8 min-h-[120px]"
          >
            <p
              className="mb-1 font-mono text-[11px] text-[var(--accent-text)] tracking-[0.04em]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {activeEvent.time}
            </p>
            <h3 className="mb-3 text-[20px] font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
              {activeEvent.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
              {activeEvent.detail}
            </p>
            {activeEvent.insight && (
              <p className="mt-3 rounded-[8px] bg-[var(--accent-dim)] px-4 py-2 text-[13px] text-[var(--accent-text)] italic">
                &ldquo;{activeEvent.insight}&rdquo;
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Timeline track */}
        <div className="relative">
          <div
            ref={trackRef}
            onClick={handleTrackClick}
            className="relative h-12 cursor-pointer"
          >
            {/* Track line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[var(--border-medium)]">
              {/* Active portion */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-[var(--accent-blue)]"
                animate={{
                  width: `${(activeIndex / (events.length - 1)) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>

            {/* Dots */}
            {events.map((event, i) => {
              const left = events.length > 1 ? `${(i / (events.length - 1)) * 100}%` : "0%"
              const isActive = i === activeIndex
              const isPast = i <= activeIndex

              return (
                <motion.button
                  key={event.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveIndex(i)
                  }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className={`rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "h-4 w-4 border-[var(--accent-blue)] bg-[var(--accent-blue)]"
                        : isPast
                          ? "h-3 w-3 border-[var(--accent-blue)] bg-[var(--bg-primary)]"
                          : "h-3 w-3 border-[var(--border-medium)] bg-[var(--bg-primary)]"
                    }`}
                  />
                </motion.button>
              )
            })}
          </div>

          {/* Labels */}
          <div className="relative mt-1">
            {events.map((event, i) => {
              const left = events.length > 1 ? `${(i / (events.length - 1)) * 100}%` : "0%"
              return (
                <span
                  key={event.id}
                  className={`absolute -translate-x-1/2 text-[9px] tracking-[0.04em] transition-colors duration-300 ${
                    i === activeIndex
                      ? "text-[var(--accent-text)] font-medium"
                      : "text-[var(--text-muted)]"
                  }`}
                  style={{ left, fontFamily: "var(--font-jetbrains)" }}
                >
                  {event.time}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
