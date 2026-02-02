import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import {
  Cpu,
  Globe,
  ArrowUpRight,
  Github,
  Mail,
  Code2,
  Sparkles,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { profileData, projects, practices, skills } from "./data";

export default function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="bg-[#020202] text-zinc-400 min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* 1. GELİŞMİŞ CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500/50 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. DAHA CANLI ARKA PLAN */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 60, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[130px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[130px] rounded-full"
        />
      </div>

      <nav className="max-w-6xl mx-auto p-8 flex justify-between items-center relative z-20">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-xl font-black text-white tracking-tighter cursor-pointer"
        >
          NURI<span className="text-blue-500">.</span>DEV
        </motion.h2>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a
            href={profileData.github}
            target="_blank"
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="text-blue-500 hover:text-blue-400 cursor-pointer flex items-center gap-1"
          >
            <Mail size={14} /> İletişim
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Banner Section */}
        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black mb-6 tracking-widest uppercase">
              <Sparkles size={12} /> 2026 Portfolio Presence
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter italic">
              {profileData.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-zinc-500 mb-12 leading-relaxed">
              {profileData.about}
            </p>
          </motion.div>
        </section>

        {/* YETENEKLER - MODERN BADGE TASARIMI */}
        <section id="skills" className="mb-40">
          <div className="flex items-center gap-3 mb-16">
            <Cpu className="text-blue-500" size={32} />
            <h2 className="text-3xl font-black text-white tracking-tight italic">
              Yetenekler
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`h-[1px] w-10 bg-${skill.color}-500/40`} />
                  <h3
                    className={`text-${skill.color}-500 font-mono text-xs font-bold uppercase tracking-widest`}
                  >
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                      className="px-4 py-2 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-zinc-300 text-sm font-medium transition-all cursor-default flex items-center gap-2 backdrop-blur-md"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500 shadow-[0_0_8px] shadow-${skill.color}-500`}
                      />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projects" className="mb-40">
          <div className="flex items-center gap-3 mb-16">
            <Globe className="text-blue-500" size={32} />
            <h2 className="text-3xl font-black text-white tracking-tight italic">
              Öne Çıkan Projeler
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-zinc-900 mb-8 border border-zinc-800/50 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={proj.demo}
                      target="_blank"
                      className="p-5 bg-white text-black rounded-full cursor-pointer hover:scale-110 transition-transform shadow-2xl"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors cursor-default">
                  {proj.title}
                </h3>
                <p className="text-zinc-500 mb-6 text-sm italic cursor-default">
                  "{proj.desc}"
                </p>
                <div className="flex gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-widest text-zinc-600 border border-zinc-800 px-2 py-1 rounded-md uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lab / Pratikler Bölümü */}
        <section className="pb-40">
          <div className="flex items-center gap-3 mb-16">
            <Code2 className="text-emerald-500" size={32} />
            <h2 className="text-3xl font-black text-white tracking-tight italic">
              Lab / Playground
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((item, idx) => (
              <motion.a
                href={item.demo}
                target="_blank"
                key={idx}
                whileHover={{ y: -10 }}
                className="relative h-64 rounded-[2.5rem] overflow-hidden border border-zinc-800/50 group cursor-pointer transition-all shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-blue-900/30 transition-all duration-500" />
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-emerald-500/20 transition-colors">
                      <Terminal
                        size={18}
                        className="text-white group-hover:text-emerald-400"
                      />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-900/50 text-center relative z-10">
        <p className="text-[10px] tracking-[0.3em] text-zinc-700 uppercase mb-4 italic">
          Crafted by Nuri Demir • 2026
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={profileData.github}
            target="_blank"
            className="text-zinc-500 hover:text-white cursor-pointer transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="text-zinc-500 hover:text-white cursor-pointer transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

