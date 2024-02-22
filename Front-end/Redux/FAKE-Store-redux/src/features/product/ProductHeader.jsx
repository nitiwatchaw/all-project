import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const ProductHeader = () => {


    const categories = ["All", "electronics", "jewelery", "men-clothing", "women-clothing"]


    return (
        <>
            <ul className='flex items-center justify-center h-16 gap-7 text-lg my-6'>
                {categories.map((cate, i) => {
                    return <li key={i}> <Link to={`/product/${cate}`}>{cate}</Link></li>
                })}

            </ul>
            <Outlet />
        </>
    )
}

export default ProductHeader