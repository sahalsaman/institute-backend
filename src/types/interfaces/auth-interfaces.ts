
export interface IAuth {
    _id ?: string,
    name?:string,
    email ?: string,
    mobile_no?:string,
    password?:string,
    role?:string,
    profile_id?:string
    disabled?:boolean,
    updatedAt?:Date,
    createdAt?:Date
}