import React, { useState } from 'react';
import MainCarousel from '../MainCarousel';
import styles from './CardDetail.module.scss';

console.log(styles)
const photos = [
    { id: 1, src: '/assets/image/image1.jpg' },
    { id: 2, src: '/assets/image/image2.jpg' },
    { id: 3, src: '/assets/image/image3.jpg' },
    { id: 4, src: '/assets/image/image1.jpg' },
    { id: 5, src: '/assets/image/image2.jpg' },
    { id: 6, src: '/assets/image/image3.jpg' },
  
    { id: 7, src: '/assets/image/image1.jpg' },
    { id: 8, src: '/assets/image/image2.jpg' },
    { id: 9, src: '/assets/image/image3.jpg' },
    { id: 10, src: '/assets/image/image1.jpg' },
    { id: 11, src: '/assets/image/image2.jpg' },
    { id: 12, src: '/assets/image/image3.jpg' },
  ];
  function CardDetail() {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const openSlider = (index) => {
      setCurrentIndex(index);
      setIsSliderOpen(true);
    };
  
    const closeSlider = () => {
      setIsSliderOpen(false);
    };
  
    return (
    
        <div>
        <div className={styles.photo_grid}>
          {photos.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.src}
              alt={`Photo ${photo.id}`}
              onClick={() => openSlider(index)}
              className="photo-grid__item"
            />
          ))}
        </div>
  
        {/* Если слайдер открыт, отображаем компонент EmblaCarousel */}
        {isSliderOpen && (
          <div className={styles.slider_overlay}>
            <button className={styles.close_slider} onClick={closeSlider}></button>
            <MainCarousel slides={photos} initialIndex={currentIndex} />
          </div>
        )}
      </div>
     
    );
   
  }
  
  
  export default CardDetail;