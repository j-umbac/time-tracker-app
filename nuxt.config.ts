// https://nuxt.com/docs/api/configuration/nuxt-config

const getUrl = () => {
  let siteUrl =
    process?.env?.NUXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NUXT_ENV_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  siteUrl = siteUrl.includes('http') ? siteUrl : `https://${siteUrl}`;
  // Make sure to including trailing `/`.
  siteUrl = siteUrl.charAt(siteUrl.length - 1) === '/' ? siteUrl : `${siteUrl}/`;
  return siteUrl;
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    [
      '@nuxtjs/tailwindcss', {
        cssPath: '~/assets/styles/tailwind.css'
      }
    ],
    '@nuxtjs/supabase',
    'nuxt-icon',
    '@nuxt/image'
  ],
  css: [
    'primeicons/primeicons.css',
    'primevue/resources/primevue.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    '@/assets/styles/main.css', // NOTE: ORDER IS IMPORTANT HERE, WE MUST BE ABLE TO OVERRIDE PRIMEVUE STYLES
  ],
  imports: {
    dirs: ['./store/**', './composables/**']
  },
  build: {
    transpile: ['primevue']
  }
})
