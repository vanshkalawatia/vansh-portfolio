// ========================================================================
// 🌟 VANSH KALAWATIA - PORTFOLIO CONTENT & CONFIGURATION
// ========================================================================
// Edit this file to update any content on your website!
// When running locally (`npm.cmd run dev`), changes here will hot-reload
// instantly in your browser at http://localhost:5000.
// ========================================================================

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  leetcode: string;
  twitter?: string;
  instagram?: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  field: string;
  link?: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: number;
  category: string;
  items: string[];
}

export interface BlogPostItem {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  externalLink: string;
  platform: string;
  date: string;
  tags: string[];
}

export interface InterestItem {
  icon: string;
  title: string;
  desc: string;
}

// ------------------------------------------------------------------------
// 1. PERSONAL INFORMATION & SOCIAL LINKS
// ------------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  name: "Vansh Kalawatia",
  role: "Backend Developer",
  bio: "Python backend developer in progress. Building secure APIs with FastAPI and PostgreSQL. One commit at a time.",
  email: "vanshkalawatia2@gmail.com",
  phone: "",
  github: "https://github.com/vanshkalawatia",
  linkedin: "https://linkedin.com/in/vanshkalawatia",
  leetcode: "https://leetcode.com/u/vanshkalawatia/",
  twitter: "https://x.com/vansh0x00",
  instagram: "https://www.instagram.com/vansh0x00/",
  location: "India (UTC+5:30)",
  avatarUrl: "https://avatars.githubusercontent.com/u/295721289?v=4",
  resumeUrl: "https://vansh-portfolio-bay.vercel.app/resume.pdf",
};

// ------------------------------------------------------------------------
// 2. HERO ROTATING TAGLINES (Typewriter text below your name)
// ------------------------------------------------------------------------
export const heroPhrases: string[] = [
  "Building secure APIs with FastAPI",
  "Python backend developer in progress",
  "One commit at a time",
  "Learning, building, shipping",
  "Security-first backend mindset",
  "Solving problems on LeetCode",
];

// ------------------------------------------------------------------------
// 3. EDUCATION
// ------------------------------------------------------------------------
export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Maharishi Dayanand University (3rd Year, Currently Pursuing)",
    period: "2024 – Present",
  },
];

// ------------------------------------------------------------------------
// 4. VERIFIED CERTIFICATIONS (NPTEL / Others)
// ------------------------------------------------------------------------
export const certificationsData: CertificationItem[] = [
  {
    title: "Foundations of Cryptography",
    issuer: "NPTEL & IIIT Bangalore",
    year: "2024",
    field: "Cybersecurity & Cryptography",
  },
  {
    title: "Introduction to Database Systems",
    issuer: "NPTEL & IIT Madras",
    year: "2024",
    field: "Database Architecture & SQL",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL & IIT Kharagpur",
    year: "2024",
    field: "OOP & Fundamentals",
  },
];

// ------------------------------------------------------------------------
// 5. ACADEMIC JOURNEY & FOUNDATIONS
// ------------------------------------------------------------------------
export const experiencesData: ExperienceItem[] = [
  {
    id: 1,
    title: "B.Tech Computer Science (3rd Year)",
    company: "Maharishi Dayanand University",
    period: "2024 – Present",
    description: [
      "Currently in Phase 1 — building a rock-solid foundation in core Computer Science and Backend concepts.",
      "Focused on Python, FastAPI, PostgreSQL, and security fundamentals.",
      "Solving DSA problems on LeetCode — 19 problems solved (13 Easy, 6 Medium).",
      "Completed 3 NPTEL certifications: Programming in Java (IIT Kharagpur), Introduction to Database Systems (IIT Madras), Foundations of Cryptography (IIIT Bangalore).",
      "Building projects: Port Scanner tool, Portfolio website.",
      "Tech: Python, FastAPI, PostgreSQL, Git, Linux",
    ],
  },
];

// ------------------------------------------------------------------------
// 6. SELECTED WORK & PROJECTS
// ------------------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Project Port Scanner",
    description:
      "A network security tool for scanning ports on target hosts. Built to understand networking fundamentals and security concepts.",
    techStack: ["Python", "Networking", "Security", "Sockets"],
    link: "https://github.com/vanshkalawatia/project-port-scanner",
  },
  {
    id: 2,
    title: "Portfolio Website (V2)",
    description:
      "Modern developer portfolio built with React, Vite, Tailwind CSS, and Anime.js, featuring live LeetCode stats, interactive mind map, and dark mode.",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Anime.js"],
    link: "https://github.com/vanshkalawatia/vansh-portfolio",
    liveUrl: "https://vanshkalawatia.github.io/vansh-portfolio/",
  },
];

// ------------------------------------------------------------------------
// 7. TECHNICAL SKILLS & CAPABILITIES
// ------------------------------------------------------------------------
export const skillsData: SkillCategory[] = [
  {
    id: 1,
    category: "Python & Backend",
    items: [
      "Python 3",
      "FastAPI",
      "Flask (basics)",
      "REST API Design",
      "Pydantic",
      "OOP",
    ],
  },
  {
    id: 2,
    category: "Security Fundamentals",
    items: [
      "Foundations of Cryptography",
      "Port Scanning",
      "Secure API Design",
      "Auth & Authorization",
      "Input Validation",
    ],
  },
  {
    id: 3,
    category: "Databases",
    items: [
      "PostgreSQL",
      "SQL Fundamentals",
      "Database Design (NPTEL certified)",
      "SQLAlchemy / ORM basics",
    ],
  },
  {
    id: 4,
    category: "DSA & Problem Solving",
    items: [
      "Arrays & Strings",
      "Hash Maps & Sets",
      "Two Pointers",
      "Sliding Window",
      "Sorting & Searching",
    ],
  },
  {
    id: 5,
    category: "DevOps & Tools",
    items: [
      "Git & GitHub",
      "Linux / CLI",
      "Docker (learning)",
      "VS Code",
      "Postman",
    ],
  },
  {
    id: 6,
    category: "Web Basics",
    items: [
      "HTML & CSS",
      "JavaScript",
      "Astro",
      "React Basics",
    ],
  },
];

// ------------------------------------------------------------------------
// 8. WRITING & BLOG POSTS
// ------------------------------------------------------------------------
export const blogsData: BlogPostItem[] = [
  {
    id: 1,
    title: "Object Pooling in Java — A Performance Game-Changer",
    description:
      "Object pooling isn't just a performance trick — it's a fundamental pattern for scalable backend systems. Here is a clean, production-ready implementation of a Database Connection Pool in Java.",
    thumbnail: "",
    thumbnailWidth: 0,
    thumbnailHeight: 0,
    externalLink: "https://vansh-portfolio-bay.vercel.app/blog/object-pooling",
    platform: "Blog",
    date: "2026-08-09",
    tags: ["Java", "Performance", "Backend", "Object Pooling"],
  },
  {
    id: 2,
    title: "Go Broke My Brain (And Then Fixed It): Package Structure in Go vs Everything Else",
    description:
      "I was just tweaking my folder layout when Go hit me with a compiler error I didn't expect. Here's what I learned about why Go is so strict about package structure — and why that's actually a good thing.",
    thumbnail: "",
    thumbnailWidth: 0,
    thumbnailHeight: 0,
    externalLink: "https://vansh-portfolio-bay.vercel.app/blog/first-post",
    platform: "Blog",
    date: "2026-06-24",
    tags: ["Go", "Beginners", "Package Structure", "Learning"],
  },
];

// ------------------------------------------------------------------------
// 9. BEYOND CODE (Interests & Hobbies)
// ------------------------------------------------------------------------
export const interestsData: InterestItem[] = [
  { icon: "📚", title: "Reading", desc: "Books on tech, psychology, and self-improvement" },
  { icon: "🎌", title: "Anime", desc: "From Naruto to Attack on Titan — always looking for recommendations" },
  { icon: "🎵", title: "Music", desc: "Lo-fi for coding, hip-hop for energy, and everything in between" },
  { icon: "🧠", title: "Learning", desc: "Always curious — new languages, design patterns, security concepts" },
  { icon: "☕", title: "Coffee & Code", desc: "Late night coding sessions fueled by coffee" },
  { icon: "🔒", title: "Cybersecurity", desc: "Exploring security concepts, CTFs, and ethical hacking" },
];
