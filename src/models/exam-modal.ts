import mongoose, {Schema} from "mongoose";

const ExamSchema=new mongoose.Schema({
    name:{type:String},
    subjects:{type:Array},
    batch:{type:String},
    description:{type:String},
    start_date:{type:String},
    end_date:{type:String},
    remark:{type:String},
    disabled:{ type:Boolean,default:false },
    disableReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const ExamModal=mongoose.model<mongoose.Document>("exam",ExamSchema)
export default ExamModal