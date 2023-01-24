export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dogr. | Find Pictures of Any Dog Breed',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      // Primary Meta Tags
      { name: 'title', content: 'Dogr. | Find Pictures of Any Dog Breed' },
      {
        name: 'description',
        content:
          'Dogr is a powerful tool that allows you to find pictures of any dog in a matter of seconds. You can search for specific breeds, or just browse through the list of dogs.',
      },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dogr.vercel.app/' },
      {
        property: 'og:title',
        content: 'Dogr. | Find Pictures of Any Dog Breed',
      },
      {
        property: 'og:description',
        content:
          'Dogr is a powerful tool that allows you to find pictures of any dog in a matter of seconds. You can search for specific breeds, or just browse through the list of dogs.',
      },
      {
        property: 'og:image',
        content: 'https://dogr.vercel.app/meta-banner.jpeg',
      },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://dogr.vercel.app/' },
      {
        property: 'twitter:title',
        content: 'Dogr. | Find Pictures of Any Dog Breed',
      },
      {
        property: 'twitter:description',
        content:
          'Dogr is a powerful tool that allows you to find pictures of any dog in a matter of seconds. You can search for specific breeds, or just browse through the list of dogs.',
      },
      {
        property: 'twitter:image',
        content: 'https://dogr.vercel.app/meta-banner.jpeg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    pusherKey: process.env.PUSHER_KEY,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  target: 'static',
}
