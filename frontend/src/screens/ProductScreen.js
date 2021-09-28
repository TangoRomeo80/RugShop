import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({})
  const [img1Src, setImg1Src] = useState('')
  const [img2Src, setImg2Src] = useState('')
  const [img3Src, setImg3Src] = useState('')
  const [img4Src, setImg4Src] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
      setImg1Src(data.image1)
      setImg2Src(data.image2)
      setImg3Src(data.image3)
      setImg4Src(data.image4)
    }

    fetchProduct()
  }, [match.params.id])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Card className='my-3 p-3 rounded'>
            <Card.Img src={img1Src} variant='top' />
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Card.Img
                    src={img2Src}
                    variant='top'
                    onClick={(e) => {
                      setImg1Src(img2Src)
                      setImg2Src(img1Src)
                    }}
                  />
                </Col>
                <Col md={4}>
                  <Card.Img
                    src={img3Src}
                    variant='top'
                    onClick={(e) => {
                      setImg1Src(img3Src)
                      setImg2Src(img1Src)
                    }}
                  />
                </Col>
                <Col md={4}>
                  <Card.Img
                    src={img4Src}
                    variant='top'
                    onClick={(e) => {
                      setImg1Src(img4Src)
                      setImg2Src(img1Src)
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: £{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
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
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
