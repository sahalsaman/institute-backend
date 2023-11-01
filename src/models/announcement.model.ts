import mongoose, {Schema} from "mongoose";

const AnnouncementSchema=new mongoose.Schema({
    _id: {type:String},
    sender_id:{type:String},
    reciever_id:{type:String},
    type:{type:String},
    subject:{type:Array},
    message:{type:String},
    date:{ type:Boolean,default:false },
    status:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const AnnouncementModel=mongoose.model<mongoose.Document>("announcement",AnnouncementSchema)
export default AnnouncementModel