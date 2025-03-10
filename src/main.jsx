import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import things for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// components
import App from './App.jsx'
import Cart from './pages/Cart.jsx'
import TransactionHistory from './pages/TransactionHistory.jsx'

// create router and provide path
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/transaction-history',
      element: <TransactionHistory />
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
