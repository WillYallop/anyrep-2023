/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#F82929",
        brandRedHover: "#c52020",
        brandDarkBlue: "#001524",
        brandGrey: "#EAEAEA",

        sectionGrey: "#F9F9F9",
        sectionGreyDark: "#F0F0F0",

        white: "#FFFFFF",
        whiteHover: "#E7E7E7",

        titleLight: "#FFFFFF",
        titleDark: "#001524",
      },
      fontFamily: {
        sans: [
          "Seravek",
          "Gill Sans Nova",
          "Ubuntu",
          "Calibri",
          "DejaVu Sans",
          "source-sans-pro",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
