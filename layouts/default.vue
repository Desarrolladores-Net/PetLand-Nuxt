<template>
    <header class="box-1" style="position: sticky;top: 0; width: 100%; z-index: 9000;">
        <Toolbar style="border-radius: 0; ">
            <template #start>
                <Button icon="pi pi-bars" rounded text @click="handleDrawer()"></Button>
            </template>

            <template #end>
                <div v-if="!store.state.user">
                    <NuxtLink class="none-decoration" to="/auth/login">
                        <Button class="mr-2" text>Iniciar sesión</Button>
                    </NuxtLink>
                    <NuxtLink class="none-decoration" to="/auth/register">
                        <Button severity="secondary" class="mr-2" text>Registrarse</Button>
                    </NuxtLink>
                </div>
                <div v-else>
                    <Button icon="pi pi-bell" style="margin-right: 20px;" rounded text severity="secondary" aria-label="Notification" />
                    <Button icon="pi pi-user" rounded text severity="primary" aria-label="User" />
                </div>
            </template>
        </Toolbar>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer class="p-20" style="background-color: white; height: 100%;">
        <div class="d-flex just-content-center">
            <NuxtLink class="none-decoration" to="https://github.com/Desarrolladores-Net">
                <Button class="mr-10" icon="pi pi-github" rounded text></Button>
            </NuxtLink>
            <NuxtLink class="none-decoration" to="https://t.me/+4aZdHLLxia85Njdh">
                <Button icon="pi pi-telegram" rounded text></Button>
            </NuxtLink>
        </div>

        <p class="text-center text-main-color">Desarrolladores .Net</p>
    </footer>
    <div class="card flex justify-content-center">
        <Sidebar style="z-index: 99999;" v-model:visible="drawer">
            <h2>{{ store.state.user.fullname }}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
        </Sidebar>
    </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import store from "@/store/index";

useHead({
    titleTemplate: '%s | PetLand',
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: '"https://fonts.gstatic.com', crossOriginIsolated: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    ]
})
const visible = ref(false)
const drawer = ref(false)


onMounted(() => {
    store.commit('initializeStore')
})

const handleDrawer = () => {
    drawer.value = !drawer.value
}

</script>
