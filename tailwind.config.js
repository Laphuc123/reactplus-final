/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 6px 10px rgba(0, 0, 0, 0.15)',
        '4xl': '0px 4px 15px rgba(0, 0, 0, 0.25)',
      },
      backgroundColor: {
        'nen': 'rgba(244, 194, 127, 0.67)',
      },
    },
  },
  plugins: [],
}