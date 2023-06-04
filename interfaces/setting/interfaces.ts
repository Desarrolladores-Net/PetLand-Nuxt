export interface FormItem{
    id: String,
    name: String,
    active: Boolean
}

export interface GetFormResponse{
    data: Array<FormItem>
    count: Number
}

