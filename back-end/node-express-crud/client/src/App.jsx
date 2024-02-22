
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
function App() {

  const [item, setItem] = useState([])

  useEffect(() => {

    const fetchdata = async () => {
      const res = await axios.get('http://localhost:5000/users')
      setItem(res.data)
    }

    fetchdata();
  },)





  const dataa = item.map((e, i) => {
    return (
      <div className='' key={i}>
        <p> ID: {e.id}</p>
        <p>Fname: {e.fname}</p>
        <p>Lname: {e.lname}</p>
        <p>Username: {e.username}</p>
        <img src={e.avatar} alt="" style={{ width: "100px" }} />

        <hr />
      </div>
    )
  })



  return (
    <>
      <h1>Hello World</h1>
      {dataa}
    </>
  )
}

export default App
