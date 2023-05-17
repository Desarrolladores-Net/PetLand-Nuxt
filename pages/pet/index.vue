<template>
    
    <div class="grid p-20">
        <div class="col-12 lg:col-3 md:col-6 " v-for="item in data">
            <PetCard :pet="item"></PetCard>
        </div>
    </div>

    <NuxtLink class="none-decoration" to="/pet/create">
        <Button color="primary" class="p-fixed" style="bottom: 0; right: 0; margin: 50px;" icon="pi pi-plus" raised rounded
            aria-label="Filter" />
    </NuxtLink>
</template>

<script setup>
import { GetPetsRequest } from "@/services/pet/petRequest";
import { GetAllPets } from "@/helpers/url";

const {data} = await useAsyncData(() => GetPetsRequest(0) /* $fetch(`${GetAllPets}/?skip=0`)*/)


</script>