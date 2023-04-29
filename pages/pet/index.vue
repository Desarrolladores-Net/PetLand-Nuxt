<template>
    
    <div class="grid p-20">
        <div class="col-12 lg:col-3 md:col-6 " v-for="item in test">
            <PetCard></PetCard>
        </div>
    </div>

    <NuxtLink class="none-decoration" to="/pet/create">
        <Button color="primary" class="p-fixed" style="bottom: 0; right: 0; margin: 50px;" icon="pi pi-plus" raised rounded
            aria-label="Filter" />
    </NuxtLink>
</template>

<script setup>


const test = [1,2,3,4,5,6,7,8,9]

</script>