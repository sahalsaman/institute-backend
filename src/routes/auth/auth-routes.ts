import { Router } from "express";
import { AuthController} from "../../controllers/auth-controller";

const router=Router()
const auth = new AuthController

router.post('/login', (req, res) => auth.login(req, res))
router.post('/teacher-login', (req, res) => auth.login(req, res))
router.post('/admin-login', (req, res) => auth.login(req, res))

router.post('/student-change-password', (req, res) => auth.login(req, res))
router.post('/teacher-change-password', (req, res) => auth.login(req, res))
router.post('/admin-change-password', (req, res) => auth.login(req, res))

router.post('/invite-student', (req, res) => auth.userInvaite(req, res))
router.post('/invite-teacher', (req, res) => auth.teacherInvaite(req, res))
router.post('/invite-subadmin', (req, res) => auth.subAdminInvaite(req, res))
router.post('/invite-admin', (req, res) => auth.adminRegister(req, res))

router.get('/profile', (req, res) => auth.getProfile(req, res))

export default router