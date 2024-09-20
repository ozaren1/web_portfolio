import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from'./MainCarousel.module.scss'; // Импортируем стили

const MainCarousel = ({ slides, initialIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: initialIndex });
  const [showPrev, setShowPrev] = useState(false); // Для показа кнопки "Назад"
  const [showNext, setShowNext] = useState(false); // Для показа кнопки "Вперёд"

  // Функция для прокрутки назад
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Функция для прокрутки вперед
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(initialIndex, true); // Переход на начальный слайд
    }
  }, [emblaApi, initialIndex]);

  // Логика для показа кнопок в зависимости от положения мыши
  const handleMouseMove = (e) => {
    const screenWidth = window.innerWidth;
    const mouseX = e.clientX;

    if (mouseX < screenWidth / 3) {
      setShowPrev(true);
      setShowNext(false);
    } else if (mouseX > (2 * screenWidth) / 3) {
      setShowNext(true);
      setShowPrev(false);
    } else {
      setShowPrev(false);
      setShowNext(false);
    }
  };

  return (
    <div className={styles.embla} onMouseMove={handleMouseMove}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <img src={slide.src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки для прокрутки */}
      {showPrev && (
        <button className={`${styles.embla__button} ${styles.embla__button_prev}`} onClick={scrollPrev}>
          ←
        </button>
      )}
      {showNext && (
        <button className={`${styles.embla__button} ${styles.embla__button_next}`} onClick={scrollNext}>
          →
        </button>
      )}
    </div>
  );
};

export default MainCarousel;
