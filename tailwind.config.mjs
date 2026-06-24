/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#f4f4f0', 
        'neo-accent': '#60a5fa', 
        'neo-text': '#111827',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
