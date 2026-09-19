// ========================================================================
// Adapter: re-exports from root PORTFOLIO_CONFIG.ts
// To edit your portfolio content, simply edit PORTFOLIO_CONFIG.ts in the project root!
// ========================================================================
import {
  personalInfo,
  heroPhrases,
  educationData,
  certificationsData,
  experiencesData,
  projectsData,
  skillsData,
  blogsData,
  interestsData,
} from "@config";

export {
  personalInfo,
  heroPhrases,
  educationData,
  certificationsData,
  interestsData,
};

export const researchData: { title: string; authors: string; venue: string; year: string; link: string }[] = [];

export const portfolioData = {
  personalInfo,
  experiences: experiencesData,
  projects: projectsData,
  skills: skillsData,
  blogs: blogsData,
};
