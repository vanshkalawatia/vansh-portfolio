import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Facebook,
  Instagram
} from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

interface SocialLinksProps {
  personalInfo: {
    github: string;
    linkedin: string;
    email: string;
    facebook?: string;
    instagram?: string;
    medium?: string;
    leetcode?: string;
    twitter?: string;
  };
}

export function SocialLinks({ personalInfo }: SocialLinksProps) {
  const links: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: personalInfo.github
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: personalInfo.linkedin
    },
    ...(personalInfo.leetcode ? [{
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607L9.405 7.82l4.993-5.227A1.379 1.379 0 0 0 13.483 0zm-2.88 7.283a1.38 1.38 0 0 0-.977.404l-5.699 5.699a1.38 1.38 0 0 0 0 1.953 1.38 1.38 0 0 0 1.953 0l5.699-5.699a1.38 1.38 0 0 0-.976-2.357z"/></svg>,
      label: "LeetCode",
      url: personalInfo.leetcode
    }] : []),
    ...(personalInfo.twitter ? [{
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
      label: "X (Twitter)",
      url: personalInfo.twitter
    }] : []),
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: `mailto:${personalInfo.email}`
    },
    ...(personalInfo.instagram ? [{
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: personalInfo.instagram
    }] : []),
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.url}
          target={link.url.startsWith('mailto:') ? undefined : "_blank"}
          rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg hover:shadow-primary/20"
          aria-label={link.label}
          title={link.label}
        >
          <span className="text-foreground hover:text-primary transition-colors">
            {link.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
