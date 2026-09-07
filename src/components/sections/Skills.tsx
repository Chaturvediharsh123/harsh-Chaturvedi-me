"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Eye,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Bot,
  Server,
  Eye,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Skills"
          title="The tools behind the work."
          description="A focused toolkit for taking AI products from an early idea to a usable system."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Brain;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={catIndex === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <GlassCard hover className="h-full p-6 md:p-7">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7efe5] text-[#0e6b4f]">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#162019]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="rounded-full border border-[#d8d4ca] bg-[#fffdf8] px-3 py-1.5 text-sm font-medium text-[#4e574f]">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
