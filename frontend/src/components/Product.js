import React from 'react'
import { /*useDispatch*/ useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
//import Rating from './Rating'

const Product = ({ product }) => {
  //const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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
          <Card.Text as='div'>Size: {product.size}</Card.Text>
          <Card.Text as='div'>Color: {product.color}</Card.Text>
          {userInfo && userInfo.isAdmin && (
            <LinkContainer to={`/admin/product/${product._id}/edit`}>
              <Button variant='light' className='btn-sm'>
                <i className='fas fa-edit'></i>Edit
              </Button>
            </LinkContainer>
          )}
          <Card.Text as='h3'>£{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
