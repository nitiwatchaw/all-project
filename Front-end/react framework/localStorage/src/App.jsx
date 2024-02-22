
import React, { useState } from 'react'
import './App.css'
import { useLocalStorage } from './LocalStorage'
function App() {


  const [value, setValue] = useState('')


  const { setItem, getItem, removeItem } = useLocalStorage('the data');

  return (
    <div className='container' >
      <h1>Localstorage</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <br />
      <br />


      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={() => removeItem()}>Remove</button>
      </div>
    </div>

  )
}


export default App

