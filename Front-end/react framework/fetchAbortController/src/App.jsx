import React, { useState, useEffect, useRef } from 'react'

import './App.css'


const App = () => {


  const base_url = 'https://jsonplaceholder.typicode.com';
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)


  const abortControllerRef = useRef(null) //cancle request

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true)

      try {
        const res = await fetch(`${base_url}/posts/${page}`, {
          signal: abortControllerRef.current?.signal,
        })
        const post = await res.json()
        setPost(post)
      }
      catch (err) {

        if (err.name === 'AbortError') {
          console.log("Aborted");
          return
        }

        setError(err)
      }
      finally {
        setIsLoading(false)
      }

    }

    fetchPosts()
  }, [page])


  if (error) {
    return <div className="">Please try again</div>
  }

  return (
    <>
      <h1>Title</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page ({page})</button>

      {isLoading && <div className="">Loading</div>}

      {
        !isLoading &&
        <ul>
          <li key={post.id}>{post.title}</li>
        </ul>
      }



    </>
  )
}

export default App
