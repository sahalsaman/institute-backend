import { Request, Response } from 'express'
import { Role } from '../variables/enum'
export interface ISuccessResponse {
    message: string,
    result?: any
}
export interface IErrorResponse {
    message: string,
    error?: any,
    status?: number
}

export interface ExpressRequest extends Request {
    payload?: ITokenPayload
}
export interface ExpressResponse extends Response {
}

export interface ITokenPayload {
    role?: Role,
    _id?:string,
    email?:string,
    token?:string,
    userId?:string,
    user_id?:string 
}

