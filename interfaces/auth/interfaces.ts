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

export interface Pet{
    fullName: String,
    age: Number,
    address: String,
    description: String,
    wasAdopted: Boolean,
    date: Date
}

