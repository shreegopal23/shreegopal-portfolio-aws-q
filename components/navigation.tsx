"use client"

import type React from "react"

import { useState, useEffect, useCallback, useMemo } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  // { name: "Blogs", href: "/blogs" },
  { name: "Certifications", href: "#certifications" },
  { name: "Connect", href: "#connect" },
] as const

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 50)
  }, [])

  useEffect(() => {
    let ticking = false

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  const handleNavClick = useCallback((href: string, e?: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e?.preventDefault()
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href
        return
      }
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    } else {
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }, [])

  const navClasses = useMemo(
    () =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`,
    [isScrolled],
  )

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono font-semibold text-lg">
            <button
              onClick={(e) => handleNavClick("#home", e)}
              className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
              aria-label="Go to home section"
            >
              DevOps<span className="text-primary">.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium relative group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm px-1 py-1"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9 focus:ring-2 focus:ring-primary/50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-in slide-in-from-top-2 duration-200"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
                  role="menuitem"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
