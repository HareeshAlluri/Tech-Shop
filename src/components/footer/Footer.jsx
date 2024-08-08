import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className='head'>    <footer>
      
      <div>
        <ul >
             <li className='text1'><h3>Tech-Shop</h3></li>
            <li><p>Subscribe to our Email alerts to receive early discount offers,</p><span>and new products info.</span></li>
            <li><input type="text" placeholder='Email Address*' className='email'/></li>
            <li><button className='subscribe'> Subscribe</button></li>
        </ul>   

      </div>
      <div>
        <ul className='text2'> 
        <li><h5 className='text1'>Help</h5></li>
            <li>FAQs</li>
            <li>Track Order</li>
            <li>Cancel Order</li>
            <li>Return Order</li>
            <li>Warranty info</li>
        </ul>
       
      </div>
      <div>
        <ul className='text2'>
        <li className='text1'><h5>Policies</h5></li>
            <li>Policies</li>
            <li>Security</li>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Terms&Conditions</li>
        </ul>
      </div>
      <div>
        <ul className='text2'>
        <li className='text1'><h5>Company</h5></li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Service Centres</li>
            <li>Careers</li>
            <li>Affliates</li>
        </ul>
        <hr />
       
      </div>
        
        
      
    </footer>
   
    

    </div>

  )
}

export default Footer;
