import React from 'react'
import './Grid.css'
const Grid = (props) => {

    const { children, columns } = props

    return (
        <div className={`grid grid-${columns}`}>{children}</div>
    )
}

export default Grid