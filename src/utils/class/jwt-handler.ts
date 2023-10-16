import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { IAuth, IToken } from '../../types/interfaces/auth-interfaces';
import {  ITokenPayload } from '../../types/interfaces/app-context-interfaces';
import { errorMessage } from '../../types/variables/contants';

export class JwtHandler {
    accessToken = async (user: string, role: any, token: string): Promise<string> => {
        let payload: ITokenPayload = {
            // user_id,
            role,
            token
        }
        return jwt.sign(payload, process.env.JWT_SUPER_KEY)
    }
    createToken = async (auth: IAuth): Promise<IToken> => {
        const token: string = await this.accessToken(auth?.name as string, auth?.role, auth._id)
        return { token }
    }
    accessPermission = (roles?: string[]) => {
        return (req: any, res: any, next: any) => {
            const token = req.headers['Authorization'] || req.headers['authorization'];
            if (!token) {
                return res.status(401).send(errorMessage[401])
            }
            else {
                jwt.verify(token, process.env.JWT_SUPER_KEY, (err: any, decoded: any) => {
                    if (err) {
                        return res.status(401).send(errorMessage[401])
                    }
                    else {
                        const payload: ITokenPayload = decoded
                        req.payload = payload
                        if (!roles || !roles.length || roles.includes(payload.role)) {
                            next()
                        } else {
                            return res.status(401).send(errorMessage[401])
                        }
                    }
                })
            }
        }
    }
    createChefSignupToken = async (_id:string,email:string): Promise<string> => {
        return jwt.sign({_id,email},process.env.JWT_SUPER_KEY)
    }
    verifyToken = async (token: string): Promise<any>=> {
        const payload: any = jwt.verify(token, process.env.JWT_SUPER_KEY)
        return payload
    }
}