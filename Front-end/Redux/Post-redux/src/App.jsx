
import './App.css'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Counter from './components/Counter'
import PostList from './features/Post/PostList'
import SinglePostPage from './features/Post/SinglePostPage'
import EditPostForm from './features/Post/EditPostForm'
import UserList from './features/users/UserList'
import UserPage from './features/users/UserPage'

function App() {



  return (
    <div className='app'>


      <nav >
        <ul >
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/post'>Post</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
        </ul>

      </nav>


      <Routes>

        <Route path='/counter' element={<Counter />} />
        <Route path='/post' element={<PostList />} />
        <Route path='/post/:postId' element={<SinglePostPage />} />
        <Route path='/post/edit/:postId' element={<EditPostForm />} />


        <Route path='/user' element={<UserList />} />
        <Route path='/user/:userId' element={<UserPage />} />

        <Route path='*' element={<Navigate to='/' replace />}></Route>


      </Routes>
    </div>
  )
}

export default App
