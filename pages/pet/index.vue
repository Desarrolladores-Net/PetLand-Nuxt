<template>
    <div v-if="!pending" class="grid p-20">
        <div class="col-12 lg:col-3 md:col-6 " v-for="item in data">
            <PetCard :pet="item"></PetCard>
        </div>
    </div>
    <div v-else class="grid p-20">
        <div class="col-12 lg:col-3 md:col-6" v-for="i in 12">
            <SkeletonCard></SkeletonCard>
        </div>
    </div>
    

    <NuxtLink v-if="store.state.user" class="none-decoration" to="/pet/create">
        <Button color="primary" class="p-fixed" style="bottom: 0; right: 0; margin: 50px;" icon="pi pi-plus" raised rounded
            aria-label="Filter" />
    </NuxtLink>
</template>

<script setup>
import { onMounted } from "vue";
import { GetPetsRequest } from "@/services/pet/petRequest";
import { GetAllPets } from "@/helpers/url";
import store from "@/store/index";

const { data, pending } = await useLazyAsyncData('pets', async () => {

    const {data} = await GetPetsRequest(0)
    console.log(data)
    return data
})

useHead({
    title: 'Adopción'
})


</script>