import React, { useState } from 'react'
import { useMutation } from 'react-query'
import axios from 'axios';
export const Post = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState("")


    const createPost = async () => {
        const res = await axios.post('https:/jsonplaceholder.typicode.com/posts')
        setMessage(res.data)
    }

    const { isLoading, isError, error, mutate } = useMutation(createPost, { retry: 3 })




    return (
        <>
            <div className='post'>
                <h1>Create a Post</h1>
                <label >Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <br />

                <label >Description</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <button onClick={() => { mutate({ id: Date.now(), title, description }) }}>Create</button>
                <p>Create a new Post ID: {message && message.id}</p>
                <div className="" style={{ color: "gray", background: "#234" }}>

                    {isLoading ? "Saving" : ""}
                    {isError ? error.message : ""}

                </div>
            </div>
        </>
    )


}

