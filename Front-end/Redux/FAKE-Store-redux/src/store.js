import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product/productSlice'
import categoryReducer from "./features/category/categorySlice";
import { getTotals } from "./features/product/productSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer
    }
})

store.dispatch(getTotals());

setupListeners(store.dispatch)