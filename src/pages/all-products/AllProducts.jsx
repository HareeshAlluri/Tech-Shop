import React from 'react'
import "./AllProducts.css"

const AllProducts = () => {
  return (

    <div className='cont'>
        
      <aside className='left-side'>
        <div className='sortBy'>
        <h5>Sort By</h5>
        <hr />
        <dl>
        <dt>Latest</dt>
        <dt>Featured</dt>
        <dt>Top Rated</dt>
        <dt>Price(Lowest First)</dt>
        <dt>Price(Highest First)</dt>
        </dl>
        </div>
        <div className='sortBy'>
        <h5>Filter By</h5>
        <hr />
        <h6>Brands</h6>
        <input type="checkbox" id='jbl' /><label for="jbl"  >JBL</label><br /> 
        <input type="checkbox" id='boat' /><label for="boat">Boat</label><br />
        <input type="checkbox" id='sony'/><label for='sony'>Sony</label><br />

        </div>
        <div className='sortBy'>
        <h5>Category</h5>
        <hr />
        
        <input type="checkbox"  id='head'/><label for="head">Headphone</label><br /> 
        <input type="checkbox" id='ear'/><label for='ear'>Earbuds</label><br />
        <input type="checkbox" id='earphone' /><label for='earphone'>Earphones</label><br />
        <input type="checkbox" id='neck'/><label for='neck'>Neckbands</label><br />

        </div>
        <div className='range-bar'>
          <h5>Price</h5>

          <input type="range" />

        </div>

        


      </aside>
      <aside className='right-side'>


      </aside>
    </div>
  )
}

export default AllProducts
