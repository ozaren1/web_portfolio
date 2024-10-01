import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Autoplay } from 'embla-carousel-autoplay';
import styles from './MainCarousel.module.scss'; // Добавим стили для анимации

const MainCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработчик для перехода на следующий слайд
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Устанавливаем автоматическое перелистывание раз в 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  // Обновляем текущий индекс при изменении слайда
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.slider}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={`${styles.embla__slide} ${index === currentIndex ? styles.active : ''}`} key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
          ))}
        </div>
      </div>
      <button  className={`${styles.embla__button} ${styles.embla__buttonPrev}`} onClick={() => emblaApi.scrollPrev()}>Prev</button>
      <button  className={`${styles.embla__button} ${styles.embla__buttonNext}`} onClick={scrollNext}>Next</button>
    </div>
  );
};

export default MainCarousel;
