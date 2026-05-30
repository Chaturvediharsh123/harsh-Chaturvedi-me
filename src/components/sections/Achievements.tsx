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
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Achievements"
          title="Recognition & Milestones"
          description="Hackathon awards, academic excellence, and open source contributions"
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
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-indigo-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-semibold text-white">{achievement.title}</h3>
                  {achievement.description && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
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
