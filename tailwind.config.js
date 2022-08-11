/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Handlee", "sans-serif"],
        alata: ["Saira Semi Condensed"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
