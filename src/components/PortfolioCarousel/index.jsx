import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './PortfolioCarousel.module.scss'; // Импортируем стили

const PortfolioCarousel = ({ slides, initialIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: initialIndex });
  const [canScrollPrev, setCanScrollPrev] = useState(false); // Для отслеживания возможности скролла назад
  const [canScrollNext, setCanScrollNext] = useState(false); // Для отслеживания возможности скролла вперёд

  // Функция для прокрутки назад
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Функция для прокрутки вперед
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Обновление состояния кнопок
  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(initialIndex, false); // Переход на начальный слайд без анимации
      emblaApi.on('select', updateButtons);  // Обновляем кнопки при изменении слайда
      updateButtons(); // Обновляем кнопки при инициализации
    }
  }, [emblaApi, initialIndex, updateButtons]);

  return (
    <div className={styles.embla}>
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
      {canScrollPrev && (
        <button className={`${styles.embla__button} ${styles.embla__button_prev}`} onClick={scrollPrev}>
          ←
        </button>
      )}
      {canScrollNext && (
        <button className={`${styles.embla__button} ${styles.embla__button_next}`} onClick={scrollNext}>
          →
        </button>
      )}
    </div>
  );
};

export default PortfolioCarousel;
