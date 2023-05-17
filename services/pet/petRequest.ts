import { Pet } from "@/interfaces/pet/interfaces";
import Axios from "axios";
import { GetAllPets } from "@/helpers/url";

export function GetPetsRequest(skip: number): Promise<Pet[]>
{
    return Axios.get(`${GetAllPets}?skip=${skip}`)
}