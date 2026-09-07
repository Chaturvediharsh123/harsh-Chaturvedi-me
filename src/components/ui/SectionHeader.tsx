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
      className="mb-12 max-w-3xl md:mb-16"
    >
      <span className="mb-4 inline-block border-b border-[#0e6b4f] pb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0e6b4f]">
        {label}
      </span>
      <h2 className="display-type text-4xl font-bold leading-[0.92] text-[#162019] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5d655e] md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
