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
    <section id="github" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="GitHub"
          title="Open Source Activity"
          description={`Live statistics from @${GITHUB_USERNAME}`}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statItems.map((item) => (
            <GlassCard key={item.label} hover className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                <item.icon size={22} />
              </div>
              <p className="text-3xl font-bold text-white">
                {formatNumber(item.value)}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
            </GlassCard>
          ))}
        </div>

        {stats && stats.topLanguages.length > 0 && (
          <GlassCard className="mt-8 p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-white">
              Top Languages
            </h3>
            <div className="space-y-4">
              {stats.topLanguages.map((lang) => {
                const maxCount = stats.topLanguages[0].count;
                const percentage = Math.round((lang.count / maxCount) * 100);

                return (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300">{lang.name}</span>
                      <span className="text-zinc-500">
                        {lang.count} {lang.count === 1 ? "repo" : "repos"}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
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
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
