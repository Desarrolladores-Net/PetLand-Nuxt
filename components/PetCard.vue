<template>
    <Card>
        <template #header>
            <img class="br-5" alt="user header" src="/img/auth.jpg" />
        </template>
        <template #title> Advanced Card </template>
        <template #subtitle> Card subtitle </template>
        <template #content>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
        </template>
    </Card>
</template>

<script setup>
import { defineProps } from "vue";

useHead({
    title: 'Mascotas'
})


</script>