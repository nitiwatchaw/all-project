import React, { useState } from 'react'
import LikePoke from './LikePoke'
import { BsFillTrash3Fill } from 'react-icons/bs'
const FavPoke = ({ fav, del }) => {

    const [totalLike, setTotalLike] = useState(0)
    return (
        <>
            <h2 style={{ marginBottom: "20px", color: "black", fontWeight: "bold" }}> {`Amount of Poke: ${fav.length}`}</h2>
            <h2 style={{ marginBottom: "20px", color: "black", fontWeight: "bold" }}> {`Poke Love: ${totalLike}`}</h2>
            <div className='pokeCon'>

                {fav.map((e) => {
                    return (
                        <div className='poke' key={e.id} >
                            <h1>{e.name}</h1>
                            <img src={e.sprites?.other?.home?.front_default} alt="" />
                            <div className="wrap-btn">
                                <LikePoke totalLike={totalLike} setTotalLike={setTotalLike} />
                                <button className='del-btn' onClick={() => { del(e.id) }} ><BsFillTrash3Fill /></button>
                            </div>
                            
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default FavPoke