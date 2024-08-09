import React from 'react'
import HeroSlider from "../slider/HeroSlider"
import TopProducts from "../top-products/TopProducts"
import Advantages from "../advantages/Advantages"
import Footer from "../footer/Footer"


const Home = () => {
  return (
    <div>
      <HeroSlider />
      <TopProducts />
      <Advantages />
      <Footer />
    </div>
  )
}

export default Home
