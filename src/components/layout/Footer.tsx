import { Github, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-zinc-950/50 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
              HC
            </span>
            <div>
              <p className="font-semibold text-white">{portfolioData.name}</p>
              <p className="text-sm text-zinc-500">AI Engineer & Developer</p>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-zinc-500">
            Built with <Heart size={14} className="text-red-400" fill="currentColor" /> using Next.js & AI
          </p>

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-400 transition-colors hover:border-indigo-500/30 hover:text-white"
          >
            <Github size={18} />
            @Chaturvediharsh123
          </a>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
          © {year} {portfolioData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
