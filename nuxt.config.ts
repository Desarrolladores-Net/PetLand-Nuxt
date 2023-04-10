// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: [
        "primevue/resources/themes/md-light-indigo/theme.css",
        "primevue/resources/primevue.css",
        "/node_modules/primeflex/primeflex.css",
        "primeicons/primeicons.css",
        "/public/css/global.css",
        'animate.css/animate.min.css'
    ],
    build: {
        transpile: ["primevue"]
    }
})

