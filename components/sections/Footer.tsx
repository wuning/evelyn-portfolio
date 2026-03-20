"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { Mail, Linkedin, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-dark)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionReveal>
          <h2
            className="text-[32px] md:text-[40px] text-[var(--bg-primary)] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let&apos;s find the
            <br />
            right path together.
          </h2>
          <a
            href="mailto:evelynwu.design@gmail.com"
            className="text-[var(--accent-deep)] text-[16px] hover:underline transition-colors duration-150"
          >
            evelynwu.design@gmail.com
          </a>
        </SectionReveal>

        <div className="mt-16 pt-8 border-t border-[var(--bg-dark-surface)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[13px] text-[#78716C]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Eve&apos;s Eye &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:evelynwu.design@gmail.com"
              className="text-[#78716C] text-[12px] tracking-[0.05em] hover:text-[var(--accent-deep)] transition-colors duration-150 flex items-center gap-1.5"
            >
              <Mail size={14} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/evelynwu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716C] text-[12px] tracking-[0.05em] hover:text-[var(--accent-deep)] transition-colors duration-150 flex items-center gap-1.5"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href="#resume"
              className="text-[#78716C] text-[12px] tracking-[0.05em] hover:text-[var(--accent-deep)] transition-colors duration-150 flex items-center gap-1.5"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
