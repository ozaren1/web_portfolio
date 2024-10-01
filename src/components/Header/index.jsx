import React from 'react';
import styles from './Header.module.scss';
import Container from '../Container';
import {Routes, Route, Link} from 'react-router-dom'
//import Contact from '../Contact';

function Header() {
  const [isActive, setIsActive] = React.useState(null);
  const handleClick = (link) =>{
    setIsActive(link);
  }
  return (
    <>
    <Container>
    <header className={styles.header}>
      <ul>
          <li><Link to='/portfolio' onClick={()=>handleClick('portfolio')} className={isActive === 'portfolio' ? styles.active : ''}>portfolio</Link></li>
          <li className={styles.logo}><Link to='/' onClick={()=>handleClick('home')} className={isActive === 'home' && ''}>Merkulova Daria</Link></li>
          <li><Link to='/contact' onClick={()=>handleClick('contact')} className={isActive === 'contact' ? styles.active : ''}>contact </Link></li>
      </ul>
      </header>
    </Container>
    </>
  );
}
export default Header;
