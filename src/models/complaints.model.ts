import mongoose, {Schema} from "mongoose";

const ComplaintSchema=new mongoose.Schema({
    subject:{type:String},
    message:{type:String},
    student_id:{type:String},
    student_name:{type:String},
    response:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const ComplaintModel=mongoose.model<mongoose.Document>("complaint",ComplaintSchema)
export default ComplaintModel