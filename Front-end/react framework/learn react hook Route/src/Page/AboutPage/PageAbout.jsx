import React from 'react'
import './About.css'
import { Link, Route, Routes, BrowserRouter, Outlet } from 'react-router-dom'
import Myself from './PageInside/Myself'
import History from './PageInside/History'
const PageAbout = () => {
    return (
        <>
            <div className='container'>PageAbout</div>
            <nav>
                <Link to='/about/myself'>Myself</Link>
                <Link to='/about/history'>History</Link>

            </nav>

            <Outlet />

        </>
    )
}

export default PageAbout