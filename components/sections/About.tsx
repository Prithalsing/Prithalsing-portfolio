"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1]">
              I build scalable <br />
              <span className="text-white/20">AI systems and backend architectures.</span>
            </h2>
            <div className="space-y-6 text-white/40 text-lg md:text-xl font-light leading-relaxed text-pretty max-w-xl">
              <p>
                From <span className="text-white/80 font-medium">RAG pipelines</span> to
                <span className="text-white/80 font-medium ml-1">event-driven systems</span>,
                I focus on performance, reliability, and real-world deployment.
              </p>
              <p>
                Currently specialized in bridging the gap between cutting-edge LLM research
                and production-grade software engineering.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats Grid (Product Style) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Production Systems", value: "4+", icon: "🚀", color: "from-blue-500/20" },
              { label: "Innovation", value: "1 Patent", icon: "💎", color: "from-purple-500/20" },
              { label: "Years Building", value: "2+", icon: "🛠️", color: "from-emerald-500/20" },
              { label: "Global Exposure", value: "Sweden/IN", icon: "🌍", color: "from-amber-500/20" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/5 bg-gradient-to-br from-transparent to-transparent hover:to-white/5 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity text-2xl">
                  {stat.icon}
                </div>
                <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                  {stat.label}
                </div>
                <div className="text-4xl font-black text-white group-hover:text-white transition-colors">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
