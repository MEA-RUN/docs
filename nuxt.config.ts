// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    // '@nuxt/ui',
    // '@nuxt/eslint',
    // '@nuxt/hints',
    'nuxt-studio',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  studio: {
    // Studio admin route (default: '/_studio')
    route: '/studio',
    
    repository: {
      provider: 'github', 
      owner: 'MEA-RUN',
      repo: 'docs',
      branch: 'main',
      rootDir: '',
      private: true,
    },
  }
})