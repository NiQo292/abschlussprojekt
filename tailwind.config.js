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
          },
        },
      },
    }),
  ],
};
