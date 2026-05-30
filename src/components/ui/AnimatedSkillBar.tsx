"use client";

import { motion } from "framer-motion";

interface AnimatedSkillBarProps {
  name: string;
  level: number;
  index: number;
}

export default function AnimatedSkillBar({
  name,
  level,
  index,
}: AnimatedSkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-zinc-200">{name}</span>
        <span className="text-xs text-indigo-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
        />
      </div>
    </div>
  );
}
