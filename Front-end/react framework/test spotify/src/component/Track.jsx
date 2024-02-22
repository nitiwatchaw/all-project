import React, { useRef, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchData } from '../hook/useGetToken'
import Navigate from './Navigate'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns';
import thLocale from 'date-fns/locale/th';
import { useScrollDown } from '../hook/useScrolldown'


const Track = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [limit, setLimit] = useState(50)
    const { data } = fetchData(`https://api.spotify.com/v1/playlists/${id}/tracks?&offset=0&limit=${limit}`)
    const ref = useRef()
    const getScroll = useScrollDown(ref)
    const [randomImage, setRandomImage] = useState(null);
    console.log(data)


    const onBack = () => {
        navigate(-1)
    }

    const formatMilliseconds = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds.padStart(2, '0')}`;
    };

    const formatDateAgo = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true, locale: thLocale });
    };

    useEffect(() => {
        const randomImageURL = data?.items[Math.floor(Math.random() * data.items.length)]?.track.album.images[0]?.url;
        setRandomImage(randomImageURL);

        const maxLength = data?.total

        const handleScroll = () => {
            if (ref.current.scrollTop > 2200) {
                if (limit >= maxLength) {
                    return
                } else {
                    setLimit(maxLength)
                }

            }
        };

        ref?.current?.addEventListener("scroll", handleScroll);

        return () => {
            ref?.current?.removeEventListener("scroll", handleScroll);
        };

    }, [data]);




    return (
        <div className='relative'>
            <div className="absolute z-50 w-full">
                <Navigate
                    isScollTrack={getScroll}
                    onPrev={onBack}
                    disableRight={true}
                />
            </div>

            <div ref={ref} className="overflow-auto h-[100vh] ">
                {/* header */}
                <div className="w-full  top-0 relative ">
                    <img
                        src={randomImage}
                        alt=""
                        className='w-full object-cover h-[380px]'
                    />
                </div>
                <div className="p-6 ">

                    <table className='w-full px-[50px]'>
                        <thead className='text-left h-[50px]  '>
                            <tr className='border-b border-neutral-700'>
                                <th className='text-center'>#</th>
                                <th>ชื่อ</th>
                                <th>อัลบั้ม</th>
                                <th>วันที่เพิ่ม</th>
                                <th className='text-center'>time</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data?.items.map((track, index) => {
                                return (
                                    <tr key={track.track.name} className='h-[80px] hover:bg-[#ffffff17] '>
                                        <td className='w-10 text-center'>
                                            {index + 1}
                                        </td>
                                        <td >
                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={track.track.album.images[0].url}
                                                    alt=""
                                                    className='rounded-lg w-[60px] h-[60px]'
                                                />
                                                <div className="">
                                                    {track.track.name}
                                                    {track.track.album.artists.map(artists => {
                                                        return (
                                                            <div className='' key={artists.id}>
                                                                <div className="">
                                                                    {artists.name}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </td>
                                        <td className='opacity-50'>
                                            {track.track.album.name}
                                        </td>
                                        <td className='opacity-50 w-[220px]'>{formatDateAgo(track.added_at)}</td>

                                        <td className='opacity-50 w-[60px] text-center'>
                                            {formatMilliseconds(track.track.duration_ms)}
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>


                </div>

            </div>

        </div >
    )
}

export default Track