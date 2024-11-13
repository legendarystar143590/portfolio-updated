import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/molecules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      h1: '64px',
      h2: '48px',
      h3: '38px',
      h4: '28px',
      subtitle: '24px',
      paragraph: '20px',
      lg: '18px',
      body: '16px',
      md: '14px',
      sm: '12px',
      small: '10px',
    },
    screens: {
      xs: '321px',
      sm: '390px',
      xsm: '426px',
      xxsm: '600px',
      md: '769px',
      lg: '1025px',
      xlg: '1441px',
      xm: '1200px',
      xmd: '1366px',
      xl: '1440px',
      xxl: '1600px',
      xxxl: '1920px',
    },
  },
  darkMode: 'class',
  
  plugins: [],
};
export default config;
