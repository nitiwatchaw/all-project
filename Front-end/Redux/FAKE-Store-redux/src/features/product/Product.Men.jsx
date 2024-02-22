import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from './productSlice'
import { Link } from 'react-router-dom'
import Favorite from './Favorite'

const ProductMenCloth = () => {

    const products = useSelector(selectAllProducts)


    const productMenCloth = products.filter(product => product.category === "men's clothing")


    return (
        <div className='p-8'>

            <div className="grid grid-product gap-12">
                {
                    productMenCloth.map(product => {
                        return (
                            <div key={product.id} className='p-6 bg-blue-100 rounded-md flex flex-col'>
                                <div className="grow">
                                    <div className="bg-white h-60 p-6 rounded-md mb-6">
                                        <img src={product.image} alt="" className='w-full h-full object-contain' />
                                    </div>

                                    <p className='text-lg font-bold mb-6'> {product.title}</p>
                                    <p className='mb-6'>Description: {product.description.substring(0, 75)}...</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link to={`/product/${product.id}`} className='bg-cyan-700 text-white px-5 py-2 rounded '>View</Link>
                                    <Favorite product={product} />
                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default ProductMenCloth