import { Router } from "express";
import { UserController } from "../../controllers/user-controller";

const router=Router()
const user = new UserController

// ------------ sale ------------
// add new product
router.post('/add-product',user.addProduct)
// edit product
router.post('/edit-product',user.addProduct)
// delete product
router.post('/delete-product',user.addProduct)
// booking approve
router.post('/product-booking-approve',user.addProduct)
// booking reject
router.post('/product-booking-reject',user.addProduct)
// booking cancel
router.post('/product-booking-cancel',user.addProduct)
// product review list
router.get('/my-product-review', (req, res) => user.addProduct(req, res))
// add product booked date

// ------------ buy ------------

// user reviewed list
router.get('/my-review', (req, res) => user.addProduct(req, res))
// stared product list
router.get('/view-stared', (req, res) => user.addProduct(req, res))
// booked product history
router.get('/booked-history', (req, res) => user.addProduct(req, res))
// product add to cart
router.post('/product-add-to-star',user.addProduct)
// booking
router.post('/product-booking',user.addProduct)
// booking cancel
router.post('/cancel-booking',user.addProduct)
// add product veview
router.post('/product-review',user.addProduct)


// ------------ commun ------------
// home page product list
router.get('/homePage-product-list', (req, res) => user.getProductList(req, res))
// product list (booked list, filter)
router.get('/product-list', (req, res) => user.addProduct(req, res)) 
// product detail page (booked list)
router.get('/product-details', (req, res) => user.addProduct(req, res))
// chat
router.get('/chat', (req, res) => user.addProduct(req, res))

export default router