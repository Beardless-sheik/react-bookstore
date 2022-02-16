import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import styles from './navbar.module.css';

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <>
      <div className={styles.navBarContainer}>
        <ul className={styles.mainLinksNav}>
          <li className={styles.BookstoreCMS}> Bookstore CMS</li>
          <li className={styles.smallLinks}>
            <Link to="books" style={linkStyle}> BOOKS </Link>
          </li>
          <li className={styles.smallLinks}>
            <Link to="categories" style={linkStyle}> CATEGORIES </Link>
          </li>
        </ul>
        <div className={styles.linkOvalUserIcon}>
          <FaUserAlt style={{
            color: '#0290ff',
            height: '15px',
            cursor: 'pointer',
            transition: 'all ease-in 300ms',
          }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
