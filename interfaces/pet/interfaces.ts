export interface Pet {
    fullName: String,
    age: Number,
    address: String,
    description: String,
    wasAdopted: Boolean,
    date: Date
}

export interface CreatePet {
    province: String,
    municipality: String,
    file: File,
    name: String,
    age: Number,
    description: String,
    streetName: String,
    moreDetails: String
}

export interface CreatePetResponse {
    success: Boolean
}