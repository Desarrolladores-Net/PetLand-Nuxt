import Axios from "axios";
import { BasePetUrl, GetAllPets, SavePet } from "@/helpers/url";
import { CreatePet, CreatePetResponse, Pet } from '../../interfaces/pet/interfaces';
import store from "~~/store";


export function GetPetsRequest(skip: number, province: string, municipality: string): Promise<Pet[]> {
    return Axios.get(`${GetAllPets}?skip=${skip}&province=${province}&municipality=${municipality}`)
}

export function SavePetRequest(element: FormData): Promise<CreatePetResponse> {
    return Axios.post(SavePet, element)
}

export function GetPetProfile(userId: String, petId: String): Promise<Pet> {
    
        return Axios.get(`${BasePetUrl}/${userId}/${petId}`).then(response => response.data)

}