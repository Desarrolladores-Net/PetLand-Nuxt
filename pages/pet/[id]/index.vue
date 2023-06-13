<template>
    <div v-if="data" class="p-20">
        <Card>
            <template #content>
                <div class="grid">
                    <div class="col-12 lg:col-7">
                        <img style="object-fit: cover; width: 100%;" class="br-5" alt="Foto del animalito"
                            :src="APIFiles + data.photoPath" />
                    </div>
                    <div class="col-12 lg:col-5">
                        <h3 v-if="data.fullname" class="text-main-color mt-10">Nombre: {{ data.fullname }}</h3>
                        <h3 v-else class="text-main-color mt-10">Nombre: Nombre desconocido</h3>
                        <h3 v-if="data.age" class="text-main-color mt-10">Edad: {{ data.age }}</h3>
                        <h3 v-else class="text-main-color mt-10">Edad: Edad desconocida</h3>
                        <h3 class="text-main-color mt-10">Descripción: {{ data.description }}</h3>
                        <h3 class="text-main-color mt-10">Ya fue adoptado: {{ data.wasAdopted ? 'Sí' : 'No' }}</h3>
                        <h3 v-if="data.wasAdopted" class="text-main-color mt-10">Fecha de adopción: {{ new
                            Date(data.adoptionDate).toLocaleDateString() }}</h3>
                        <h3 v-if="data.address" class="text-main-color mt-10">Dirección: {{ data.address.streetName + ', ' +
                            data.address.municipe + ', ' + data.address.province }}</h3>
                        <h3 v-if="data.address" class="text-main-color mt-10">Más detalles: {{ data.address.moreDetails }}
                        </h3>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="d-flex just-content-right">
                    <NuxtLink class="none-decoration" to="/pet">
                        <Button severity="secondary" text>Cancelar</Button>
                    </NuxtLink>
                    <NuxtLink class="none-decoration" :to="`/pet/${route.params.id}/application`">
                        <Button >Adoptar</Button>
                    </NuxtLink>
                        
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import store from '~~/store';
import { GetPetProfile } from '../../../services/pet/petRequest';
import { useRoute } from "vue-router";
import { APIFiles } from "@/helpers/url";

const route = useRoute()
const { data, pending } = await useAsyncData('getPetProfile', async () => {

    const response = await GetPetProfile(store.state.user.id, route.params.id)

    return response

})


useHead({
    title: 'Perfil'
})
</script>