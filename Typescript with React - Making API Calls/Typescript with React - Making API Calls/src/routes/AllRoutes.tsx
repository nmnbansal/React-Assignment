import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Navbar from './Navbar'

export default function AllRoutes() {
  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </>
  )
}
