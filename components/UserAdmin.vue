<template>
    <p v-if="data" style="margin-left: 8px;" class="text-main-color"><i class="pi pi-user mr-2"></i> Total de usuarios registrados: {{ data.quanty }}</p>
    <DataTable v-if="data" :value="data.users" class="p-datatable-sm max-height-300 scroll">
        <Column field="fullname" header="Nombre"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Teléfono"></Column>
        <Column field="role" header="Rol"></Column>
        <Column header="Ban">
            <template #body="{ data }">
                {{ data.ban ? 'Sí' : 'No' }}
            </template>
        </Column>
        <Column header="Acciones">
            <template #body="{ data }">
                <Button text v-tooltip.bottom="'Ver perfil'" icon="pi pi-eye" @click="$router.push(`/user/${data.id}`)"></Button>
             </template>
        </Column>
    </DataTable>
    <div v-else>
        <h1 class="text-main-color text-center">No hay usuarios</h1>
    </div>
    <Paginator v-model:first="page" @update:first="requestAll()" v-if="data" :rows="10" :totalRecords="data.quanty"></Paginator>

</template>

<script setup>
import { GetAllUserUrl } from '~~/helpers/url';
import { GetAllUsersRequest } from '../services/user/UserServices';

const page = useState('pagePet', () => 0)

const requestAll = async () => {
    const {data: values} = await GetAllUsersRequest(page.value, 10)
    data.value = values
}

const { data, pending } = await useAsyncData('pets',
    () => $fetch(GetAllUserUrl + '/?skip=0&take=10'))


</script>