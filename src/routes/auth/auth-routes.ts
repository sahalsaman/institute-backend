import { Router } from "express";
import { AuthController} from "../../controllers/auth-controller";

const router=Router()
const auth = new AuthController

router.post('/login', (req, res) => auth.login(req, res))
router.post('/teacher-login', (req, res) => auth.login(req, res))
router.post('/admin-login', (req, res) => auth.login(req, res))

router.patch('/set-password/:id', (req, res) => auth.setPassword(req, res))

router.post('/invite-student', (req, res) => {
    req.body.role='user'
    auth.userInvaite(req, res)
})
router.post('/invite-teacher', (req, res) => {
    req.body.role='teacher'
    auth.userInvaite(req, res)
})
router.post('/invite-subadmin', (req, res) => {
    req.body.role='subadmin'
    auth.userInvaite(req, res)
})
router.post('/invite-admin', (req, res) => {
    req.body.role='user'
    auth.userInvaite(req, res)
})

router.get('/profile', (req, res) => auth.getProfile(req, res))

export default router