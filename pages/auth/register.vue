<template>
    <NuxtLayout name="auth">
        <Card style="width: 25em" class="animate__animated animate__fadeInLeft">
            <template #title>
                <h4 class="m-0 text-main-color">Registro</h4>
            </template>
            <template #subtitle> Bienvenido a PetLand </template>
            <template #content>
                <span class="p-float-label">
                    <InputText class="p-inputtext-sm" id="fullname" v-model="Model.name" style="width: 100%;" />
                    <label for="fullname">Nombre</label>
                </span>
                <span class="p-float-label mt-10">
                    <InputText class="p-inputtext-sm" id="email" v-model="Model.email" style="width: 100%;" />
                    <label for="email">Correo</label>
                </span>
                <span class="p-float-label mt-10">
                    <InputText prefix="+53" class="p-inputtext-sm" id="phone" v-model="Model.phone" style="width: 100%;" />
                    <label for="phone">Teléfono</label>
                </span>
                <span class="p-float-label mt-10">
                    <Password id="password" class="full-width  p-inputtext-sm" v-model="Model.password"
                        :inputStyle="{ width: '100%' }" :feedback="false" toggleMask />
                    <label for="password">Contraseña</label>
                </span>
                <span class="p-float-label mt-10">
                    <Password id="password" class="full-width p-inputtext-sm" v-model="Model.confirmPassword"
                        :inputStyle="{ width: '100%' }" :feedback="false" toggleMask />
                    <label for="password">Confirmar contraseña</label>
                </span>
                <ul v-if="errors.length > 0" class="height-100 scroll">
                    <li v-for="item in errors" style="color: red">
                        <p v-for="value in item[1]">
                            {{ value }}
                        </p>
                    </li>
                </ul>
            </template>

            <template #footer>
                <div class="d-flex just-content-right">
                    <Button v-if="!loading" label="Registrar" @click="submit()">
                        Registrar
                    </Button>
                    <ProgressSpinner v-else style="height: 40px" strokeWidth="8" fill="var(--surface-ground)"
                                animationDuration=".5s" aria-label="Custom ProgressSpinner" />

                    <NuxtLink class="none-decoration" to="/">
                        <Button label="Cerrar" severity="secondary" style="margin-left: 0.5em" />
                    </NuxtLink>
                </div>
                <div class="d-flex">
                    <Divider></Divider>
                    <p class="text-main-color">También</p>
                    <Divider></Divider>
                </div>
                <div>
                    <Button icon="pi pi-google" style="width: 100%;" text severity="danger">Iniciar sesión con
                        Google</Button>
                    <Button icon="pi pi-facebook" style="width: 100%;" text severity="primary">Iniciar sesión con
                        Facebook</Button>
                    <Button icon="pi pi-check" style="width: 100%;" text severity="info">Iniciar sesión con
                        Twitter</Button>
                </div>
            </template>
        </Card>
    </NuxtLayout>
</template>


<script setup>
import { ref } from "vue";
import { registerRequest } from "@/services/auth/register";
import store from "@/store/index";

const Model = ref({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
const errors = ref([])
const loading = ref(false)
useHead({
    title: 'Registro'
})


const submit = () => {
    loading.value = true
    const dto = {
        email: Model.value.email,
        fullname: Model.value.name,
        password: Model.value.password,
        confirmPassword: Model.value.confirmPassword,
        phone: Model.value.phone
    }

    registerRequest(dto).then(response => {

        store.commit('login', response.data)
        loading.value = false
    }).catch(error => {
        errors.value = Object.entries(error.response.data.errors)
    })

}


</script>