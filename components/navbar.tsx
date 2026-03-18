"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "About", href: "#about" },
    { label: "Platform", href: "#platform" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#FEFAE0" }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl font-bold tracking-tight"
          style={{ color: "#283618" }}
        >
          Jay Tailor
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "#283618" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            className="font-sans text-sm font-semibold px-5 py-2 rounded transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#BC6C25", color: "#FEFAE0" }}
          >
            Support Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "#283618" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "#283618" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "#283618" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t"
          style={{ backgroundColor: "#FEFAE0", borderColor: "#DDA15E" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base font-medium py-1"
              style={{ color: "#283618" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            className="font-sans text-sm font-semibold px-5 py-2.5 rounded text-center transition-opacity hover:opacity-85 w-full"
            style={{ backgroundColor: "#BC6C25", color: "#FEFAE0" }}
            onClick={() => setMenuOpen(false)}
          >
            Support Me
          </a>
        </div>
      )}
    </header>
  )
}
