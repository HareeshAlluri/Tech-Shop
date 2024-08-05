import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./HeroSlider.css";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='mainCarouseldiv'>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={3000}>
        <Carousel.Item>
          <img
            className="CarouselImg"
            src='/images/products/jbl660nc-1.png'
            alt="First slide"
          />
          <h2>OVER EAR</h2>
          <div className='mainCarouselText'>
            <h3>JBL Live 660NC</h3>
            <h1>Keep The Noise Out,</h1>
            <h1>Or In. You Choose.</h1><br />
            <h4 className='priceText'>₹9,999 <strike className="strikedText">₹14,999</strike></h4><br />
            <button className='carouselButton'>Shop Now</button>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="CarouselImg"
            src='/images/products/boat131-3.png'
            alt="Second slide"
          />
          <h2>IN EAR</h2>
          <div className='mainCarouselText'>
            <h3>boat Airdopes 131</h3>
            <h1>Featherweight for</h1>
            <h1>Comfort All-Day</h1><br />
            <h4 className='priceText'>₹1,099 <strike className="strikedText">₹2,999</strike></h4>
            <button className='carouselButton'>Shop Now</button>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="CarouselImg"
            src='/images/products/sonyXb910n-1.png'
            alt="Third slide"
          />
          <h2>OVER EAR</h2>
          <div className='mainCarouselText'>
            <h3>Sony WH-XB910N</h3>
            <h1>Give Your Favourite</h1>
            <h1>Music A Boost.</h1><br />
            <h4 className='priceText'>₹1,099 <strike className="strikedText">₹2,999</strike></h4>
            <button className='carouselButton'>Shop Now</button>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ul className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={index === 0 ? 'active' : ''}
          onClick={() => handleSelect(0)}
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={index === 1 ? 'active' : ''}
          onClick={() => handleSelect(1)}
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={index === 2 ? 'active' : ''}
          onClick={() => handleSelect(2)}
        ></li>
      </ul>
    </div>
  );
};

export default HeroSlider;
