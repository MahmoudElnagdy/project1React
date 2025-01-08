

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'

let x = createBrowserRouter([
  {path:'' , element:<Layout/> , children: [
    {index:true , element:<Home/>},
    {path:'project1React/about' , element:<About/>},
    {path:'project1React/contact' , element:<Contact/>},
    {path:'project1React/portfolio' , element:<Portfolio/>},
  ]},
])

export default function App() {


  return (
    <>
    <RouterProvider router={x}></RouterProvider>
     </>
  )
}

