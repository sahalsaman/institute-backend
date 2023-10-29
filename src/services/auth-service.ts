import AdminModel from "../models/admin-modal";
import AuthModel from "../models/auth-model";
import StudentModel from "../models/student-modal";
import TeacherModel from "../models/teacher-modal";
import { IAdmin, IAuth, IStudent, ITeacher } from "../types/interfaces/auth-interfaces";

export class AuthService{
    constructor(){}
    createAuthEntry =  async (auth:IAuth):Promise<IAuth> => {
        console.log("auth",auth)
        return AuthModel.create(auth);
    }

    updateAuth =  async (id:any,auth:IAuth):Promise<IAuth> => {
        return AuthModel.findByIdAndUpdate(id, auth, { new: true });
    }

    createStudent =  async (user:any):Promise<any> => {
        return StudentModel.create(user);
    }

    createTeacher =  async (user:ITeacher):Promise<ITeacher> => {
        console.log("user",user)
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

    getStudentProfile = async (_id):Promise<IAuth> =>{
        return await StudentModel.findOne({_id})
    }

    getTeacherProfile = async (_id):Promise<IAuth> =>{
        return await TeacherModel.findOne({_id})
    }

    getAdminProfile = async (_id):Promise<IAuth> =>{
        return await AdminModel.findOne({_id})
    }
}