import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",

  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      fontFamily: {
        sans: [`var(--font-jakarta)`, "sans-serif"],
      },
      colors: {
        primary: "#2B2C37",
        secondary: "#2C2C38",
        tertiary: "#2C2C38",
        accent: {
          DEFAULT: "#645FC6",
          hover: "#6519c6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
