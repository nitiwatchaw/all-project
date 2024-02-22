import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
const Header = () => {


    const activeClassName = "text-white text-md font-bold flex items-center gap-6 transition duration-300"

    return (
        <div className="bg-[#121212] p-5 rounded-lg">
            <nav className='flex flex-col gap-6'>
                <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : 'text-md font-bold flex items-center gap-6 text-gray-400 transition duration-300 hover:text-white'}>
                    <span className='text-3xl'><MdHomeFilled /></span> หน้าหลัก
                </NavLink>
                <NavLink to='/search' className={({ isActive }) => isActive ? activeClassName : 'text-md font-bold flex items-center gap-6 text-gray-400 transition duration-300 hover:text-white'}>
                    <span className='text-2xl'><FiSearch /></span> ค้นหา
                </NavLink>

            </nav>
        </div>
    )
}

export default Header