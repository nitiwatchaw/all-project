import React, { useState, useEffect, useRef } from 'react'
import { fetchData } from '../hook/useGetToken';
import Navigate from './Navigate';
import { Link } from 'react-router-dom';
import { useScrollDown } from '../hook/useScrolldown';
const Category = () => {

    const ref = useRef()
    const [next, setNext] = useState(0)
    const [bthDisableRight, setBtnDisableRight] = useState(false)
    const [bthDisableLeft, setBtnDisableLeft] = useState(false)
    const { data } = fetchData(`https://api.spotify.com/v1/browse/categories?country=TH&offset=${next}&limit=20`)
    const getScroll = useScrollDown(ref)

    const onNext = () => {
        if (next === 40) {
            return
        } else {
            setNext(next + 20)
        }
    }
    const onPrev = () => {
        if (next === 0) {
            return
        } else {
            setNext(next - 20)
        }

    }



    useEffect(() => {
        if (next === 0) {
            setBtnDisableLeft(true)
        } else if (next === 40) {
            setBtnDisableRight(true)
        } else {
            setBtnDisableLeft(false)
            setBtnDisableRight(false)
        }


    }, [next, ref])


    return (
        <>
            <Navigate
                isScoll={getScroll}
                disableLeft={bthDisableLeft}
                disableRight={bthDisableRight}
                onNext={onNext}
                onPrev={onPrev}
            />

            {/* content */}
            <div ref={ref} className="overflow-auto h-config ">

                <div className=" justify-start item-start  p-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 text-center">
                    {data?.categories?.items.map((category) => {
                        return (
                            <Link to={`categories/${category.id}`}

                                key={category.id}
                                className='flex aspect-square transition duration-300 flex-col hover:bg-[#282828] cursor-pointer gap-3 bg-[#181818] rounded-lg p-3'>
                                {category?.icons.map((icon, index) => {
                                    return (

                                        <img src={icon?.url} alt="" className='w-full h-full object-cover' key={index} />

                                    )
                                })}

                                <div className="text-xl font-bold">
                                    {category?.name}
                                </div>


                            </Link>
                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default Category