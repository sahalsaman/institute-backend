import { Router } from "express";
import { AuthController} from "../../controllers/auth-controller";

const router=Router()
const auth = new AuthController

router.post('/login',auth.login)
router.post('/teacher-login',auth.login)
router.post('/admin-login',auth.login)

router.post('/student-change-password',auth.login)
router.post('/teacher-change-password',auth.login)
router.post('/admin-change-password',auth.login)

router.post('/invite-student',auth.userRegister)
router.post('/invite-teacher',auth.teacherRegister)
router.post('/invite-subadmin',auth.adminRegister)

router.get('/profile', (req, res) => auth.getProfile(req, res))

export default router