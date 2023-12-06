import { IAnnouncement, IAuth, IBatch, Iresult } from "../types/interfaces/auth-interfaces"
import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { AdminService } from "../services/admin-service"
import { AuthService } from "../services/auth-service"
import { IPagination } from "../types/interfaces/common-interfaces"
import { bodyRequiredDataValidator } from "../utils/functions/validator"
import { request } from "http"
import { query } from "express"


export class AdminController extends ControllerBase {
    private adminService = new AdminService()
    private authService = new AuthService()
    
    getStudentList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        const batch=request.query.batch as string
        try{
            const list = await this.adminService.getStudentList(search,batch)
            const count = await this.adminService.getStudentCount(search)
            this.jsonResponse(response,null,{count:count,data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    getStudentDetail= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                let user = await this.adminService.getStudentDetail(userId);
                if(!user){
                    return this.error(response, 400, "user_not_found");
                }
                this.jsonResponse(response, null, user);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }

    getTeacherList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getTeacherList(search)
            const count = await this.adminService.getTeacherCount(search)
            this.jsonResponse(response,null,{count:count,data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    getTeacherDetail= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                let user = await this.adminService.getTeacherDetail(userId);
                if(!user){
                    return this.error(response, 400, "user_not_found");
                }
                this.jsonResponse(response, null, user);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }

    createExam = async (request: ExpressRequest, response: ExpressResponse) => {
        const body = request.body
        try {
            const auth = await this.adminService.createExam(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getExamList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getExamList(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    getExamDetail= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                let user = await this.adminService.getExamDetail(userId);
                if(!user){
                    return this.error(response, 400, "user_not_found");
                }
                this.jsonResponse(response, null, user);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }

    addResult = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("request c", request.body)
        const body: Iresult = request.body
        try {
            const auth = await this.adminService.addResult(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getResultist = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getResultist(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    getResultDetail= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                let user = await this.adminService.getResultDetail(userId);
                if(!user){
                    return this.error(response, 400, "user_not_found");
                }
                this.jsonResponse(response, null, user);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }


    createBatch = async (request: ExpressRequest, response: ExpressResponse) => {
        const body:IBatch = request.body
        try {
            const required = ["name", "start_date","end_date"]
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            const auth = await this.adminService.createBatch(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getBatchList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getBatchList(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    getBatchDetail= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                let user = await this.adminService.getBatchDetail(userId);
                if(!user){
                    return this.error(response, 400, "user_not_found");
                }
                this.jsonResponse(response, null, user);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }

    addAtttendance = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("request c", request.body)
        const body = request.body
        try {
            const auth = await this.adminService.addAttandence(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getAttendanceList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getStudentsAttendance(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    getAttendanceDetail= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                let user = await this.adminService.getIndividualAttendance(userId);
                if(!user){
                    return this.error(response, 400, "user_not_found");
                }
                this.jsonResponse(response, null, user);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }


    
    createAnnouncement = async (request: ExpressRequest, response: ExpressResponse) => {
        const body:IAnnouncement = request.body
        try {
            const required = ["subject", "message"]
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            const auth = await this.adminService.createAnnouncement(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getAnnouncementList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getAnnouncementList(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    dashboard = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const studentCount = await this.adminService.getStudentCount()
            const teacherCount = await this.adminService.getTeacherCount()
            const batchCount = await (await this.adminService.getBatchList()).length
            this.jsonResponse(response,null,{data:{
                students:studentCount,
                teachers:teacherCount,
                batches:batchCount
            }})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }
 
 

    updateProfile= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                console.log("user",userId)
            const profile = await this.authService.updateAdmin(userId, request.body)
                this.jsonResponse(response, null, profile);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }

    getComplaintLst = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getComplaints(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    updateComplaint = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const list = await this.adminService.updateComplaint(request.body.id,request.body)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    deleteStudent = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("--------id",request.query.id);
        
        try{
            const list = await this.adminService.deleteUser(request?.query?.id)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    deleteTeacher = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const list = await this.adminService.deleteTeacher(request?.query?.id)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

}