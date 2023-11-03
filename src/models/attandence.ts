import mongoose, {Schema} from "mongoose";

const AttendanceSchema=new mongoose.Schema({
    batch_id:{type:String},
    batch:{type:String},
    student_id:{type:String},
    attendance:{type:Array},
    remark:{type:String},
    disabled:{ type:Boolean,default:false },
    disableReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const AttendanceModel=mongoose.model<mongoose.Document>("attendance",AttendanceSchema)
export default AttendanceModel