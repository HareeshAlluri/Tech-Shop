import React from 'react'
import { IoMdStar } from 'react-icons/io'
import "./AllProducts.css"
import { Link } from 'react-router-dom'

const AllProductsLayout = ({item}) => {
    const {images, title, info, finalPrice,originalPrice, rateCount }=item
  return (
    <>
      <div className='cards'>
        
        <div className='productsImage'>
        <Link to={`/product/${item.id}`}>
          <img src={images[0]} alt="imagesss" className='product-image' />
          </Link>
        </div>
       
        <div className='semicard'>
          <span >
            {
              [...Array(rateCount)].map(i => <IoMdStar key={i} />)
            }
          </span>
          <Link to={`/product/${item.id}`}>
          <h5 >{title}</h5>
          </Link>
          <p >{info}</p>
         <hr />
          <h3>
            ₹{finalPrice} <strike> ₹{originalPrice}</strike>
          </h3>
          <button>Add to cart</button>
        </div>
        
      </div>
    </>
  )
}

export default AllProductsLayout
