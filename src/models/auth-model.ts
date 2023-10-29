import mongoose, {Schema} from "mongoose";

const schema=new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    role:{type:String},
    profile_id:{type:String},
    disabled:{ type:Boolean,default:false },
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const AuthModel=mongoose.model<mongoose.Document>("auth",schema)
export default AuthModel