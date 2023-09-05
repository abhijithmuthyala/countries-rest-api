/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        100: "#ffffff",
        200: "#fafafa",
        300: "#c4c4c4",
        400: "#b2b2b2",
        500: "#808080",
        900: "#000000",
      },
      blue: {
        600: "#2b3844",
        700: "#202c36",
        800: "#111517",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
    },
    fontWeight: {
      normal: 300,
      medium: 600,
      bold: 800,
    },
    lineHeight: {
      normal: "normal",
      1: "1rem",
      2: "1.25rem",
      3: "1.625rem",
      4: "2rem",
    },
    backgroundImage: {
      "dark-mode": "url('/icon-dark-mode.svg')",
      "light-mode": "url('/icon-light-mode.svg')",
      search: "url('/icon-search.svg')",
      "down-arrow": "url('/icon-down-arrow.svg')",
      "left-arrow": "url('/icon-left-arrow.svg')",
    },
  },
  plugins: [],
};
