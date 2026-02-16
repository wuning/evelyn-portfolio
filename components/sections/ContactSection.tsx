"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "Email",
    value: "hello@evelynwu.design",
    href: "mailto:hello@evelynwu.design",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/evelynwu",
    href: "https://linkedin.com/in/evelynwu",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/evelynwu",
    href: "https://github.com/evelynwu",
    icon: Github,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-[var(--space-section)] px-6 bg-[var(--bg-secondary)]"
    >
      <div className="mx-auto max-w-[1000px]">
        <SectionReveal>
          <p className="section-label mb-4">Contact</p>
          <h2 className="mb-3 text-[var(--text-primary)]">
            Let&apos;s talk
          </h2>
          <p className="mb-12 max-w-[480px] text-[var(--text-secondary)] text-[15px] leading-relaxed">
            正在尋找重視 product thinking 和 ethical design 的設計師？
            我很樂意聊聊你的產品挑戰。
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <SectionReveal key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-dim)] text-[var(--accent-text)] transition-all duration-300 group-hover:bg-[var(--accent-blue)] group-hover:text-white">
                  <link.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-[var(--text-muted)] tracking-[0.04em]">
                    {link.label}
                  </p>
                  <p className="text-[13px] text-[var(--text-primary)] truncate">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--text-muted)] transition-all duration-300 group-hover:text-[var(--accent-text)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </SectionReveal>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Evelyn Wu. Designed &amp; built with care.
          </p>
          <p className="text-[11px] text-[var(--text-muted)] font-mono" style={{ fontFamily: "var(--font-jetbrains)" }}>
            Next.js + Framer Motion + Claude API
          </p>
        </div>
      </div>
    </section>
  )
}
