import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { portfolioData, educationData, researchData, certificationsData, interestsData, heroPhrases } from "@/data/portfolio-data";

// Helper for safe JSON fetching with fallback
async function fetchWithFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && (!Array.isArray(data) || data.length > 0)) {
        return data as T;
      }
    }
  } catch {
    // Network offline or static host
  }
  return fallback;
}

// ============================================
// Data Hooks for Portfolio Content (Dynamic)
// ============================================

export function useExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: () => fetchWithFallback("/api/experiences", portfolioData.experiences),
    initialData: portfolioData.experiences,
    staleTime: 60 * 1000,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      // 1. Fetch base curated projects from API (fallback to portfolioData.projects)
      const baseProjects: any[] = await fetchWithFallback("/api/projects", portfolioData.projects);

      // 2. Fetch live GitHub repositories directly (try backend proxy first, then direct GitHub API)
      let githubRepos: any[] = [];
      try {
        let ghRes = await fetch("/api/github/repos");
        if (!ghRes.ok) {
          ghRes = await fetch("https://api.github.com/users/vanshkalawatia/repos?sort=updated&per_page=50", {
            headers: { "User-Agent": "Portfolio-App" },
          });
        }
        if (ghRes.ok) {
          const repos = await ghRes.json();
          if (Array.isArray(repos)) {
            githubRepos = repos.filter(
              (r: any) => !r.fork && r.name.toLowerCase() !== "vanshkalawatia"
            );
          }
        }
      } catch {
        // GitHub API unavailable
      }

      if (githubRepos.length === 0) {
        return baseProjects;
      }

      // 3. Merge: Match curated projects with live GitHub stats (stars, forks, pushed_at, topics)
      const merged: any[] = [];
      const handledRepoNames = new Set<string>();

      for (const proj of baseProjects) {
        const repoName = (proj.link || "").split("/").filter(Boolean).pop()?.toLowerCase();
        const matchingGh = repoName ? githubRepos.find((r: any) => r.name.toLowerCase() === repoName) : null;

        if (matchingGh) {
          handledRepoNames.add(matchingGh.name.toLowerCase());
          merged.push({
            ...proj,
            description: matchingGh.description || proj.description,
            stars: matchingGh.stargazers_count,
            forks: matchingGh.forks_count,
            pushedAt: matchingGh.pushed_at,
            topics: matchingGh.topics || [],
            language: matchingGh.language || proj.techStack?.[0] || "Python",
          });
        } else {
          merged.push(proj);
        }
      }

      // 4. Dynamically append any other public GitHub repos not yet in the curated list
      let nextId = Math.max(...baseProjects.map((p) => Number(p.id) || 0), 10);
      for (const repo of githubRepos) {
        if (!handledRepoNames.has(repo.name.toLowerCase())) {
          nextId++;
          const title = repo.name
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase());

          const techStack = [
            repo.language,
            ...(repo.topics || []),
            "Backend",
            "Git"
          ].filter(Boolean).slice(0, 5);

          merged.push({
            id: repo.id || nextId,
            title,
            description: repo.description || `Open source project: ${title}. Built with ${repo.language || "Python"} and modern backend practices.`,
            techStack: techStack.length > 0 ? techStack : ["Python", "Backend"],
            link: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            pushedAt: repo.pushed_at,
            topics: repo.topics || [],
          });
        }
      }

      return merged;
    },
    initialData: portfolioData.projects,
    staleTime: 60 * 1000,
  });
}

export function useGitHubProfile() {
  return useQuery({
    queryKey: ["githubProfile", "vanshkalawatia"],
    queryFn: async () => {
      try {
        const res = await fetch("https://api.github.com/users/vanshkalawatia", {
          headers: { "User-Agent": "Portfolio-App" },
        });
        if (res.ok) {
          return await res.json();
        }
      } catch {
        // Fallback below
      }
      return {
        public_repos: 6,
        followers: 6,
        bio: "CS student. Documenting the process.",
        avatar_url: "https://avatars.githubusercontent.com/u/295721289?v=4",
      };
    },
    initialData: {
      public_repos: 6,
      followers: 6,
      bio: "CS student. Documenting the process.",
      avatar_url: "https://avatars.githubusercontent.com/u/295721289?v=4",
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useLeetCodeStats() {
  return useQuery({
    queryKey: ["leetcodeStats", "vanshkalawatia"],
    queryFn: async () => {
      let totalSolved = 19;
      let ranking = "#4,612,890";
      let acceptanceRate = "68.4%";
      try {
        const [profileRes, solvedRes] = await Promise.allSettled([
          fetch("https://alfa-leetcode-api.onrender.com/vanshkalawatia"),
          fetch("https://alfa-leetcode-api.onrender.com/vanshkalawatia/solved"),
        ]);
        if (solvedRes.status === "fulfilled" && solvedRes.value.ok) {
          const data = await solvedRes.value.json();
          totalSolved = data.solvedProblem ?? totalSolved;
        }
        if (profileRes.status === "fulfilled" && profileRes.value.ok) {
          const data = await profileRes.value.json();
          if (data.ranking) ranking = `#${Number(data.ranking).toLocaleString()}`;
          if (data.acceptanceRate) acceptanceRate = `${data.acceptanceRate}%`;
        }
      } catch {
        // Fallback
      }
      return { totalSolved, ranking, acceptanceRate };
    },
    initialData: { totalSolved: 19, ranking: "#4,612,890", acceptanceRate: "68.4%" },
    staleTime: 5 * 60 * 1000,
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () => fetchWithFallback("/api/skills", portfolioData.skills),
    initialData: portfolioData.skills,
    staleTime: 60 * 1000,
  });
}

export function usePersonalInfo() {
  return useQuery({
    queryKey: ["personalInfo"],
    queryFn: () => fetchWithFallback("/api/personal-info", portfolioData.personalInfo),
    initialData: portfolioData.personalInfo,
    staleTime: 60 * 1000,
  });
}

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchWithFallback("/api/blogs", portfolioData.blogs),
    initialData: portfolioData.blogs,
    staleTime: 60 * 1000,
  });
}

export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: () => fetchWithFallback("/api/education", educationData),
    initialData: educationData,
    staleTime: 60 * 1000,
  });
}

export function useResearch() {
  return useQuery({
    queryKey: ["research"],
    queryFn: () => fetchWithFallback("/api/research", researchData),
    initialData: researchData,
    staleTime: 60 * 1000,
  });
}

export function useCertifications() {
  return useQuery({
    queryKey: ["certifications"],
    queryFn: () => fetchWithFallback("/api/certifications", certificationsData),
    initialData: certificationsData,
    staleTime: 60 * 1000,
  });
}

export function useInterests() {
  return useQuery({
    queryKey: ["interests"],
    queryFn: () => fetchWithFallback("/api/interests", interestsData),
    initialData: interestsData,
    staleTime: 60 * 1000,
  });
}

export function useHeroPhrases() {
  return useMemo(() => heroPhrases, []);
}
