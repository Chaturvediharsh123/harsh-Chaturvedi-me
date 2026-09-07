import {
  BookOpen,
  GitFork,
  Star,
  Users,
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
        { label: "Total Stars", value: stats.totalStars, icon: Star },
        { label: "Followers", value: stats.followers, icon: Users },
        { label: "Following", value: stats.following, icon: GitFork },
      ]
    : [
        { label: "Public Repos", value: 25, icon: BookOpen },
        { label: "Total Stars", value: 4, icon: Star },
        { label: "Followers", value: 4, icon: Users },
        { label: "Following", value: 5, icon: GitFork },
      ];

  return (
    <section id="github" className="relative py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="GitHub"
          title="Making the work visible."
          description={`Live statistics from @${GITHUB_USERNAME}`}
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
          <GlassCard className="mt-8 p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-[#162019]">
              Top Languages
            </h3>
            <div className="space-y-4">
              {stats.topLanguages.map((lang) => {
                const maxCount = stats.topLanguages[0].count;
                const percentage = Math.round((lang.count / maxCount) * 100);

                return (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4e574f]">{lang.name}</span>
                      <span className="text-[#5d655e]">
                        {lang.count} {lang.count === 1 ? "repo" : "repos"}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#e7e4dc]">
                      <div
                        className="h-full rounded-full bg-[#0e6b4f] transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
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
