// https://nuxt.com/docs/api/configuration/nuxt-config
// hgkbkholfcvvdbdgvcdbnv
// Import the defineNuxtConfig function from 'nuxt'


export default defineNuxtConfig({
  // Configure the modules to be used in the Nuxt project
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icon'
  ],

  // Specify custom CSS files to be included in the project
  css: ['@/assets/css/main.css'],

  // Define plugins to be used in the project
  plugins: [
    {
      src: "~/plugins/swiper.ts",
      mode: "client",
    },
  ],

  // Configure global transitions for app navigation and layout changes
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
  },
});