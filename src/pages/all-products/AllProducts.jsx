import React, { useState } from 'react';
import "./AllProducts.css";
import productsData from '../../components/products-data/ProductsData';
import AllProductsLayout from './AllProductsLayout';
import Advantages from '../../components/advantages/Advantages';
import Footer from "../../components/footer/Footer"

const AllProducts = () => {
  const [filterProducts, updatedFilterProducts] = useState([]);
  const [activeSort, setActiveSort] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const clearedFilter = () => {
    updatedFilterProducts([]);
    setActiveSort('');
    setSelectedBrands([]);
  };
  
  const latestProducts = () => {
    const latest = productsData.slice(0, 6);
    updatedFilterProducts(latest);
    setActiveSort('latest');
  };

  const categoryFilter = () => {
    const filtered = productsData.filter(product => product.tag === "featured-product");
    updatedFilterProducts(filtered);
    setActiveSort('category');
  };
  
  const topProducts = () => {
    const filtered = productsData.filter(product => product.rateCount === 5);
    updatedFilterProducts(filtered);
    setActiveSort('topRated');
  };
  
  const sortingPrice = () => {
    const sortedProducts = [...productsData].sort((a, b) => a.finalPrice - b.finalPrice);
    updatedFilterProducts(sortedProducts);
    setActiveSort('priceLow');
  };
  
  const sortingReverse = () => {
    const sortedProducts = [...productsData].sort((a, b) => b.finalPrice - a.finalPrice);
    updatedFilterProducts(sortedProducts);
    setActiveSort('priceHigh');
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    let updatedBrands = [...selectedBrands];

    if (checked) {
      updatedBrands.push(value);
    } else {
      updatedBrands = updatedBrands.filter(brand => brand !== value);
    }

    setSelectedBrands(updatedBrands);
    
    if (updatedBrands.length > 0) {
      const filteredProducts = productsData.filter(product => updatedBrands.includes(product.brand));
      updatedFilterProducts(filteredProducts);
    } else {
      updatedFilterProducts(productsData);
    }
  };

  return (
    <>
      <div className='d-flex'>
        <aside className='left-side'>
          <div className='sortBy'>
            {activeSort && <button className='clearFilter' onClick={clearedFilter}>Clear Filters</button>}
            <h5>Sort By</h5>
            <hr />
            <dl>
              <dt 
                onClick={latestProducts} 
                className={activeSort === 'latest' ? 'active' : ''}
              >Latest</dt>
              <dt 
                onClick={categoryFilter} 
                className={activeSort === 'category' ? 'active' : ''}
              >Featured</dt>
              <dt 
                onClick={topProducts} 
                className={activeSort === 'topRated' ? 'active' : ''}
              >Top Rated</dt>
              <dt 
                onClick={sortingPrice} 
                className={activeSort === 'priceLow' ? 'active' : ''}
              >Price (Lowest First)</dt>
              <dt 
                onClick={sortingReverse} 
                className={activeSort === 'priceHigh' ? 'active' : ''}
              >Price (Highest First)</dt>
            </dl>
          </div>
          <div className='sortBy'>
            <h5>Filter By</h5>
            <hr />
            <h6>Brands</h6>
            <input 
              type="checkbox" 
              id='jbl' 
              value='JBL' 
              onChange={handleBrandChange}
              checked={selectedBrands.includes('JBL')}
            />
            <label htmlFor="jbl">JBL</label><br /> 
            <input 
              type="checkbox" 
              id='boat' 
              value='Boat' 
              onChange={handleBrandChange}
              checked={selectedBrands.includes('Boat')}
            />
            <label htmlFor="boat">Boat</label><br />
            <input 
              type="checkbox" 
              id='sony' 
              value='Sony' 
              onChange={handleBrandChange}
              checked={selectedBrands.includes('Sony')}
            />
            <label htmlFor='sony'>Sony</label><br />
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
      <Advantages />
      <Footer />
    </>
  );
};

export default AllProducts;
