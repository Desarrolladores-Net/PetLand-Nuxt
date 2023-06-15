<template>
    <div class="p-20">
        <Card class="animate__animated animate__fadeIn">
            <template #title>
                <h4 class="text-main-color text-center">Solicitud de adopción</h4>
            </template>
            <template #content>
                <PetProfile :petId="route.params.petId"></PetProfile>
                <v-divider></v-divider>
                <h4 class="text-main-color text-center">Respuestas del formulario</h4>
                <div v-for="item in data.userResponse">

                    <p class="text-main-color"><strong>{{ item.question }}</strong></p>
                    <p class="text-main-color">{{ item.response }}</p>
                </div>
                <div class="d-flex just-content-right">
                    <Button text severity="secondary" class="mr-10">Negar solicitud</Button>
                    <Button label="Aceptar solicitud"></Button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { GetUserResponses } from "../../../../../services/application/applicationRequest";

const route = useRoute()

const {data} = await useAsyncData('userResponses', () => GetUserResponses(route.params.applicationId))

useHead({
    title: 'Solicitud de adopción'
})

</script>