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
                    <NuxtLink class="none-decoration" to="/">
                        <Button label="Cerrar" severity="secondary" text class="mr-10" />
                    </NuxtLink>
                    <Button v-if="!loading" label="Registrar" @click="submit()">
                        Registrar
                    </Button>
                    <Button v-else label="Registrar" @click="submit()">
                        Registrando
                    </Button>    
                </div>
            </template>
        </Card>
        <Toast position="bottom-right"></Toast>
    </NuxtLayout>
</template>


<script setup>
import { ref, onBeforeMount } from "vue";
import { registerRequest } from "@/services/auth/register";
import store from "@/store/index";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";


const router = useRouter()
const Model = ref({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
const errors = ref([])
const loading = ref(false)
const toast = useToast()
useHead({
    title: 'Registro'
})

const show = () => {
    
    toast.add({ severity: 'info', summary: 'Información', detail: 'Ya hay un usuario con ese email o teléfono.', life: 4000 });
};


const error500 = () => {
    
    toast.add({ severity: 'error', summary: 'Error', detail: 'Ha pasado algo, intentelo más tarde', life: 4000 });
};

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
        router.push('/')
        loading.value = false
    }).catch(error => {
        loading.value = false
        if (error.response.status == 409) {
            errors.value = []
            show()
            
        }
        else if(error.response.status == 400) {
            errors.value = Object.entries(error.response.data.errors)
        }
        else
        {
            error500()
        }

        

    })

}

onBeforeMount(() => {
    if(store.state.user)
    {
        router.push('/')
    }
})

</script>

