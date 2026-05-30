"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Education, open source contributions, and hands-on AI development"
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent md:block" />

          <div className="space-y-8">
            {portfolioData.experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-16"
              >
                <div className="absolute left-4 top-8 hidden h-4 w-4 rounded-full border-2 border-indigo-500 bg-zinc-950 md:block" />

                <GlassCard hover className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 md:hidden">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-indigo-400">{exp.organization}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                    {exp.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
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
