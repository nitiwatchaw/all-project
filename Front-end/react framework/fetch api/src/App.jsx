import React, { useState, useEffect } from 'react'
import { QueryClientProvider, QueryClient, useQuery } from 'react-query'
import './App.css'
import axios from 'axios'
import Dog1 from './Dog1'
import Dog2 from './Dog2'
import { Post } from './component/Post'
import Posts from './component/Posts'

const App = () => {


  const [data, setData] = useState(null)
  const [dataF, setDataF] = useState(null)


  const queryClient = new QueryClient();

  useEffect(() => {

    fetch("https:/dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
      })


    axios.get("https:/dog.ceo/api/breeds/image/random")
      .then((res) => setDataF(res.data.message))

  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <Dog1 data={data} />
      <Dog2 dataF={dataF} />


      <Post />
      <Posts />


    </QueryClientProvider >
  )
}

export default App
