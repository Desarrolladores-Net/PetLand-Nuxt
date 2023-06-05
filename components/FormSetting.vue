<template>
    <DataTable :value="forms.data" autoLayout class="p-datatable-sm" tableStyle="min-width: 50rem">
        <Column field="name" header="Nombre"></Column>
        <Column field="active" header="Activo">
            <template #body="{ data, index }">
                <Button :label="data.active ? 'Sí' : 'No'" @click="change(index)" severity="secondary" text></Button>
            </template>
        </Column>
        <Column header="Acciones">
            <template #body="{ data }">
                <Button text icon="pi pi-pencil" @click="editNameDialog(data.name, data.id)"></Button>
                <Button text icon="pi pi-trash" severity="danger"></Button>
            </template>
        </Column>
    </DataTable>
    <Toast position="bottom-right"></Toast>
    <Dialog v-model:visible="editDialog" modal header="Editar nombre del formulario" :style="{ width: '70vh' }">
        <div class="p-20">
            <span class="p-float-label">
                <InputText class="p-inputtext-sm" v-model="editFormModel.name" focusable style="width: 100%;" />
                <label for="username">Nuevo nombre</label>
            </span>
        </div>
        <div class="d-flex just-content-right">
            <Button v-if="!loading.edit" label="Guardar" @click="updateFormRequest()" class="mr-10"></Button>
            <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            <Button label="Cancelar" text severity="secondary" @click="closeEditDialog()"></Button>
        </div>
    </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { GetFormRequest } from "@/services/setting/SettingServices";
import { ActiveFormRequest } from '@/services/setting/SettingServices';
import { useToast } from "primevue/usetoast";
import { UpdateFormRequest } from '../services/setting/SettingServices';


const oldId = ref()
const { data: forms } = await useAsyncData('forms', () => GetFormRequest())
const toast = useToast()
const editFormModel = ref({ id: '', name: '' })
const editDialog = ref(false)
const loading = ref({ edit: false, delete: false })

const closeEditDialog = () => {
    editDialog.value = false
    editFormModel.value.name = ''
    editFormModel.value.id = ''
}

const activeForm = async (item) => {
    const response = await ActiveFormRequest(item)
    toast.add({ severity: 'info', summary: 'Formulario activo', detail: 'Se actualizó el formulario.', life: 4000 });
}

const editNameDialog = (name, id) => {

    editFormModel.value.name = name
    editFormModel.value.id = id
    editDialog.value = true
}


const change = (index) => {

    forms.value.data.forEach(item => {
        if (item.active) {
            oldId.value = item.id
        }
    })

    forms.value.data.forEach(item => item.active = false)

    forms.value.data[index].active = !forms.value.data[index].active
    activeForm({ oldId: oldId.value, id: forms.value.data[index].id, active: forms.value.data[index].active })
}

const updateFormRequest = async () => {
    loading.value.edit = true
    const dto = {
        id: editFormModel.value.id,
        name: editFormModel.value.name
    }

    const response = await UpdateFormRequest(dto)

    closeEditDialog()
    forms.value.data.forEach(item => {
        if (item.id == dto.id) {
            item.name = dto.name
        }
    })
    toast.add({ severity: 'info', summary: 'Formulario actualizado', detail: 'Se ha cambiado el nombre del formulario.', life: 4000 });
    loading.value.edit = false

}



</script>