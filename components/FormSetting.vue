<template>
    <div class="d-flex just-content-right mt-10">
        <Button label="Crear formulario" @click="createDialog = true"></Button>
    </div>
    <DataTable v-if="forms" :value="forms.data"  class="p-datatable-sm">
        <Column field="name" header="Nombre"></Column>
        <Column field="active" header="Activo">
            <template #body="{ data, index }">
                <Button :label="data.active ? 'Sí' : 'No'" @click="change(index)" severity="secondary" text></Button>
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
    <div v-else>
        <h1 class="text-main-color text-center">No hay formularios</h1>
    </div>
    <Toast position="bottom-right"></Toast>
    <Dialog v-model:visible="editDialog" modal header="Editar nombre del formulario" :style="{ width: '70vh' }">
        <div class="p-20">
            <span class="p-float-label">
                <InputText class="p-inputtext-sm" v-model="editFormModel.name" focusable style="width: 100%;" />
                <label for="username">Nuevo nombre</label>
            </span>
        </div>
        <div class="d-flex just-content-right">
            <Button label="Cancelar" text severity="secondary" @click="closeEditDialog()"></Button>
            <Button v-if="!loading.edit" label="Guardar" @click="updateFormRequest()" class="mr-10"></Button>
            <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </Dialog>
    <Dialog v-model:visible="createDialog" modal header="Crear formulario" :style="{ width: '70vh' }">
        <div class="p-20">
            <span class="p-float-label">
                <InputText class="p-inputtext-sm" v-model="createFormModel" focusable style="width: 100%;" />
                <label for="username">Nombre</label>
            </span>
        </div>
        <div class="d-flex just-content-right">
            <Button label="Cancelar" class="mr-10" text severity="secondary" @click="closeCreateDialog()"></Button>
            <Button v-if="!loading.edit" label="Guardar" @click="createFormRequest()" class="mr-10"></Button>
            <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </Dialog>
    
    <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { ref } from "vue";
import { GetFormRequest } from "@/services/setting/SettingServices";
import { ActiveFormRequest } from '@/services/setting/SettingServices';
import { useToast } from "primevue/usetoast";
import { UpdateFormRequest, DeleteFormRequest, CreateFormRequest } from '../services/setting/SettingServices';
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm()
const oldId = ref()
const { data: forms } = await useAsyncData('forms', () => GetFormRequest())
const toast = useToast()
const editFormModel = ref({ id: '', name: '' })
const createFormModel = ref('')
const editDialog = ref(false)
const createDialog = ref(false)
const loading = ref({ edit: false, delete: false })

const closeEditDialog = () => {
    editDialog.value = false
    editFormModel.value.name = ''
    editFormModel.value.id = ''
}

const closeCreateDialog = () => {
    createFormModel.value = ''
    createDialog.value = false
}

const confirmDelete = (id) => {
    confirm.require({
        message: '¿Desea borrar este formulario? Tenga en cuenta que sus preguntas también se borrarán.',
        header: 'Confirmación',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Sí',
        rejectLabel: 'No',
        acceptClass: 'p-button-danger',
        accept: async () => {
            const response = await DeleteFormRequest(id)
            
            forms.value = await GetFormRequest()

            toast.add({ severity: 'info', summary: 'Formulario eliminado', detail: 'El formulario se ha eliminado del sistema.', life: 3000 });
        }
    });
};

const activeForm = async (item) => {
    const response = await ActiveFormRequest(item)
    toast.add({ severity: 'info', summary: 'Formulario activo', detail: 'Se activó el formulario.', life: 4000 });
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

const createFormRequest = async () => {
    const dto = {
        name: createFormModel.value
    }

    const response = await CreateFormRequest(dto)

    forms.value = await GetFormRequest();

    createFormModel.value = ''
    createDialog.value = false

}


</script>