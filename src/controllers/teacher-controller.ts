import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { IProduct } from "../types/interfaces/product-interface"
import { bodyRequiredDataValidator } from "../utils/functions/validator"
import { TeacherService } from "../services/teacher-service"


export class TeacherController extends ControllerBase {
    private userService = new TeacherService()

    addProduct = async (request: ExpressRequest, response: ExpressResponse) => {
        const body: IProduct = request.body
        try {
            const required = ['product_name','price']
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            let product = []

            let newProduct = {
                product_name: body?.product_name,
                product_category: body?.product_category,
                company_name: body?.company_name,
                company_logo: body?.company_logo,
                photo_list: body?.photo_list,
                dealer_representative: body?.dealer_representative,
                representative: {
                    name: body?.representative?.name,
                    phone: body?.representative?.phone,
                    email: body?.representative?.email,
                },
                price: body?.price,
                Location: body?.Location,
                description: body?.description,
                condition: body?.condition,
                Payment_Options: body?.Payment_Options,
                // offer_aailable: body?.offer_aailable,
                // offer: {
                //     offer_price:body?.offer_price,
                //     start_date: body?.start_date,
                //     end_date: body?.end_date,
                // },
                created: new Date().getDate(),
                createdBy: body?.createdBy,
            }
            const res = await this.userService.craeteNewProduct(newProduct)
            product.push(res)
            this.jsonResponse(response, null,product);
        } catch (e) {
            this.error(response, 500, null, e)
        }

    }



    getProductList = async (request: ExpressRequest, response: ExpressResponse) => {
        try {
            let product = await this.userService.getProductlist();
        
            this.jsonResponse(response, null, product);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }




}