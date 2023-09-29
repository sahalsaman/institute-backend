
export interface IProduct {
    // _id?: string,
    product_name: string,
    product_category: string,
    company_name: string,
    company_logo: string,
    photo_list: IAttachment[],
    dealer_representative: boolean,
    representative: Representative,
    price: number,
    Location: string,
    description: string,
    condition: string,
    booked_application: IBookedApplication[],
    rating: number,
    reviews: string[],
    review_status: ReviewStatus,
    Payment_Options: string[],
    offer_aailable: Boolean,
    offer: IOffer,
    disabled: Boolean,
    updated_on: Date,
    created: Date,
    createdBy: string
}

export interface Representative {
    name: String,
    phone: String,
    email: String
}

export interface IAttachment {
    _id?: string,
    name?: string,
    url: string,
    uploadOn?: Date,
    key?: string
}

export interface IBookedApplication {
    _id?: string,
    name?: string,
    rent_date?: string | RentDate
}

export interface RentDate {
    start_date: string,
    end_date: string
}

export interface ReviewStatus {
    good: number,
    average: number,
    bad: number,
}
export interface IOffer{
    offer_price: number,
    start_date: Date,
    end_date: Date,
}

export interface IReview{
    _id?: string,
    createdBy:string,
    productId:string,
    review_title:string,
    review_description:string
}