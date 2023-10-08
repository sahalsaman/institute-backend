import { Router } from "express";
import { TeacherController } from "../../controllers/teacher-controller";

const router=Router()
const teacher = new TeacherController

router.get('/profile', (req, res) => teacher.addProduct(req, res))
router.get('/get-users-list', (req, res) => teacher.addProduct(req, res))
router.get('/get-users-detail', (req, res) => teacher.addProduct(req, res))
router.get('/get-result-list', (req, res) => teacher.addProduct(req, res))
router.get('/get-attendance-list', (req, res) => teacher.addProduct(req, res))
router.get('/get-student-status-list', (req, res) => teacher.addProduct(req, res))
router.get('/get-time-schedule', (req, res) => teacher.addProduct(req, res))
router.get('/get-result', (req, res) => teacher.addProduct(req, res))
router.get('/get-attendance', (req, res) => teacher.addProduct(req, res))
router.get('/get-student-status', (req, res) => teacher.addProduct(req, res))
router.get('/get-teacher-payment', (req, res) => teacher.addProduct(req, res))
router.get('/get-refernce', (req, res) => teacher.addProduct(req, res))
router.get('/get-syllabus', (req, res) => teacher.addProduct(req, res))
router.get('/get-notification', (req, res) => teacher.addProduct(req, res))
router.get('/get-announcement', (req, res) => teacher.addProduct(req, res))


// post api
router.post('/create-result', (req, res) => teacher.addProduct(req, res))
router.post('/update-attendance', (req, res) => teacher.addProduct(req, res))
router.post('/student-day-status', (req, res) => teacher.addProduct(req, res))
router.post('/create-refernce', (req, res) => teacher.addProduct(req, res))
router.post('/create-announcement', (req, res) => teacher.addProduct(req, res))


export default router