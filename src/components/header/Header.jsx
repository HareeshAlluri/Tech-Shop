import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { Link } from 'react-router-dom';



function Header() {
  return (
    
    <header >    
        <h2 className="title"><Link  to={"/"}  >Tech-Shop</Link></h2>
        <ul className='headerIcons'>
        <li className='lens'><FontAwesomeIcon icon={faMagnifyingGlass} />
        <div>
          <button>Search</button></div></li>
        <li className='lens'><Link  to={"cart"} ><FontAwesomeIcon icon={faCartShopping} /></Link><button>
          cart</button><span className='count'></span></li>
        <li className='lens'><FontAwesomeIcon icon={faUser} />
          {/* <div className='lens-container'>
            <h5>Hello!</h5>
            <p>Access acount and manage orders</p>
            <button>Login/Signup</button>
            <hr />
            <p>Orders</p>
            <p>Wishlist</p>
            <p>Gift Cards</p>
            <p>Saved Cards</p>
            <p>Saved Addresses</p>
            </div> */}
          </li>
        </ul>
    </header>
      
   
  )
}

export default Header
