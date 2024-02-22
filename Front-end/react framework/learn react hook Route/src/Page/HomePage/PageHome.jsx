import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
const PageHome = () => {


  const [postDatas, setPostDatas] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => setPostDatas(res.data))

  }, [])


  return (
    <div className='container'>
      PageHome
      <div className='container'>

        <div className="wrap-post">
          {postDatas.map((e) => {
            return (
              <div className='post-item' key={e.id}>
                <h4 >Post:
                  <Link to={`/post/` + e.id}   > {e.title}</Link>
                </h4>
                <p>{e.body}</p>

              </div>
            )
          })}


        </div>

      </div>


    </div>
  )
}

export default PageHome