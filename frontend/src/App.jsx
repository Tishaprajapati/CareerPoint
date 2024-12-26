/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/shared/navbar'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'


const appRouter =createBrowserRouter([
  {
    path:'/',
    // eslint-disable-next-line react/jsx-no-undef
    element:<Home/>
  },
  {
    path:'/login',
     //eslint-disable-next-line react/jsx-no-undef
    element:<Login/>
  },
  {
    path:'/signup',
    // eslint-disable-next-line react/jsx-no-undef
    element:<Signup/>
  },
])

function App() {
  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  )
}
export default App