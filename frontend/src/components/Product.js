import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
//import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image1} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            {/* <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            /> */}
            In stock: {product.countInStock}
          </Card.Text>
          <Card.Text as='div'>
            Size: {product.size}
          </Card.Text>
          <Card.Text as='div'>
            Color: {product.color}
          </Card.Text>
          <Card.Text as='h3'>£{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
