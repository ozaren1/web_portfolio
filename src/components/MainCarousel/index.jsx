import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from'./MainCarousel.module.scss';

const MainCarousel = ({ slides, initialIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: initialIndex });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(initialIndex, true); // Переход на начальный слайд
    }
  }, [emblaApi, initialIndex]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img src={slide.src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
