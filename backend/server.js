const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.get('/api/category/:cat', (req, res) => {
  const filtered = products.filter((p) => p.category === req.params.cat)
  res.json(filtered)
})

app.listen(5000, console.log('Server running in port 5000'))
