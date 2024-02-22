import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostIds, useGetPostsQuery } from './postSlice'
import AddPostForm from './AddPostForm'
import PostExcerpt from './PostExcerpt'



const PostList = () => {



    const { isLoading, isSuccess, isError, error } = useGetPostsQuery()

    const orderedPostsIds = useSelector(selectPostIds)


    // create loading navigate and post
    let content;

    if (isLoading) {
        content = <p>"Loading..."</p>
    } else if (isSuccess) {

        content = orderedPostsIds.map(postId => <PostExcerpt key={postId} postId={postId} />)

    } else if (isError) {
        content = <p>{error}</p>
    }

    return (
        <section className='post-container'>
            <h1>Posts</h1>

            <AddPostForm />
            {content}

        </section>
    )
}

export default PostList