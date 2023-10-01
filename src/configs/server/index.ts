import { Application } from 'express'
import configMongodb from '../mongodb'
import api from '../../routes'
import * as dotenv from 'dotenv'
import middlewares from '../../middlewares'

dotenv.config()
export default (app: Application) => {
    let port = portNumber()
    let password="cIZKr1rSP9DMCsfp"
    let user_name="bazilkoolath7777"
    configMongodb(`mongodb+srv://${user_name}:${password}@cluster0.svvstc9.mongodb.net/?retryWrites=true&w=majority`)
    api(app)
    middlewares(app);
    return app.listen(port, () => {
        console.log("start server ", port)
    })
}

const portNumber = (): number => {
    return 3000
}

// const dataBaseUrl=():string=>{
//     return "mongodb+srv://sahal:ydEjlYTJtUXPiGuS@cluster0.fbngfbs.mongodb.net/?retryWrites=true&w=majority"
// }