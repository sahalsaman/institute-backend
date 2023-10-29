import { Router } from "express";
import { AuthController} from "../../controllers/auth-controller";
import { Role } from "../../types/variables/enum";

const router=Router()
const auth = new AuthController

router.post('/login', (req, res) => auth.login(req, res))

router.patch('/set-password/:id', (req, res) => auth.setPassword(req, res))

router.post('/invite-student', (req, res) => {
    req.body.role=Role.STUDENT
    auth.userInvaite(req, res)
})
router.post('/invite-teacher', (req, res) => {
    req.body.role=Role.TEACHER
    auth.userInvaite(req, res)
})
router.post('/invite-subadmin', (req, res) => {
    req.body.role=Role.SUB_ADMIN
    auth.userInvaite(req, res)
})
router.post('/invite-admin', (req, res) => {
    req.body.role=Role.ADMIN
    auth.userInvaite(req, res)
})

router.get('/change-password', (req, res) => auth.changePassword(req, res))

router.get('/profile', (req, res) => auth.getProfile(req, res))

export default router