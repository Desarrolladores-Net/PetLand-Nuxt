export interface CreateApplicationRM{
    userId: String,
    petId: String,
    userResponse: Array<UserResponse>
}

export interface UserResponse{
    question: String,
    response: String
}