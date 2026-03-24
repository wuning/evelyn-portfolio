"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useTheme } from "@/components/animations/ThemeProvider"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale, t, toggle } = useI18n()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.resume"), href: "/#resume" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-400 ${
        scrolled
          ? "nav-blur border-b border-[var(--border-subtle)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-[120px]">
        <a
          href="/"
          className="text-[var(--text-primary)] text-[15px] tracking-[-0.02em] transition-colors duration-150 hover:text-[var(--accent-brass)]"
          style={{ fontFamily: "Georgia, 'Instrument Serif', serif", fontWeight: 400 }}
        >
          Eve&apos;s Eye
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--text-secondary)] text-[13px] font-medium tracking-[0.02em] uppercase transition-colors duration-150 hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-[6px] border border-[var(--border-subtle)] px-2.5 py-1.5 text-[12px] font-medium text-[var(--text-secondary)] tracking-[0.02em] transition-all duration-150 hover:border-[var(--accent-brass)] hover:text-[var(--accent-brass)]"
            aria-label={locale === "en" ? "Switch to Chinese" : "Switch to English"}
          >
            <span
              className="inline-block overflow-hidden rounded-[3px] leading-none"
              style={{ width: 18, height: 13, fontSize: 16, lineHeight: "13px" }}
            >
              {locale === "en" ? "🇹🇼" : "🇺🇸"}
            </span>
            {locale === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-[6px] border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-150 hover:border-[var(--accent-brass)] hover:text-[var(--accent-brass)]"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-[6px] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-[6px] px-2.5 py-1"
            aria-label={locale === "en" ? "Switch to Chinese" : "Switch to English"}
          >
            <span
              className="inline-block overflow-hidden rounded-[3px] leading-none"
              style={{ width: 18, height: 13, fontSize: 16, lineHeight: "13px" }}
            >
              {locale === "en" ? "🇹🇼" : "🇺🇸"}
            </span>
            {locale === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--text-primary)] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-blur border-b border-[var(--border-subtle)]"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--text-secondary)] text-[15px] font-medium transition-colors duration-150 hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
