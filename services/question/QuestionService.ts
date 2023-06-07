import Axios from "axios";
import { CreateInterfaceRM, QuestionItem } from "@/interfaces/question/interface";
import { QuestionBaseUrl } from "~~/helpers/url";

export function CreateQuestionRequest(dto: CreateInterfaceRM) : Promise<QuestionItem>
{
    return Axios.post(QuestionBaseUrl, dto).then(response => response.data)
}

export function GetQuestionRequest(formId: String) : Promise<Array<QuestionItem>>
{
    return Axios.get(QuestionBaseUrl+'/'+formId).then(response => response.data)
}

export function DeleteQuestionRequest(id: String) : Promise<QuestionItem>
{
    return Axios.delete(QuestionBaseUrl+'/'+id).then(response => response.data)
}