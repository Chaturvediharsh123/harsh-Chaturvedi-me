"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center md:mb-16"
    >
      <span className="mb-3 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
        {label}
      </span>
      <h2 className="bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
