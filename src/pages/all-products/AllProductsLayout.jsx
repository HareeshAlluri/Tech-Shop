import React from 'react'
import { IoMdStar } from 'react-icons/io'
import "./AllProducts.css"
import { Link } from 'react-router-dom'

const AllProductsLayout = ({item}) => {
    const {images, title, info, finalPrice,originalPrice, rateCount }=item
  return (
    <>
      <div className='cards'>
        <Link to={`/product/${item.id}`}>
        <div className='productsImage'>
          <img src={images[0]} alt="imagesss" className='product-image' />
        </div>
        <div className='semicard'>
          <span >
            {
              [...Array(rateCount)].map(i => <IoMdStar key={i} />)
            }
          </span>
          <h5 >{title}</h5>
          <p >{info}</p>
         <hr />
          <h3>
            ₹{finalPrice} <strike> ₹{originalPrice}</strike>
          </h3>
          <button>Add to cart</button>
        </div>
        </Link>
      </div>
    </>
  )
}

export default AllProductsLayout
