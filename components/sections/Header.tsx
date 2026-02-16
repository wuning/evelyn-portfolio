"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
          ? "glassmorphism border-b border-[var(--border-subtle)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1000px] items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-[var(--text-primary)] font-semibold text-[15px] tracking-[-0.02em] transition-colors duration-150 hover:text-[var(--accent-text)]"
        >
          Evelyn Wu
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[var(--text-secondary)] text-[13px] font-medium tracking-[-0.01em] transition-colors duration-150 hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[6px] bg-[var(--accent-blue)] px-5 py-2 text-[13px] font-medium text-white tracking-[0.02em] transition-all duration-150 hover:bg-[#0052CC] hover:scale-105 active:scale-[0.98]"
          >
            Say Hello
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[var(--text-primary)] p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glassmorphism border-b border-[var(--border-subtle)]"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--text-secondary)] text-[15px] font-medium transition-colors duration-150 hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-[6px] bg-[var(--accent-blue)] px-5 py-2.5 text-center text-[13px] font-medium text-white tracking-[0.02em]"
              >
                Say Hello
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
