const APIDomain = (process.env.NODE_ENV === "development") ? 'https://localhost:7170/api/' : 'https://petland-back.onrender.com/';
export const APIFiles = (process.env.NODE_ENV === "development") ? 'https://localhost:7170' : 'https://petland-back.onrender.com/'


//User
export const  RegisterUrl = `${APIDomain}user`

//Pet
export const GetAllPets = `${APIDomain}pet/all`
export const SavePet = `${APIDomain}pet`
export const BasePetUrl = `${APIDomain}pet`


//Form
export const FormBaseUrl = `${APIDomain}form`
export const FormActiveUrl = `${APIDomain}form/active`

//Quetion
export const QuestionBaseUrl = `${APIDomain}question`

//Adoption
export const AdoptionBaseUrl = `${APIDomain}adoption`