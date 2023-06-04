import Axios from "axios";
import { FormBaseUrl } from "~~/helpers/url";
import { GetFormResponse } from "~~/interfaces/setting/interfaces";


export function GetFormRequest() : Promise<GetFormResponse>
{
    return Axios.get(FormBaseUrl).then(response => response.data)
}