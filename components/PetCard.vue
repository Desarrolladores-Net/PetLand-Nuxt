<template>
    <Card class="animate__animated animate__fadeIn">
        <template #header>
            <img style="max-height: 400px; object-fit: cover;" class="br-5" alt="Foto del animalito" :src=" APIFiles + props.pet.photoPath" />
        </template>
        <template #title> {{ props.pet.fullname ? props.pet.fullname : 'Nombre desconocido' }} </template>
        <template #subtitle> Edad: {{ props.pet.age ? props.pet.age + ' años' : 'Desconocida' }} </template>
        <template #content>
          <p>{{ props.pet.address }}</p>
        </template>
        <template #footer>
            <div class="d-flex just-content-right">
                <Button label="Detalles" />
            </div>

        </template>
    </Card>
</template>

<script setup>
import { defineProps } from "vue";
import { APIFiles } from "@/helpers/url";


const props = defineProps({
    pet: Object
})




useHead({
    title: 'Mascotas'
})


</script>