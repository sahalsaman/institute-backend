import mongoose, {Schema} from "mongoose";

const ResultSchema=new mongoose.Schema({
    _id: {type:String},
    student_name:{type:String},
    student_id:{type:String},
    subjects:{type:Array},
    remark:{type:String},
    disabled:{ type:Boolean,default:false },
    disableReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const ResultModel=mongoose.model<mongoose.Document>("result",ResultSchema)
export default ResultModel