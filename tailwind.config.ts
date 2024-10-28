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
        montserrat: ['Montserrat', 'sans-serif'],
        sixtyfour: ['Sixtyfour Convergence', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        boc_green: '#69B069',
        boc_darkgreen: "#418D41",
        boc_darkbrown: "#461300",
        boc_lightbrown: "#FDE6BB",
        boc_slate: "#425863"
      },
      fontSize: {
        'boc_logo_size': '75px', // Customize as needed
      },
    },
  },
  plugins: [],
};
export default config;
