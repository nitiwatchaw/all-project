import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from './features/api/apiSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </BrowserRouter>
)
