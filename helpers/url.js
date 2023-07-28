const APIDomain = (process.env.NODE_ENV === "development") ? 'https://localhost:7170/api/' : 'http://briansoftfactory-001-site1.atempurl.com/api/';
export const APIFiles = (process.env.NODE_ENV === "development") ? 'https://localhost:7170' : 'http://briansoftfactory-001-site1.atempurl.com/';


//User
export const  RegisterUrl = `${APIDomain}user`
export const  LoginUrl = `${APIDomain}user/login`
export const  GetAllUserUrl = `${APIDomain}user/all`

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