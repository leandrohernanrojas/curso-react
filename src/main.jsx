import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CarritoProveedor from './context/cartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProveedor>
    <App />
    </CarritoProveedor>
  </StrictMode>,
)
