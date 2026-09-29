import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gig-poster palette: a pint held up to the light.
        amber: { DEFAULT: "#f3a712", deep: "#d98a00" },
        ink: "#1a110b",
        stout: "#3b2415",
        foam: "#fff6e3",
        stamp: "#e0431c",
      },
      fontFamily: {
        poster: ["var(--font-karantina)", "Impact", "sans-serif"],
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
        lex: ["var(--font-frank)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
