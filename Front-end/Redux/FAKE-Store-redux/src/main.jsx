import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store.js'
import { fetchProducts } from './features/product/productSlice.js'
import { fetchCategory } from './features/category/categorySlice.js'


store.dispatch(fetchProducts())

store.dispatch(fetchCategory())


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
)
