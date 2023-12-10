import AnnouncementModel from "../models/announcement.model";
import AttendanceModel from "../models/attandence";
import AuthModel from "../models/auth-model";
import BatchModel from "../models/batch-modal";
import ComplaintModel from "../models/complaints.model";
import ExamModal from "../models/exam-modal";
import ResultModel from "../models/result-modal";
import StudentModel from "../models/student-modal";
import TeacherModel from "../models/teacher-modal";
import { IAnnouncement, IAuth, IBatch, IComplaint, IStudent, ITeacher, Iexam, Iresult } from "../types/interfaces/auth-interfaces";

export class AdminService {
 

    constructor() { }

    getStudentList = async (search?: string,batch?: string): Promise<IStudent[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        if (batch) {
            filter = { $or: [{ batch: { $regex: batch, $options: 'i' } }] }
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
        return await BatchModel.create(data);
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

    createAnnouncement = async (data: IAnnouncement): Promise<IAnnouncement> => {
        return await AnnouncementModel.create(data);
    }

    getAnnouncementList = async (search?: string): Promise<IAnnouncement[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await AnnouncementModel.find(filter).sort({ 'created': -1 })
        return list
    }

    getComplaints=  async (search?:any) => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await ComplaintModel.find(filter).sort({ 'created': -1 })
        return list
    }

    updateComplaint =  async (id:any,data:any):Promise<any> => {
        return ComplaintModel.findByIdAndUpdate(id, data, { new: true });
    }

    deleteUser=  async (id:any) => {
        return StudentModel.findByIdAndDelete(id);
    }

    deleteTeacher =  async (id:any) => {
        return TeacherModel.findByIdAndDelete(id);
    }

    deleteBatch =  async (id:any) => {
        return BatchModel.findByIdAndDelete(id);
    }

    deleteExam =  async (id:any) => {
        return ExamModal.findByIdAndDelete(id);
    }

    deleteAnnouncement =  async (id:any) => {
        return AnnouncementModel.findByIdAndDelete(id);
    }

    deleteComplaint =  async (id:any) => {
        return ComplaintModel.findByIdAndDelete(id);
    }
    complaintRegister = async (data: IComplaint): Promise<IComplaint> => {
        return await ComplaintModel.create(data);
    }
    

}