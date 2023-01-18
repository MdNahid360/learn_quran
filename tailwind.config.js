/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
       fontFamily: {
        libre: ['"Aref Ruqaa Ink"', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}
