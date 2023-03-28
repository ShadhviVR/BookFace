import React from 'react'
import Avatar from './Avatar';
import { statusCarousel } from './data';

const Carousel = () => {
  const handleSlide = (direction: string) => {
    const slider = document.getElementsByClassName('carousel-body')[0];
    if (direction === "left")
      slider.scrollBy(-400, 0);
    else
      slider.scrollBy(400, 0);
  }

  return (
    <section className='relative'>
      <div className='absolute left-0 top-1/2 transform -translate-y-1/2 arrow-btn left-icon' onClick={() => handleSlide('left')}>
        <img src="./images/angle-left-solid.svg" alt="left-angle" className="w-4 h-4" />
      </div>
      <div className='absolute right-0 top-1/2 transform -translate-y-1/2 arrow-btn right-icon' onClick={() => handleSlide('right')}>
        <img src="./images/angle-right-solid.svg" alt="left-angle" className="w-4 h-4" />
      </div>
      <div className="carousel-body flex overflow-x-scroll h-24 border border-gray-200 bg-white rounded-lg relative">
      {statusCarousel.map((item: { img: string; name: string }) => {
          return <Avatar key={item.name} image={item} />;
        })}
      </div>
    </section>
  )
}

export default Carousel;
