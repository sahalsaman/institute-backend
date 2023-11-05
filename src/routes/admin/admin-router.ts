import { Router } from "express";
import { AdminController} from "../../controllers/admin-controller";

const router=Router()
const admin = new AdminController

// get api

// router.get('/me', (req, res) => admin.getStudentList(req, res))
router.get('/get-student-list', (req, res) => admin.getStudentList(req, res))
router.get('/get-teacher-list', (req, res) => admin.getTeacherList(req, res))
router.get('/get-student-detail', (req, res) => admin.getStudentDetail(req, res))
router.get('/get-teacher-detail', (req, res) => admin.getTeacherDetail(req, res))
router.get('/get-exam-list', (req, res) => admin.getExamList(req, res))
router.get('/get-result-list', (req, res) => admin.getResultist(req, res))
router.get('/get-result-detail', (req, res) => admin.getResultDetail(req, res))
router.get('/get-exam-detail', (req, res) => admin.getExamDetail(req, res))
router.get('/get-batch-list', (req, res) => admin.getBatchList(req, res))
router.get('/get-batch-detail', (req, res) => admin.getBatchDetail(req, res))
router.get('/get-attendance-list', (req, res) => admin.getAttendanceList(req, res))
router.get('/get-attendance-detail', (req, res) => admin.getAttendanceDetail(req, res))
router.get('/get-student-status-list', (req, res) => admin.getStudentList(req, res))
router.get('/get-announcement-list', (req, res) => admin.getAnnouncementList(req, res))
router.get('/dashboard', (req, res) => admin.dashboard(req, res))

// router.get('/get-student-payment-list', (req, res) => admin.getStudentList(req, res))
// router.get('/get-teacher-payment-list', (req, res) => admin.getStudentList(req, res))
// router.get('/get-time-schedule', (req, res) => admin.getStudentList(req, res))
// router.get('/get-student-status', (req, res) => admin.getStudentList(req, res))
// router.get('/get-refernce', (req, res) => admin.getStudentList(req, res))
// router.get('/get-syllabus', (req, res) => admin.getStudentList(req, res))
// router.get('/get-notification', (req, res) => admin.getStudentList(req, res))

// post api

router.post('/create-exam', (req, res) => admin.createExam(req, res))
router.post('/create-result', (req, res) => admin.addResult(req, res))
router.post('/create-course-batch', (req, res) => admin.createBatch(req, res))
router.post('/add-attendance', (req, res) => admin.addAtttendance(req, res))
router.post('/create-announcement', (req, res) => admin.createAnnouncement(req, res))

// router.patch('/update-attendance', (req, res) => admin.getStudentList(req, res))
// router.post('/student-day-status', (req, res) => admin.getStudentList(req, res))
// router.post('/update-student-payment', (req, res) => admin.getStudentList(req, res))
// router.post('/update-teacher-payment', (req, res) => admin.getStudentList(req, res))
// router.post('/create-time-schedule', (req, res) => admin.getStudentList(req, res))
// router.post('/create-refernce', (req, res) => admin.getStudentList(req, res))
// router.post('/create-syllabus', (req, res) => admin.getStudentList(req, res))


export default router