import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <main className='footer'>
      <nav className='menu-footer'>
        <Link to='/' className='menu-item-footer, cool-link'>
          Terms of service
        </Link>
        <Link to='/' className='menu-item-footer, cool-link'>
          Privacy
        </Link>
        <Link to='/team' className='menu-item-footer, cool-link'>
          Our Team
        </Link>
      </nav>
      <p>© 2020 Adopt 1 Gueux</p>
    </main>
  );
};

export default Footer;
