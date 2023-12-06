// import ProductModel from "../models/product-model";
import ComplaintModel from "../models/complaints.model";
import { IProduct } from "../types/interfaces/product-interface";

export class UserService{
    constructor(){}
    complaintRegister=  async (data) => {
        return ComplaintModel.create(data);
    }

    // getProductlist = async ():Promise<IProduct[]> =>{
    //     return await ProductModel.find().sort({_id:1});
    // }

    // userAddedProductlist = async (createdBy):Promise<IProduct> =>{
    //     return await ProductModel.findOne({createdBy})
    // }

    // userBookedProductlist = async (_id):Promise<IProduct> =>{
    //     return await ProductModel.findOne({_id})
    // }

    // getProductDetail = async (_id):Promise<IProduct> =>{
    //     return await ProductModel.findOne({_id})
    // }
}