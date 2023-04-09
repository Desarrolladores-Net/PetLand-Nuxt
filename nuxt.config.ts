// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
    },
    css: [
        "primevue/resources/themes/md-light-indigo/theme.css",
        "primevue/resources/primevue.css",
        "/node_modules/primeflex/primeflex.css",
        "primeicons/primeicons.css",
        "/public/css/global.css"
    ],
    build: {
        transpile: ["primevue"]
    }
})

