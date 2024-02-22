import { useState, useEffect } from "react";
import axios from "axios";


export const fetchData = (api) => {

    const [data, setData] = useState()

    const CLIENT_ID = "990c1a5d27aa4aba858fb1a21712c8a6";
    const CLIENT_SECRET = "a0b0c97c2268421abdc5f1caf8573a6a";

    useEffect(() => {

        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        };

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(res => res.json())
            .then(data => {

                const headers = {
                    Authorization: `Bearer ${data.access_token}`
                };

                axios.get(api, { headers })
                    .then(res => setData(res.data))
                    .catch(error => {
                        console.error('Error fetching data from Spotify API:', error);
                    });
            });


    }, [api])


    return { data, setData }

}