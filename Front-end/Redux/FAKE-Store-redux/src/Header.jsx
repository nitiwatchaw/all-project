import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectQuantityCart } from './features/product/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {



    const cartItems = useSelector(selectQuantityCart)


    return (
        <nav className='flex justify-center h-16 items-center bg-slate-900 relative px-16'>

            <ul className='flex shrink w-full justify-center gap-20 text-xl  text-white'>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/product/All'>Product</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
            <div className="flex items-center gap-5">
                <Link to='/cart' className='text-white flex items-center '>
                    <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "5px" }} />
                    {cartItems}
                </Link>
                <button className=' text-white bg-indigo-700 p-2 rounded-md w-28 '>
                    <li className='list-none '>
                        <Link to='/product/add'>Add Product</Link>
                    </li>
                </button>
            </div>

        </nav>
    )
}

export default Header