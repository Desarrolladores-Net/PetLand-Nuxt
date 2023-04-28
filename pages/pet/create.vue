<template>
    <div class="p-20">
        <Card class="animate__animated animate__fadeInLeft">
            <template #title>
                <h4 class="m-0 text-main-color">Reporte</h4>
            </template>
            <template #subtitle>Con los reportes puedes ayudar a otras personas a encontrar mascotas que pueden ser
                adoptadas.</template>
            <template #content>
                <span class="p-float-label">
                    <InputText v-model="Model.name" class="p-inputtext-sm" focusable style="width: 100%;" />
                    <label>Nombre de la mascota</label>
                </span>
                <span class="p-float-label mt-10">
                    <InputText v-model="Model.age" type="number" class="p-inputtext-sm" focusable style="width: 100%;" />
                    <label>Edad</label>
                </span>
                <span class="p-float-label mt-10">
                    <Textarea v-model="Model.description" rows="5" style="width: 100%;" />
                    <label>Descripción</label>
                </span>
                <div class="p-float-label mt-10" style="width: 100%;">
                    <Dropdown v-model="Model.province" inputId="dd-city" :options="getProvinces()" optionLabel="name"
                        placeholder="Seleccione una provincia" class="w-full" />
                    <label for="dd-city">Provincia</label>
                </div>
                <div class="p-float-label mt-10" style="width: 100%;">
                    <Dropdown v-model="Model.municipality" input-class="full-width" inputId="dd-city"
                        :options="getMunicipality(Model.province.name)" optionLabel="name"
                        placeholder="Seleccione un municipio" class="w-full" />
                    <label for="dd-city">Municipio</label>
                </div>
                <span class="p-float-label mt-10">
                    <InputText v-model="Model.streetName" class="p-inputtext-sm" focusable style="width: 100%;" />
                    <label>Nombre de la calle y entrecalles</label>
                </span>
                <FileUpload @select="loadFile" class="mt-10" @clear="clearImage()" mode="basic" choose-label="Subir foto"
                    name="report" la :multiple="false" accept="image/*" :maxFileSize="1000000"></FileUpload>

                <img v-if="Model.file" class="mt-10" style="border-radius: 5px;" :alt="Model.file.name" height="200"
                    :src="Model.file.objectURL" />


            </template>

            <template #footer>
                <div class="d-flex just-content-right">
                    <Button class="mr-10">
                        Guardar
                    </Button>
                    <NuxtLink class="none-decoration" to="/pet">
                        <Button text>
                            Cancelar
                        </Button>
                    </NuxtLink>
                </div>

            </template>
        </Card>
        <Toast position="bottom-right"></Toast>
    </div>
</template>

<script setup>
import { getMunicipality, getProvinces } from "@/services/pet/address";




useHead({
    title: 'Crear reporte'
})

const Model = ref({ province: '', municipality: '', file: '', name: '', age: '', description: '', province: '', municipality: '', streetName: '' })

const loadFile = (e) => {

    Model.value.file = e.files[0]
}

const clearImage = () => {
    Model.value.file = ''
}



</script>