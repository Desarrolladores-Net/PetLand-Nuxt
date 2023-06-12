<template>
<h1>Perfil del animal</h1>
<Button @click="$router.push(`/pet/${$route.params.id}/application`)">Adoptar</Button>
</template>

<script setup>
useHead({
    title: 'Reporte'
})
</script>