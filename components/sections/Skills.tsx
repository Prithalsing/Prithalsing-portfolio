"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].title);

  return (
    <section id="skills" className="section bg-[#020202] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            THE <span className="text-white/20">STACK</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light">
            Core technical expertise across full-stack and AI engineering.
          </p>
        </motion.div>

        {/* Tab Buttons (Product Style) */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 mb-20 px-4">
          {skills.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 rounded-sm border ${activeTab === category.title
                ? "bg-white text-black border-white"
                : "bg-transparent text-white/30 border-white/5 hover:border-white/20"
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tech Grid (Dynamic based on count) */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 max-w-5xl mx-auto px-4 md:px-0">
          {skills
            .find((c) => c.title === activeTab)
            ?.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white/2 border border-white/5 p-6 md:p-10 flex flex-col items-center justify-center text-center group cursor-default hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 rounded-sm w-full aspect-square md:w-44 md:h-44"
              >
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-[10px] font-black text-white/40 group-hover:text-white uppercase tracking-[0.2em] transition-all">
                  {item.name}
                </h4>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
