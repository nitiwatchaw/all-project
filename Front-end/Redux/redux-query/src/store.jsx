import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/Counter/CounterSlice'
import postReducer from './features/Post/postSlice'
import usersReducer from './features/users/usersSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: usersReducer
    }
})