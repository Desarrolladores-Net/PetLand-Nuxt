<template>
    <div class="d-flex column" style="margin-top: 30px;">
        <div>
            <NuxtLink class="none-decoration" to="/">
                <Button style="width: 100%;" label="Inicio" text />
            </NuxtLink>
            <NuxtLink class="none-decoration" to="/pet">
                <Button class="mt-10" style="width: 100%;" label="Mascotas" text />
            </NuxtLink>
            <Button class="mt-10" style="width: 100%;" label="Veterinarios" text />
            <Button class="mt-10" style="width: 100%;" label="Donaciones" text />
            <NuxtLink v-if="store.state.user" class="none-decoration" to="/setting">
                <Button v-if="store.state.user.role == 'Admin'" class="mt-10" style="width: 100%;" label="Administración" text />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import store from "@/store/index";

</script>