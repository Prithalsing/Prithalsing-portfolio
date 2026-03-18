"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Globe, ArrowUpRight } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >

          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            ACADEMIC <span className="text-white/20">FORMATION</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light">
            International education focusing on Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 p-px">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-[#020202] p-12 lg:p-20 group relative overflow-hidden flex flex-col justify-between hover-glow transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-12">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white transition-all">
                    {edu.school.includes("Sweden") ? <Globe size={24} /> : <GraduationCap size={24} />}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-white/20">{edu.period}</div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">
                  {edu.school}
                </h3>
                <p className="text-[#818cf8] font-black text-xs uppercase tracking-[0.3em] mb-8">
                  {edu.degree}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                <span className="text-sm font-medium text-white/40">{edu.info}</span>
                <ArrowUpRight size={14} className="text-white/10 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
