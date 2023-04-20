import Axios from "axios";
import { RegisterDTO, RegisterResponse } from "@/interfaces/auth/interfaces";
import { RegisterUrl } from "@/helpers/url"


export const registerRequest = (dto: RegisterDTO): Promise<RegisterResponse> => {

    return Axios.post<RegisterDTO, RegisterResponse>(RegisterUrl, dto)

}