"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="AI applications built from my GitHub repositories — agents, vision, healthcare & more"
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
                <div className="relative h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60 transition-opacity group-hover:opacity-100" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-2">
                      {project.stars !== undefined && project.stars > 0 && (
                        <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
                          <Star size={12} fill="currentColor" />
                          {project.stars}
                        </span>
                      )}
                      {project.language && (
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
                          {project.language}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
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
