"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Projects"
          title="Selected things I’ve made."
          description="Applied AI projects across public safety, health, accessibility, and developer tools."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={project.featured && index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <GlassCard
                hover
                className="group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-1.5 bg-[#d7ff69] transition-all group-hover:h-2.5" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-snug text-[#162019] transition-colors group-hover:text-[#0e6b4f]">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-2">
                      {project.language && (
                        <span className="rounded-full bg-[#f4f1ea] px-2 py-0.5 text-xs text-[#5d655e]">
                          {project.language}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-[#5d655e]">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#d8d4ca] bg-[#f4f1ea] px-2.5 py-1 text-xs text-[#5d655e]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0e6b4f] transition-colors hover:text-[#162019]"
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
