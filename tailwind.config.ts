import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: ["light"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: ["selector"],
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        xxs: "10px",
      },
      container: {
        center: true,
        padding: "16px",
      },
      screens: {
        mobile: { max: "480px" },
        sm: "480px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
        "~lg": { max: "1280px" },
      },
      boxShadow: {
        binex: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        "binex-xl":
          "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
      },
      colors: {
        dark: "var(--dark)",
        dark900: "var(--dark900)",
        dark800: "rgb( var(--dark800) / <alpha-value>)",
        dark100: "var(--dark100)",
        gray900: "var(--gray900)",
        gray800: "var(--gray800)",
        gray400: "var(--gray400)",
        line: "var(--line)",
        pink: "var(--pink)",
        "binex-color": "var(--binex-color)",
        "binex-color2": "var(--binex-color2)",
        blue: "rgb(var(--blue) /<alpha-value>)",
        blue900: "var(--blue900)",
        opacity: "var(--opacity)",
        "head-table-color": "var(--head-table-color)",
        "opacity-green": "var(--opacity-green)",
        green300: "var(--green300)",
        green200: "var(--green200)",
        green100: "rgb(var(--green100) / <alpha-value>)",
        down: "rgb(var(--down) / <alpha-value>)",
        "blue-light": "var(--blue-light)",
        up: "rgb( var(--up) / <alpha-value>)",
        "dark-black": "var(--dark-black)",
        black900: "var(--black900)",
        white100: "var( --white100)",
        white200: "var( --white200)",
        yellow: "var( --yellow)",
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        surface: "var(--surface-color)",
        "anti-surface": "var(--anti-surface-color)",
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(90deg, var(--dark100) 60%, white )",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-yekan)"],
        vijaya: ["var(--font-vijaya)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
