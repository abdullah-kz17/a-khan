import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Medical Blue
          dark: "#1E40AF",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#14B8A6", // Teal
          dark: "#0F766E",
        },
        success: "#10B981",
        background: "#F9FAFB",
        surface: "#FFFFFF",
        text: {
          primary: "#1F2937",
          secondary: "#4B5563",
          light: "#9CA3AF",
        },
        brand: {
          primary: "#153e75",
          secondary: "#84cc16",
          accent: "#1e293b",
          light: "#f8fafc",
          dark: "#0f172a",
        },
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-outwards",
        "slide-up": "slideUp 0.6s ease-outwards",
        "pulse-slow": "pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
