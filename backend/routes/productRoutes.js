import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
//@access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc Fetch single product by ID
// @route GET /api/products/:id
//@access public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

// @desc Fetch products by category
// @route GET /api/products/category/:cat
//@access public
router.get(
  '/category/:cat',
  asyncHandler(async (req, res) => {
    //const filtered = products.filter((p) => p.category === req.params.cat)
    const filtered = await Product.find({})
      .where('category')
      .equals(req.params.cat)
    if (filtered.length != 0) {
      res.json(filtered)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
