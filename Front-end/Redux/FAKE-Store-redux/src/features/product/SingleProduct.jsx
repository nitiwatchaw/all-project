import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductById, selectCartItems, getTotals } from './productSlice'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { deleteProduct } from './productSlice'
import Favorite from './Favorite'
import { addToCart } from './productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const SingleProduct = () => {

  const { productId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const product = useSelector((state) => selectProductById(state, Number(productId)))

  const cartItems = useSelector(selectCartItems)


  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems])


  const onDeleteProduct = () => {
    try {
      dispatch((deleteProduct({ id: product.id }))).unwrap()
      navigate('/product/All')
    }
    catch (err) {
      console.log('Fail to delete the prodcut', err)
    }
  }




  return (
    <div className='bg-blue-100 max-w-6xl mx-auto p-16 rounded-md mt-8 relative'>
      <div className='absolute right-20 top-20'>
        <Favorite product={product} />
      </div>
      <div className="bg-white p-6 rounded-md w-full h-96 ">
        <img src={product?.image} alt="" className='w-full h-full object-contain' />
      </div>
      <div className="mt-12">
        <div className="mb-3">
          <p className='text-lg font-bold '>Title</p>
          <p>{product?.title}</p>
        </div>
        <div className="mb-3">
          <p className='text-lg font-bold'>Description</p>
          <p>{product?.description}</p>
        </div>

        <div className="mb-3">
          <p className='text-lg font-bold'>Category</p>
          <p>{product?.category}</p>
        </div>
        <div className="mb-3">
          <p className='text-lg font-bold'>Price</p>
          <p>{product?.price} <span>$</span> </p>
        </div>
        <div className="mb-6">
          <p className='text-lg font-bold'>Rating</p>
          <p><span>Rate: </span>{product?.rating?.rate}</p>
          <p><span>Count: </span>{product?.rating?.count}</p>
        </div>


        <button
          className='!w-40 h-9 text-white bg-amber-700 rounded-md'
          onClick={() => dispatch(addToCart(product))}>Add to Cart</button>


        <div className="flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2  -bottom-6  !w-5/6">
          <button onClick={onDeleteProduct} className='w-full bg-slate-600 text-white h-10 rounded-lg'>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <Link to={`/product/edit/${product?.id}`} className='flex justify-center items-center w-full grow bg-blue-900 text-white h-10 rounded-lg'>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>

        </div>

      </div>
    </div>
  )
}

export default SingleProduct