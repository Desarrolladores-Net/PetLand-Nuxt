import Axios from "axios";
import { AdoptionBaseUrl } from "~~/helpers/url";
import { CreateApplicationRM } from '../../interfaces/application/interface';


export function CreateApplicationRequest(model: CreateApplicationRM): Promise<CreateApplicationRM> {

    return Axios.post(AdoptionBaseUrl, model).then(response => response.data)


}