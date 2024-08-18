import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      neutral: {
        900: "#151515",
        700: "#3c3c3c",
        500: "#8a8a8a",
        300: "#d0d0d0",
        100: "#ffffff",
      },
    },
    extend: {
      colors: {
        success: "#73ca5c",
        warning: "#f9cc00",
        darkblue: {
          900: "#091b6f",
          700: "#0d28a6",
          500: "#5e70c4",
          300: "#aeb7e1",
          100: "#cfd4ed",
        },
        limegreen: {
          900: "#3d7b3f",
          700: "#5cb85f",
          500: "#92d094",
          300: "#c9e7ca",
          100: "#def1df",
        },
        danger: {
          900: "#9c1f3f",
          700: "#fa2c5a",
          500: "#fd617b",
          300: "#fea3b6",
          100: "#ffdee3",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        display: ["Rubik"],
      },
      boxShadow: {
        low: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
        high: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
