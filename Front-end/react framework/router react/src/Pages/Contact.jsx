import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            <Link to="/" state={"from Contact Page"}>Back to Home page</Link>
        </div>
    )
}

export default Contact