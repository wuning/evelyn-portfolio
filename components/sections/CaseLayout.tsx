"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import { useI18n } from "@/lib/i18n"

interface CaseLayoutProps {
  label?: string
  title: string
  subtitle: string
  role?: string
  team?: string
  duration?: string
  // Legacy props (kept for backward compat until other pages are rewritten)
  tags?: string[]
  coreInsight?: string
  metrics: { label: string; value: string; positive?: boolean }[]
  children: ReactNode
}

export function CaseLayout({
  label,
  title,
  subtitle,
  role,
  team,
  duration,
  tags,
  coreInsight,
  metrics,
  children,
}: CaseLayoutProps) {
  const { t } = useI18n()

  return (
    <article className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="px-6 md:px-[120px] pt-28 pb-16 bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[1200px]">
          <motion.a
            href="/#work"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2 text-[13px] text-[#78716C] transition-colors duration-150 hover:text-[var(--accent-deep)]"
          >
            <ArrowLeft size={14} />
            {t("case.back")}
          </motion.a>

          {label && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-label mb-4"
              style={{ color: "var(--accent-deep)" }}
            >
              {label}
            </motion.p>
          )}

          {!label && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-label mb-4"
              style={{ color: "var(--accent-deep)" }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-[var(--bg-primary)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </motion.h1>

          {label && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-[640px] text-[16px] leading-relaxed text-[#A8A29E]"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Tags (legacy) */}
          {tags && tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-medium)] px-2.5 py-0.5 text-[10px] tracking-[0.04em] text-[#78716C]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Role / Team / Duration (new) */}
          {(role || team || duration) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-10 flex flex-wrap gap-8 text-[13px]"
            >
              {role && (
                <div>
                  <span className="block text-[10px] tracking-[0.1em] uppercase text-[#78716C] mb-1">
                    {t("case.role")}
                  </span>
                  <span className="text-[var(--bg-primary)]">{role}</span>
                </div>
              )}
              {team && (
                <div>
                  <span className="block text-[10px] tracking-[0.1em] uppercase text-[#78716C] mb-1">
                    {t("case.team")}
                  </span>
                  <span className="text-[var(--bg-primary)]">{team}</span>
                </div>
              )}
              {duration && (
                <div>
                  <span className="block text-[10px] tracking-[0.1em] uppercase text-[#78716C] mb-1">
                    {t("case.duration")}
                  </span>
                  <span className="text-[var(--bg-primary)]">{duration}</span>
                </div>
              )}
            </motion.div>
          )}

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-10"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-0.5">
                <span
                  className="text-[28px] font-light tracking-tight"
                  style={{
                    fontFamily: "Georgia, serif",
                    color: "var(--accent-deep)",
                  }}
                >
                  {metric.value}
                </span>
                <span className="text-[10px] tracking-[0.1em] uppercase text-[#78716C]">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Core Insight (legacy) */}
          {coreInsight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 rounded-[12px] border-l-4 bg-[var(--bg-dark-surface)] p-6"
              style={{ borderLeftColor: "var(--accent-brass)" }}
            >
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--accent-deep)] mb-2">
                Core Insight
              </p>
              <p
                className="text-[16px] leading-relaxed text-[var(--bg-primary)] italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;{coreInsight}&rdquo;
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case content */}
      <div className="space-y-0">{children}</div>

      {/* Bottom nav */}
      <section className="px-6 md:px-[120px] py-16 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="/#work"
            className="text-[var(--accent-brass)] text-[14px] font-medium hover:underline transition-colors duration-150"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ← {t("case.all")}
          </a>
        </div>
      </section>
    </article>
  )
}
