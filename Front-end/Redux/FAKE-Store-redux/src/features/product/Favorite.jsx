import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { addLike } from './productSlice';







const Favorite = ({ product }) => {


    let star;
    if (product?.reactions) {
        star = <FaStar style={{ color: "#fe8043" }} />
    } else {
        star = <FaRegStar />
    }

    const dispatch = useDispatch()


    return (
        <>
            <button
                className='text-2xl'
                type='button'
                onClick={() => dispatch(addLike({ productId: product.id }))} >
                {star}
            </button>

        </>
    )
}

export default Favorite