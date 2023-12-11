import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { IProduct } from "../types/interfaces/product-interface"
import { bodyRequiredDataValidator } from "../utils/functions/validator"
import { TeacherService } from "../services/teacher-service"
import { AdminService } from "../services/admin-service"
import { Iresult } from "../types/interfaces/auth-interfaces"
import { AuthService } from "../services/auth-service"


export class TeacherController extends ControllerBase {
    private TecherService = new TeacherService()
    private adminService = new AdminService()
    private authService =new AuthService()

    getStudentList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getStudentList(search)
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
        const body: Iresult= request.body
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


    getBatchDetail= async (request: ExpressRequest, response: ExpressResponse) => {
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

    updateProfile= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                console.log("user",userId)
            const profile = await this.authService.updateStudent(userId, request.body)
                this.jsonResponse(response, null, profile);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }
    updateProfileTeacher= async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
            try{
                console.log("user",userId)
            const profile = await this.authService.updateTeacher(userId, request.body)
                this.jsonResponse(response, null, profile);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }


}