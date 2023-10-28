import mongoose, {Schema} from "mongoose";

const BatchSchema=new mongoose.Schema({
    _id: {type:String},
    name:{type:String},
    batch:{type:String},
    students_ids:{type:Array},
    coordinator:{type:String},
    remark:{type:String},
    disabled:{ type:Boolean,default:false },
    disableReason:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const BatchModel=mongoose.model<mongoose.Document>("batch",BatchSchema)
export default BatchModel