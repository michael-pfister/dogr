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
        white: '#FCFCFC',
        black: '#1D201F',
        green: '#00DC82',
      },
      backgroundImage: {
        'hero-pattern': "url('~/assets/img/blob-haikei.svg')",
        starred: "url('~/assets/img/favorite-svgrepo-com.svg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(180deg)' },
        },
        flipreverse: {
          '0%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        gainheight: {
          '0%': { 'max-height': '0' },
          '100%': { 'max-height': '100%' },
        },
        gainwidth: {
          '0%': { 'max-width': '0' },
          '100%': { 'max-width': '100%' },
        },
        'fly-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
        flip: 'flip 0.2s ease-in-out',
        flipreverse: 'flipreverse 0.2s ease-in-out',
        gainheight: 'gainheight 0.2s ease-out',
        gainwidth: 'gainwidth 0.5s',
        flyIn: 'fly-in 0.2s',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
