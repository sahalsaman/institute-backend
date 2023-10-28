
export interface IAuth {
    _id ?: string,
    profile_id?:string,
    name?: string,
    mobile_no?: string,
    email ?: string,
    password?:string,
    role?:string,
    disabled?:boolean,
    updatedAt?:Date,
    createdAt?:Date
}

export interface IStudent {
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

export interface IAdmin {
    name?: string,
    email?: string,
    mobile_no?: string,
    img?: string,
    address?: string,
    remark?: string,
    role?: string,
    disabled?: boolean,
    created?:Date,
    updated?:Date,
}

export interface Iexam{
    _id?: string,
    name?:string,
    subjects?:[],
    remark?:string,
    disabled?:boolean,
    disableReason?:string,
    created?:Date,
    updated?:Date,
}

export interface Iresult{
    _id?: string,
    student_name?:string,
    student_id?:string,
    subjects?:[],
    remark?:string,
    disabled?:boolean,
    disableReason?:string,
    created?:Date,
    updated?:Date,
}

export interface IToken{
    user?: string,
    role?: string,
    token?: string,
}

export interface ITokenPayload{
    user?: string,
    role?: string,
    token?: string,
}