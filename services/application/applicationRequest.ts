import Axios from "axios";
import { AdoptionBaseUrl } from "~~/helpers/url";
import { ErrorRequest } from "~~/interfaces/error";
import { CreateApplicationRM } from '../../interfaces/application/interface';


export function CreateApplicationRequest(model: CreateApplicationRM): Promise<CreateApplicationRM> | Promise<ErrorRequest>
 {

    return Axios.post(AdoptionBaseUrl, model).then(response => response.data).catch(error => error.response.data)


}