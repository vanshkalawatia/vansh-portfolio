/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neo-bg': 'var(--neo-bg)', 
        'neo-accent': 'var(--neo-accent)', 
        'neo-text': 'var(--neo-text)',
        'neo-border': 'var(--neo-border)',
        'neo-card': 'var(--neo-card)',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px var(--neo-shadow)',
        'neo-sm': '2px 2px 0px 0px var(--neo-shadow)',
        'neo-lg': '8px 8px 0px 0px var(--neo-shadow)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
