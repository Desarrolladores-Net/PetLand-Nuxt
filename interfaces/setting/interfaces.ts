export interface FormItem{
    id: String,
    name: String,
    active: Boolean
}

export interface GetFormResponse{
    data: Array<FormItem>
    count: Number
}

export interface ActiveFormRequestModel{
    id: String,
    oldId: String,
    active: Boolean
}

export interface UpdateFormRequest{
    id: String,
    name: String
}


export interface UpdateFormResponse{
    id: String,
    name: String
}

