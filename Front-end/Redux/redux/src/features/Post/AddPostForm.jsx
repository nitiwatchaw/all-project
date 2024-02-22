import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { postAdded } from "./postSlice";
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers);

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthortChange = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        // if have both title and content
        if (title && content) {

            dispatch(
                //call back funtion 
                postAdded(title, content, userId)
            );

            // changed to empty
            setTitle('')
            setContent('');

        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <section className="addPost">

            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthortChange}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <button
                    onClick={onSavePostClicked}
                    type="button"
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm