// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/hints',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})