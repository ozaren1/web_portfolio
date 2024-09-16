import React from 'react';
import styles from './Card.module.scss';

function Card() {
  return (
    <a className={styles.card} href='/'>
        <img src="/assets/image/image1.jpg" alt="Model" />
        <span>Model</span>
    </a>
  );
 
}


export default Card;
