import { AuthService } from "../services/auth-service"
import { IAuth } from "../types/interfaces/auth-interfaces"
import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"


export class AuthController extends ControllerBase {
    private authService = new AuthService()

    userRegister = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const auth = await this.authService.createAuthEntry({
                name: body?.name,
                password: body?.password,
                email: body?.email,
                mobile_no: body?.mobile_no,
                role: "user",
                createdAt: new Date()
            })
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    teacherRegister = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const auth = await this.authService.createAuthEntry({
                name: body?.name,
                password: body?.password,
                email: body?.email,
                mobile_no: body?.mobile_no,
                role: "teacher",
                createdAt: new Date()
            })
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    subAdminRegister = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("request c",request.body)
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const auth = await this.authService.createAuthEntry({
                name: body?.name,
                password: body?.password,
                email: body?.email,
                mobile_no: body?.mobile_no,
                role: "subadmin",
                createdAt: new Date()
            })
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    adminRegister = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("request c",request.body)
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const auth = await this.authService.createAuthEntry({
                name: body?.name,
                password: body?.password,
                email: body?.email,
                mobile_no: body?.mobile_no,
                role: "admin",
                createdAt: new Date()
            })
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    login = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        console.log("login",request.body)
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.Login(body.email, body.password, body.role);
            let profile = {
                name: user?.name,
                email: user?.email,
                disabled: user?.disabled,
                created: user?.createdAt,
                role: user?.role,
                _id: user?._id
            }
            if (!profile) {
                return this.error(response, 400, "please register..!");
            }
            this.jsonResponse(response, null, profile);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getProfile = async (request: ExpressRequest, response: ExpressResponse) => {
        const userId = request.query.id
        //   console.log("request",request.query.id)
        try {
            let user = await this.authService.getUserProfile(userId);
            let profile = {
                name: user?.name,
                email: user?.email,
                disabled: user?.disabled,
                created: user?.createdAt,
                role: user?.role,
                _id: user?._id
            }
            if (!profile) {
                return this.error(response, 400, "user_not_found");
            }
            this.jsonResponse(response, null, profile);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }
}