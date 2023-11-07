
export interface IAuth {
    _id ?: string,
    profile_id?:string,
    name?: string,
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
    about?: string,
    gender?: string,
    date_of_birth?: Date,
    course?: string,
    remark?: string,
    role?: string,
    disabled?: boolean,
    created?:Date,
    updated?:Date,
}

export interface ITeacher {
    _id ?: string,
    name?: string,
    email?: string,
    mobile_no?: string,
    img?: string,
    address?: string,
    about?: string,
    gender?: string,
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

export interface IBatch{
    _id ?: string,
    name?: string,
    course?: string,
    start_date?: string,
    end_date?: string,
    students_ids?: [],
    coordinator?: string,
    remark?: string,
    disabled?:boolean,
    disableReason?: string,
    created?: Date,
    updated?: Date,
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

export interface IAnnouncement{
    _id?: string,
    subject?:string,
    message?:string,
    url?:string,
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