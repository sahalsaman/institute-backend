import AuthModel from "../models/auth-model";
import StudentModel from "../models/student-modal";
import { IAuth, IStudent } from "../types/interfaces/auth-interfaces";

export class AdminService{
    constructor(){}

     getStudentList= async (search?:string): Promise<IStudent[]> => {
        let filter:any={}
        if (search) {
            filter ={ $or: [{ companyName : {$regex: search, $options: 'i'}}, {address: {$regex: search, $options: 'i'}}] }
         }
        let studentList = await StudentModel.find(filter).sort({ 'created': -1 })
            return studentList
    }

    getStudentCount= async (search?:string): Promise<number> => {
        let filter:any={}
        if (search) {
            filter = { $or: [{ companyName : {$regex: search, $options: 'i'}}, {address: {$regex: search, $options: 'i'}}] }

        }
        return await StudentModel.countDocuments(filter).sort({ 'created': -1 })
    }




}