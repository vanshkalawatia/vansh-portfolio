import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { portfolioData, educationData, researchData, certificationsData, interestsData, heroPhrases } from "@/data/portfolio-data";

// ============================================
// Data Hooks for Portfolio Content
// ============================================

export function useExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: async () => portfolioData.experiences,
    initialData: portfolioData.experiences,
    staleTime: Infinity,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const res = await fetch("https://api.github.com/users/vanshkalawatia/repos?sort=pushed&per_page=10");
        if (!res.ok) return portfolioData.projects;
        const repos = await res.json();
        if (!Array.isArray(repos) || repos.length === 0) return portfolioData.projects;

        const validRepos = repos.filter(
          (r: any) => !r.fork && r.name.toLowerCase() !== "vanshkalawatia"
        );

        if (validRepos.length === 0) return portfolioData.projects;

        return validRepos.map((r: any, idx: number) => ({
          id: r.id || idx + 1,
          title: r.name.replace(/[-_]/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
          description: r.description || "Open source project built with Python and modern tools.",
          techStack: [r.language || "Python", "Git", "Backend"].filter(Boolean),
          link: r.html_url,
        }));
      } catch {
        return portfolioData.projects;
      }
    },
    initialData: portfolioData.projects,
    staleTime: 60 * 1000,
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => portfolioData.skills,
    initialData: portfolioData.skills,
    staleTime: Infinity,
  });
}

export function usePersonalInfo() {
  return useQuery({
    queryKey: ["personalInfo"],
    queryFn: async () => portfolioData.personalInfo,
    initialData: portfolioData.personalInfo,
    staleTime: Infinity,
  });
}

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => portfolioData.blogs,
    initialData: portfolioData.blogs,
    staleTime: Infinity,
  });
}

export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: async () => educationData,
    initialData: educationData,
    staleTime: Infinity,
  });
}

export function useResearch() {
  return useQuery({
    queryKey: ["research"],
    queryFn: async () => researchData,
    initialData: researchData,
    staleTime: Infinity,
  });
}

export function useCertifications() {
  return useQuery({
    queryKey: ["certifications"],
    queryFn: async () => certificationsData,
    initialData: certificationsData,
    staleTime: Infinity,
  });
}

export function useInterests() {
  return useQuery({
    queryKey: ["interests"],
    queryFn: async () => interestsData,
    initialData: interestsData,
    staleTime: Infinity,
  });
}

export function useHeroPhrases() {
  return useMemo(() => heroPhrases, []);
}
