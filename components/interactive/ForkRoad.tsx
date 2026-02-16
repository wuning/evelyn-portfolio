"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionReveal } from "@/components/animations/SectionReveal"

interface RoadOption {
  id: string
  label: string
  title: string
  pros: string[]
  cons: string[]
  isEvelyn?: boolean
  accentColor: string
}

interface ForkRoadProps {
  roads: RoadOption[]
  className?: string
}

export function ForkRoad({ roads, className = "" }: ForkRoadProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const selectedRoad = roads.find((r) => r.id === selected)

  return (
    <SectionReveal className={className}>
      <div className="rounded-[16px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8">
        <p className="section-label mb-6 text-center">Choose Your Path</p>

        {/* Road visualization */}
        <div className="relative mx-auto mb-8 max-w-[700px]">
          {/* Starting point */}
          <div className="mx-auto mb-6 h-8 w-[2px] bg-[var(--border-medium)]" />

          {/* Fork branches */}
          <div className="flex justify-center gap-4">
            {roads.map((road, i) => (
              <motion.button
                key={road.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(road.id)}
                className={`group relative flex-1 max-w-[220px] cursor-pointer`}
              >
                {/* Road line */}
                <div
                  className={`mx-auto mb-3 h-12 w-[2px] transition-colors duration-300 ${
                    selected === road.id
                      ? "bg-[var(--accent-blue)]"
                      : selected !== null
                        ? "bg-[var(--border-subtle)] opacity-40"
                        : "bg-[var(--border-medium)]"
                  }`}
                />

                {/* Road card */}
                <div
                  className={`rounded-[12px] border p-4 text-center transition-all duration-300 ${
                    selected === road.id
                      ? "border-[var(--accent-blue)] bg-[var(--bg-card-hover)] scale-[1.02]"
                      : selected !== null
                        ? "border-[var(--border-subtle)] bg-[var(--bg-card)] opacity-40"
                        : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)]"
                  }`}
                >
                  <div
                    className="mx-auto mb-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-mono font-medium"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      background: selected === road.id ? road.accentColor : "var(--bg-secondary)",
                      color: selected === road.id ? "#fff" : "var(--text-muted)",
                    }}
                  >
                    {road.label}
                  </div>
                  <p className="text-[12px] font-medium text-[var(--text-primary)]">
                    {road.title}
                  </p>
                  {road.isEvelyn && (
                    <span className="mt-1 inline-block rounded-full bg-[var(--accent-dim)] px-2 py-0.5 text-[9px] font-medium text-[var(--accent-text)] tracking-[0.04em]">
                      MY CHOICE
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Selected road detail */}
        <AnimatePresence mode="wait">
          {selectedRoad && (
            <motion.div
              key={selectedRoad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
              className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-2 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-success)]">
                    Pros
                  </p>
                  {selectedRoad.pros.map((pro) => (
                    <p key={pro} className="mb-1 text-[13px] text-[var(--text-secondary)]">
                      ✓ {pro}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-danger)]">
                    Cons
                  </p>
                  {selectedRoad.cons.map((con) => (
                    <p key={con} className="mb-1 text-[13px] text-[var(--text-secondary)]">
                      ✗ {con}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  )
}
