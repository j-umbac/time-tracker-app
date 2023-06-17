import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Timeline from 'primevue/timeline'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';

//Auto-import Primevue components to project
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.component('Card', Card)
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('Timeline', Timeline);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Textarea', Textarea);
    nuxtApp.vueApp.component('InputNumber', InputNumber);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('ToggleButton', ToggleButton);
    nuxtApp.vueApp.directive('tooltip', Tooltip);
});