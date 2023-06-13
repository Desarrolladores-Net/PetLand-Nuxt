export interface Pet {
    id:           string;
    fullname:     string;
    age:          number;
    address:      Address;
    description:  string;
    wasAdopted:   boolean;
    adoptionDate: null;
    photoPath:    string;
}

export interface Address {
    id:          string;
    petId:       string;
    province:    string;
    municipe:    string;
    streetName:  string;
    moreDetails: string;
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