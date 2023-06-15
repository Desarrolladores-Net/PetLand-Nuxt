<template>
    <DataTable v-if="data" :value="data.applications" class="p-datatable-sm max-height-300 scroll">
        <Column field="date" header="Fecha de la solicitud">
            <template #body="{ data }">
                {{ new Date(data.date).toLocaleDateString() }} {{ new Date(data.date).toLocaleTimeString() }}
            </template>
        </Column>
        <Column field="applicationState" header="Estado">
            <template #body="{ data }">
                {{ getState(data.applicationState
                ) }}
            </template>
        </Column>

        <Column header="Acciones">
            <template #body="{ data }">
                <Button text v-tooltip.bottom="'Ver solicitud'" icon="pi pi-eye"
                    @click="$router.push(`/setting/${data.petId}/${data.id}/response`)"></Button>
            </template>
        </Column>
    </DataTable>
</template>

<script setup>
import { GetApplicationRequest } from '../services/application/applicationRequest';

const getModel = useState('getApplicationModel', () => ({ page: 0, state: 0 }))
const { data } = await useAsyncData('getApplications', () => GetApplicationRequest(getModel.value.page, getModel.value.state))

const getState = state => {
    if (state == 0) {
        return 'Pendiente'
    }
    else if(state == 1)
    {
        return 'Negada'
    }
    else
    {
        return 'Aceptada'
    }
}

</script>