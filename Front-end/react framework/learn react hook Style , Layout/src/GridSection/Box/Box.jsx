import React from 'react'
import './Box.css'
const Box = (props) => {

    const { children } = props
    
    return (
        <div className='container'>
            {children}

        </div>
    )
}

export default Box