import Axios from "axios";
import { FormActiveUrl, FormBaseUrl } from "~~/helpers/url";
import { ActiveFormRequestModel, GetFormResponse, UpdateFormRequest } from "~~/interfaces/setting/interfaces";
import { FormItem, UpdateFormResponse } from '../../interfaces/setting/interfaces';


export function GetFormRequest() : Promise<GetFormResponse>
{
    return Axios.get(FormBaseUrl).then(response => response.data)
}

export function ActiveFormRequest(data: ActiveFormRequestModel) : Promise<FormItem>
{
    return Axios.put(FormActiveUrl, data).then(response => response.data)
}

export function UpdateFormRequest(data: UpdateFormRequest) : Promise<UpdateFormResponse>
{
    return Axios.put(FormBaseUrl, data).then(response => response.data)
}