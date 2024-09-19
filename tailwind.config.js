/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-vector': 'url(/assets/vector03.svg)',
        'vector-id-04': 'url(/assets/vector-background01.svg)',
        'vector-id-040': 'url(/assets/vector-background02.svg)',
        'vector-id-05': 'url(/assets/vector00.svg)',
        'vector-id-050': 'url(/assets/vector01.svg)',
        'line': 'url(/assets/line.svg)',
        'vector-id-051':'url(/assets/vector04.svg)',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],

    },
  },
  plugins: [],
}}