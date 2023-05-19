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
                <span class="p-float-label mt-10">
                    <Textarea v-model="Model.moreDetails" rows="5" style="width: 100%;" />
                    <label>Más detalles</label>
                </span>
                <FileUpload @select="loadFile" class="mt-10" @clear="clearImage()" mode="basic" choose-label="Subir foto"
                    name="report" la :multiple="false" accept="image/*" :maxFileSize="10000000"></FileUpload>

                <img v-if="Model.file" class="mt-10" style="border-radius: 5px;" :alt="Model.file.name" height="200"
                    :src="Model.file.objectURL" />


            </template>

            <template #footer>
                <div class="d-flex just-content-right">
                    <Button @click="savePet()" class="mr-10">
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
import { SavePet } from '@/helpers/url';
import { SavePetRequest } from '../../services/pet/petRequest';
import store from '@/store/index';
import Axios from "axios";
import { useRouter } from "vue-router";


useHead({
    title: 'Crear reporte'
})

const router = useRouter()
const Model = ref({ province: '', municipality: '', file: '', name: '', age: '', description: '', province: '', municipality: '', streetName: '', moreDetails: '' })

const loadFile = (e) => {

    Model.value.file = e.files[0]
}

const clearImage = () => {
    Model.value.file = ''
}

const savePet = () => {

   const form = new FormData()
   form.append('UserId', store.state.user.id)
   form.append('Fullname', Model.value.name)
   form.append('Age', Model.value.age)
   form.append('Description', Model.value.description)
   form.append('Province', Model.value.province.name)
   form.append('Municipe', Model.value.municipality.name)
   form.append('StreetName', Model.value.streetName)
   form.append('MoreDetails', Model.value.moreDetails)
   form.append('Photo', Model.value.file)
    
    SavePetRequest(form).then(response => {
        router.push('/pet')
    }).catch(error => console.log(error))
}


</script>