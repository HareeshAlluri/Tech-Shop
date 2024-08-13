import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Home from '../Home/Home'
import AllProducts from '../../pages/all-products/AllProducts'
import TopProduct from '../top-products/TopProduct'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='cart' element={<Cart />} />
        <Route path='all-products' element={<AllProducts />} />
        <Route path='/product/:id' element={<TopProduct />} />
      </Routes>
    </div>
  )
}

export default Routing
