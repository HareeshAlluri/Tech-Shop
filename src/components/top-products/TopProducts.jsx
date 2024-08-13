import React, {useState} from 'react';

import productsData from "../products-data/ProductsData"
import "./TopProducts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import TopProductsLayout from './TopProductsLayout';
import { Link } from 'react-router-dom';

function TopProducts()
 {
  const [filterProducts, updatedFilterProducts]= useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  

  const allProducts = () => {
    updatedFilterProducts([]);
    setActiveCategory('All')
    
  };
  
  const categoryFilter = (category) => {
    const filtered = productsData.filter(product => product.category === category);
    updatedFilterProducts(filtered);
    setActiveCategory(category);
  }

  return (
    <div className='topProducts'>
      <h3 className='topHeading'>Top Products</h3>
      <div>
        <ul className='filterdProducts'>
        <li onClick={allProducts} className={activeCategory ==='All'?'active':''}>
            All
          </li>

          <li onClick={() => categoryFilter('Headphones')} className={activeCategory==='Headphones'?'active':''} >
            Headphones
          </li>

          <li onClick={() => categoryFilter('Earbuds')} className={activeCategory==='Earbuds'?'active':''}>
            Earbuds
          </li>

          <li onClick={() => categoryFilter('Earphones')} className={activeCategory==='Earphones'?'active':''}>
            Earphones
          </li>

          <li onClick={() => categoryFilter('Neckbands')} className={activeCategory==='Neckbands'?'active':''}>
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
