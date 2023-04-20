import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Toolbar from 'primevue/toolbar';
import Sidebar from 'primevue/sidebar';
import ProgressSpinner from 'primevue/progressspinner';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Card", Card);
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Password", Password);
    nuxtApp.vueApp.component("Divider", Divider);
    nuxtApp.vueApp.component("Toolbar", Toolbar);
    nuxtApp.vueApp.component("Sidebar", Sidebar);
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
    //other components that you need
});