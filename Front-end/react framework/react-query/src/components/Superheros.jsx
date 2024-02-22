import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Superhero = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const fetch = () => {
        axios.get('http://localhost:4000/superheroes')
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            }).catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })
    }


    useEffect(() => {
        fetch();
    }, []);

    if (isLoading) {
        return <h2>Loading</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    return (

        <>
            <h2>Super Heros Page</h2>
            {data.map((e) => {
                return <div key={e.name}>{e.name}</div>
            })}
        </>
    )

}