import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductCategory } from '../actions/productActions'

const CategoryScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(listProductCategory(match.params.cat))
    }
    fetchProduct()
  }, [dispatch, match])

  return (
    <div>
      <>
        <Link className='btn btn-dark my-3' to='/'>
          Go Back
        </Link>
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
        <hr></hr>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : match.params.cat === 'bedding' ? (
          <>
            <h2 className='text-center'>Complete set</h2>
            <Row>
              {products.map((product) =>
                product.category2 === 'complete' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>Duvet set/Half set</h2>
            <Row>
              {products.map((product) =>
                product.category2 === 'duvet' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>Sheet set</h2>
            <Row>
              {products.map((product) =>
                product.category2 === 'sheet' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>Fitted sheet</h2>
            <Row>
              {products.map((product) =>
                product.category2 === 'fitted' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>Flat sheet</h2>
            <Row>
              {products.map((product) =>
                product.category2 === 'flat' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>Valance sheet</h2>
            <Row>
              {products.map((product) =>
                product.category2 === 'valance' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>1 piece bedspread</h2>
            <Row>
              {products.map((product) =>
                product.category2 === '1pc' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>3 piece bedspread</h2>
            <Row>
              {products.map((product) =>
                product.category2 === '3pc' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
            <h2 className='text-center'>7 piece comforter</h2>
            <Row>
              {products.map((product) =>
                product.category2 === '7pc' ? (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ) : (
                  <></>
                )
              )}
            </Row>
          </>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </>
    </div>
  )
}

export default CategoryScreen
