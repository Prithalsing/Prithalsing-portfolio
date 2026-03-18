"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowRight, Circle } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >

          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            TECHNICAL <span className="text-white/20">DEEP DIVES</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light">
            Selected projects showcasing architectural complexiy and AI integration.
          </p>
        </motion.div>

        {/* Large Block Projects */}
        <div className="grid gap-px bg-white/5 border border-white/5 p-px">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#020202] grid lg:grid-cols-[1fr_1.5fr] group overflow-hidden"
            >
              {/* Left - Visual / Info Block */}
              <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between hover-glow transition-all">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-5xl opacity-40 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
                      {project.icon}
                    </div>
                    {project.badge && (
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 border border-white/10 text-white/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                    {project.oneLiner}
                  </p>
                </div>

                <div className="flex gap-6 mt-16 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all transition-all"
                  >
                    <Github size={18} /> Source
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right - Technical Details */}
              <div className="p-12 lg:p-20 space-y-12 bg-white/[0.01]">
                {/* Summary */}
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6 flex items-center gap-2">
                    <Circle size={8} className="fill-blue-500 text-blue-500" /> Executive Summary
                  </div>
                  <p className="text-white/80 text-lg font-medium leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* technical highlight */}
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">
                    Technical Interestingness
                  </div>
                  <ul className="space-y-4">
                    {project.interesting?.map((point, j) => (
                      <li key={j} className="flex gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 mt-2.5 group-hover/item:bg-white transition-colors" />
                        <span className="text-white/40 group-hover/item:text-white/80 transition-colors text-md">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-white/20 px-3 py-1 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle divider link */}
              <div className="lg:col-span-2 py-8 px-12 lg:px-20 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Technical case study</span>
                <span className="text-white/60 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                  View Details <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
