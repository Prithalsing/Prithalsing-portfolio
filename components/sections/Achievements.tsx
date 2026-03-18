"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Award, ArrowRight } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-[#020202]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            HONORS & <span className="text-white/20">AWARDS</span>
          </h2>
        </motion.div>

        <div className="grid gap-12">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-start gap-12 p-12 border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 border border-white/5 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white/20 transition-all">
                  <Award size={32} strokeWidth={1} />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 border-r border-white/10 pr-4">
                    {ach.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                    {ach.year}
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tight group-hover:text-[#818cf8] transition-colors">
                  {ach.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed max-w-xl">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
