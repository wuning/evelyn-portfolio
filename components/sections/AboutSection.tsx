"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Fintech Product Design",
  "Ethical Design",
  "User Protection",
  "AI-assisted Building",
  "Workshop Facilitation",
  "Systems Thinking",
]

const tools = [
  "Figma",
  "Framer",
  "Claude API",
  "React / Next.js",
  "Notion",
  "Miro",
]

export function AboutSection() {
  return (
    <section id="about" className="py-[var(--space-section)] px-6">
      <div className="mx-auto max-w-[1000px]">
        <SectionReveal>
          <p className="section-label mb-4">About</p>
          <h2 className="mb-6 text-[var(--text-primary)]">Evelyn Wu</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12">
          {/* Bio */}
          <SectionReveal delay={0.1}>
            <div className="space-y-5">
              <p className="text-[16px] leading-relaxed text-[var(--text-secondary)]">
                我是一位專注於高風險產品的 Product Designer。
                我相信好的設計不是讓流程「無感」，而是讓用戶「有把握」。
              </p>
              <p className="text-[16px] leading-relaxed text-[var(--text-secondary)]">
                在不可逆的決定之前，用戶應該看見完整的資訊。
                我願意犧牲轉換率來保護用戶——因為在金融產品中，信任比數字更重要。
              </p>
              <p className="text-[16px] leading-relaxed text-[var(--text-secondary)]">
                我會用 AI 輔助思考，但保留人類判斷。
                AI 是我的思考夥伴，不是替代品。
              </p>
            </div>
          </SectionReveal>

          {/* Skills & Tools */}
          <div className="space-y-8">
            <SectionReveal delay={0.2}>
              <p className="section-label mb-3">Core Skills</p>
              <StaggerChildren className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <StaggerItem key={skill}>
                    <Badge
                      variant="outline"
                      className="rounded-full border-[var(--border-subtle)] bg-transparent px-3 py-1 text-[11px] font-normal tracking-[0.02em] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--accent-text)]"
                    >
                      {skill}
                    </Badge>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="section-label mb-3">Tools</p>
              <StaggerChildren className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <StaggerItem key={tool}>
                    <Badge
                      variant="outline"
                      className="rounded-full border-[var(--border-subtle)] bg-transparent px-3 py-1 text-[11px] font-normal tracking-[0.02em] text-[var(--text-secondary)]"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {tool}
                    </Badge>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <p className="section-label mb-3">Languages</p>
              <div className="space-y-1">
                <p className="text-[13px] text-[var(--text-secondary)]">
                  繁體中文 — Native
                </p>
                <p className="text-[13px] text-[var(--text-secondary)]">
                  English — Professional
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
