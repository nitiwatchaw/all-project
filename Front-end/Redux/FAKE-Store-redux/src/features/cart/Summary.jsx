import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectSummaryCart, endProcess, getTotals, selectCartItems, selectTotalCartSummary } from '../product/productSlice'
const Summary = () => {

    const cartItems = useSelector(selectCartItems)
    const summaryCart = useSelector(selectSummaryCart)
    const navigate = useNavigate()
    const TotalCart = useSelector(selectTotalCartSummary)

    const formatTotalCart = TotalCart.toFixed(2)

    const dispatch = useDispatch()
    const handleEndProcess = () => {
        dispatch(endProcess())
        navigate('/')
    }



    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch, cartItems])

    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-center my-10'>Summary</h2>
            <div className="bg-slate-100 w-full p-6">
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Qunatity
                            </th>
                            <th>
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {summaryCart.map((cart, i) => {

                            const totalPrice = (cart.quantity * cart.price).toFixed(2);

                            return (
                                <tr key={i} className='h-12'>
                                    <td>{cart.title}</td>
                                    <td className='text-center'>{cart.price}</td>
                                    <td className='text-center'>{cart.quantity}</td>
                                    <td className='text-center'>{totalPrice} $</td>
                                </tr>
                            )
                        })}
                        <tr className=" h-16">
                            <td className='font-bold'>Total Price</td>
                            <td></td>
                            <td></td>
                            <td className='text-center underline underline-offset-2'>{formatTotalCart} $</td>
                        </tr>
                    </tbody>

                </table>

            </div>
            <div className='mt-10  w-full flex justify-center'>
                <button onClick={handleEndProcess} className='bg-slate-300 text-white w-40 h-10 rounded hover:bg-slate-400' >
                    Quit
                </button>
            </div>
        </div>
    )
}

export default Summary