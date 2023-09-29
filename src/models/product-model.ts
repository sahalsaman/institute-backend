import mongoose, {Schema} from "mongoose";
import { IProduct } from "../types/interfaces/product-interface";

const application = new mongoose.Schema({
    _id: {type:String},
    user_name:{type:String},
    status:{ type:Boolean,default:'pending' },
    created:{type:Date,default: Date.now()},
    updatedOn:{type:Date,default: Date.now},
    createdBy:{type:String}
})

const reviews = new mongoose.Schema({
    _id: {type:String},
    user_name:{type:String},
    status:{ type:Boolean,default:'pending' },
    review_title:{type:String},
    review_details:{type:String},
    created:{type:Date,default: Date.now()},
    updatedOn:{type:Date,default: Date.now},
    createdBy:{type:String}
})

const representativeSchema=new mongoose.Schema({
    name:{type:String},
    phone:{type:String},
    email:{type:String}
})

const     reviewStatusSchema=new mongoose.Schema({
    good:{type:Number,default:0},
    average:{type:Number,default:0},
    bad:{type:Number,default:0},
})

const   offerSchema=new mongoose.Schema({
    offer_price:{type:String},
    start_date:{type:Date},
    end_date:{type:Date},
})

const schema=new mongoose.Schema({
    _id:{type:String},
    product_name:{type:String,},
    product_category:{type:String},
    company_name:{type:String},
    company_logo:{type:String},
    photo_list:{type:[String]},
    dealer_representative:{type:Boolean},
    representative:{type:representativeSchema},
    price:{type:Number,default:0},
    Location:{type:String},
    description:{type:String},
    condition:{type:String},
    // booked_application:{type:[application]},
    rating:{type:Number,default:0},
    // reviews:{type:[reviews]},
    review_status:{type:reviewStatusSchema},
    Payment_Options:{type:[String]},
    offer_aailable:{type:Boolean,default:false },
    offer:{type:offerSchema},
    disabled:{ type:Boolean,default:false },
    created:{type:Date,default: Date.now()},
    updatedOn:{type:Date},
    createdBy:{type:String}
})

const ProductModel=mongoose.model<IProduct & mongoose.Document>("product",schema)
export default ProductModel