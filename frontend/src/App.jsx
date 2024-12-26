/* eslint-disable no-unused-vars */
//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
//  export default App

// function App()
//  {
  // eslint-disable-next-line no-undef
  //const [count,setCount] = useState(0)

//   return (
//     <>
//         <h1 className='text-blue-400'>hello world</h1>
      
//     </>
//   )
// }

import React from 'react'
import Navbar from './components/shared/navbar'
import Home from './components/Home'
// import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// // import { Home, LogIn } from 'lucide-react'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
const appRouter = createBrowserRouter([
{
   path:'/',
   element:<Home/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'/signup',
  element:<Signup/>
}

])
function App() {
  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
   
    // <div className = "text-center text-red-400">
    //   Hello
    // </div>
  )
}
export default App