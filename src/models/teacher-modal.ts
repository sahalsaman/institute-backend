import mongoose, {Schema} from "mongoose";

const teacherDetailSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true, required:true},
    mobile_no:{type:Number, unique:true},
    photo:{type:String}, 
    about:{type:String},
    contry:{type:String},
    states:{type:String},
    city:{type:String},
    address:{type:String},
    date_of_birth:{type:String},
    course:{type:String},
    remark:{type:String},
    role:{type:String},
    disabled:{ type:Boolean,default:false },
    suspensionReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const TeacherModel=mongoose.model<mongoose.Document>("teacher",teacherDetailSchema)
export default TeacherModel