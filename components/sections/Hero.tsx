"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Counter } from "@/components/animations/Counter"

const headlineWords = ["Designing", "clarity", "in", "complexity."]

const metrics = [
  { value: 4, suffix: "+", label: "Years in Fintech" },
  { value: 3, suffix: "", label: "Products Shipped" },
  { value: 23, suffix: "%", label: "Avg. Conversion Lift" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right glow */}
        <div
          className="absolute -top-[30%] -right-[20%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left subtle glow */}
        <div
          className="absolute -bottom-[20%] -left-[15%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
                              linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="section-label mb-6"
        >
          UI/UX Designer &middot; Fintech
        </motion.p>

        {/* Headline with stagger */}
        <h1 className="mb-6" style={{ fontSize: "var(--text-hero)" }}>
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: [0, 0, 0.2, 1],
              }}
              className={`inline-block mr-[0.3em] ${
                i === 1 ? "text-[var(--accent-text)]" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0, 0, 0.2, 1] }}
          className="max-w-[520px] text-[var(--text-secondary)] text-[17px] leading-relaxed mb-12"
        >
          I turn complex fintech flows into intuitive experiences.
          <br />
          Currently crafting products at Bito,
          where every pixel serves a purpose.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0, 0, 0.2, 1] }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <a
            href="#work"
            className="rounded-[6px] bg-[var(--accent-blue)] px-6 py-2.5 text-[13px] font-medium text-white tracking-[0.02em] transition-all duration-150 hover:bg-[#0052CC] hover:scale-105 active:scale-[0.98]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-[6px] border border-[var(--border-accent)] bg-transparent px-6 py-2.5 text-[13px] font-medium text-[var(--accent-text)] tracking-[0.02em] transition-all duration-150 hover:bg-[var(--accent-dim)] hover:scale-105 active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0, 0, 0.2, 1] }}
          className="flex flex-wrap gap-12 md:gap-16"
        >
          {metrics.map((metric, i) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <div
                className="font-mono text-[28px] font-medium text-[var(--text-primary)] tracking-tight"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  duration={1500 + i * 150}
                />
              </div>
              <span className="text-[var(--text-muted)] text-[11px] font-medium tracking-[0.04em]">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--text-muted)] text-[10px] tracking-[0.12em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} className="text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
