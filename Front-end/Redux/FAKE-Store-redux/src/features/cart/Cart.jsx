import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  selectTotalCart,
  deleteItemFromCart,
  addToCart,
  decreaseItemFromCart,
  getTotals,
  selectQuantityCart,
  clearCart,
  purchaseCart,
  selectSummaryCart
} from '../product/productSlice'
import { useEffect } from 'react'
import Lottie from 'lottie-react'
import emptyCart from '../../img/carttEmpty.json'
const Cart = () => {




  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const TotalCart = useSelector(selectTotalCart)
  const TotalQuantity = useSelector(selectQuantityCart)



  let quantity;
  if (TotalQuantity > 1) {
    quantity = 'items'
  } else {
    quantity = 'item'
  }

  const formatTotalCart = TotalCart.toFixed(2)

  const navigate = useNavigate()

  const handlePurchase = async () => {
    // Pass the navigate function as a callback
    dispatch(purchaseCart());
    navigate('/product/summary')
  };


  const goToProduct = () => {
    navigate('/product/All')
  }



  console.log(TotalCart)

  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch, cartItems])


  return (
    <div>

      <div className="mt-12 text-center text-3xl font-bold">
        <h2 >My Cart <span>{cartItems.length} list</span></h2>
      </div>

      {cartItems.length >= 1 ?
        <div className="mx-auto  mt-10 px-6 grid grid-cart gap-12">
          <table >
            <thead className='text-center border-b-4 border-slate-500 h-20 '>
              <tr>
                <th>Products</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map(cartItem => {
                  const totalPrice = (cartItem.quantity * cartItem.price).toFixed(2);
                  return (
                    <tr className='border-b-2 border-slate-300 h-48' key={cartItem.id}>
                      <td className='p-6'>
                        <div className="">
                          <p>{cartItem.title}</p>
                        </div>
                      </td>
                      <td>
                        <div className='p-6 bg-white flex justify-center'>
                          <img src={cartItem.image} alt="" width={100} />
                        </div>
                      </td>
                      <td>
                        <div className='p-6 text-center'>
                          <p>{cartItem.price} <span>$</span> </p>
                        </div>
                      </td>
                      <td>
                        <div className='p-6'>
                          <div className="flex items-center justify-center gap-2">
                            <button
                              className='bg-slate-100 w-10 h-10 '
                              onClick={() => dispatch(decreaseItemFromCart(cartItem))}>-</button>
                            <p className='bg-slate-200 w-10 h-10 flex items-center justify-center border border-slate-300'>
                              {cartItem.quantity}
                            </p>
                            <button
                              className='bg-slate-100 w-10 h-10 '
                              onClick={() => dispatch(addToCart(cartItem))}>+</button>
                          </div>
                        </div>
                      </td>
                      <td className=''>

                        <div className="p-6 flex items-center justify-center">
                          <button
                            className='bg-slate-300 w-10 h-10 text-white'
                            onClick={() => dispatch(deleteItemFromCart(cartItem))}>X</button>
                        </div>

                      </td>
                      <td className='text-center'>
                        <p>
                          {totalPrice} $
                        </p>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

          <div className=" bg-slate-100 p-6 rounded h-full flex gap-12 flex-col">
            <h3 className="text-2xl font-medium  text-gray-600">Summary</h3>
            <div className="flex gap-10 flex-col justify-between h-full font-medium ">
              <div className="flex flex-col gap-10">
                <div className="flex justify-between ">
                  <p className='text-slate-400 '>Order total </p>
                  <p className='text-gray-500'>{formatTotalCart} $ </p>
                </div>
                <div className="flex justify-between">
                  <p className='text-slate-400 '>Total quantity  </p>
                  <span className='text-gray-500'>{TotalQuantity} {quantity} </span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="">
                  <button
                    className='bg-gray-300 text-white  rounded-md w-full h-10'
                    onClick={() => dispatch(clearCart())}>Clear cart</button>
                </div>
                <div className="">
                  <button
                    className='bg-slate-400 text-white  rounded-md w-full h-10'
                    onClick={handlePurchase}>Purchase</button>
                </div>

              </div>
            </div>
          </div>

        </div> :
        <div className="w-full mx-auto flex items-center flex-col gap-3 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie
            animationData={emptyCart}
            className='!w-40  ' />
          <button className='bg-indigo-600 text-white rounded-lg w-28 h-10' onClick={goToProduct}>Go to Shop</button>
        </div>
      }



    </div>
  )
}

export default Cart