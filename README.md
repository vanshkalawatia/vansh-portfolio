# Vansh Kalawatia Portfolio

A high-performance web portfolio and blog built with Astro and Tailwind CSS, featuring a Neo-Brutalist design language.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Content Management

### Adding a Blog Post
To add a new blog post, create a `.md` file inside `src/content/blog/`. Follow the frontmatter schema:
```yaml
---
title: "Your Title Here"
description: "Brief summary."
date: 2023-11-01
tags: ["tag1", "tag2"]
---
Your markdown content goes here.
```

### Updating the Social Activity Feed
Edit the `src/data/socialPosts.json` file to add or remove links to X posts or Instagram Reels.

### Updating the Avatar
Place your avatar image at `public/images/avatar.png`.

## Deployment
This project is configured out-of-the-box for a zero-config deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically build and deploy.
