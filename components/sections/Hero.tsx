"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import HeroCanvas from "@/components/3d/HeroCanvas";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020202]">
      {/* Product Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* 3D Background (Highly Subtle) */}
      {mounted && (
        <div className="absolute inset-0 opacity-20 mix-blend-screen">
          <HeroCanvas />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-10"
        >


          {/* Heading */}
          <div className="space-y-4 mt-10">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Engineering AI Systems <br />
              <span className="text-white/20">for Real-World Scale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-pretty"
            >
              Full-stack engineer building <span className="text-white/90">production-ready AI workflows</span>,
              <br className="hidden md:block" />
              microservices, and <span className="text-white/90">scalable architectures</span>.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <a
              href="#projects"
              className="group px-10 py-4 bg-white text-black font-bold rounded-sm border border-white hover:bg-black hover:text-white transition-all duration-500 tracking-tight flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-white/10 text-white font-bold rounded-sm hover:bg-white/5 transition-all duration-500 tracking-tight"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Trust indicators / Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-8 pt-16"
          >
            {[
              { icon: <Github size={20} />, href: personalInfo.github, label: "GitHub" },
              { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 hover:text-white transition-all text-xs font-bold uppercase tracking-widest group"
              >
                <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decor - Visual cues */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10">
        <div className="w-px h-16 bg-linear-to-b from-transparent via-white to-transparent" />
      </div>
    </section>
  );
}
