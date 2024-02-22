
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import PostList from './components/PostList'
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
        </ul>
      </nav>


      <Routes>

        <Route path='/post' element={<PostList />} />
        <Route path='/counter' element={<Counter />} />

      </Routes>
    </div>
  )
}

export default App
