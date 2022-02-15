import React from 'react';
import styles from './navbar.module.css'; 
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return(
    <>
      <div className={styles.navBarContainer}>
        <ul className={styles.mainLinksNav}>
          <li className={styles.BookstoreCMS}> Bookstore CMS</li>  
          <li className={styles.smallLinks}> BOOKS </li>
          <li className={styles.smallLinks}> CATEGORIES </li>
        </ul> 
        <div className={styles.linkOvalUserIcon}>
          <FaUserAlt style={{
            color: '#0290ff',
            height: '15px',
            cursor: 'pointer',
            transition: 'all ease-in 300ms',
          }} /> 
        </div>
      </div>
    </>
  )
}

export default Navbar;