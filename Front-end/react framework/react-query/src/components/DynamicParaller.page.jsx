import { useQueries } from "react-query";
import axios from "axios";



const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}



export const DynamicParallelPage = ({ heroIds }) => {

    const queryResults = useQueries(

        heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id),
            }
        })

    )

    return (
        <>
            {queryResults.map((result, index) => (
                <div key={index}>
                    <h2>Superhero {heroIds[index]}</h2>
                    <p>Name: {result.data?.data?.name}</p>
                    <p>Alter Ego: {result.data?.data?.alterEgo}</p>
                </div>
            ))}
        </>
    )
}