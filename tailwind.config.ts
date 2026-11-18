import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF3FF",
          100: "#DCE6FF",
          200: "#BCCFFF",
          300: "#8FAEFB",
          400: "#5B85F3",
          500: "#3064F0",
          600: "#0B4AD6",
          700: "#0A3DAF",
          800: "#0D348C",
          900: "#0F2E6E",
          950: "#08133F",
        },
        navy: {
          50: "#F1F2F8",
          100: "#E1E4F0",
          200: "#C3C8E0",
          300: "#9AA1C7",
          400: "#6E77A8",
          500: "#4C558A",
          600: "#363E70",
          700: "#262D59",
          800: "#1A2047",
          900: "#0F1436",
          950: "#070A24",
        },
        /* Azul-violeta da logo: usado em CTAs e destaques. */
        accent: {
          50: "#F0F1FE",
          100: "#E1E4FD",
          200: "#C7CCFB",
          300: "#A2A9F7",
          400: "#7B84F1",
          500: "#5B63E8",
          600: "#4146D2",
          700: "#3536AE",
          800: "#2D2F8C",
          900: "#292B6F",
          950: "#191A41",
        },
        ink: {
          DEFAULT: "#0B0F2E",
          soft: "#3F4566",
          muted: "#6B7194",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,15,46,.04), 0 8px 24px -12px rgba(11,15,46,.14)",
        card: "0 2px 4px rgba(11,15,46,.04), 0 18px 40px -20px rgba(11,15,46,.22)",
        lift: "0 8px 12px rgba(11,15,46,.05), 0 32px 60px -28px rgba(11,74,214,.42)",
        glow: "0 0 0 1px rgba(65,70,210,.18), 0 22px 60px -24px rgba(65,70,210,.55)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.85)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseRing: "pulseRing 2.6s cubic-bezier(.24,.8,.4,1) infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
