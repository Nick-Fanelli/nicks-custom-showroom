import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#F58220",
          "secondary": "#88D498",
          "secondary-content": "#ffffff",
          "accent": "#B6B6B6",
          "neutral": "#1E212B",
          "base-100": "#42494A",
          "base-200": "#363C3D",
          "base-content": "#ffffff",
        },
      },
    ],
  }
};
export default config;
