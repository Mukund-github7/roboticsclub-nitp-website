import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: { 950: "#020617" }, // Deep background
        cyan: { 400: "#22d3ee", 500: "#06b6d4" }, // Neon glow
        orange: { 500: "#f97316" }, // Accents
      },
    },
  },
  plugins: [],
};
export default config;