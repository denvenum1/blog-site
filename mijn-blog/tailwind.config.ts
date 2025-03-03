import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      boxShadow: {
        '200': '0px 10px 30px rgba(59,130,246,0.5)',  
        '300': '0px 15px 40px rgba(59,130,246,0.5)',  
        'blog': '0px 15px 10px -15px rgba(59,130,246,0.5), 0px 10px 30px rgba(59,130,246,0.5)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(0, 255, 236)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
