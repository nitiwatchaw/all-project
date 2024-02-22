import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'



const Post = () => {



    const { id } = useParams();


    const [dataPost, setDataPost] = useState([])
    const [dataComment, setDataComment] = useState([])

    const getdataPost = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
            .then((res) => setDataPost(res.data))

    }

    const getCommentPost = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => setDataComment(res.data))
    }

    useEffect(() => {
        getdataPost(id)
        getCommentPost(id)
    }, [id])



    return (
        <div className='container'>
            {`Post บทความ ${id}`}
            <p>Comment: {dataComment.length} users</p>
            <div className="post-read">
                <div className='post'>
                    <p>Post: {dataPost.id}</p>
                    <p>Title: {dataPost.title}</p>
                    <p>Body: {dataPost.body}</p>
                </div>

                {dataComment.map((comment) => {
                    return (

                        <div key={comment.id} className="comment-wrap">
                            <p>Comment: {comment.id}</p>
                            <p>Name: {comment.name}</p>
                            <p>Email: {comment.email}</p>
                            <p>{comment.body}</p>
                        </div>

                    )
                })}



            </div>
        </div>
    )
}

export default Post