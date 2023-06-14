<template>
    <div v-if="data" class="grid">
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

<script setup>
import { defineProps } from "vue";
import { APIFiles } from '@/helpers/url';
import store from "@/store/index";
import { GetPetProfile } from "~~/services/pet/petRequest";


const props = defineProps({
    petId: String
})
const { data, pending } = await useAsyncData('getPetProfile', () =>  {
    try
    {
        return  GetPetProfile(store.state.user.id, props.petId)
    }
    catch(error)
    {
        console.log(error)
    }
       

})

</script>