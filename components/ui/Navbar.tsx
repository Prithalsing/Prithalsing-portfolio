"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = navLinks.map(l => l.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-black text-sm group-hover:border-white transition-all">
            PM
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-all">
            /portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative py-1 ${
                activeSegment === link.href.substring(1)
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.name}
              {activeSegment === link.href.substring(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-white"
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Prithalsing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors p-2"
          >
            <Github size={18} />
          </a>
          <a
            href="#contact"
            className="hidden sm:block px-6 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all btn-ripple"
          >
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#020202] border-b border-white/5 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] font-bold text-white/60"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
