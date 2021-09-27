import express from 'express'
const router = express.Router()
import Product from '../models/productModel'

router.get('/', async(req, res) => {
  const products = await Product.find({})
  res.json(products)
})

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

router.get('/category/:cat', (req, res) => {
  const filtered = products.filter((p) => p.category === req.params.cat)
  res.json(filtered)
})

export default router
