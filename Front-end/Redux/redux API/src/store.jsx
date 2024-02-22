import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { attractionApi } from './services/attraction'
import attractionReducer from './services/features/attraction/attractionSlice'


export const store = configureStore({
  reducer: {
    [attractionApi.reducerPath]: attractionApi.reducer,
    attraction: attractionReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attractionApi.middleware),
})
setupListeners(store.dispatch)


