import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../cart/Cart'
import Home from '../Home/Home'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Routing
