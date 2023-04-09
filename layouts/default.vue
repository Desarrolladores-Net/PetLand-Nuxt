<template>
    <header class="box-1" style="position: sticky;top: 0; width: 100%; z-index: 9000;">
        <Toolbar style="border-radius: 0; ">
            <template #start>
                <Button icon="pi pi-bars" rounded text @click="handleDrawer()"></Button>
            </template>

            <template #end>
                <NuxtLink class="none-decoration" to="/auth/login">
                    <Button class="mr-2" text>Iniciar sesión</Button>
                </NuxtLink>
                <NuxtLink class="none-decoration" to="/auth/register">
                    <Button severity="secondary" class="mr-2" text>Registrarse</Button>
                </NuxtLink>
            </template>
        </Toolbar>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer class="p-20" style="background-color: white;">
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
            <h2>Brian Perez</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
        </Sidebar>
    </div>


</template>


<script setup>
import { ref } from "vue";

const visible = ref(false)
const drawer = ref(false)

const handleDrawer = () => {
    drawer.value = !drawer.value
}

</script>
