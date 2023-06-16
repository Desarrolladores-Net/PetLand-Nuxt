import Axios from "axios";
import { AdoptionBaseUrl } from "~~/helpers/url";
import { ErrorRequest } from "~~/interfaces/error";
import { CreateApplicationRM, Application, UpdateApplication } from '../../interfaces/application/interface';


export function CreateApplicationRequest(model: CreateApplicationRM): Promise<CreateApplicationRM> | Promise<ErrorRequest> {

    return Axios.post(AdoptionBaseUrl, model).then(response => response.data).catch(error => error.response.data)
}

export function GetApplicationRequest(skip: Number, applicationState: Number): Promise<Array<Application>> {
    return Axios.get(`${AdoptionBaseUrl}/${skip}/${applicationState}`).then(response => response.data)
}

export function GetUserResponses(applicationId: String): Promise<Application> {

    return Axios.get(`${AdoptionBaseUrl}/${applicationId}`).then(response => response.data);

}

export function UpdateApplicationRequest(dto: UpdateApplication): Promise<Application> {

    return Axios.put(AdoptionBaseUrl, dto).then(response => response.data)

}