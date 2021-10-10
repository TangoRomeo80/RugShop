import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  getProductsByCat,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  getProductsBySubCat,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
router.route('/category/:cat').get(getProductsByCat)
router.route('/category/:cat/:subCat').get(getProductsBySubCat)

export default router
