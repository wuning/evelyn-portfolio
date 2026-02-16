"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface CaseLayoutProps {
  title: string
  subtitle: string
  tags: string[]
  metrics: { label: string; value: string; positive?: boolean }[]
  coreInsight: string
  children: ReactNode
}

export function CaseLayout({
  title,
  subtitle,
  tags,
  metrics,
  coreInsight,
  children,
}: CaseLayoutProps) {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1000px]">
          <motion.a
            href="/#work"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2 text-[13px] text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--accent-text)]"
          >
            <ArrowLeft size={14} />
            Back to Work
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label mb-4"
          >
            {subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
            style={{ fontSize: "var(--text-h1)" }}
          >
            {title}
          </motion.h1>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-[var(--border-subtle)] bg-transparent px-2.5 py-0.5 text-[10px] font-normal tracking-[0.04em] text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 flex flex-wrap gap-8"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-0.5">
                <span
                  className="font-mono text-[22px] font-medium tracking-tight"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color:
                      metric.positive === false
                        ? "var(--color-danger)"
                        : "var(--accent-text)",
                  }}
                >
                  {metric.value}
                </span>
                <span className="text-[var(--text-muted)] text-[10px] tracking-[0.04em]">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Core Insight */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-[12px] border border-[var(--border-accent)] bg-[var(--accent-dim)] p-6"
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--accent-text)] mb-2">
              Core Insight
            </p>
            <p className="text-[16px] leading-relaxed text-[var(--text-primary)] italic">
              &ldquo;{coreInsight}&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case content (scrollytelling sections) */}
      <div className="space-y-0">{children}</div>

      {/* Bottom nav */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1000px] text-center">
          <a
            href="/#work"
            className="inline-block rounded-[6px] border border-[var(--border-accent)] bg-transparent px-6 py-2.5 text-[13px] font-medium text-[var(--accent-text)] tracking-[0.02em] transition-all duration-150 hover:bg-[var(--accent-blue)] hover:text-white hover:scale-105"
          >
            ← View All Cases
          </a>
        </div>
      </section>
    </article>
  )
}
