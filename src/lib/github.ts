export const GITHUB_USERNAME = "Chaturvediharsh123";

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
}

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce(
      (acc: number, repo: { stargazers_count: number }) =>
        acc + repo.stargazers_count,
      0
    );

    const langMap: Record<string, number> = {};
    repos.forEach((repo: { language: string | null }) => {
      if (repo.language) {
        langMap[repo.language] = (langMap[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(langMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      topLanguages,
    };
  } catch {
    return null;
  }
}
