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
import AnimatedSkillBar from "@/components/ui/AnimatedSkillBar";
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
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          description="Technologies and frameworks I use to build intelligent systems"
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
                <GlassCard hover className="h-full p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-indigo-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <AnimatedSkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={catIndex * 5 + skillIndex}
                      />
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
