export interface RegisterDTO{
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface RegisterResponse{
    fullname: string;
    email: string;
    phone: string;
    token: string;
}


