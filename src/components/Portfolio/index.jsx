import React from 'react';
import Card from '../Card';
import styles from './Portfolio.module.scss';
function Portfolio() {
  return (
    <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
   
  );
 
}


export default Portfolio;
