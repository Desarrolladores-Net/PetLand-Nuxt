import Axios from "axios";
import { CreateInterfaceRM, QuestionItem } from "@/interfaces/question/interface";
import { QuestionBaseUrl } from "~~/helpers/url";

export function CreateQuestionRequest(dto: CreateInterfaceRM): Promise<QuestionItem> {
    return Axios.post(QuestionBaseUrl, dto).then(response => response.data)
}

export function GetQuestionRequest(formId: String): Promise<Array<QuestionItem>> {
    return Axios.get(QuestionBaseUrl + '/' + formId).then(response => response.data)
}

export function DeleteQuestionRequest(id: String): Promise<QuestionItem> {
    return Axios.delete(QuestionBaseUrl + '/' + id).then(response => response.data)
}

export function EditQuestionRequest(dto: CreateInterfaceRM): Promise<QuestionItem> {

    return Axios.put(QuestionBaseUrl, dto).then(response => response.data)

}

export function GetStringTypeQuestion(type: number): String {
    if (type == 0) {
        return 'Respuesta simple'
    }
    else if (type == 1) {
        return 'Respuesta larga'
    }
    else {
        return 'Sí o no'
    }
}