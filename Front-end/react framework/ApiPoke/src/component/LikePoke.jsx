import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
const LikePoke = ({ totalLike, setTotalLike }) => {
    const [like, setLike] = useState(false)

    const likeCLick = () => {
        setLike(!like)
        if (!like) {
            setTotalLike(totalLike + 1)
        } else if (like) {
            setTotalLike(totalLike - 1)
        }

    }


    return (
        <button onClick={likeCLick}>
            {like ? (<FaHeart style={{ color: "#e9197a" }} />) : (<FaRegHeart />)}
        </button>
    )
}

export default LikePoke