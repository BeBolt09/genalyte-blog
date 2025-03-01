/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}
