import React from 'react';
import Card from '../../components/Card';
import styles from './Portfolio.module.scss';
import Container from '../../components/Container';
import data from '../../data';
function Portfolio() {
  return (
    <>
    <Container>
    <h1>Portfolio</h1>
    <div className={styles.wrapper}>
        {data.map((obj) => (
          <Card url={obj.url}/>
        ))}
        {/*НУжно ли тут использовать Use efect???*/}
      </div>
    </Container>
      
    </>
   
   
  );
 
}


export default Portfolio;
