import PrimeVue from 'primevue/config'

//Autoimport Primevue components to project
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
});