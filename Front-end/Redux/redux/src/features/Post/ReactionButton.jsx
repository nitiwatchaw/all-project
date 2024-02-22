import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";


const reactEmoji = {
    thumbsUp: '👍',
    wow: "😮",
    heart: "❤️",
    rocket: "🧨",
    coffee: "☕"
}


const ReactionButton = ({ post }) => {

    const dispatch = useDispatch()

    // map object จาก reactEmoji                            //key    //value
    const reactionButtons = Object.entries(reactEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"              
                                                            //parameter จาก reactionsAdded
                onClick={() => dispatch(reactionsAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButton