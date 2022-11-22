/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FCFCFC',
        'black': '#1D201F',
        'green': '#00DC82',
        'red': '#E63946',
      },
    },
  },
  plugins: [],
  darkMode: 'media'
}
