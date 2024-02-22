import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/Counter/CounterSlice'
import { apiSlice } from './features/api/apiSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})