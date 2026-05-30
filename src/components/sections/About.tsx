"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Rocket } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Expertise",
    description: "Deep learning, NLP, and intelligent system design",
  },
  {
    icon: Code2,
    title: "Full-Stack AI Dev",
    description: "FastAPI backends with production-ready AI pipelines",
  },
  {
    icon: Rocket,
    title: "Real-World Impact",
    description: "Healthcare, safety, and accessibility applications",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="About Me"
          title="Crafting Intelligent Systems"
          description="Turning complex AI concepts into production-ready solutions"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-10">
              <p className="text-lg leading-relaxed text-zinc-300">
                {portfolioData.about}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-indigo-400">25+</p>
                  <p className="mt-1 text-xs text-zinc-500">GitHub Projects</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-purple-400">8.5</p>
                  <p className="mt-1 text-xs text-zinc-500">CGPA</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-cyan-400">5+</p>
                  <p className="mt-1 text-xs text-zinc-500">AI Domains</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-400">2</p>
                  <p className="mt-1 text-xs text-zinc-500">Hackathon Awards</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
