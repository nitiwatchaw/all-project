import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts } from '../features/Post/postSlice'

import AddPostForm from '../features/Post/AddPostForm'
import PostAuthor from '../features/Post/PostAuthor'
import TimeAgo from '../features/Post/TimeAgo'
import ReactionButton from '../features/Post/ReactionButton'
import { deletePost } from '../features/Post/postSlice'

const PostList = () => {

    // get state from postSlice
    const posts = useSelector(selectAllPosts)

    // จัดเรียงตามวันเวลาจากน้อยไปมาก
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


    const dispatch = useDispatch()

    //แสดง Post ทั้งหมด โดยการ map
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>Title: {post.title}</h3>
            <p>Content: {post.content.substring(0, 100)}</p>
            <p style={{ display: "flex", justifyContent: "space-between" }}>
                {/* แสดงชื่อผู้เขียน */}
                <PostAuthor userId={post.userId} />

                {/* แสดงเวลา */}
                <TimeAgo timestamp={post.date} />
            </p>
            {/* แสดงปุ่ม */}
            <ReactionButton post={post} />
            <button onClick={() => dispatch(deletePost({ postId: post.id }))}>Delete</button>
        </article>
    ))

    return (
        <section className='post-container'>
            <h1>Posts</h1>

            <AddPostForm />
            {renderedPosts}

        </section>
    )
}

export default PostList