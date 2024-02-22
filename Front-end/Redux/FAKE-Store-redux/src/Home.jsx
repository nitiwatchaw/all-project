import React, { useEffect } from 'react'
import Lottie from "lottie-react";
import store from './img/Animation - 1702261914416.json'
import { selectCartItems , getTotals } from './features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const cartItems = useSelector(selectCartItems)



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cartItems])

    return (
        <>
            <Lottie
                animationData={store}
                loop={false}
                className='w-home-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-30'
            />

        </>
    )
}

export default Home