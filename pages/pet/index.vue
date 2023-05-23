<template>
    <div class="p-20">
        <Card class="animate__animated animate__fadeIn">
            <template #content>
                <div class="grid">
                    <div class="col-12 lg:col-6 md:col-6">
                        <div class="p-float-label" style="width: 100%;">
                            <Dropdown v-model="filter.province" inputId="dd-city" :options="getProvinces()"
                                optionLabel="name" placeholder="Seleccione una provincia" class="w-full mr-10" />
                            <label for="dd-city">Provincia</label>
                        </div>
                    </div>
                    <div class="col-12 lg:col-6 md:col-6">
                        <div class="p-float-label" style="width: 100%;">
                            <Dropdown v-model="filter.municipality" input-class="full-width" inputId="dd-city"
                                :options="getMunicipality(filter.province.name)" optionLabel="name"
                                placeholder="Seleccione un municipio" class="w-full" />
                            <label for="dd-city">Municipio</label>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="d-flex just-content-right">
                    <Button v-if="!loading.search" label="Buscar" @click="requestAll()" />
                    <ProgressSpinner v-else style="height: 40px" strokeWidth="8" fill="var(--surface-ground)"
                        animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                </div>
            </template>
        </Card>

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
import { getProvinces, getMunicipality } from "~~/services/pet/address";

const filter = useState('filter', () => ({ province: {name:'Todas'}, municipality: {name:'Todos' }}))
const skip = useState('skipAll', () => 0)
const loading = useState('loadingPetIndex', () => ({search: false}) )

const { data, pending } = await useLazyAsyncData('pets', async () => {

    debugger
    const { data } = await GetPetsRequest(skip.value, filter.value.province.name, filter.value.municipality.name)
    console.log(data)
    return data
})

const requestAll = async () => {
    loading.value.search = true
    const {data: values} = await GetPetsRequest(skip.value, filter.value.province.name, filter.value.municipality.name)
    data.value = values
    loading.value.search = false
}


useHead({
    title: 'Adopción'
})


</script>