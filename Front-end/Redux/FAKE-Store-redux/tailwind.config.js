/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        'home-icon': '60%',
      },
      gridAutoColumns: {
        '2fr': '70% 30%',
      }

    },
  },
  plugins: [],
}