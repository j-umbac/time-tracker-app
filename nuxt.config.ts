// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    [
      '@nuxtjs/tailwindcss', {
        cssPath: '~/assets/styles/tailwind.css'
      }
    ]
  ],
  css: [
    'primeicons/primeicons.css',
    'primevue/resources/primevue.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    '@/assets/styles/main.css', // NOTE: ORDER IS IMPORTANT HERE, WE MUST BE ABLE TO OVERRIDE PRIMEVUE STYLES
  ]
})
