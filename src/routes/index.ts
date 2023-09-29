import { Application } from "express";
import auth from './auth/auth-routes'
import admin from './admin/admin-router'
import student from './student/student-routes'
import teacher from './teacher/teacher-routes'
// import user from './users/user-routes'

const endPoint = (app: Application) => {
    app.get('/', (req, res) => {
        res.send("welcome to E-shop REST services") 
        console.log("start")
    })
    app.use('/auth',auth)
    app.use('/admin',admin)
    app.use('/teacher',teacher)
    app.use('/student',student)
    // app.use('/user',user)
}
export default endPoint