"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import type { ReactNode } from "react"

interface CaseSceneProps {
  label?: string
  title: string
  tag?: string
  description?: string
  children?: ReactNode
  bg?: "light" | "surface" | "dark"
}

export function CaseScene({
  label,
  title,
  tag,
  description,
  children,
  bg = "light",
}: CaseSceneProps) {
  const bgClass =
    bg === "dark"
      ? "bg-[var(--bg-dark)] text-[var(--bg-primary)]"
      : bg === "surface"
        ? "bg-[var(--bg-surface)]"
        : "bg-[var(--bg-primary)]"

  const titleColor =
    bg === "dark" ? "text-[var(--bg-primary)]" : "text-[var(--text-primary)]"

  const descColor =
    bg === "dark" ? "text-[#A8A29E]" : "text-[var(--text-secondary)]"

  return (
    <section className={`py-[var(--space-section)] px-6 md:px-[120px] ${bgClass}`}>
      <div className="mx-auto max-w-[1200px]">
        <SectionReveal>
          {label && (
            <p
              className="section-label mb-3"
              style={{ color: "var(--accent-brass)" }}
            >
              {label}
            </p>
          )}
          <h2
            className={`mb-3 ${titleColor}`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h2>
          {tag && (
            <p
              className="text-[13px] mb-4"
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "var(--accent-brass)",
              }}
            >
              {tag}
            </p>
          )}
          {description && (
            <p className={`mb-8 max-w-[640px] text-[15px] leading-relaxed ${descColor}`}>
              {description}
            </p>
          )}
        </SectionReveal>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
