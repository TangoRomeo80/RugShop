import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductSubCategory } from '../actions/productActions'

const SubCategoryScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productSubCategory)
  const { loading, error, products } = productList

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(listProductSubCategory(match.params.cat, match.params.subCat))
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
        <h2 className='text-center'>
          {match.params.subCat === 'complete'
            ? 'Complete set'
            : match.params.subCat === 'duvet'
            ? 'Duvet set/Half set'
            : match.params.subCat === 'sheet'
            ? 'Sheet set'
            : match.params.subCat === 'fitted'
            ? 'Fitted sheet'
            : match.params.subCat === 'flat'
            ? 'Flat sheet'
            : match.params.subCat === 'valance'
            ? 'Valance sheet'
            : match.params.subCat === '1pc'
            ? '1 piece bedspread'
            : match.params.subCat === '3pc'
            ? '3 piece bedspread'
            : match.params.subCat === '7pc'
            ? '7 piece comforter'
            : match.params.subCat === '3d'
            ? '3D Style'
            : match.params.subCat === 'pona'
            ? 'Pona'
            : match.params.subCat === 'nova'
            ? 'Nova'
            : 'General'}
        </h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
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

export default SubCategoryScreen
