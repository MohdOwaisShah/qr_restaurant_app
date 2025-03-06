import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// components
import App from './App.jsx'
// import things for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// create router and provide path
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
