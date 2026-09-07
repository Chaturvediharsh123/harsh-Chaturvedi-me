"use client";

import { motion } from "framer-motion";
import { Award, Github, GraduationCap, Trophy } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Award,
  GraduationCap,
  Github,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Achievements"
          title="A few proud moments."
          description="Recognition for the work, plus the habits that keep it moving forward."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e7efe5] text-[#0e6b4f]">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-semibold text-[#162019]">{achievement.title}</h3>
                  {achievement.description && (
                    <p className="mt-2 text-sm leading-relaxed text-[#5d655e]">
                      {achievement.description}
                    </p>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
