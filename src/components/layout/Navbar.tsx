"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 md:px-6",
            scrolled
              ? "rounded-full border border-[#d8d4ca] bg-[#fffdf8]/90 py-3 shadow-[0_8px_24px_rgba(22,32,25,0.08)] backdrop-blur-xl"
              : "py-2"
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#162019] text-xs font-bold tracking-tight text-[#d7ff69]">
              HC
            </span>
            <span className="hidden text-sm font-semibold text-[#162019] sm:block">
              Harsh<span className="text-[#0e6b4f]">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "bg-[#e7efe5] text-[#0e6b4f]"
                      : "text-[#5d655e] hover:text-[#162019]"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden rounded-full bg-[#162019] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0e6b4f] lg:inline-block"
          >
            Contact Me
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-[#5d655e] transition-colors hover:bg-[#e7efe5] hover:text-[#162019] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-[#d8d4ca] bg-[#fffdf8]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      activeSection === link.href.slice(1)
                        ? "bg-[#e7efe5] text-[#0e6b4f]"
                        : "text-[#5d655e] hover:bg-[#e7efe5] hover:text-[#162019]"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="mt-3 block rounded-xl bg-[#162019] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
