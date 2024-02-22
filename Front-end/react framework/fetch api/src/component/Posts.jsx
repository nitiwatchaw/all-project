import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
}

const Posts = () => {
    const { data, error, isError, isLoading } = useQuery('posts', fetchPosts)
    if (isLoading) {
        return <div className="">Loading...</div>
    }
    if (isError) {
        return <div className="">{error.message}</div>
    }
    return (
        <div>
            <h1>Posts</h1>
            {data.map((val, i) => {
                return (
                    <li key={i}>{val.title}</li>
                )
            })}

        </div>
    )
}

export default Posts