<template>
    <NuxtLayout name="auth">
        <div class="d-flex column">
            <Card style="width: 25em" class="animate__animated animate__fadeInLeft">
                <template #title>
                    <h4 class="m-0 text-main-color">Inicio de sesión</h4>
                </template>
                <template #subtitle> Bienvenido a PetLand </template>
                <template #content>
                    <span class="p-float-label">
                        <InputText v-model="model.value" class="p-inputtext-sm" focusable id="username" style="width: 100%;" />
                        <label for="username">Correo</label>
                    </span>
                    <span class="p-float-label mt-10">
                        <Password v-model="model.password" id="password" class="full-width p-inputtext-sm" :inputStyle="{ width: '100%' }"
                            :feedback="false" toggleMask />
                        <label for="password">Contraseña</label>
                    </span>
                </template>
                <template #footer>
                    <div class="d-flex just-content-right">
                        <NuxtLink class="none-decoration" to="/">
                            <Button label="Cerrar" severity="secondary" style="margin-left: 0.5em" text />
                        </NuxtLink>
                        <Button label="Iniciar sesión" @click="loginRequest()" />
                        
                    </div>
                </template>

            </Card>


        </div>
    </NuxtLayout>
    <Toast position="bottom-right"></Toast>
</template>

<script setup>
import Axios from "axios";
import {  } from "module";
import store from "~~/store";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { LoginUrl } from "@/helpers/url";


const model = ref({value: '', password: ''})
const router = useRouter()
const toast = useToast()

const loginRequest = () => {

    const dto = {
        value: model.value.value,
        password: model.value.password
    }
    
    Axios.post(LoginUrl, dto).then(response => {
        store.commit('login', response.data)
        router.push('/')
    }).catch(error => {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Credenciales incorrectas.', life: 4000 });
    })



}

useHead({
    title: 'Login'
})

</script>