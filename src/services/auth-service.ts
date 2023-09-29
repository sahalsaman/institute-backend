import AuthModel from "../models/auth-model";
import { IAuth } from "../types/interfaces/auth-interfaces";

export class AuthService{
    constructor(){}
    createAuthEntry =  async (auth:IAuth):Promise<IAuth> => {
        console.log("auth service",auth)
        return AuthModel.create(auth);
    }

    getUser = async (email):Promise<IAuth> =>{
        return await AuthModel.findOne({email})
    }

    Login = async (email,password,role):Promise<IAuth> =>{
        return await AuthModel.findOne({email,password,role})
    }

    getUserProfile = async (_id):Promise<IAuth> =>{
        return await AuthModel.findOne({_id})
    }
}