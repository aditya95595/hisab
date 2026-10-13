/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#0c0c11",
          900: "#101018",
          800: "#14141c",
          700: "#1c1c26",
        },
        cream: {
          50: "#fffdf7",
          100: "#faf6ec",
          200: "#f3edde",
        },
        amber: {
          DEFAULT: "#f5b942",
          deep: "#e08a1e",
          ink: "#201303",
          soft: "rgba(245,185,66,.12)",
        },
        ink: {
          DEFAULT: "#f5f1e8",
          soft: "#d8d2c2",
          muted: "#a09a89",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        card: "0 24px 70px rgba(0,0,0,.42)",
        "card-sm": "0 10px 30px rgba(0,0,0,.3)",
        amber: "0 10px 26px rgba(245,185,66,.32)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(4%, -6%) scale(1.12)" },
        },
        "aurora-drift-2": {
          "0%, 100%": { transform: "translate(0,0) scale(1.05)" },
          "50%": { transform: "translate(-5%, 4%) scale(1.18)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: ".55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "aurora-drift": "aurora-drift 14s ease-in-out infinite",
        "aurora-drift-2": "aurora-drift-2 18s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
