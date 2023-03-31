const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', ...fontFamily.sans],
        britanicaRegular: "Britanica Regular, serif",
        britanicaBold: "Britanica Bold, serif",
        britanicaLight: "Britanica Light, serif",
      },
    },
  },

  plugins: [],
  "tailwindCSS.emmetCompletions": true,
  "editor.inlineSuggest.enabled": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
}
