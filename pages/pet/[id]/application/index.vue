
<template>
    <div class="p-20">
        <Card class="animate__animated animate__fadeIn">
            <template #title>
                <h4 class="text-center text-main-color">Solicitud de adopción</h4>
            </template>
            <template #content>
                <div v-for="item in questions">
                    <div v-if="item.typeQuestion == 0">
                        <span class="p-float-label mt-10">
                            <InputText v-model="item.response" class="p-inputtext-sm" focusable style="width: 100%;" />
                            <label>{{ item.message }}</label>
                        </span>
                    </div>
                    <div v-else-if="item.typeQuestion == 1">
                        <span class="p-float-label mt-10">
                            <Textarea v-model="item.response" rows="5" style="width: 100%;" />
                            <label>{{ item.message }}</label>
                        </span>
                    </div>
                    <div v-else class="mt-10">
                        <p class="text-main-color">{{ item.message }}</p>
                        <div class="d-flex">
                            <div class="flex align-items-center mr-10">
                                <RadioButton v-model="item.response" name="pizza" :value="'Sí'" />
                                <label class="ml-2">Sí</label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton v-model="item.response" name="pizza" :value="'No'" />
                                <label class="ml-2">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="d-flex just-content-right">
                    <NuxtLink class="none-decoration" to="/pet">
                        <Button class="mr-10" text>
                            Cancelar
                        </Button>
                    </NuxtLink>
                    <Button v-if="!loading" @click="sendApplication()">
                        Enviar solicitud
                    </Button>
                    <ProgressSpinner v-else style="height: 30px" strokeWidth="8" fill="var(--surface-ground)"
                        animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                </div>

            </template>

        </Card>
    </div>
</template>

<script setup>
import { GetFormActive } from '../../../../services/question/QuestionService';
import store from "@/store/index";
import { CreateApplicationRequest } from '../../../../services/application/applicationRequest';
import { useToast } from "primevue/usetoast";

const { data: questions, pending } = await useAsyncData('getQuestions',
    async () => {

        const response = await GetFormActive()
        const completedModel = []
        response.forEach(item => {
            completedModel.push({ ...item, response: '' })
        })

        return completedModel;

    })

const route = useRoute()
const router = useRouter()
const toast = useToast()

const loading = ref(false)


const sendApplication = async () => {

    const dto = {
        userId: store.state.user.id,
        petId: route.params.id,
        userResponse: []
    }

    questions.value.forEach(item => {
        dto.userResponse.push({ question: item.message, response: item.response })
    })

    const response = await CreateApplicationRequest(dto)

    if (response) {
        toast.add({ severity: 'info', summary: 'Solicitud enviada', detail: 'El administrador se pondrá en contacto con usted.', life: 4000 });
        router.push('/pet')
    }

}




useHead({
    title: 'Aplicación'
})
</script>