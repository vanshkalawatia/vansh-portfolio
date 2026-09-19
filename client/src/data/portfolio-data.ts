// Static portfolio data for GitHub Pages deployment
export const educationData = [
  { institution: "University (3rd Year, Currently Pursuing)", degree: "Bachelor of Technology in Computer Science & Engineering", period: "2024 – Present" },
];

export const researchData: { title: string; authors: string; venue: string; year: string; link: string }[] = [];

export const certificationsData = [
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

export const interestsData = [
  { icon: "\uD83D\uDCDA", title: "Reading", desc: "Books on tech, psychology, and self-improvement" },
  { icon: "\uD83C\uDF8C", title: "Anime", desc: "From Naruto to Attack on Titan — always looking for recommendations" },
  { icon: "\uD83C\uDFB5", title: "Music", desc: "Lo-fi for coding, hip-hop for energy, and everything in between" },
  { icon: "\uD83E\uDDE0", title: "Learning", desc: "Always curious — new languages, design patterns, security concepts" },
  { icon: "\u2615", title: "Coffee & Code", desc: "Late night coding sessions fueled by coffee" },
  { icon: "\uD83D\uDD12", title: "Cybersecurity", desc: "Exploring security concepts, CTFs, and ethical hacking" },
];

export const heroPhrases = [
  "Building secure APIs with FastAPI",
  "Python backend developer in progress",
  "One commit at a time",
  "Learning, building, shipping",
  "Security-first backend mindset",
];

export const portfolioData = {
  personalInfo: {
    id: 1,
    name: "Vansh Kalawatia",
    role: "Backend Developer",
    bio: "Python backend developer in progress. Building secure APIs with FastAPI and PostgreSQL. One commit at a time.",
    email: "vanshkalawatia2@gmail.com",
    phone: "",
    github: "https://github.com/vanshkalawatia",
    linkedin: "https://linkedin.com/in/vanshkalawatia",
    location: "India",
    avatarUrl: "https://avatars.githubusercontent.com/u/295721289?v=4",
    resumeUrl: "https://vansh-portfolio-bay.vercel.app/resume.pdf",
    facebook: "",
    instagram: "https://www.instagram.com/vansh0x00/",
    medium: "",
    twitter: "https://x.com/vansh0x00",
    leetcode: "https://leetcode.com/u/vanshkalawatia/",
  },
  experiences: [
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
  ],
  projects: [
    {
      id: 1,
      title: "Project Port Scanner",
      description:
        "A network security tool for scanning ports on target hosts. Built to understand networking fundamentals and security concepts.",
      techStack: [
        "Python",
        "Networking",
        "Security",
      ],
      link: "https://github.com/vanshkalawatia/project-port-scanner",
    },
    {
      id: 2,
      title: "Portfolio Website (Previous)",
      description:
        "Personal portfolio built with Astro framework, featuring study streak tracking, live LeetCode stats, blog posts, and a clean dark theme.",
      techStack: [
        "Astro",
        "JavaScript",
        "CSS",
        "Vercel",
      ],
      link: "https://github.com/vanshkalawatia/vansh-portfolio",
    },
  ],
  skills: [
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
      ],
    },
  ],
  blogs: [
    {
      id: 1,
      title: "Object Pooling in Java — A Performance Game-Changer",
      description: "Object pooling isn't just a performance trick — it's a fundamental pattern for scalable backend systems. Here is a clean, production-ready implementation of a Database Connection Pool in Java.",
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
      description: "I was just tweaking my folder layout when Go hit me with a compiler error I didn't expect. Here's what I learned about why Go is so strict about package structure — and why that's actually a good thing.",
      thumbnail: "",
      thumbnailWidth: 0,
      thumbnailHeight: 0,
      externalLink: "https://vansh-portfolio-bay.vercel.app/blog/first-post",
      platform: "Blog",
      date: "2026-06-24",
      tags: ["Go", "Beginners", "Package Structure", "Learning"],
    },
  ],
};
