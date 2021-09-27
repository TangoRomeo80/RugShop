import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const BeddingScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  const filtered = products.filter(p => p.category === 'Bedding')

  return (
    <div>
      <>
      <h1>Bedding Items</h1>
      <Row>
        {filtered.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
    </div>
  )
}

export default BeddingScreen
