export interface CreateApplicationRM{
    userId: String,
    petId: String,
    userResponse: Array<UserResponse>
}

export interface UserResponse{
    question: String,
    response: String
}

export interface Application {
    id:               string;
    userId:           string;
    petId:            string;
    date:             Date;
    applicationState: number;
    userResponse:     UserResponse;
}

export interface UpdateApplication {
    applicationId: string;
    state:         number;
}

