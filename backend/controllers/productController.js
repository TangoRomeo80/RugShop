import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
//@access public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Fetch products by category
// @route GET /api/products/category/:cat
//@access public
const getProductsByCat = asyncHandler(async (req, res) => {
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

export { getProducts, getProductById, getProductsByCat }
