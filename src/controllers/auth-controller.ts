import { AuthService } from "../services/auth-service"
import { IAuth } from "../types/interfaces/auth-interfaces"
import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { email_text, mailer } from "../utils/functions/mailer"
import { BcryptHandler } from "../utils/class/bcrypt-handler"
import { bodyRequiredDataValidator } from "../utils/functions/validator"
import { Role, UserStatus } from "../types/variables/enum"


export class AuthController extends ControllerBase {
    private authService = new AuthService()
    private bcrypt = new BcryptHandler()

    userInvaite = async (request: ExpressRequest, response: ExpressResponse) => {
        const body = request.body
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
            var userDetail:any
            body.status=UserStatus.INVITED
            if (body.role == "subadmin"||body.role == "admin") {
                userDetail = await this.authService.createAdmin(body);
            } else if (body.role == "teacher") {
                userDetail = await this.authService.createTeacher(body);
            } else {
                userDetail = await this.authService.createStudent(body);
            }
            console.log("userDetail",userDetail)
            const auth = await this.authService.createAuthEntry({
                profile_id: userDetail?._id,
                email: body?.email,
                role: body?.role,
                updatedAt: new Date(),
                createdAt: new Date()
            })
            const email = mailer(body?.email, email_text.student_invitation_subject, email_text.student_invitation.replace('[reciever-name]', body?.name)+ email_text.set_password_html.replace('[user-id]', auth?._id))
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    setPassword = async (request: ExpressRequest, response: ExpressResponse) => {
        const id = request.params.id
        console.log("data", request.body, request.params)
        const body: IAuth = request.body
        try {
            // body.email = body.email.toLowerCase()
            // let user = await this.authService.getUser(body.email);
            // if (!user) {
            //     return this.error(response, 400, "user doesn't exists..!");
            // }
            // if (user._id != id) {
            //     return this.error(response, 400, "user doesn't exists..!");
            // }
            body.password = await this.bcrypt.getPasswordHash(body.password);
            const auth = await this.authService.updateAuth(id, {
                password: body?.password,
                updatedAt: new Date
            })
            let profile
            if (auth.role == Role.ADMIN||auth.role == Role.SUB_ADMIN) {
                 profile = await this.authService.updateAdmin(auth?.profile_id, {
                    status:UserStatus.ACTIVE
                })
            } else if (auth.role == Role.TEACHER) {
                profile = await this.authService.updateTeacher(auth?.profile_id, {
                    status:UserStatus.ACTIVE
                })
            } else {
                profile = await this.authService.updateStudent(auth?.profile_id, {
                    status:UserStatus.ACTIVE
                })
            }
            // const email=mailer(body?.email,email_text.student_registration_subject,email_text.student_registration)
            this.jsonResponse(response, null, {auth:auth,profile:profile});
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    login = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IAuth = request.body
        console.log("login", request.body)
        try {
            body.email = body.email.toLowerCase()
            let userData = await this.authService.getUser(body.email);
            const validUser = await this.bcrypt.verifyPasswordHash(userData.password, body.password);
            if (!validUser) {
                return this.error(response, 401, "incorrect_password")
            }
            let user = await this.authService.Login(body.email, userData.password);
            console.log("user", user)
            let profile = {
                email: user?.email,
                disabled: user?.disabled,
                created: user?.createdAt,
                role: user?.role,
                profile_id: user?.profile_id,
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

    changePassword= async (request: ExpressRequest, response: ExpressResponse) => {
        const id = request.params.id
        console.log("data", request.body, request.params)
        const body: IAuth = request.body
        try {
            body.password = await this.bcrypt.getPasswordHash(body.password);
            const auth = await this.authService.updateAuth(id, {
                password: body?.password,
                updatedAt: new Date
            })
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }


    getProfile = async (request: ExpressRequest, response: ExpressResponse) => {
        const profile_id = request.headers['profile_id'];
        const role = request.headers['role']
        //   console.log("request",request.query.id)
        try {
            if(role==Role.STUDENT)
            var user = await this.authService.getStudentProfile(profile_id);
            else if(role==Role.TEACHER){
                var user = await this.authService.getTeacherProfile(profile_id);
            }else if(role==Role.ADMIN){
                var user = await this.authService.getAdminProfile(profile_id);
            }
            if (!user) {
                return this.error(response, 400, "user_not_found");
            }
            this.jsonResponse(response, null, user);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }
}