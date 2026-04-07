import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* PHẢI CÓ basename để GitHub Pages hiểu đường dẫn */}
    <BrowserRouter basename="/portfolio-2026"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)