import React, { useState } from 'react';
import './Carousel.css';
import Search_by_city_card from './search_by_city_card.js';
import {FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight} from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Search_by_city_card />,
    <Search_by_city_card />,
    <Search_by_city_card />,
    <Search_by_city_card />,
    <Search_by_city_card />,
    <Search_by_city_card />
  ];

  const prevSlide = () => {
    const newSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const newSlide = (currentSlide === (slides.length - 3))? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };
  
  const slideToShow = slides.slice(currentSlide, currentSlide + 3);

  return (
    <div className = 'carousel' >
      <button onClick={prevSlide} className= "prev_next_button"><FaRegArrowAltCircleLeft className='prev_button'/></button>
      {slideToShow}
      <button onClick={nextSlide}className= "prev_next_button"><FaRegArrowAltCircleRight className='next_button'/></button>
    </div>
  );
};

export default Carousel;
