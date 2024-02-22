import React from 'react'
import Box from './Box/Box'
import Grid from '../GridSection/Grid/Grid'

const GridArea = () => {
    return (

        <Grid columns={3}>
            <Box>
                <h2>Order Per Day</h2>
                <ul>
                    <li>3 September - 1,582 orders</li>
                    <li>2 September - 1,649 orders</li>
                    <li>1 September - 17,55 orders</li>
                </ul>
            </Box>
            <Box >
                <h2>Order Per Day</h2>
                <p>หมายเหตุ :is the overall price</p>
                <ul>
                    <li>1 Carrot - 200,000 $</li>
                    <li>1 Tomato - 120,000 $</li>
                    <li>1 Cucumble - 105,000 $</li>
                </ul>
            </Box>
            <Box >
                <h2>Qoute of the day</h2>
                <p>We alway have the next days ... life have everyday</p>
                <p>by P'toon</p>
            </Box>


        </Grid>
    )
}

export default GridArea