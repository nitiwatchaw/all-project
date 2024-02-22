import React from 'react'
import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'

import AppHeader from './AppHeader'
import PageHome from './Page/HomePage/PageHome'
import PageAbout from './Page/AboutPage/PageAbout'
import PageError from './Page/PageError/PageError'
import Myself from './Page/AboutPage/PageInside/Myself'
import History from './Page/AboutPage/PageInside/History'
import Post from './Post'




const App = () => {


  return (
    <>
      <AppHeader />
      <Routes>

        {/* home page */}
        <Route path='/' exact element={<PageHome />}>  </Route>


        {/* nest page */}
        <Route path='/about' element={<PageAbout />}>
          <Route path='/about/myself' element={<Myself />} />
          <Route path='/about/history' element={<History />} />
        </Route>


        {/* Dynamic */}
        <Route path='/post/:id' element={<Post />}></Route>

        {/* error */}
        <Route path='/*' element={<PageError />}>  </Route>
      </Routes>
    </>
  )
}

export default App
