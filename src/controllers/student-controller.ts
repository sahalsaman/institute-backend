import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { UserService } from "../services/student-service"
import { IProduct } from "../types/interfaces/product-interface"
import { bodyRequiredDataValidator } from "../utils/functions/validator"
import { AdminService } from "../services/admin-service"
import { AuthService } from "../services/auth-service"


export class UserController extends ControllerBase {
    private userService = new UserService()
    private adminService = new AdminService()
    private authService = new AuthService()

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


    complaintRegister= async (request: ExpressRequest, response: ExpressResponse) => {
            try{
            const profile = await this.userService.complaintRegister(request.body)
                this.jsonResponse(response, null, profile);
            }catch(e){
                this.error(response, 500, null, e)
            }
    }

}