import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [category2, setCategory2] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage1(product.image1)
        setImage2(product.image2)
        setImage3(product.image3)
        setImage4(product.image4)
        setBrand(product.brand)
        setCategory(product.category)
        setCategory2(product.category2)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler1 = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage1(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const uploadFileHandler2 = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage2(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const uploadFileHandler3 = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage3(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const uploadFileHandler4 = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage4(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image1,
        image2,
        image3,
        image4,
        brand,
        category,
        category2,
        description,
        countInStock,
      })
    )
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                className='mb-3'
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                className='mb-3'
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image 1'>
              <Form.Label>Image 1</Form.Label>
              <Form.Control
                className='mb-3'
                type='text'
                placeholder='Enter image url'
                value={image1}
                onChange={(e) => setImage1(e.target.value)}
              ></Form.Control>
              <Form.File
                className='mb-3'
                id='image-file'
                label=''
                custom
                onChange={uploadFileHandler1}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='image 2'>
              <Form.Label>Image 2</Form.Label>
              <Form.Control
                className='mb-3'
                type='text'
                placeholder='Enter image url'
                value={image2}
                onChange={(e) => setImage2(e.target.value)}
              ></Form.Control>
              <Form.File
                className='mb-3'
                id='image-file'
                label=''
                custom
                onChange={uploadFileHandler2}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='image 3'>
              <Form.Label>Image 3</Form.Label>
              <Form.Control
                className='mb-3'
                type='text'
                placeholder='Enter image url'
                value={image3}
                onChange={(e) => setImage3(e.target.value)}
              ></Form.Control>
              <Form.File
                className='mb-3'
                id='image-file'
                label=''
                custom
                onChange={uploadFileHandler3}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='image 4'>
              <Form.Label>Image 4</Form.Label>
              <Form.Control
                className='mb-3'
                type='text'
                placeholder='Enter image url'
                value={image4}
                onChange={(e) => setImage4(e.target.value)}
              ></Form.Control>
              <Form.File
                className='mb-3'
                id='image-file'
                label=''
                custom
                onChange={uploadFileHandler4}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                className='mb-3'
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                className='mb-3'
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as='select'
                className='mb-3'
                type='select'
                placeholder='Enter category '
                value={category2}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>{category}</option>
                <option value='rug'>Rug</option>
                <option value='bedding'>Bedding</option>
                <option value='curtain'>Curtain</option>
                <option value='cushion'>Cushion</option>
                <option value='quilt'>Quilt and Pillow</option>
                <option value='blanket'>Blankets</option>
                <option value='tablemat'>Table Mat</option>
                <option value='sofa'>Sofa Cover</option>
                <option value='mink'>Mink Throws</option>
                <option value='mattress'>Mattress Protector</option>
                <option value='towel'>Towels</option>
                <option value='bathroom'>Bathroom Sets</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='category2'>
              <Form.Label>Category 2</Form.Label>
              <Form.Control
                as='select'
                className='mb-3'
                type='select'
                placeholder='Enter category 2'
                value={category2}
                onChange={(e) => setCategory2(e.target.value)}
              >
                <option>{category2}</option>
                <option value='none'>None</option>
                <option value='complete'>Complete Set</option>
                <option value='duvet'>Duvet set/Half set</option>
                <option value='sheet'>Sheet set</option>
                <option value='fitted'>Fitted sheet</option>
                <option value='flat'>Flat sheet</option>
                <option value='valance'>Valance sheet</option>
                <option value='1pc'>1 piece bedspread</option>
                <option value='3pc'>3 piece bedspread</option>
                <option value='7pc'>7 piece comforter</option>
                <option value='3d'>3D Style</option>
                <option value='pona'>Pona</option>
                <option value='nova'>Nova</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                className='mb-3'
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
