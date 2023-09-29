import { Router } from "express";
import { UserController } from "../../controllers/user-controller";

const router=Router()
const user = new UserController


router.get('/get-users-detail', (req, res) =>user.addProduct(req, res))
router.get('/get-result-list', (req, res) =>user.addProduct(req, res))
router.get('/get-time-schedule', (req, res) =>user.addProduct(req, res))
router.get('/get-result', (req, res) =>user.addProduct(req, res))
router.get('/get-attendance', (req, res) =>user.addProduct(req, res))
router.get('/get-student-status', (req, res) =>user.addProduct(req, res))
router.get('/get-student-payment', (req, res) =>user.addProduct(req, res))
router.get('/get-refernce', (req, res) =>user.addProduct(req, res))
router.get('/get-syllabus', (req, res) =>user.addProduct(req, res))
router.get('/get-notification', (req, res) =>user.addProduct(req, res))
router.get('/get-announcement', (req, res) =>user.addProduct(req, res))




export default router