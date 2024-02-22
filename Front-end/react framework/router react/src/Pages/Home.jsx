import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = ({ login }) => {
  let location = useLocation()
  let navigate = useNavigate()

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => {
        login();
        navigate("/dashboard")
      }} >
        Login
      </button>
      <h5>{location.state}</h5>
    </>
  )
}

export default Home