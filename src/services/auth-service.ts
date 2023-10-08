import AdminModel from "../models/admin-modal";
import AuthModel from "../models/auth-model";
import TeacherModel from "../models/teacher-modal";
import UserModel from "../models/user-modal";
import { IAuth, IUser } from "../types/interfaces/auth-interfaces";

export class AuthService{
    constructor(){}
    createAuthEntry =  async (auth:IAuth):Promise<IAuth> => {
        return AuthModel.create(auth);
    }

    updateAuth =  async (id:any,auth:IAuth):Promise<IAuth> => {
        return AuthModel.findByIdAndUpdate(id, auth, { new: true });
    }

    createStudent =  async (user:IUser):Promise<IUser> => {
        return UserModel.create(user);
    }

    createTeacher =  async (user:IUser):Promise<IUser> => {
        return TeacherModel.create(user);
    }

    createAdmin =  async (user:IUser):Promise<IUser> => {
        return AdminModel.create(user);
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