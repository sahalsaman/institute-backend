import { AuthService } from "../services/auth-service"
import { IAuth } from "../types/interfaces/auth-interfaces"
import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { email_text, mailer } from "../utils/functions/mailer"
import { BcryptHandler } from "../utils/class/bcrypt-handler"
import { bodyRequiredDataValidator } from "../utils/functions/validator"


export class AuthController extends ControllerBase {
    private authService = new AuthService()
    private bcrypt = new BcryptHandler()

    userInvaite = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        try {
            const required = ["name", "email"]
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const userDetail = await this.authService.createUser(body);
            const auth = await this.authService.createAuthEntry({
                userId:userDetail?._id,
                email: body?.email,
                role: "user",
                createdAt: new Date()
            })
            const email=mailer(body?.email,email_text.student_invitation_subject,email_text.student_invitation.replace('[reciever-name]',body?.name))
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    teacherInvaite = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const userDetail = await this.authService.createTeacher(body);
            const auth = await this.authService.createAuthEntry({
                userId:userDetail?._id,
                email: body?.email,
                role: "teacher",
                createdAt: new Date()
            })
            const email=mailer(body?.email,email_text.teacher_invitation_subject,email_text.teacher_invitation.replace('[reciever-name]',body?.name))
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    subAdminInvaite = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("request c",request.body)
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            const userDetail = await this.authService.createAdmin(body);
            const auth = await this.authService.createAuthEntry({
                userId:userDetail?._id,
                email: body?.email,
                role: "subadmin",
                createdAt: new Date()
            })
            const email=mailer(body?.email,email_text.admin_invitation_subject,email_text.admin_invitation.replace('[reciever-name]',body?.name))
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
            body.password = await this.bcrypt.getPasswordHash(body.password);
            const userDetail = await this.authService.createAdmin(body);
            const auth = await this.authService.createAuthEntry({
                userId:userDetail?._id,
                email: body?.email,
                password: body?.password,
                role: "admin",
                createdAt: new Date()
            })
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    userRegister = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        try {
            body.email = body.email.toLowerCase()
            let user = await this.authService.getUser(body.email);
            if (user) {
                return this.error(response, 400, "user already exists..!");
            }
            body.password = await this.bcrypt.getPasswordHash(body.password);
            const userDetail = await this.authService.createUser(body);
            const auth = await this.authService.createAuthEntry({
                userId:userDetail?._id,
                email: body?.email,
                password: body?.password,
                role: "user",
                createdAt: new Date()
            })
        const email=mailer(body?.email,email_text.student_registration_subject,email_text.student_registration)
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
            let userData = await this.authService.getUser(body.email);
            const validUser = await this.bcrypt.verifyPasswordHash(userData.password, body.password);
          if (!validUser) {
              return this.error(response, 401, "incorrect_password")
          }
            let user = await this.authService.Login(body.email,body.role);
            let profile = {
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