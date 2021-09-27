import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const CategoryScreen = ({ match }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `/api/products/category/${match.params.cat}`
      )

      setProducts(data)
    }

    fetchProducts()
  }, [match.params.cat])

  return (
    <div>
      <>
        <h1>
          {match.params.cat === 'rug'
            ? 'Rugs'
            : match.params.cat === 'bedding'
            ? 'Bedding Items'
            : match.params.cat === 'curtain'
            ? 'Curtain and Curtain Poles'
            : match.params.cat === 'cushion'
            ? 'Cushion Cover and Pads'
            : match.params.cat === 'quilt'
            ? 'Duvet and Pillows'
            : match.params.cat === 'blanket'
            ? 'Blankets'
            : match.params.cat === 'tablemat'
            ? 'Table Mats'
            : match.params.cat === 'sofa'
            ? 'Sofa Cover and Throws'
            : match.params.cat === 'mink'
            ? 'Mink Throws and Fleece'
            : match.params.cat === 'mattress'
            ? 'Mattress protector and Toppers'
            : match.params.cat === 'towel'
            ? 'Towels'
            : 'Bathroom Set'}
        </h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    </div>
  )
}

export default CategoryScreen
