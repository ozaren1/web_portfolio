import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from'./MainCarousel.module.scss';

const MainCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });

    // Функция для автопрокрутки
    const autoScroll = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, [emblaApi]);
  
    useEffect(() => {
      if (emblaApi) {
        const interval = setInterval(autoScroll, 4000); // Автопрокрутка каждые 4 секунды
        return () => clearInterval(interval);
      }
    }, [emblaApi, autoScroll]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide} onClick={() => emblaApi && emblaApi.scrollTo(0)}>
            <img src="assets/image/image1.jpg" alt="Slide 1" />
            <h2>Melanie</h2>
          </div>
          <div className={styles.embla__slide} onClick={() => emblaApi && emblaApi.scrollTo(1)}>
            <img src="assets/image/image2.jpg" alt="Slide 2" />
            <h2>Pro...</h2>
          </div>
          <div className={styles.embla__slide} onClick={() => emblaApi && emblaApi.scrollTo(2)}>
            <img src="assets/image/image3.jpg" alt="Slide 3" />
            <h2>Pro...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
