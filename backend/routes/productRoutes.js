import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  getProductsByCat,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/category/:cat').get(getProductsByCat)

export default router
