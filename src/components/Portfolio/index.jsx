import React from 'react';
import Card from '../Card';
import styles from './Portfolio.module.scss';
function Portfolio() {
  return (
    <div className={styles.wrapper}>
        <Card url={'model1'}/>
        <Card url={'model2'}/>
        <Card url={'model3'}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
   
  );
 
}


export default Portfolio;
