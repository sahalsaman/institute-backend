import mongoose, {Schema} from "mongoose";

const adminDetailSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true, required:true},
    mobile_no:{type:String},
    photo:{type:String}, 
    about:{type:String},
    remark:{type:String},
    role:{type:String},
    status:{type:String},
    disabled:{ type:Boolean,default:false },
    suspensionReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const AdminModel=mongoose.model<mongoose.Document>("admin",adminDetailSchema)
export default AdminModel