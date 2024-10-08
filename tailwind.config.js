/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#D34949",
        primary_1: "#D34949",
        primary_2: "#BA2FFE",
        primary_3: "#9D1AFE",
        app_milk: "#fff",
        app_dark: "#112022",
        app_violet: "#A01CFE",
      },
    },
  },
  plugins: [],
};
