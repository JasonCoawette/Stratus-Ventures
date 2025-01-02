import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryFG: "#FFFFFF",
        secondaryFG: "rgba(255, 255, 255, 0.8)",
        tertiaryFG: "rgba(255, 255, 255, 0.48)",
        stroke: "rgba(255, 255, 255, 0.16)",
        primaryBG: "#080808",
        secondaryBG: "#161616",
        icon: "#484848",
        pink: "#EE00FF",
        green: "#43E660",
        blue: "#00BBFF",
        negativeRed: "#E64346",
        cellLow: "rgba(255, 255, 255, 0.08)",
        cellMiddleLow: "rgba(67, 230, 96, 0.16)",
        cellMiddle: "rgba(67, 230, 96, 0.32)",
        cellMiddleHigh: "rgba(67, 230, 96, 0.64)",
        cellHigh: "#43E660",
        positiveGreenBG: "rgba(67, 230, 96, 0.32)",
        negativeRedBG: "rgba(230, 67, 70, 0.32)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
