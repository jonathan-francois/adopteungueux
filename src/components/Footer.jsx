import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <main className='footer'>
      <nav className='menu-footer'>
        <Link to='/tos' className='menu-item-footer, cool-link'>
          Terms of service
        </Link>
        <Link to='/privacy' className='menu-item-footer, cool-link'>
          Privacy
        </Link>
        <Link to='/team' className='menu-item-footer, cool-link'>
          Our Team
        </Link>
      </nav>
      <p>© 2020 <br/>Adopt 1 Gueux</p>
    </main>
  );
};

export default Footer;
