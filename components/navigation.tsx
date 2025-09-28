"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Merriweather } from "next/font/google"; // ✅ font import

// font initialize
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]


export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["about", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={` ${merriweather.className}  text-xl font-bold text-foreground`}
          >
            Tanuj Verma
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {/* Mobile nav overlay and menu with smooth animation */}
      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 md:hidden"
        style={{ background: menuOpen ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
        onClick={() => setMenuOpen(false)}
      />
      <motion.div
        initial={false}
        animate={{
          x: menuOpen ? 0 : '100%',
          opacity: menuOpen ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-background shadow-lg md:hidden transition-transform"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col h-full p-6 space-y-8">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-foreground">Menu</span>
            <button
              className="text-foreground hover:text-primary focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-lg font-medium text-left transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </motion.div>
    </motion.nav>
  )
}
