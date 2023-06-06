import Axios from "axios";
import { CreateInterfaceRM, QuestionItem } from "@/interfaces/question/interface";
import { QuestionBaseUrl } from "~~/helpers/url";

export function CreateQuestionRequest(dto: CreateInterfaceRM) : Promise<QuestionItem>
{
    return Axios.post(QuestionBaseUrl, dto).then(response => response.data)
}

export function GreateQuestionRequest() : Promise<Array<QuestionItem>>
{
    return Axios.get(QuestionBaseUrl).then(response => response.data)
}
