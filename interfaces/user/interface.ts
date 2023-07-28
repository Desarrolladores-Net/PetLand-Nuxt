export interface GetAllUserResponse{
    quanty: number
    users: UserItem[]
}

export interface UserItem{
    ban: boolean,
    email: String,
    fullname: String,
    id: String,
    phone: String,
    role: String
}