<template>
    <div class="p-float-label mt-10" style="width: 100%;">
        <Dropdown v-model="getModel.state" inputId="dd-state"
            :options="[{ name: 'Pendiente', value: 0 }, { name: 'Negada', value: 1 }, { name: 'Aceptada', value: 2 }]"
            optionLabel="name" @update:model-value="refresh()" placeholder="Seleccione el estado" />
        <label for="dd-city">Estado</label>
    </div>
    <div v-if="data">
        <DataTable v-if="data.applications.length > 0" :value="data.applications" class="p-datatable-sm max-height-300 scroll">
            <Column field="date" header="Fecha de la solicitud">
                <template #body="{ data }">
                    {{ new Date(data.date).toLocaleDateString() }} - {{ new Date(data.date).toLocaleTimeString('es-ES', {
                        hour12:
                            true
                    }) }}
                </template>
            </Column>
            <Column field="applicationState" header="Estado">
                <template #body="{ data }">
                    <Button text severity="secondary" @click="openChangeStateDialog(data.id, data.applicationState)" class="pl-0">
                        {{ getState(data.applicationState
                        ) }}
                    </Button>
                </template>
            </Column>

            <Column header="Acciones">
                <template #body="{ data }">
                    <Button text v-tooltip.bottom="'Ver solicitud'" icon="pi pi-eye"
                        @click="$router.push(`/setting/${data.petId}/${data.id}/response`)"></Button>
                </template>
            </Column>
        </DataTable>
    <h3 v-else class="text-center text-main-color">No hay solicitudes con el estado de {{ getModel.state.name }}</h3>
    <Paginator v-model:first="getModel.page" @update:first="refresh()" v-if="data" :rows="1" :totalRecords="data.quanty"></Paginator>
    </div>
    <h3 v-else class="text-center text-main-color">No se pudo establecer conexión con el servidor</h3>

    <Dialog v-model:visible="changeStateDialog" modal header="Cambiar estado" :style="{ width: '90vh' }">
        <div class="p-20">
            <div class="p-float-label mt-10" style="width: 100%;">
                <Dropdown v-model="changeStateModel.state" input-class="full-width" inputId="dd-state"
                    :options="[{ name: 'Pendiente', value: 0 }, { name: 'Negada', value: 1 }, { name: 'Aceptada', value: 2 }]"
                    optionLabel="name" placeholder="Seleccione el estado" class="w-full" @update:model-value="refresh()" />
                <label for="dd-city">Estado</label>
            </div>
        </div>
        <div class="d-flex just-content-right">
            <Button label="Cancelar" class="mr-10" text severity="secondary" @click="changeStateDialog = false"></Button>
            <Button v-if="!loading" label="Cambiar" @click="changeStateRequest()" class="mr-10"></Button>
            <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </Dialog>
</template>

<script setup>
import { GetApplicationRequest, UpdateApplicationRequest } from '../services/application/applicationRequest';

const getModel = useState('getApplicationModel', () => ({ page: 0, state: { name: 'Pendiente', value: 0 } }))
const { data } = await useAsyncData('getApplications', () => GetApplicationRequest(getModel.value.page, getModel.value.state.value))
const changeStateDialog = ref(false)
const loading = ref(false)
const changeStateModel = ref({ id: '', state: { name: '', value: 0 } })


const openChangeStateDialog = (id, state) => {
    changeStateModel.value.id = id

    if (state == 0) {
        changeStateModel.value.state = { name: 'Pendiente', value: 0 }
    }
    else if (state == 1) {
        changeStateModel.value.state = { name: 'Negada', value: 1 }
    }
    else {
        changeStateModel.value.state = { name: 'Aceptada', value: 2 }
    }

    changeStateDialog.value = true
}

const changeStateRequest = async () => {
    loading.value = true

    const dto = {
        applicationId: changeStateModel.value.id,
        state: changeStateModel.value.state.value
    }

    const response = await UpdateApplicationRequest(dto)


    loading.value = false
    refresh()

}

const refresh = async () => {
    data.value = await GetApplicationRequest(getModel.value.page == 0 ? 0 : getModel.value.page * 10, getModel.value.state.value)
}

const getState = state => {
    if (state == 0) {
        return 'Pendiente'
    }
    else if (state == 1) {
        return 'Negada'
    }
    else {
        return 'Aceptada'
    }
}

</script>