import { useInfiniteQuery } from "react-query"
import axios from "axios"


const fetchColors = ({ pageParam = 1 }) => {

    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}




export const InfiniteQueries = () => {

    const {
        isLoading,
        isError,
        error,
        data,
        hasNextPage,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery(
        ['colors'],
        fetchColors,
        {
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 4) {
                    return pages.length + 1
                } else {
                    return undefined
                }
            },

        },
    )



    if (isLoading) {
        return <h2>Loading...Colors</h2>
    }


    if (isError) {
        return <h2>{error.message}</h2>
    }



    return (
        <>
            {data?.pages.map((group, i) => {

                return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {
                            group.data.map((color) => {
                                return (
                                    <div key={color.id}>
                                        <h2>{color.id} {color.label}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
            <div className="">
                <button disabled={!hasNextPage}
                    onClick={fetchNextPage}>
                    Load more
                </button>

                <div>
                    {isFetching && !isFetchingNextPage ? " Fetching..." : null}
                </div>
            </div>
        </>
    )
}