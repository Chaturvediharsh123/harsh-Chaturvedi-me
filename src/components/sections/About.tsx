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
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="About Me"
          title="Curiosity, engineered into useful products."
          description="I enjoy turning ambitious AI ideas into clear, capable experiences people can actually use."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-10">
              <p className="text-lg leading-relaxed text-[#4e574f]">
                {portfolioData.about}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#d8d4ca] bg-[#f4f1ea] p-4 text-center">
                  <p className="text-2xl font-bold text-[#0e6b4f]">25+</p>
                  <p className="mt-1 text-xs text-[#5d655e]">GitHub Projects</p>
                </div>
                <div className="rounded-xl border border-[#d8d4ca] bg-[#f4f1ea] p-4 text-center">
                  <p className="text-2xl font-bold text-[#0e6b4f]">8.5</p>
                  <p className="mt-1 text-xs text-[#5d655e]">CGPA</p>
                </div>
                <div className="rounded-xl border border-[#d8d4ca] bg-[#f4f1ea] p-4 text-center">
                  <p className="text-2xl font-bold text-[#0e6b4f]">5+</p>
                  <p className="mt-1 text-xs text-[#5d655e]">AI Domains</p>
                </div>
                <div className="rounded-xl border border-[#d8d4ca] bg-[#f4f1ea] p-4 text-center">
                  <p className="text-2xl font-bold text-[#0e6b4f]">2</p>
                  <p className="mt-1 text-xs text-[#5d655e]">Hackathon Awards</p>
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7efe5] text-[#0e6b4f]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#162019]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#5d655e]">{item.description}</p>
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
