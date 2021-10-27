import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
//import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(listProductDetails(match.params.id))
    }
    fetchProduct()
  }, [dispatch, match])

  let imgSrc = product.image1
  let tempImgSrc = ''

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Card className='my-3 p-3 rounded'>
              <Card.Img src={imgSrc} variant='top' id='mainImg' />
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <Card.Img
                      src={product.image2}
                      variant='top'
                      onClick={(e) => {
                        tempImgSrc = e.target.getAttribute('src')
                        e.target.setAttribute('src', imgSrc)
                        imgSrc = tempImgSrc
                        document
                          .querySelector('#mainImg')
                          .setAttribute('src', imgSrc)
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <Card.Img
                      src={product.image3}
                      variant='top'
                      onClick={(e) => {
                        tempImgSrc = e.target.getAttribute('src')
                        e.target.setAttribute('src', imgSrc)
                        imgSrc = tempImgSrc
                        document
                          .querySelector('#mainImg')
                          .setAttribute('src', imgSrc)
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <Card.Img
                      src={product.image3}
                      variant='top'
                      onClick={(e) => {
                        tempImgSrc = e.target.getAttribute('src')
                        e.target.setAttribute('src', imgSrc)
                        imgSrc = tempImgSrc
                        document
                          .querySelector('#mainImg')
                          .setAttribute('src', imgSrc)
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                /> */}
                In stock: {product.countInStock}
              </ListGroup.Item>
              <ListGroup.Item>Size: {product.size}</ListGroup.Item>
              <ListGroup.Item>Color: {product.color}</ListGroup.Item>
              <ListGroup.Item>Price: £{product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                {userInfo && userInfo.isAdmin && (
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>Edit
                    </Button>
                  </LinkContainer>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>£{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col> */}
        </Row>
      )}
    </>
  )
}

export default ProductScreen
