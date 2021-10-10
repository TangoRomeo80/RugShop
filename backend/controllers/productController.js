import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
//@access public

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}
  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 })

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).sort({ createdAt: -1 })
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
  const filtered = await Product.find({
    category: req.params.cat,
  }).sort({ createdAt: -1 })
  if (filtered.length != 0) {
    res.json(filtered)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Fetch products by category
// @route GET /api/products/category/:cat/:subCat
//@access public
const getProductsBySubCat = asyncHandler(async (req, res) => {
  //const filtered = products.filter((p) => p.category === req.params.cat)
  const filtered = await Product.find({
    category: req.params.cat,
    category2: req.params.subCat,
  }).sort({ createdAt: -1 })
  if (filtered.length != 0) {
    res.json(filtered)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image1: '/images/sample.jpg',
    image2: '/images/sample.jpg',
    image3: '/images/sample.jpg',
    image4: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    category2: 'none',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image1,
    image2,
    image3,
    image4,
    brand,
    category,
    category2,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image1 = image1
    product.image2 = image2
    product.image3 = image3
    product.image4 = image4
    product.brand = brand
    product.category = category
    product.category2 = category2
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated/available products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 }).limit(10)

  res.json(products)
})

export {
  getProducts,
  getProductById,
  getProductsByCat,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  getProductsBySubCat,
}
