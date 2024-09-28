  import React, { useState } from 'react'
  import {  IoMdStar } from 'react-icons/io';
  import "./TopProducts.css"
  import { Link } from 'react-router-dom';

  function TopProductsLayout({item}) {

    const [count, setCount]=useState({});

    const increment=()=>{
      setCount(count+1);
    }
    // console.log(count);

    const {images, title, info, finalPrice,originalPrice, rateCount, id }=item
    return (
      <>
        <div className='cards '>
          
          <div className='productsImage'>
          <Link to={`/product/${id}`}>
            <img src={images[0]} alt="imagesss" className='product-image' />
            </Link>
          </div>
          
          <div className='semicard'>
            <span >
              {
                [...Array(rateCount)].map(i => <IoMdStar key={i} />)
              }
            </span>
            <Link to={`/product/${id}`}>
            <h5 >{title}</h5>
            </Link>
            <p >{info}</p>
          <hr />
            <h3>
              ₹{finalPrice} <strike> ₹{originalPrice}</strike>
            </h3>
            <button onClick={increment}>Add to cart</button>
            

              
          </div>
          
        </div>
      </>
    )
  }

  export default TopProductsLayout
