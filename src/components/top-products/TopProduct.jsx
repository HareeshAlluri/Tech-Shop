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
    <div className='d-flex '>
        
        <ul class="list-unstyled  ">
            <li ><img src={product.images[0]} alt={product.title} width={100} /></li><br />
            <li><img src={product.images[1]} alt={product.title} width={100} /></li><br />
            <li><img src={product.images[2]} alt={product.title} width={100} /></li><br />
            <li><img src={product.images[3]} alt={product.title} width={100} /></li><br />
        </ul>
        <div className='mainImage'>
           <img src={product.images[0]} alt={product.title} width={550} height={600}  /> 
        </div>
        <div className='specifications'>
            <div>
            <h3>{product.title}</h3>
            <h5>{product.info}</h5>
            
          <pre> <span >
            {
              [...Array(product.rateCount)].map(i => <IoMdStar key={i} />)
            }
          </span> | {product.ratings} Ratings</pre>
          <hr />
          </div>
          <div>
            <pre>{product.finalPrice}  <strike> {product.originalPrice}</strike></pre>

            <h6>
  You Save: ₹{Math.round(product.originalPrice - product.finalPrice)} (
  {Math.round(
    ((product.originalPrice - product.finalPrice) / product.originalPrice) * 100
  )}
  %)
</h6>
<p>(Inclusive of all taxes)</p>
<hr />

          </div>
          <div>
            <h6>Offers and Discounts</h6>
            <pre><button>No Cost EMI on Credit Card</button>   <button>Pay Later & Avail Cashback  </button></pre>
            <hr />
          </div>
          <button>Add to cart   </button>

        </div>
    </div>
  );
}

export default TopProduct;
