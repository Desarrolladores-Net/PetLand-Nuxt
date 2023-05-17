import Axios from "axios";
import { GetAllPets, SavePet } from "@/helpers/url";
import { CreatePet, CreatePetResponse, Pet  } from '../../interfaces/pet/interfaces';



export function GetPetsRequest(skip: number): Promise<Pet[]>
{
    return Axios.get(`${GetAllPets}?skip=${skip}`)
}

export function SavePetRequest(element: FormData): Promise<CreatePetResponse>
{
    return Axios.post(SavePet, element)
}