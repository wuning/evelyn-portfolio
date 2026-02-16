"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import type { ReactNode } from "react"

interface CaseSceneProps {
  number: number
  title: string
  description?: string
  children?: ReactNode
  bg?: "primary" | "secondary"
}

export function CaseScene({
  number,
  title,
  description,
  children,
  bg = "primary",
}: CaseSceneProps) {
  const bgClass =
    bg === "secondary" ? "bg-[var(--bg-secondary)]" : "bg-[var(--bg-primary)]"

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="mx-auto max-w-[1000px]">
        <SectionReveal>
          <p
            className="mb-3 font-mono text-[11px] text-[var(--accent-text)] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Scene {String(number).padStart(2, "0")}
          </p>
          <h2 className="mb-4 text-[var(--text-primary)]">{title}</h2>
          {description && (
            <p className="mb-8 max-w-[600px] text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
          )}
        </SectionReveal>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
