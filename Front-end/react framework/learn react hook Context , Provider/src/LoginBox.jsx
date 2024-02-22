import React, { useContext } from 'react'
import { AuthContext } from './App'


const fakeUser = {
    username: ' nice789',
    fullname: ' Tao kinf ling'
}

const LoginBox = () => {

    const { authState, authDispatch } = useContext(AuthContext)

    const loginSubmit = (event) => {
        event.preventDefault();
        authDispatch({ type: 'login' , payload:fakeUser });
    }

    const loginoutSubmit = () => {
        authDispatch({ type: 'logout' });
    }


    if (!!authState) {
        return (
            <div>
                <p>Auth username = {authState.username}</p>
                <p>Auth fullname = {authState.fullname}</p>
                <button onClick={loginoutSubmit}> Log out</button>
            </div>
        )
    }

    return (
        <form onSubmit={loginSubmit}>
            <p><input type="text" placeholder='username' /></p>
            <p><input type="password" placeholder='password' /></p>
            <p><input type="submit" placeholder='type' /></p>
        </form>
    )
}

export default LoginBox