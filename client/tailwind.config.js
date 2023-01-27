/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#F3C651',
        'dark': '#000',
        'white': '#fff',
        'grey': '#333',
        'prime': '#219653',
        'secondary': '#F7B643',
      },
      fontFamily: {
        'ArchivoBlack': ['ArchivoBlack'],
        'sans': ['DMSans']
      }
    },
  },
  plugins: [],
}
