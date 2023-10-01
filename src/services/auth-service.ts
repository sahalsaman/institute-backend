import AuthModel from "../models/auth/auth-model";
import UserModel from "../models/auth/user-modal";
import { IAuth, IUser } from "../types/interfaces/auth-interfaces";

export class AuthService{
    constructor(){}
    createAuthEntry =  async (auth:IAuth):Promise<IAuth> => {
        return AuthModel.create(auth);
    }

    updateAuth =  async (id:any,auth:IAuth):Promise<IAuth> => {
        return AuthModel.findByIdAndUpdate(id, auth, { new: true });
    }

    createUser =  async (user:IUser):Promise<IUser> => {
        return UserModel.create(user);
    }

    createTeacher =  async (user:IUser):Promise<IUser> => {
        return UserModel.create(user);
    }

    createAdmin =  async (user:IUser):Promise<IUser> => {
        return UserModel.create(user);
    }

    getUser = async (email):Promise<IAuth> =>{
        return await AuthModel.findOne({email})
    }

    Login = async (email,password):Promise<IAuth> =>{
        return await AuthModel.findOne({email,password})
    }

    getUserProfile = async (_id):Promise<IAuth> =>{
        return await AuthModel.findOne({_id})
    }
}