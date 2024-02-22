import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    let { userId } = useParams();

    return (
        <>
            <h3>Profile</h3>
            <p>The id of this user is {userId}</p>
        </>
    )
}

export default Profile