<template>
    <DataTable :value="forms.data" class="p-datatable-s">
        <Column field="name" header="Nombre"></Column>
        <Column field="active" header="Activo">
            <template #body="{ data, index }">
                <Button :label="data.active ? 'Sí' : 'No'" @click="change(index)" severity="secondary" text></Button>
            </template>
        </Column>
    </DataTable>
</template>

<script setup>
import { ref } from "vue";
import { GetFormRequest } from "@/services/setting/SettingServices";

const oldId = ref()
const { data: forms } = await useAsyncData('forms', () => GetFormRequest())


const change = (index) => {

    forms.value.data.forEach(item => {
        if (item.active) {
            oldId.value = item.id
        }
    })

    forms.value.data.forEach(item => item.active = false)

    forms.value.data[index].active = !forms.value.data[index].active
}




</script>