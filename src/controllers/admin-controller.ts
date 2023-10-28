import { IAuth, Iresult } from "../types/interfaces/auth-interfaces"
import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { AdminService } from "../services/admin-service"
import { AuthService } from "../services/auth-service"
import { IPagination } from "../types/interfaces/common-interfaces"


export class AdminController extends ControllerBase {
    private adminService = new AdminService()
    private authService = new AuthService()
    
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
        console.log("request c", request.body)
        const body: Iresult = request.body
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







    
    getProfile = async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
    //   console.log("request",request.query.id)
        try{
            let user = await this.authService.getUserProfile(userId);
            let profile={
                name:user?.name,
                email:user?.email,
                disabled:user?.disabled,
                created:user?.createdAt,
                role:user?.role,
                _id:user?._id
            }
            if(!profile){
                return this.error(response, 400, "user_not_found");
            }
            this.jsonResponse(response, null, profile);
        }catch(e){
            this.error(response, 500, null, e)
        }
    }


}