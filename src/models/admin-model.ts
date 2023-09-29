import mongoose, {Schema} from "mongoose";

const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    disabled:{ type:Boolean,default:false },
    createdAt:{type:Date}
})
const AdminModel=mongoose.model<mongoose.Document>("auth",schema)
export default AdminModel