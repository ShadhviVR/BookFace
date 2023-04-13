import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

import './wsp-gallery.css';

interface GalleryImage {
  img: string;
}

interface WSPGalleryProps {
  galleryImages: GalleryImage[];
}

const WSPGallery: React.FC<WSPGalleryProps> = ({ galleryImages }) => {

  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (index: number): void => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  const prevSlide = (): void => {
    slideNumber === 0 
      ? setSlideNumber(galleryImages.length - 1) 
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = (): void => {
    slideNumber + 1 === galleryImages.length 
      ? setSlideNumber(0) 
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {galleryImages.map((slide, index) => (
          <div 
            className='single' 
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <img src={slide.img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WSPGallery;
