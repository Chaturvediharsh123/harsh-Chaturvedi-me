"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Mail } from "lucide-react";
import Image from "next/image";
import TypingEffect from "@/components/ui/TypingEffect";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-36 h-[32rem] w-[32rem] rounded-full bg-[#d7ff69]/45 blur-[80px]" />
        <div className="absolute bottom-0 left-[-10rem] h-72 w-72 rounded-full bg-[#b9d8cf]/40 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0e6b4f]/25 bg-[#e7efe5] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0e6b4f]"
          >
            <span className="h-2 w-2 rounded-full bg-[#0e6b4f]" />
            Open to AI engineering opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="display-type max-w-3xl text-5xl font-bold leading-[0.88] text-[#162019] md:text-6xl lg:text-7xl"
          >
            I build AI systems that solve real problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-7 text-lg font-semibold text-[#0e6b4f] md:text-xl"
          >
            {portfolioData.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-3 h-8 font-mono text-sm text-[#5d655e] md:text-base"
          >
            <TypingEffect phrases={portfolioData.typingPhrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#5d655e] md:text-lg"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-5 inline-flex items-center gap-2 border-l-2 border-[#0e6b4f] pl-3 text-sm text-[#4e574f]"
          >
            <span className="font-bold text-[#162019]">Latest:</span> AI/ML Intern at HabileLabs
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[#162019] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0e6b4f]"
            >
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Explore selected work
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#bcb7ac] bg-[#fffdf8]/70 px-5 py-3.5 text-sm font-semibold text-[#162019] transition-all hover:border-[#0e6b4f]"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#bcb7ac] bg-[#fffdf8]/70 px-5 py-3.5 text-sm font-semibold text-[#162019] transition-all hover:border-[#0e6b4f]"
            >
              <Download size={17} />
              Résumé
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 rounded-full border border-[#bcb7ac] bg-[#fffdf8]/70 px-5 py-3.5 text-sm font-semibold text-[#162019] transition-all hover:border-[#0e6b4f]"
            >
              <Mail size={18} />
              Contact
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[#0e6b4f]/25" />
            <div className="mobile-float relative overflow-hidden rounded-[2rem] border border-[#d8d4ca] bg-[#162019] p-3 shadow-[16px_16px_0_#d7ff69]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-[#d7ff69]">
                <Image
                  src="/profile.jpeg"
                  alt={portfolioData.name}
                  fill
                  className="object-cover grayscale-0 transition duration-700 md:grayscale hover:grayscale-0"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 max-w-[14rem] rounded-2xl border border-[#d8d4ca] bg-[#fffdf8] px-5 py-4 shadow-lg">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0e6b4f]">Currently building</p>
              <p className="mt-1 text-sm font-semibold leading-snug text-[#162019]">Practical, human-centered AI products.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5d655e] transition-colors hover:text-[#0e6b4f]"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
