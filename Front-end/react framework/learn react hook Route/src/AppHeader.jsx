import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const AppHeader = () => {
    return (
        <div style={{
            backgroundColor: "black",
            width: "100%",
            textAlign: "center",
            height: "60px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            gap: "20px"
        }}>

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
           
        </div>
    )
}

export default AppHeader