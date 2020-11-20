import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'>
        Adopt
        <span> 1 </span>
        Gueux
      </h1>
      <nav className='navbar'>
        <Link to='/' className='menu-item' alt='Home'>
          🏠
        </Link>
        <Link to='/myprofile' className='menu-item' alt='My Profile'>
          🧔🏽‍
        </Link>
        <Link to='/messages' className='menu-item' alt='Messages'>
          ✉️
        </Link>
      </nav>
    </header>
  );
};

export default Header;
