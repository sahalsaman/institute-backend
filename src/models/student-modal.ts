import mongoose, {Schema} from "mongoose";

const studentDetailSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true, required:true},
    mobile_no:{type:String},
    photo:{type:String}, 
    batch:{type:String},
    about:{type:String},
    contry:{type:String},
    states:{type:String},
    city:{type:String},
    address:{type:String},
    gender:{type:String},
    date_of_birth:{type:String},
    course:{type:String},
    remark:{type:String},
    role:{type:String},
    status:{type:String},
    attendance:{type:Array},
    disabled:{ type:Boolean,default:false },
    suspensionReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const StudentModel=mongoose.model<mongoose.Document>("student",studentDetailSchema)
export default StudentModel