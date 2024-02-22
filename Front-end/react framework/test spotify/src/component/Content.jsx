import React, { useState, useEffect, useRef } from 'react'
import Category from './Category';
import CategoryPlaylist from './CategoryPlaylist';
import Track from './Track';
import { Route, Routes } from 'react-router-dom';


const Content = () => {

    return (
        <div className="overflow-hidden bg-gradient-to-t from-[#121212] via-[#121212] to-neutral-800  rounded-lg right-2 top-2 flex flex-col  ">

            <Routes>
                <Route path='/' element={<Category />}>

                </Route>
                <Route path='/categories/:id' element={<CategoryPlaylist />}>

                </Route>
                <Route path='/track/:id' element={<Track />}>

                </Route>
            </Routes>



        </div >
    )
}

export default Content