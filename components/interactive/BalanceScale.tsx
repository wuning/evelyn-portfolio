"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { SectionReveal } from "@/components/animations/SectionReveal"

interface BalanceScaleProps {
  leftLabel: string
  rightLabel: string
  leftItems: string[]
  rightItems: string[]
  leftMetric: string
  rightMetric: string
  evelynChoice: number // 0-100, where 100 = full right
  className?: string
}

export function BalanceScale({
  leftLabel,
  rightLabel,
  leftItems,
  rightItems,
  leftMetric,
  rightMetric,
  evelynChoice,
  className = "",
}: BalanceScaleProps) {
  const [value, setValue] = useState(50)
  const [showEvelyn, setShowEvelyn] = useState(false)

  const handleChange = useCallback((vals: number[]) => {
    setValue(vals[0])
  }, [])

  const handleShowEvelyn = useCallback(() => {
    setShowEvelyn(true)
    setValue(evelynChoice)
  }, [evelynChoice])

  const rotation = ((value - 50) / 50) * 8 // -8 to 8 degrees
  const leftOpacity = 0.4 + ((100 - value) / 100) * 0.6
  const rightOpacity = 0.4 + (value / 100) * 0.6

  return (
    <SectionReveal className={className}>
      <div className="rounded-[16px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8">
        <p className="section-label mb-6 text-center">Decision Moment</p>

        {/* Scale visual */}
        <div className="relative mx-auto mb-8 h-40 max-w-[600px]">
          {/* Fulcrum */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-16 bg-[var(--border-medium)] rounded-full" />
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent-blue)]" />

          {/* Beam */}
          <motion.div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[var(--border-medium)] origin-center"
            animate={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Left pan */}
            <div
              className="absolute -left-2 -top-24 w-[42%] rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 transition-opacity duration-300"
              style={{ opacity: leftOpacity }}
            >
              <p className="mb-2 text-[12px] font-semibold text-[var(--text-primary)]">
                {leftLabel}
              </p>
              {leftItems.map((item) => (
                <p key={item} className="text-[11px] text-[var(--text-secondary)]">
                  {item}
                </p>
              ))}
              <p
                className="mt-2 font-mono text-[13px] font-medium text-[var(--color-warning)]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {leftMetric}
              </p>
            </div>

            {/* Right pan */}
            <div
              className="absolute -right-2 -top-24 w-[42%] rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 transition-opacity duration-300"
              style={{ opacity: rightOpacity }}
            >
              <p className="mb-2 text-[12px] font-semibold text-[var(--text-primary)]">
                {rightLabel}
              </p>
              {rightItems.map((item) => (
                <p key={item} className="text-[11px] text-[var(--text-secondary)]">
                  {item}
                </p>
              ))}
              <p
                className="mt-2 font-mono text-[13px] font-medium text-[var(--color-success)]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {rightMetric}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Slider */}
        <div className="mx-auto max-w-[400px] mb-6">
          <Slider
            value={[value]}
            onValueChange={handleChange}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="mt-2 flex justify-between text-[10px] text-[var(--text-muted)] tracking-[0.04em]">
            <span>{leftLabel}</span>
            <span>{rightLabel}</span>
          </div>
        </div>

        {/* Evelyn's choice button */}
        {!showEvelyn ? (
          <div className="text-center">
            <button
              onClick={handleShowEvelyn}
              className="rounded-[6px] border border-[var(--border-accent)] bg-transparent px-5 py-2 text-[12px] font-medium text-[var(--accent-text)] tracking-[0.02em] transition-all duration-150 hover:bg-[var(--accent-dim)] hover:scale-105 active:scale-[0.98]"
            >
              Show Evelyn&apos;s Choice
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[10px] border border-[var(--border-accent)] bg-[var(--accent-dim)] p-4 text-center"
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--accent-text)] mb-1">
              Evelyn&apos;s Choice
            </p>
            <p className="text-[13px] text-[var(--text-primary)]">
              天秤傾向「{rightLabel}」— 信任 &gt; 轉換率
            </p>
          </motion.div>
        )}
      </div>
    </SectionReveal>
  )
}
