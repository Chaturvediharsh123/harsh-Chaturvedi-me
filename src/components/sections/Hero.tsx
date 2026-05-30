"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail, Sparkles } from "lucide-react";
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
          >
            <Sparkles size={16} />
            Available for AI Engineering opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {portfolioData.name.split(" ")[0]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-lg font-medium text-indigo-300 md:text-xl"
          >
            {portfolioData.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 h-8 text-base text-zinc-400 md:text-lg"
          >
            <TypingEffect phrases={portfolioData.typingPhrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 lg:mx-0 mx-auto"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
              View Projects
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/10"
            >
              <Github size={18} />
              GitHub
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/10"
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
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-30 blur-2xl" />
            <div className="relative rounded-full border-2 border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1.5 backdrop-blur-sm">
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-zinc-900 md:h-72 md:w-72">
                <Image
                  src="/profile.jpeg"
                  alt={portfolioData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2 text-sm font-medium text-indigo-300 shadow-xl backdrop-blur-sm"
            >
              🤖 AI Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-indigo-400"
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
