<template>
    <DataTable v-if="data" :value="data.applications"  class="p-datatable-sm max-height-300 scroll">
        <Column field="date" header="Fecha de la solicitud">
            <template #body="{data}">
                {{ new Date(data.date).toLocaleDateString() }} {{ new Date(data.date).toLocaleTimeString() }}
            </template>
        </Column>

        <Column header="Acciones">
            <template #body="{ data }">
                <Button text v-tooltip.bottom="'Ver preguntas'" icon="pi pi-question" @click="$router.push(`/setting/${data.id}/questions`)"></Button>
                <Button text v-tooltip.bottom="'Editar formulario'" icon="pi pi-pencil" @click="editNameDialog(data.name, data.id)" severity="success"></Button>
                <Button text v-tooltip.bottom="'Eliminar formulario'" icon="pi pi-trash" @click="confirmDelete(data.id)" severity="danger"></Button>
            </template>
        </Column>
    </DataTable>
</template>

<script setup>
import { GetApplicationRequest } from '../services/application/applicationRequest';

const getModel = useState('getApplicationModel', () => ({page: 0, state: 0}))
const {data} = await useAsyncData('getApplications', () => GetApplicationRequest(getModel.value.page, getModel.value.state))

</script>