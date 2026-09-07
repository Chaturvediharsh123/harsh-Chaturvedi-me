import {
  BrainCircuit,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchGitHubStats, GITHUB_USERNAME } from "@/lib/github";
import { formatNumber } from "@/lib/utils";

export default async function GitHubStats() {
  const stats = await fetchGitHubStats();

  const statItems = stats
    ? [
        { label: "Public Repos", value: stats.publicRepos, icon: BookOpen },
        { label: "AI Builds", value: 20, icon: BrainCircuit },
        { label: "Hackathon Awards", value: 7, icon: Trophy },
        { label: "CGPA", value: 8.5, icon: GraduationCap },
      ]
    : [
        { label: "Public Repos", value: 25, icon: BookOpen },
        { label: "AI Builds", value: 20, icon: BrainCircuit },
        { label: "Hackathon Awards", value: 7, icon: Trophy },
        { label: "CGPA", value: 8.5, icon: GraduationCap },
      ];

  return (
    <section id="github" className="relative py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="GitHub"
          title="Proof, not just promises."
          description="A snapshot of the work, milestones, and consistency behind the portfolio."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statItems.map((item) => (
            <GlassCard key={item.label} hover className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e7efe5] text-[#0e6b4f]">
                <item.icon size={22} />
              </div>
              <p className="text-3xl font-bold text-[#162019]">
                {formatNumber(item.value)}
              </p>
              <p className="mt-1 text-sm text-[#5d655e]">{item.label}</p>
            </GlassCard>
          ))}
        </div>

        {stats && stats.topLanguages.length > 0 && (
          <GlassCard className="mt-8 overflow-hidden p-6 md:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e6b4f]">Language footprint</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#162019]">What I build with</h3>
              </div>
              <p className="text-sm text-[#5d655e]">Across public repositories</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {stats.topLanguages.map((lang) => {
                const maxCount = stats.topLanguages[0].count;
                const index = stats.topLanguages.indexOf(lang);
                const percentage = Math.round((lang.count / maxCount) * 100);

                return (
                  <div
                    key={lang.name}
                    className={index === 0 ? "rounded-2xl bg-[#162019] p-5 text-white sm:col-span-2 lg:col-span-1" : "rounded-2xl border border-[#d8d4ca] bg-[#f4f1ea] p-5"}
                  >
                    <div className="flex items-center justify-between">
                      <span className={index === 0 ? "text-xs font-bold text-[#d7ff69]" : "text-xs font-bold text-[#0e6b4f]"}>0{index + 1}</span>
                      <span className={index === 0 ? "text-xs text-[#d8e7ce]" : "text-xs text-[#5d655e]"}>{lang.count} {lang.count === 1 ? "repo" : "repos"}</span>
                    </div>
                    <h4 className={index === 0 ? "mt-8 text-xl font-semibold" : "mt-8 text-xl font-semibold text-[#162019]"}>{lang.name}</h4>
                    <p className={index === 0 ? "mt-2 text-xs text-[#c6d8c6]" : "mt-2 text-xs text-[#5d655e]"}>{index === 0 ? "Primary build language" : `${percentage}% of top stack`}</p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        )}

        <div className="mt-8 flex justify-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#162019] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0e6b4f]"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
