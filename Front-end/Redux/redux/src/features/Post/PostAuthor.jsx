import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'


const PostAuthor = ({ userId }) => {
    // get state users from usersSlice
    const users = useSelector(selectAllUsers)

    // หา id ที่ตรงกับ id นั้นๆ
    const author = users.find(user => user.id === userId);

    return <span> by
        {author ? author.name : 'Unknow author'}
    </span>
}
export default PostAuthor