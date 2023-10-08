import { Router } from "express";
import { AdminController} from "../../controllers/admin-controller";

const router=Router()
const admin = new AdminController

// get api

router.get('/profile', (req, res) => admin.getUsersList(req, res))
router.get('/get-users-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-teacher-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-users-detail', (req, res) => admin.getUsersList(req, res))
router.get('/get-teacher-detail', (req, res) => admin.getUsersList(req, res))
router.get('/get-result-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-attendance-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-student-status-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-student-payment-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-teacher-payment-list', (req, res) => admin.getUsersList(req, res))
router.get('/get-time-schedule', (req, res) => admin.getUsersList(req, res))
router.get('/get-result', (req, res) => admin.getUsersList(req, res))
router.get('/get-attendance', (req, res) => admin.getUsersList(req, res))
router.get('/get-student-status', (req, res) => admin.getUsersList(req, res))
router.get('/get-student-payment', (req, res) => admin.getUsersList(req, res))
router.get('/get-teacher-payment', (req, res) => admin.getUsersList(req, res))
router.get('/get-refernce', (req, res) => admin.getUsersList(req, res))
router.get('/get-syllabus', (req, res) => admin.getUsersList(req, res))
router.get('/get-notification', (req, res) => admin.getUsersList(req, res))
router.get('/get-announcement', (req, res) => admin.getUsersList(req, res))

// post api

router.post('/invite-user', (req, res) => admin.getUsersList(req, res))
router.post('/invite-teacher', (req, res) => admin.getUsersList(req, res))
router.post('/create-exam', (req, res) => admin.getUsersList(req, res))
router.post('/create-result', (req, res) => admin.getUsersList(req, res))
router.post('/update-attendance', (req, res) => admin.getUsersList(req, res))
router.post('/student-day-status', (req, res) => admin.getUsersList(req, res))
router.post('/update-student-payment', (req, res) => admin.getUsersList(req, res))
router.post('/update-teacher-payment', (req, res) => admin.getUsersList(req, res))
router.post('/create-time-schedule', (req, res) => admin.getUsersList(req, res))
router.post('/create-refernce', (req, res) => admin.getUsersList(req, res))
router.post('/create-syllabus', (req, res) => admin.getUsersList(req, res))
router.post('/create-announcement', (req, res) => admin.getUsersList(req, res))


export default router