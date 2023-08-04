export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-typed-router',
  ],

  app: {
    rootId: 'app',
    rootTag: 'body',
  },

  devtools: { enabled: true },

  typescript: { typeCheck: true },

  pinia: { autoImports: ['defineStore'] },

  ui: { global: true },

  $development: {},

  $production: {},
});
