import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'>
        <HashLink to='/#tittleHome'>
          <p>
            Adopt
            <span> 1 </span>
            Gueux
          </p>
        </HashLink>
      </h1>
      <nav className='navbar'>
        <HashLink to="/#tittleHome" className='menu-item' alt='Home'>
          🏠
        </HashLink>
        <Link to='/myprofile' className='menu-item' alt='My Profile'>
          🧔🏽‍
        </Link>
        <Link to='/messenger' className='menu-item' alt='Messages'>
          ✉️
        </Link>
      </nav>
    </header>
  );
};

export default Header;
