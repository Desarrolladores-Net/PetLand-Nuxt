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
                    <Button icon="pi pi-bell" style="margin-right: 20px;" rounded text severity="secondary"
                        aria-label="Notification" />
                    <Button icon="pi pi-user" rounded text severity="primary" @click="toggle"  aria-haspopup="true" aria-label="User" aria-controls="overlay_menu" />
                    <Menu style="z-index: 9001;" ref="menu" id="overlay_menu" :model="items" :popup="true" />
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
            <div v-if="store.state.user" style="margin-top: 40px;" class="d-flex">
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <div>
                    <h3 class="text-main-color m-0 mt-10"><strong>{{ store.state.user.fullname }}</strong></h3>
                    <p class="m-0 text-main-color">{{ store.state.user.email }}</p>
                    <p class="m-0 text-main-color">{{ store.state.user.phone }}</p>
                </div>
            </div>
            <NavMenu></NavMenu>
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
const menu = ref();

const items = ref([{
    label: 'Perfil',
    icon: 'pi pi-user',
    
},
{
    label: 'Cerrar sesión',
    icon: 'pi pi-sign-out',
    command: () => {
        store.commit('logout')
    } 
}

])


const toggle = (event) => {
    menu.value.toggle(event);
};

onMounted(() => {
    store.commit('initializeStore')
})

const handleDrawer = () => {
    drawer.value = !drawer.value
}

</script>


