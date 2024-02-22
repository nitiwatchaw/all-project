import { useState } from 'react'
import { useAddSuperHeroData, useSuperHerosData } from "../hooks/useSuperHerosData"
import { Link } from "react-router-dom"
export const RQSuperheros = () => {

    const [name, setName] = useState('')
    const [alterEgo, seAlterEgo] = useState('')

    const onSuccess = (data) => {
        console.log("fetch success", data)
    }
    const onError = (data) => {
        console.log("fetch failed", data)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(onSuccess, onError)


    const { mutate: addHero } = useAddSuperHeroData()

    
    const handleAddHeroClick = () => {

        const hero = { name, alterEgo }
        addHero(hero)

        setName('')
        seAlterEgo('')
    }



    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2> {error.message}</h2>
    }



    return (
        <>
            <h2> RQ Superhero</h2>


            <div>
                <h4>Add Hero</h4>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="text" value={alterEgo} onChange={(e) => { seAlterEgo(e.target.value) }} />
            </div>

            <button onClick={handleAddHeroClick}>Add Hero</button>
            <button style={{ margin: "20px 0" }} onClick={refetch}>Fetch Superheros</button>


            {data?.data.map((e) => {
                return (
                    <div key={e.name}>

                        <Link to={`/rq-super-heros/${e.id}`}>{e.id} {e.name}</Link>
                    </div>
                )
            })}


            {/* // ? data transform */}

            {/* {data.map(heros => {
                return <div key={heros}>Name: {heros}</div>
            })} */}

        </>
    )
}

