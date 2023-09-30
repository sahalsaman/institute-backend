
export interface IAuth {
    _id ?: string,
    userId?:string,
    name?: string,
    mobile_no?: string,
    email ?: string,
    password?:string,
    role?:string,
    disabled?:boolean,
    updatedAt?:Date,
    createdAt?:Date
}

export interface IUser {
    _id ?: string,
    name?: string,
    email?: string,
    mobile_no?: string,
    img?: string,
    address?: string,
    date_of_birth?: Date,
    course?: string,
    remark?: string,
    role?: string,
    disabled?: boolean,
    created?:Date,
    updated?:Date,
}

export interface ITeacher {
    name?: string,
    email?: string,
    mobile_no?: string,
    img?: string,
    address?: string,
    date_of_birth?: string,
    course?: string,
    remark?: string,
    role?: string,
    disabled?: boolean,
    created?:Date,
    updated?:Date,
}