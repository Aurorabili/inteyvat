import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".hero-svgbg": {
            "background-image": "url('/bglight.svg')",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".hero-svgbg": {
            "background-image": "url('/bgdark.svg')",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
