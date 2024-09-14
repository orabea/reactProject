import { Children, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/HomePage/Home'
import Catigories from './components/Catigories/Catigories'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import Products from './components/Products/Products'
import Brands from './components/Brands/Brands'
import { CounterContextProvider } from './Context/CounterContext'
import { UserContextProvider } from './UserContext/UserContext'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartContextProvider from './Context/CartContext'
import TokenContextProvider from './Context/TokenContext'
import toast, { Toaster } from 'react-hot-toast';


let query = new QueryClient();

let x = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Cart', element: <Cart /> },
      { path: 'Products', element: <Products /> },
      { path: 'ProductDetails/:id', element: <ProductDetails /> },
      { path: 'Register', element: <Register /> },
      { path: 'Catigories', element: <Catigories /> },
      { path: 'Login', element: <Login /> },
      { path: 'brands', element: <Brands /> },
      { path: '*', element: <NotFound /> },

    ]
  }
]);
function App() {

  return <CartContextProvider>
    <TokenContextProvider>

      <QueryClientProvider client={query}>

        <UserContextProvider>

          <CounterContextProvider>

            <RouterProvider router={x}></RouterProvider>

          </CounterContextProvider>
        </UserContextProvider>

      </QueryClientProvider>

    </TokenContextProvider>
    <Toaster></Toaster>

  </CartContextProvider>




}

export default App
