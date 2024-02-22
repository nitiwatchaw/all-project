import { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'


import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Dashboard from './Pages/Dashboard'
import Error from './Pages/Error'
import Profile from './Pages/Profile'

function App() {
  const [loggedIn, setLoggedIn] = useState(null)

  function handleLogin() {
    setLoggedIn(true)
  }
  function handleLogout() {
    setLoggedIn(false)
  }


  let activeClassName = "nav-active"


  return (
    <BrowserRouter>

      <header style={{ background: "rgb(141 101 244)" }}>
        <h2 style={{ textAlign: "center" }}>Router</h2>
      </header>
      <nav style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined}>Contact</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClassName : undefined}>Dashboard</NavLink>
      </nav>


      <Routes>
        <Route path='/' element={loggedIn ? <Navigate to='/dashboard' /> : <Home login={handleLogin} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/dashboard' element={loggedIn ? <Dashboard logout={handleLogout} /> : <Navigate to="/" />}>
          <Route path='settings' element={<p>This is the nestd setting route</p>}></Route>
        </Route>



        <Route path='/Profile'>
          <Route path=':userId' element={<Profile />}></Route>
        </Route>



        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
