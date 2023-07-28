import Axios from "axios";
import { GetAllUserUrl } from "~~/helpers/url";
import { GetAllUserResponse } from "~~/interfaces/user/interface";


export function GetAllUsersRequest (skip: number, take: number): Promise<GetAllUserResponse> {
    return Axios.get(GetAllUserUrl+`?skip=${skip}&take=${take}`)
}