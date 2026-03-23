"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"
import { Download } from "lucide-react"

function ExperienceItem({
  company,
  role,
  period,
  description,
  caseLink,
  delay = 0,
}: {
  company: string
  role: string
  period: string
  description: string
  caseLink?: { label: string; href: string }
  delay?: number
}) {
  return (
    <SectionReveal delay={delay}>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-6 border-b border-[var(--border-subtle)]">
        <div>
          <p
            className="text-[16px] text-[var(--text-primary)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {company}
          </p>
          <p className="text-[12px] text-[var(--text-muted)] mt-1">{period}</p>
        </div>
        <div>
          <p className="text-[14px] font-medium text-[var(--text-primary)] mb-2">
            {role}
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
          {caseLink && (
            <a
              href={caseLink.href}
              className="inline-block mt-3 text-[13px] text-[var(--accent-brass)] font-medium hover:underline transition-colors duration-150"
            >
              {caseLink.label} →
            </a>
          )}
        </div>
      </div>
    </SectionReveal>
  )
}

function SkillGroup({
  title,
  items,
}: {
  title: string
  items: string
}) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--accent-brass)] mb-2">
        {title}
      </p>
      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
        {items}
      </p>
    </div>
  )
}

export function ResumeSection() {
  const { t } = useI18n()

  return (
    <section
      id="resume"
      className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <SectionReveal>
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="section-label mb-3">{t("resume.label")}</p>
              <h2
                className="text-[28px] md:text-[36px] text-[var(--text-primary)]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Evelyn Wu
              </h2>
              <p className="text-[14px] text-[var(--text-secondary)] mt-1">
                Senior Product Designer
              </p>
            </div>
            <a
              href="/EvelynWu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-[8px] border border-[var(--accent-brass)] px-4 py-2.5 text-[13px] font-medium text-[var(--accent-brass)] transition-all duration-150 hover:bg-[var(--accent-brass)] hover:text-white shrink-0"
            >
              <Download size={14} />
              {t("resume.download")}
            </a>
          </div>
        </SectionReveal>

        {/* Summary */}
        <SectionReveal delay={0.05}>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] mb-12 pb-8 border-b border-[var(--border-subtle)]">
            {t("resume.summary")}
          </p>
        </SectionReveal>

        {/* Experience */}
        <SectionReveal delay={0.1}>
          <p className="section-label mb-6">{t("resume.exp")}</p>
        </SectionReveal>

        <ExperienceItem
          company={t("resume.exp1.company")}
          role={t("resume.exp1.role")}
          period={t("resume.exp1.period")}
          description={t("resume.exp1.bullets")}
          delay={0.12}
        />
        <ExperienceItem
          company={t("resume.exp2.company")}
          role={t("resume.exp2.role")}
          period={t("resume.exp2.period")}
          description={t("resume.exp2.bullets")}
          caseLink={{ label: "Deposit · Referral · Bridge", href: "/cases/deposit" }}
          delay={0.14}
        />
        <ExperienceItem
          company={t("resume.exp3.company")}
          role={t("resume.exp3.role")}
          period={t("resume.exp3.period")}
          description={t("resume.exp3.bullets")}
          caseLink={{ label: "BitoDebt Case Study", href: "/cases/bitodebt" }}
          delay={0.16}
        />
        <ExperienceItem
          company={t("resume.exp4.company")}
          role={t("resume.exp4.role")}
          period={t("resume.exp4.period")}
          description={t("resume.exp4.bullets")}
          delay={0.18}
        />

        {/* Skills */}
        <SectionReveal delay={0.2}>
          <div className="mt-12 mb-12">
            <p className="section-label mb-6">{t("resume.skills")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillGroup title={t("resume.skills.design")} items={t("resume.skills.design.list")} />
              <SkillGroup title={t("resume.skills.research")} items={t("resume.skills.research.list")} />
              <SkillGroup title={t("resume.skills.data")} items={t("resume.skills.data.list")} />
              <SkillGroup title={t("resume.skills.facilitation")} items={t("resume.skills.facilitation.list")} />
            </div>
          </div>
        </SectionReveal>

        {/* Education + Certs + Community */}
        <SectionReveal delay={0.25}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[var(--border-subtle)]">
            <div>
              <p className="section-label mb-3">{t("resume.edu")}</p>
              <p
                className="text-[14px] text-[var(--text-primary)]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t("resume.edu.school")}
              </p>
              <p className="text-[12px] text-[var(--text-muted)] mt-1">
                {t("resume.edu.dept")}
              </p>
            </div>
            <div>
              <p className="section-label mb-3">{t("resume.cert")}</p>
              <div className="space-y-1.5 text-[13px] text-[var(--text-secondary)]">
                <p>{t("resume.cert.ga")}</p>
                <p>{t("resume.cert.ideo")}</p>
              </div>
            </div>
            <div>
              <p className="section-label mb-3">{t("resume.community")}</p>
              <div className="space-y-3 text-[13px] text-[var(--text-secondary)]">
                <p>{t("resume.community.ltux")}</p>
                <p>{t("resume.community.uxy")}</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
