import mongoose, {Schema} from "mongoose";

const AnnouncementSchema=new mongoose.Schema({
    subject:{type:String},
    message:{type:String},
    url:{type:String},
    created:{type:Date,default: Date.now},
    updated:{type:Date,default: Date.now},
})

const AnnouncementModel=mongoose.model<mongoose.Document>("announcement",AnnouncementSchema)
export default AnnouncementModel