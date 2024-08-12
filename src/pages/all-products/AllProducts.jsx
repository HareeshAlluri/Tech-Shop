
import React from 'react';
import "./AllProducts.css";
import { useState } from 'react';
import productsData from '../../components/products-data/ProductsData';
import AllProductsLayout from './AllProductsLayout';

const AllProducts = () => {
  const [filterProducts, updatedFilterProducts] = useState([]);

  const allProducts = () => {
    updatedFilterProducts([]);
  };
  const latestProducts=()=>{
    const latest=productsData.slice(0,6)
    updatedFilterProducts(latest)
  }

  const categoryFilter = (category) => {
    const filtered = productsData.filter(product => product.tag === category);
    updatedFilterProducts(filtered);
  };

  return (
    <div className='d-flex'>
      <aside className='left-side'>
        <div className='sortBy'>
          <h5>Sort By</h5>
          <hr />
          <dl>
            <dt onClick={latestProducts}>Latest</dt>
            <dt onClick={()=>categoryFilter("featured-product")}>Featured</dt>
            <dt>Top Rated</dt>
            <dt>Price (Lowest First)</dt>
            <dt>Price (Highest First)</dt>
          </dl>
        </div>
        <div className='sortBy'>
          <h5>Filter By</h5>
          <hr />
          <h6>Brands</h6>
          <input type="checkbox" id='jbl' /><label htmlFor="jbl">JBL</label><br /> 
          <input type="checkbox" id='boat' /><label htmlFor="boat">Boat</label><br />
          <input type="checkbox" id='sony'/><label htmlFor='sony'>Sony</label><br />
        </div>
        <div className='sortBy'>
          <h5>Category</h5>
          <hr />
          <input type="checkbox" id='head'/><label htmlFor="head">Headphone</label><br /> 
          <input type="checkbox" id='ear'/><label htmlFor='ear'>Earbuds</label><br />
          <input type="checkbox" id='earphone' /><label htmlFor='earphone'>Earphones</label><br />
          <input type="checkbox" id='neck'/><label htmlFor='neck'>Neckbands</label><br />
        </div>
        <div className='range-bar'>
          <h5>Price</h5>
          <input type="range" />
        </div>
      </aside>
      <aside className='right-side'>
        
          <div className="flexGallery"> 
            {(filterProducts.length > 0 ? filterProducts : productsData).map(item => (
              
                <AllProductsLayout key={item.id} item={item} />
              
            ))}
          
        </div>
      </aside>
    </div>
  );
};

export default AllProducts;

