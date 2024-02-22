import { useState, useEffect, createContext, useContext, useRef, useReducer } from 'react'
import React from 'react'
import './App.css'
import LoginArea from './LoginArea'

const AuthContext = React.createContext();

const reducer = (state, action) => {


  if (action.type === 'login') {
    const { username, fullname } = action.payload
    return { username, fullname }
  }
  if (action.type === 'logout') {
    return null;
  }

  return state;
}
function App() {


  const [authState, authDispatch] = useReducer(reducer, null);


  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }} >
        <section className='app-section'>
          <div className="app-container">
            <LoginArea />
          </div>
        </section>

      </AuthContext.Provider>



      
    </>

  )
}

export { AuthContext };
export default App

