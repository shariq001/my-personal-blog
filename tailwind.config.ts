import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      ptSerif: ["var(--font-pt-serif)", "serif"],
    },
    screens: {
      sm: "320px",
      sm2: '500px',
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    }
  },
  plugins: [],
} satisfies Config;
