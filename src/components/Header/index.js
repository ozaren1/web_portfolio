import React from 'react';
import styles from './Header.module.scss';


function Header() {
  return (
    <header className={styles.header}>
     
    <ul>
        <li><a href='/portfolio'>portfolio </a></li>
        <li className={styles.logo}><a href='/'>Merkulova Daria</a></li>
        <li><a href='/contact'>contact </a></li>
    </ul>
    
  </header>
   
  );
}
export default Header;
