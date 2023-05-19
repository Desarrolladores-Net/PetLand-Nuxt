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
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Skeleton from 'primevue/skeleton';

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
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Avatar', Avatar)
    nuxtApp.vueApp.component('Menu', Menu)
    nuxtApp.vueApp.component('FileUpload', FileUpload)
    nuxtApp.vueApp.component('Textarea', Textarea)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('Skeleton', Skeleton)
    nuxtApp.vueApp.use(ToastService)
    //other components that you need
});