"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Experience"
          title="Experience that ships."
          description="From an AI/ML internship to open source and independent work, I build systems with a clear purpose."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#b9c9ba] md:block" />

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
                <div className="absolute left-4 top-8 hidden h-4 w-4 rounded-full border-2 border-[#0e6b4f] bg-[#f4f1ea] md:block" />

                <GlassCard hover className={index === 0 ? "border-[#0e6b4f]/35 bg-[#f5faee] p-6 md:p-8" : "p-6 md:p-8"}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7efe5] text-[#0e6b4f] md:hidden">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#162019]">
                          {exp.role}
                        </h3>
                        <p className="mt-1 font-medium text-[#0e6b4f]">{exp.organization}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#d8d4ca] bg-[#f4f1ea] px-3 py-1 text-xs font-medium text-[#5d655e]">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#5d655e] md:text-base">
                    {exp.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#b9c9ba] bg-[#e7efe5] px-2.5 py-1 text-xs font-medium text-[#0e6b4f]"
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
