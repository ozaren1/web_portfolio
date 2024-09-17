import React from 'react';
import styles from './Header.module.scss';
import {Routes, Route, Link} from 'react-router-dom'
import Portfolio from '../Portfolio';
//import Contact from '../Contact';

function Header() {
  return (
    <>
      <header className={styles.header}>
      <ul>
          <li><Link to='/portfolio'>portfolio </Link></li>
          <li className={styles.logo}><Link to='/'>Merkulova Daria</Link></li>
          <li><Link to='/contact'>contact </Link></li>
      </ul>
      </header>
      <Routes>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>
    </>
  );
}
export default Header;
