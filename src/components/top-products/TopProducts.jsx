import React, {useState} from 'react';

import productsData from "../products-data/ProductsData"
import "./TopProducts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import TopProductsLayout from './TopProductsLayout';
import { Link } from 'react-router-dom';

function TopProducts() {
  const [filterProducts, updatedFilterProducts]= useState([]);

  const allProducts = () => {
    updatedFilterProducts([]);
  };
  
  const categoryFilter = (category) => {
    const filtered = productsData.filter(product => product.category === category);
    updatedFilterProducts(filtered);
  } 

  return (
    <div className='topProducts'>
      <h3 className='topHeading'>Top Products</h3>
      <div>
        <ul className='filterdProducts'>
        <li onClick={allProducts}>
            All
          </li>

          <li onClick={() => categoryFilter('Headphones')}>
            Headphones
          </li>

          <li onClick={() => categoryFilter('Earbuds')}>
            Earbuds
          </li>

          <li onClick={() => categoryFilter('Earphones')}>
            Earphones
          </li>

          <li onClick={() => categoryFilter('Neckbands')}>
            Neckbands
          </li>
        </ul>
      </div>
      <div className='flexGallery'>
        {(filterProducts.length > 0 ? filterProducts : productsData).slice(0, 11).map(item => (
          <TopProductsLayout key={item.id} item={item} />
        ))}
  
        <div className='browsealllayoutcard' ><Link to={'all-products'}>
          <div className='browse'>Browse All</div>
          <div className='browse'>Products <FontAwesomeIcon icon={faArrowRight} /></div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default TopProducts;
