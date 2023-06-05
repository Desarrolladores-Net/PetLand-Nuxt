<template>
    <DataTable :value="forms.data" class="p-datatable-s">
        <Column field="name" header="Nombre"></Column>
        <Column field="active" header="Activo">
            <template #body="{ data, index }">
                <Button :label="data.active ? 'Sí' : 'No'" @click="change(index)" severity="secondary" text></Button>
            </template>
        </Column>
        <Column header="Acciones">
            <template #body="{ data }">
               <Button text icon="pi pi-pencil" @click="editNameDialog(data.name)"></Button>
               <Button text icon="pi pi-trash" severity="danger"></Button>
            </template>
        </Column>
    </DataTable>
    <Toast position="bottom-right"></Toast>
    <Dialog v-model:visible="editDialog" modal header="Editar nombre del formulario" :style="{ width: '50vw' }">
        
    </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { GetFormRequest } from "@/services/setting/SettingServices";
import { ActiveFormRequest } from '@/services/setting/SettingServices';
import { useToast } from "primevue/usetoast";


const oldId = ref()
const { data: forms } = await useAsyncData('forms', () => GetFormRequest())
const toast = useToast()
const nameEdit = ref('')
const editDialog = ref(false)

const activeForm = async (item) => {
    const response = await ActiveFormRequest(item)
    toast.add({ severity: 'info', summary: 'Formulario activo', detail: 'Se actualizó el formulario.', life: 4000 });
}

const editNameDialog = (name) => {
    console.log(name)
    nameEdit.value = name
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
    activeForm({oldId: oldId.value, id: forms.value.data[index].id, active: forms.value.data[index].active})
}




</script>