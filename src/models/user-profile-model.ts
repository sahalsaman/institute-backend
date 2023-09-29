import mongoose, {Schema} from "mongoose";

const schema=new mongoose.Schema({
    full_name:{type:String},
    email:{type:String},
    DOB:{type:Date},
    photo:{type:String}, 
    mobile_no:{type:Number},
    about:{type:String},
    role:{type:String},
    contry:{type:String},
    states:{type:String},
    city:{type:String},
    address:{type:String},
    location:{type:String},
    disabled:{ type:Boolean,default:false },
    suspensionReason:{type:String},
    created:{type:Date,default: Date.now()},
    updatedOn:{type:Date,default: Date.now},
})
const UserProfileModel=mongoose.model<mongoose.Document>("userProfile",schema)
export default UserProfileModel