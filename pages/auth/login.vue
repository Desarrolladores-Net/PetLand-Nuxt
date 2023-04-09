<template>
    <NuxtLayout name="auth">
        <div class="d-flex column">
            <Card style="width: 25em" class="animate__animated animate__fadeInLeft">
                <template #title>
                    <h4 class="m-0 text-main-color">Inicio de sesión</h4>
                </template>
                <template #subtitle> Bienvenido a PetLand </template>
                <template #content>
                    <span class="p-float-label">
                        <InputText focusable id="username" style="width: 100%;" />
                        <label for="username">Correo</label>
                    </span>
                    <span class="p-float-label mt-10">
                        <Password id="password" class="full-width" :inputStyle="{ width: '100%' }" :feedback="false"
                            toggleMask />
                        <label for="password">Contraseña</label>
                    </span>
                </template>
                <template #footer>
                    <div class="d-flex just-content-right">
                        <Button label="Iniciar sesión" />
                        <Button label="Cerrar" severity="secondary" style="margin-left: 0.5em" />
                    </div>
                    <div class="d-flex">
                        <Divider></Divider>
                        <p class="text-main-color">También</p>
                        <Divider></Divider>
                    </div>
                    <div>
                        <Button icon="pi pi-google" style="width: 100%;" text severity="danger">Iniciar sesión con
                            Google</Button>
                        <Button icon="pi pi-facebook" style="width: 100%;" text severity="primary">Iniciar sesión con
                            Facebook</Button>
                        <Button icon="pi pi-check" style="width: 100%;" text severity="info">Iniciar sesión con
                            Twitter</Button>
                    </div>
                </template>

            </Card>
            <NuxtLink class="mt-10 none-decoration" to="#">¿Olvidaste la contraseña?</NuxtLink>
        </div>
    </NuxtLayout>
</template>