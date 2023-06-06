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

            </template>
            <template #footer>

            </template>
        </Card>
    </div>
    <Dialog v-model:visible="createDialog" modal header="Crear pregunta" :style="{ width: '90vh' }">
        <div class="p-20">
            <span class="p-float-label">
                <InputText class="p-inputtext-sm" v-model="createQuestionModel.message" focusable style="width: 100%;" />
                <label for="username">Pregunta</label>
            </span>
            <div class="p-float-label mt-10" style="width: 100%;">
                <Dropdown v-model="createQuestionModel.typeQuestion" input-class="full-width" inputId="dd-city"
                    :options="[{name:'Respuesta simple', value: 0}, {name:'Respuesta larga', value: 1}, {name:'Sí o no', value: 2}]" optionLabel="name" placeholder="Seleccione el tipo de pregunta"
                    class="w-full" />
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
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { CreateFormRequest } from '../../../../services/setting/SettingServices';
import { CreateQuestionRequest } from '../../../../services/question/QuestionService';

const createDialog = ref(false)
const createQuestionModel = ref({ message: '', typeQuestion: {name: '', value: ''} })
const loading = ref({create: false})
const route = useRoute()

const createQuestionRequest = async () => {
    loading.value.create = true
    
    const dto = {
        formId: route.params.id,
        message: createQuestionModel.value.message,
        typeQuestion: createQuestionModel.value.typeQuestion.value
    }

    const response = await CreateQuestionRequest(dto)
    loading.value = false

    createQuestionModel.value = { message: '', typeQuestion: {name: '', value: ''} }
    createDialog.value = false

}

const closeCreateDialog = () => {
    createDialog.value = false
    createQuestionModel.value.typeQuestion = ''
    createQuestionModel.value.message = ' '
}

useHead({
    title: 'Preguntas'
})
</script>