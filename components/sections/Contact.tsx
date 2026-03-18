"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin, Send, ArrowUp } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-[#020202] border-t border-white/5 pt-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Simple Centered Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            LET&#39;S <span className="text-white/20">WORK TOGETHER</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
            Have a project in mind? Reach out and let&#39;s build something exceptional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-sm mb-24"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/5 rounded-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/5 rounded-sm"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/5 px-4 py-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/5 resize-none rounded-sm"
                placeholder="How can I help?"
              />
            </div>
            <button
              type="submit"
              disabled={sending || sent}
              className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] hover:bg-black hover:text-white border border-white transition-all duration-500 flex items-center justify-center gap-4"
            >
              {sending ? "Transmitting..." : sent ? "Success" : "Send Message"}
              {!sending && !sent && <Send size={14} />}
            </button>
          </form>
        </motion.div>

        {/* Real Footer Area */}
        <div className="border-t border-white/5 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-white flex items-center justify-center text-[10px] font-black">PM</div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Prithalsing More
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {[
              { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}` },
              { icon: <Linkedin size={16} />, href: personalInfo.linkedin },
              { icon: <Github size={16} />, href: personalInfo.github },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-white transition-all transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-all"
          >
            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
