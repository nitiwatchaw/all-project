import { useQuery } from "react-query";
import axios from "axios";


// get gata of users
const fetchUserEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

// get gata of channelId
const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}



export const DependentQueries = ({ email }) => {

    // useQuery get parameter from prop
    const { data: user } = useQuery(['user', email], () => fetchUserEmail(email))


    // get channelId from user data
    const channelId = user?.data.channelId

    
    // useQuery get parameter from channelId
    const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    })

    return (
        <>
            <h2>Dependent RQ</h2>

            <div>The email that send is : <span style={{ fontWeight: "bold" }}>{email}</span></div>
            <div>user: <span style={{ fontWeight: "bold" }}>{user?.data.channelId}</span></div>
            <div style={{ display: "flex", gap: "10px" }}>courses:
                <span style={{ display: "flex", gap: "10px" }}>
                    {courses?.data.courses.map((e, i) => {
                        return (
                            <div key={i}>
                                {e}
                            </div>
                        )
                    })}
                </span>
            </div>


        </>
    )
}