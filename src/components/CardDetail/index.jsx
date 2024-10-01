import React, {useEffect, useState} from 'react';
import PortfolioCarousel from '../PortfolioCarousel';
import styles from './CardDetail.module.scss';
import {useParams} from "react-router-dom";
import data from '../../data'
import Container from '../Container';

  function CardDetail() {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const {id} = useParams();
    const [pageData, setPageData] = useState({});


    const openSlider = (index) => {
      setCurrentIndex(index);
      setIsSliderOpen(true);
    };
  
    const closeSlider = () => {
      setIsSliderOpen(false);
    };

      useEffect(() => {
          const filteredData = data.filter((item) => item.id === id);
          setPageData(filteredData[0]);
      }, [data, id]);

      return (
    
        <>
        <Container>
            <h1>{pageData.title}</h1>
            <p>{pageData.description}</p>
        <div className={styles.photo_grid}>
          {pageData.images && pageData.images.map((obj, index) => (
            <img
              key={obj.id}
              src={obj.src}
              alt={`Photo ${obj.id}`}
              onClick={() => openSlider(index)}
              className="photo-grid__item"
            />
          ))}
        </div>
  
        {/* Если слайдер открыт, отображаем компонент EmblaCarousel */}
        {isSliderOpen && (
          <div className={styles.slider_overlay}>
            <button className={styles.close_slider} onClick={closeSlider}></button>
            <PortfolioCarousel slides={pageData.images} initialIndex={currentIndex} />
          </div>
        )}
        </Container>
      </>
     
    );
   
  }
  
  
  export default CardDetail;