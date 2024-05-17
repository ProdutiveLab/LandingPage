import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-main)']
      },
      skew: {
        '17': '-9deg',
      },
      boxShadow: {
        '3xl': '-5px 10px 5px 2px rgba(0, 0, 0, 0.75)',
        //-5px 10px 5px 2px rgba(0,0,0,0.75)
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'orange': '#ff5522',
        'bgMain': '#ef9a1b'
      },
      spacing: {
        '-7px': '-7px',
      }
    },
  },
  plugins: [],
};
export default config;
