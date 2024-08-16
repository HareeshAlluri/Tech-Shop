import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products-data/ProductsData';
import "./TopProduct.css";
import {  IoMdStar } from 'react-icons/io';


const TopProduct = () => {
  const  {id}  = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const selectedProduct = productsData.find(item => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flexGallery '>
        
        <ul class="list-unstyled  ">
            <li><img src={product.images[0]} alt={product.title} width={100} /></li><br />
            <li><img src={product.images[1]} alt={product.title} width={100} /></li><br />
            <li><img src={product.images[2]} alt={product.title} width={100} /></li><br />
            <li><img src={product.images[3]} alt={product.title} width={100} /></li><br />
        </ul>
        <div className='mainImage'>
           <img src={product.images[0]} alt={product.title} width={580} height={650}  /> 
        </div>
        <div className='specifications'>
            <div className='first'>
            <h3>{product.title}</h3>
            <h5>{product.info}</h5>
            
          <pre className='ratings'> <span  className='stars'>
            {
              [...Array(product.rateCount)].map(i => <IoMdStar key={i} />)
            }
          </span> | {product.ratings} Ratings</pre>
          <hr />
          </div>
          <div className='second'>
            
            <h2><pre >₹{product.finalPrice}  <strike> ₹{product.originalPrice}</strike></pre></h2>
            <div class="d-flex justify-content-between">
            <h6>
  You Save: ₹{Math.round(product.originalPrice - product.finalPrice)} (
  {Math.round(
    ((product.originalPrice - product.finalPrice) / product.originalPrice) * 100
  )}
  %)
</h6>
<button>✔In Stock</button>

</div>
<div >
<p>(Inclusive of all taxes)</p>
  
</div>
<hr />

          </div>
          <div className='offers'>
            <h5>Offers and Discounts</h5>
            <pre><button>No Cost EMI on Credit Card</button>   <button>Pay Later & Avail Cashback  </button></pre>
            <hr />
            <button className='fourth'>Add to cart</button>
          </div>
          

        </div>
    </div>
  );
}

export default TopProduct;
