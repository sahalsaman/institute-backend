import mongoose, {Schema} from "mongoose";

const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    mobile_no:{type:Number},
    role:{type:String},
    profile_id:{type:String},
    disabled:{ type:Boolean,default:false },
    createdAt:{type:Date}
})
const AuthModel=mongoose.model<mongoose.Document>("auth",schema)
export default AuthModel