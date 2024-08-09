import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Home from '../Home/Home'
import AllProducts from '../../pages/all-products/AllProducts'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='cart' element={<Cart />} />
        <Route path='all-products' element={<AllProducts />} />
      </Routes>
    </div>
  )
}

export default Routing
