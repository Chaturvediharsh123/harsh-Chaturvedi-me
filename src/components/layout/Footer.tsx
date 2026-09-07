import { Github, } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#d8d4ca] bg-[#ebe7de]/70 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#162019] text-sm font-bold text-[#d7ff69]">
              HC
            </span>
            <div>
              <p className="font-semibold text-[#162019]">{portfolioData.name}</p>
              <p className="text-sm text-[#5d655e]">AI Engineer & Developer</p>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-[#5d655e]">
            &apos;He who thinks deeply sees what others overlook.&apos;
          </p>

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#d8d4ca] bg-[#fffdf8] px-4 py-2.5 text-sm text-[#4e574f] transition-colors hover:border-[#0e6b4f] hover:text-[#0e6b4f]"
          >
            <Github size={18} />
            @Chaturvediharsh123
          </a>
        </div>

        <div className="mt-8 border-t border-[#d8d4ca] pt-8 text-center text-sm text-[#737a73]">
          © {year} {portfolioData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
