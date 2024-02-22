import React from 'react'
import style from './Notification.module.css'
import styled from 'styled-components' //library

const Box = styled.div`
background-color: rgb(46 46 46);
border-radius:8px;
margin-bottom:40px;
border: 2px solid black;  `;


const Title = styled.h3` font-size:30px;`

const Notification = ({ title, description }) => {




    return (
        <Box>
            <p className={style.title} >{title}</p>
            <p>{description}</p>
            <a href="">Notification</a>
            <Title>
                <p>This is the Box</p>
            </Title >
        </Box>

    )
}

export default Notification