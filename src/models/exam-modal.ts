import mongoose, {Schema} from "mongoose";

const ExamSchema=new mongoose.Schema({
    _id: {type:String},
    name:{type:String},
    subjects:{type:Array},
    remark:{type:String},
    disabled:{ type:Boolean,default:false },
    disableReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const ExamModal=mongoose.model<mongoose.Document>("exam",ExamSchema)
export default ExamModal