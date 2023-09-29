import express from 'express'
import cors from "cors"
import { Application } from 'express'

const middlewares = (app:Application) => {
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json({limit:'10mb'}));
}
export default middlewares