import AdminModel from "../models/admin-modal";
import AuthModel from "../models/auth-model";
import StudentModel from "../models/student-modal";
import TeacherModel from "../models/teacher-modal";
import { IAdmin, IAuth, IStudent, ITeacher } from "../types/interfaces/auth-interfaces";

export class AuthService{
    constructor(){}
    createAuthEntry =  async (auth:IAuth):Promise<IAuth> => {
        return AuthModel.create(auth);
    }

    updateAuth =  async (id:any,auth:IAuth):Promise<IAuth> => {
        return AuthModel.findByIdAndUpdate(id, auth, { new: true });
    }

    createStudent =  async (user:IStudent):Promise<IStudent> => {
        return StudentModel.create(user);
    }

    createTeacher =  async (user:ITeacher):Promise<ITeacher> => {
        return TeacherModel.create(user) as ITeacher;
    }

    createAdmin =  async (user:IAdmin):Promise<IAdmin> => {
        return AdminModel.create(user) as IAdmin;
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