import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"


const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}/`)
}

export const PaginatedQueries = () => {



    const [pageNumber, setPageNumber] = useState(1)

    const { isLoading, isError, error, data, isFetching } = useQuery(['colors', pageNumber],
        () => fetchColors(pageNumber),
        {
            keepPreviousData: true
        }

    )

    if (isLoading) {
        return <h2>Loading...Colors</h2>
    }


    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            {data?.data.map((color) => {
                return (
                    <div key={color.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                        <h2>{color.id}</h2>
                        <h2>{color.label}</h2>
                    </div>
                )
            })}
            <div className="">
                <button
                    disabled={pageNumber === 1}
                    onClick={() => { setPageNumber((page) => page - 1) }}>Prev
                </button>
                <button
                    disabled={pageNumber === 4}
                    onClick={() => { setPageNumber((page) => page + 1) }}>Next
                </button>

            </div>
            {isFetching && 'Loading'}
        </>
    )
}