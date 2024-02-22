import { useEffect, useState } from 'react'
import data from '../info.json'
import './App.css'

function App() {

  const [active, setActive] = useState(false)

  const handleSetActiveItem = (id) => {
    setActive(id);
  };


  return (

    <div className="container">

      {data.map((e) => {
        return (
          <div className={`box   ${active === e.id ? "active" : ""}`} key={e.id} >
            <div className="menu " onClick={() => handleSetActiveItem(e.id)}>
              {e.userID}
            </div>
            <div className="detail">
              {e.userDetail.map((e, i) => {
                return (
                  <div key={i}>
                    {e.fname}
                    {e.lname}
                    {e.address}
                  </div>
                )
              })}
            </div>

          </div>
        )
      })}






    </div >

  )
}

export default App
