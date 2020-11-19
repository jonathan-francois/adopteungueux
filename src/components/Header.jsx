import React from 'react';
import { Link } from 'react-router-dom';
import Parchemin from '../assets/parchemin.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img id='parchemin' src={Parchemin} alt='' />
      </Link>
      <h1 className='title'>Adopt a Gueux</h1>
      <nav className='navbar'>
        <Link to='/' className='menu-item' alt='Home'>
          🏠
        </Link>
        <Link to='/myprofile' className='menu-item' alt='My Profile'>
          🧝‍
        </Link>
        <Link to='/messages' className='menu-item' alt='Messages'>
          ✉️
        </Link>
        {/* <Link to="/logout">Logout</Link> */}
      </nav>
    </div>
  );
};

export default Header;
