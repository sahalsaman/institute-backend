import mongoose, {Schema} from "mongoose";

const schema=new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    role:{type:String},
    profile_id:{type:String},
    userId:{type:Schema.Types.ObjectId, unique:true},
    disabled:{ type:Boolean,default:false },
    createdAt:{type:Date}
})

const AuthModel=mongoose.model<mongoose.Document>("auth",schema)
export default AuthModel