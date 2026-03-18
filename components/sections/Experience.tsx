"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Zap, Server, Code, Terminal } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section bg-[#020202] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >

          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            PROVEN <span className="text-white/20">IMPACT</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light">
            Building production-grade systems with focus on performance and scale.
          </p>
        </motion.div>

        {/* Structured Experience List */}
        <div className="space-y-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 relative"
            >
              {/* Left - Metadata */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40">
                    0{i + 1}
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2">{exp.company}</h3>
                <p className="text-[#818cf8] font-bold text-sm uppercase tracking-widest">{exp.role}</p>
                <p className="text-white/20 font-mono text-xs mt-4">{exp.period}</p>
              </div>

              {/* Right - Detailed Impact */}
              <div className="space-y-12">
                {/* Key Impact */}
                <div>
                  <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">
                    <Zap size={14} className="text-blue-500" /> Key Impact
                  </h4>
                  <ul className="space-y-4">
                    {exp.impact.map((point, j) => (
                      <li key={j} className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                        • {point.split(/(\~?\d+%?)/).map((part, k) =>
                          part.match(/\~?\d+%?/) ? <span key={k} className="text-white">{part}</span> : part
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What I Built */}
                <div>
                  <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">
                    <Code size={14} className="text-purple-500" /> What I Built
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.built.map((item, j) => (
                      <div key={j} className="p-4 border border-white/5 bg-white/2 rounded-sm text-sm text-white/40 group hover:border-white/10 transition-all">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/30 border border-white/10 rounded-sm hover-glow cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
