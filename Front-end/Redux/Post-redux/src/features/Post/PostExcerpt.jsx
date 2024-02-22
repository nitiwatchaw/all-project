
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from './postSlice';

// prop from PostList (post state with jsonplaceholder api)
const PostExcerpt = ({ postId }) => {

    const { post } = useGetPostsQuery('getPosts', {
        selectFromResult: ({ data }) => ({
            post: data?.entities[postId]
        }),
    })



    return (
        <article>
            <h2>{post?.title}</h2>
            <p className="excerpt">{post?.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`${post?.id}`}>View Post</Link>
                <PostAuthor userId={post?.userId} />
                <TimeAgo timestamp={post?.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}



export default PostExcerpt