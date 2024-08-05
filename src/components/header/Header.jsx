import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";



function Header() {
  return (
    
    <header >    
        <h2 className="title">Tech-Shop</h2>
        <ul className='headerIcons'>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        <li><FontAwesomeIcon icon={faCartShopping} /><span className='count'></span></li>
        <li><FontAwesomeIcon icon={faUser} /></li>
        
        </ul>
    </header>
      
   
  )
}

export default Header
