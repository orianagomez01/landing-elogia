// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "assets": "/<rootDir>/assets",
    "public": "/<srcDir>/public"
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})