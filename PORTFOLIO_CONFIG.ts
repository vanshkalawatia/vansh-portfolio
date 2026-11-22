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
  role: "Aspiring Backend Developer & CS Student",
  bio: "CS student documenting the journey of mastering backend engineering. Building CLI tools, APIs, and exploring network security one commit at a time.",
  email: "vanshkalawatia2@gmail.com",
  phone: "",
  github: "https://github.com/vanshkalawatia",
  linkedin: "https://linkedin.com/in/vanshkalawatia",
  leetcode: "https://leetcode.com/u/vanshkalawatia/",
  twitter: "https://x.com/vansh0x00",
  instagram: "https://www.instagram.com/vansh0x00/",
  location: "India (UTC+5:30)",
  avatarUrl: "image/avatar.jpg",
  resumeUrl: "images/resume.pdf",
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
    institution: "Rajasthan Technical University (3rd Year, Currently Pursuing)",
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
    year: "2026",
    field: "Cybersecurity & Cryptography",
  },
  {
    title: "Introduction to Database Systems",
    issuer: "NPTEL & IIT Madras",
    year: "2026",
    field: "Database Architecture & SQL",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL & IIT Kharagpur",
    year: "2026",
    field: "OOP & Fundamentals",
  },
];

// ------------------------------------------------------------------------
// 5. WORK EXPERIENCE & JOURNEY
// ------------------------------------------------------------------------
export const experiencesData: ExperienceItem[] = [
  {
    id: 1,
    title: "Backend Developer & Student Engineer",
    company: "Open Source & Personal Projects",
    period: "2024 – Present",
    description: [
      "Building secure, scalable RESTful APIs with Python, FastAPI, and PostgreSQL.",
      "Developing network security tooling including custom socket-based port scanners.",
      "Practicing problem-solving & data structures regularly on LeetCode with Python 3.",
      "Completed verified NPTEL certifications in Java, Database Systems, and Cryptography.",
      "Tech: Python, FastAPI, PostgreSQL, Git, Linux, Sockets",
    ],
  },
];

// ------------------------------------------------------------------------
// 6. SELECTED WORK & PROJECTS
// ------------------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Phase 1: First Real Tools",
    description:
      "Python CLI tools built with persistent data storage, JSON file I/O, error handling, network socket exploration, and secure coding practices.",
    techStack: ["Python", "CLI", "File I/O", "Sockets", "JSON"],
    link: "https://github.com/vanshkalawatia/Phase-1-First-Real-Tools",
  },
  {
    id: 2,
    title: "Developer Portfolio (V2)",
    description:
      "Modern developer portfolio built with React, Vite, TypeScript, and Tailwind CSS. Features dynamic GitHub repository sync, live LeetCode stats, and interactive mind map.",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Anime.js"],
    link: "https://github.com/vanshkalawatia/vansh-portfolio",
    liveUrl: "https://vanshkalawatia.github.io/vansh-portfolio/",
  },
  {
    id: 3,
    title: "DSA & LeetCode Tracker",
    description:
      "A structured repository tracking algorithms, data structure problems, and pattern solutions solved on LeetCode using Python 3.",
    techStack: ["Python 3", "Algorithms", "Data Structures", "LeetCode"],
    link: "https://github.com/vanshkalawatia/DSA-Leetcode-Python",
  },
  {
    id: 4,
    title: "Phase 0: The Absolute Basics",
    description:
      "Weeks 1–2 of my backend journey: core programming fundamentals, syntax mastery, control flow, functions, and initial algorithmic logic.",
    techStack: ["Python", "Fundamentals", "Logic", "Problem Solving"],
    link: "https://github.com/vanshkalawatia/Phase-0-The-Absolute-Basics",
  },
  {
    id: 5,
    title: "Backend Developer Roadmap",
    description:
      "My curated learning roadmap and resource collection for backend engineering in 2026: languages, frameworks, databases, APIs, and DevOps.",
    techStack: ["Backend", "Architecture", "Databases", "Roadmap"],
    link: "https://github.com/vanshkalawatia/Back-end-Roadmap",
  },
];

// ------------------------------------------------------------------------
// 7. TECHNICAL SKILLS & CAPABILITIES
// ------------------------------------------------------------------------
export const skillsData: SkillCategory[] = [
  {
    id: 1,
    category: "Core Languages",
    items: [
      "Python 3",
      "Java (NPTEL Certified)",
    ],
  },
  {
    id: 2,
    category: "Databases & Storage",
    items: [
      "SQL Fundamentals",
      "Database Design (NPTEL Certified)",
      "JSON & File I/O",
    ],
  },
  {
    id: 3,
    category: "Security & Networking",
    items: [
      "Foundations of Cryptography (NPTEL)",
      "Socket Programming Basics",
      "Port Scanning",
    ],
  },
  {
    id: 4,
    category: "Problem Solving",
    items: [
      "Data Structures & Algorithms",
      "LeetCode Problem Solving",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    id: 5,
    category: "Tools & Environment",
    items: [
      "Git & GitHub",
      "Linux / CLI Commands",
      "Markdown & Documentation",
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
    externalLink: "https://www.linkedin.com/pulse/object-pooling-java-performance-game-changer-vansh-kalawatia-lvktc/",
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
    externalLink: "https://www.linkedin.com/pulse/gos-compiler-broke-my-code-before-i-even-started-heres-kalawatia-nstuc/",
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
