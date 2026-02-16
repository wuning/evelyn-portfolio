"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTilt } from "@/hooks/useTilt"

interface CaseCardProps {
  title: string
  subtitle: string
  description: string
  tags: string[]
  metrics: { label: string; value: string; positive?: boolean }[]
  href: string
  index: number
  accentColor?: string
}

export function CaseCard({
  title,
  subtitle,
  description,
  tags,
  metrics,
  href,
  index,
  accentColor = "var(--accent-blue)",
}: CaseCardProps) {
  const tilt = useTilt(6)

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0, 0, 0.2, 1],
      }}
      className="group block"
    >
      <div
        ref={tilt.ref}
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="relative overflow-hidden rounded-[16px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 transition-colors duration-300 group-hover:border-[var(--border-accent)] group-hover:bg-[var(--bg-card-hover)]"
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: accentColor }}
        />

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="section-label mb-2">{subtitle}</p>
            <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
              {title}
            </h3>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--border-accent)] group-hover:text-[var(--accent-text)] group-hover:scale-110">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-[var(--text-secondary)] text-[14px] leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Metrics */}
        <div className="mb-6 flex flex-wrap gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-0.5">
              <span
                className="font-mono text-[16px] font-medium tracking-tight"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: metric.positive === false
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
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-[var(--border-subtle)] bg-transparent px-2.5 py-0.5 text-[10px] font-normal tracking-[0.04em] text-[var(--text-muted)] hover:border-[var(--border-accent)] hover:text-[var(--accent-text)]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
