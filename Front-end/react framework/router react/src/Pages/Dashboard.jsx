import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Dashboard = ({ logout }) => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <Link to="settings">Setting</Link>
            <Outlet />
            <p>Welcome User</p>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Dashboard