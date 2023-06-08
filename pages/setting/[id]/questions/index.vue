<template>
    <div class="p-20">
        <Card class="animate__animated animate__fadeIn">
            <template #title>
                <h4 class="text-main-color text-center">Preguntas</h4>
                <div class="d-flex just-content-right">
                    <Button text severity="secondary" class="mr-10" @click="$router.back()">
                        Atrás
                    </Button>
                    <Button @click="createDialog = true">
                        Añadir pregunta
                    </Button>
                </div>
            </template>
            <template #content>
                <DataTable v-if="questions" :value="questions" class="p-datatable-sm max-height-300 scroll">
                    <Column field="message" header="Pregunta"></Column>
                    <Column field="typeQuestion" header="Tipo de pregunta">
                        <template #body="{ data, index }">
                            <p v-if="data.typeQuestion == 0">Respuesta simple</p>
                            <p v-else-if="data.typeQuestion == 1">Respuesta larga</p>
                            <p v-else>Sí o no</p>
                        </template>
                    </Column>
                    <Column header="Acciones">
                        <template #body="{ data }">
                            <Button text v-tooltip.bottom="'Editar pregunta'" icon="pi pi-pencil"
                               severity="success" @click="editQuestion({...data})"></Button>
                            <Button text v-tooltip.bottom="'Eliminar pregunta'" icon="pi pi-trash"
                                severity="danger" @click="confirmDelete(data.id)"></Button>
                        </template>
                    </Column>
                </DataTable>
                <div v-else>
                    <h1 class="text-main-color text-center">No hay preguntas en este formulario</h1>
                </div>
               
            </template>
            <template #footer>

            </template>
        </Card>
    </div>
    <ConfirmDialog></ConfirmDialog>
    <Toast position="bottom-right"></Toast>
    <Dialog v-model:visible="createDialog" modal header="Crear pregunta" :style="{ width: '90vh' }">
        <div class="p-20">
            <span class="p-float-label">
                <InputText class="p-inputtext-sm" v-model="createQuestionModel.message" focusable style="width: 100%;" />
                <label for="username">Pregunta</label>
            </span>
            <div class="p-float-label mt-10" style="width: 100%;">
                <Dropdown v-model="createQuestionModel.typeQuestion" input-class="full-width" inputId="dd-city"
                    :options="[{ name: 'Respuesta simple', value: 0 }, { name: 'Respuesta larga', value: 1 }, { name: 'Sí o no', value: 2 }]"
                    optionLabel="name" placeholder="Seleccione el tipo de pregunta" class="w-full" />
                <label for="dd-city">Tipo de pregunta</label>
            </div>
        </div>
        <div class="d-flex just-content-right">
            <Button label="Cancelar" class="mr-10" text severity="secondary" @click="closeCreateDialog()"></Button>
            <Button v-if="!loading.create" label="Guardar" @click="createQuestionRequest()" class="mr-10"></Button>
            <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </Dialog>
    <Dialog v-model:visible="editDialog" modal header="Editar pregunta" :style="{ width: '90vh' }">
        <div class="p-20">
            <span class="p-float-label">
                <InputText class="p-inputtext-sm" v-model="editQuestionModel.message" focusable style="width: 100%;" />
                <label for="username">Pregunta</label>
            </span>
            <div class="p-float-label mt-10" style="width: 100%;">
                <Dropdown v-model="editQuestionModel.typeQuestion" input-class="full-width" inputId="dd-city"
                    :options="[{ name: 'Respuesta simple', value: 0 }, { name: 'Respuesta larga', value: 1 }, { name: 'Sí o no', value: 2 }]"
                    optionLabel="name" placeholder="Seleccione el tipo de pregunta" class="w-full" />
                <label for="dd-city">Tipo de pregunta</label>
            </div>
        </div>
        <div class="d-flex just-content-right">
            <Button label="Cancelar" class="mr-10" text severity="secondary" @click="closeEditDialog()"></Button>
            <Button v-if="!loading.edit" label="Guardar" @click="editQuestionRequest()" class="mr-10"></Button>
            <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { CreateQuestionRequest, GetQuestionRequest, DeleteQuestionRequest, GetStringTypeQuestion, EditQuestionRequest } from '../../../../services/question/QuestionService';
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm()
const toast = useToast()
const createDialog = ref(false)
const createQuestionModel = ref({ message: '', typeQuestion: { name: '', value: '' } })
const editDialog = ref(false)
const editQuestionModel = ref()
const loading = ref({ create: false, edit: false })
const route = useRoute()
const { data: questions } = await useAsyncData('questions', () => GetQuestionRequest(route.params.id))

const createQuestionRequest = async () => {
    loading.value.create = true

    const dto = {
        formId: route.params.id,
        message: createQuestionModel.value.message,
        typeQuestion: createQuestionModel.value.typeQuestion.value
    }

    const response = await CreateQuestionRequest(dto)
    loading.value.create = false

    createQuestionModel.value = { message: '', typeQuestion: { name: '', value: '' } }
    createDialog.value = false
    questions.value = await GetQuestionRequest(route.params.id)
    toast.add({ severity: 'info', summary: 'Pregunta creada', detail: 'Ha guardado una pregunta en el sistema.', life: 4000 });
}

const editQuestionRequest = async () => {

    loading.value.edit = true

    const dto = {
        id: editQuestionModel.value.id,
        message: editQuestionModel.value.message,
        typeQuestion: editQuestionModel.value.typeQuestion.value
    }

    const response = await EditQuestionRequest(dto)

    questions.value = await GetQuestionRequest(route.params.id)

    loading.value.edit = false

    editDialog.value = false


}

const closeCreateDialog = () => {
    createDialog.value = false
    createQuestionModel.value.typeQuestion = ''
    createQuestionModel.value.message = ' '
}

const editQuestion = (data) => {
    
    const typeQuestion = {
        name: '',
        value: data.typeQuestion
    }

    editQuestionModel.value = unref(data)
    editQuestionModel.value.typeQuestion = typeQuestion

    editQuestionModel.value.typeQuestion.name = GetStringTypeQuestion(data.typeQuestion)
    editDialog.value = true
}

const closeEditDialog = () => {
    editQuestionModel.value = ''
    editDialog.value = false
}

const confirmDelete = (id) => {
    confirm.require({
        message: '¿Quieres borrar esta pregunta?',
        header: 'Confirmación',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Sí',
        rejectLabel: 'No',
        acceptClass: 'p-button-danger',
        accept: async () => {
            const response = await DeleteQuestionRequest(id)  
            questions.value = await GetQuestionRequest(route.params.id)
            toast.add({ severity: 'info', summary: 'Pregunta eliminada', detail: 'Esta pregunta se ha eliminado del sistema.', life: 3000 });
        }
    });
};

useHead({
    title: 'Preguntas'
})
</script>