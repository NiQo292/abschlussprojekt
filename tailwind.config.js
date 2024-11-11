import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        42: "2.625rem",
        64: "4rem",
        72: "4.5rem",
        96: "6rem",
      },
      colors: {
        primary: "#f5f4ee", // Off-White
        secondary: "#6c5f58", // Taupe
        secondary10: "#f0efee", // Taupe10
        secondary20: "#e2dfde", // Taupe20
        secondary40: "#c4bfbc", // Taupe40
        secondary60: "#44423F", // Taupe60
        secondary80: "#897f79", // Taupe80
        dark: "#393835", // Dark
        dark2: "#5a4f4a", // Dark2
        light: "#eae8e2", // Light Grey BG
        red: "#f42434", // Hammer Red
        darkred: "#c72632",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f5f4ee",
            foreground: "#5a4f4a",
            hover: "#c72632",
          },
        },
        dark: {
          colors: {
            background: "#393835",
            foreground: "#c4bfbc",
            hover: "#e2dfde",
          },
        },
      },
    }),
  ],
};
