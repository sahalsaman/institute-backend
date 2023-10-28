import AttendanceModel from "../models/attandence";
import AuthModel from "../models/auth-model";
import BatchModel from "../models/batch-modal";
import ExamModal from "../models/exam-modal";
import ResultModel from "../models/result-modal";
import StudentModel from "../models/student-modal";
import TeacherModel from "../models/teacher-modal";
import { IAuth, IStudent, ITeacher, Iexam, Iresult } from "../types/interfaces/auth-interfaces";

export class AdminService {
    constructor() { }

    getStudentList = async (search?: string): Promise<IStudent[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let studentList = await StudentModel.find(filter).sort({ 'created': -1 })
        return studentList
    }

    getStudentCount = async (search?: string): Promise<number> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ companyName: { $regex: search, $options: 'i' } }] }

        }
        return await StudentModel.countDocuments(filter).sort({ 'created': -1 })
    }

    getStudentDetail = async (_id): Promise<IStudent> => {
        return await StudentModel.findOne({ _id })
    }

    getTeacherList = async (search?: string): Promise<IStudent[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await TeacherModel.find(filter).sort({ 'created': -1 })
        return list
    }

    getTeacherCount = async (search?: string): Promise<number> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        return await TeacherModel.countDocuments(filter).sort({ 'created': -1 })
    }

    getTeacherDetail = async (_id): Promise<ITeacher> => {
        return await TeacherModel.findOne({ _id })
    }

    createExam = async (data: Iexam): Promise<Iexam> => {
        return await ExamModal.create(data) as Iexam;
    }

    getExamList = async (search?: string): Promise<Iexam[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await ExamModal.find(filter).sort({ 'created': -1 })
        return list
    }

    getExamDetail = async (_id): Promise<Iexam> => {
        return await ExamModal.findOne({ _id })
    }

    addResult = async (data: Iresult): Promise<Iresult> => {
        return await ResultModel.create(data) as Iresult;
    }

    getResultist = async (search?: string): Promise<Iresult[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ student_name: { $regex: search, $options: 'i' } }] }
        }
        let list = await ResultModel.find(filter).sort({ 'created': -1 })
        return list
    }

    getResultDetail = async (_id): Promise<Iresult> => {
        return await ResultModel.findOne({ _id })
    }

    createBatch = async (data: any): Promise<any> => {
        return await BatchModel.create(data) as any;
    }

    getBatchList = async (search?: string): Promise<any[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await BatchModel.find(filter).sort({ 'created': -1 })
        return list
    }

    getBatchDetail = async (_id): Promise<any> => {
        return await BatchModel.findOne({ _id })
    }

    addAttandence = async (data: any): Promise<any> => {
        return await AttendanceModel.create(data) as any;
    }

    getStudentsAttendance = async (search?: string): Promise<any[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await AttendanceModel.find(filter).sort({ 'created': -1 })
        return list
    }

    getIndividualAttendance = async (_id): Promise<any> => {
        return await AttendanceModel.findOne({ _id })
    }

}