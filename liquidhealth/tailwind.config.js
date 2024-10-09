/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      nunitoSans: ['Nunito Sans', 'sans-serif'],
      noto: ['"Noto Sans JP"', 'sans-serif'],
      work: ['"Work Sans"', 'sans-serif'],
      mukta: ['Mukta', 'sans-serif'],
      hind: ['Hind', 'sans-serif'],
    },
  },
  plugins: [],
}

