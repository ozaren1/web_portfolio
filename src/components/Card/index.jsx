import React from 'react';
import styles from './Card.module.scss';
import {Link} from "react-router-dom";

function Card(props) {
  return (
    <Link className={styles.card} to={'/portfolio/' + props.url}>
        <img src="/assets/image/image1.jpg" alt="Model" />
        <span>Model</span>
    </Link>
  );
 
}


export default Card;
