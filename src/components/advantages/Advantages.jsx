import React from 'react'
import servicesData from "../products-data/ServiceData"
import "./Advantages.css"

function Advantages() {
  return (
    <div className='advantages'>
        <div className='heading'>
            <h3>Our Advantages</h3>
        </div>
        <div className='flexGallery'>
        {
            servicesData.map((item)=>(
                <div className='flexAdvantages'>
                <div>
                <h5 className='iconImage'>{item.icon}</h5>
                </div>
                <div className='text'>
                <p>{item.title} <br /> {item.info}</p> 
                </div>
                </div>
                
            ))
        }
        </div>
    </div>
  )
}

export default Advantages;
