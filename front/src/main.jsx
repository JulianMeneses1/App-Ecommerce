import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css'
import { EcommerceApp } from './EcommerceApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <EcommerceApp />
  </BrowserRouter>   
)
