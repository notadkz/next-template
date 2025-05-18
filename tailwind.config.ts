import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // hoặc 'media' nếu muốn tự động theo hệ điều hành
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        muted: "#6B7280",
        background: "#F9FAFB",
        dark: {
          bg: "#0F172A",
          surface: "#1E293B",
          text: "#CBD5E1",
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
