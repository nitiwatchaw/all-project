import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchData } from '../hook/useGetToken'
import Navigate from './Navigate'
import { useNavigate } from 'react-router-dom'
import { useScrollDown } from '../hook/useScrolldown'
const CategoryPlaylist = () => {

    const { id } = useParams()
    const ref = useRef()


    const navigate = useNavigate();

    const { data } = fetchData(`https://api.spotify.com/v1/browse/categories/${id}/playlists?offset=0&limit=48`)
    const { dataCategory } = fetchData(`https://api.spotify.com/v1/browse/categories?country=TH&offset=0&limit=48`)

    // console.log(data?.playlists)

    const matchCategory = dataCategory?.categories.items.find(item => item?.id === id);

    const onBack = () => {
        navigate(-1)
    }
    const getScroll = useScrollDown(ref)

    return (
        <>
            <Navigate
                isScoll={getScroll}
                onPrev={onBack}
                disableRight={true}
            />
            <div ref={ref} className="overflow-auto h-config">

                <div className="p-6">
                    <div className="text-2xl font-bold mb-3">
                        {matchCategory?.name}
                    </div>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>

                        {data?.playlists.items.map((list, index) => {
                            return (
                                <Link to={`/track/${list?.id}`} key={list?.id || index} className='rounded-lg flex flex-col gap-2'>

                                    {list?.images ?
                                        list?.images.map(image => {
                                            return (
                                                <div key={image.url}>
                                                    <img
                                                        src={image.url}

                                                        alt=""
                                                        className='rounded-lg'
                                                    />
                                                </div>
                                            )
                                        })
                                        : (
                                            <div>
                                                <img
                                                    src="/noimg.jpg"
                                                    alt=""
                                                    className='rounded-lg w-full h-full object-cover' />
                                            </div>
                                        )

                                    }
                                    <div className="">
                                        {list?.name ? list?.name : "no data"}
                                    </div>
                                    <div className="text-neutral-400 text-sm">
                                        {list?.description}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                </div>

            </div>
        </>

    )
}

export default CategoryPlaylist