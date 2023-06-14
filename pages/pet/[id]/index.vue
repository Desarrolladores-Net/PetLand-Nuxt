<template>
    <div class="p-20">
        <Card>
            <template #content>
                <PetProfile :petId="route.params.id"></PetProfile>
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
import { useRoute } from 'vue-router';

const route = useRoute()

useHead({
    title: 'Perfil'
})
</script>