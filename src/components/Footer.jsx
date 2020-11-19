import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <nav className='navbar-footer'>
        <ul className='menu-footer'>
          <Link to='/' className='menu-item-footer, cool-link'>
            About
          </Link>
          <Link to='/' className='menu-item-footer, cool-link'>
            Terms of service
          </Link>
          <Link to='/' className='menu-item-footer, cool-link'>
            Privacy
          </Link>
          <Link to='/' className='menu-item-footer, cool-link'>
            Help
          </Link>
          <Link to='/' className='menu-item-footer, cool-link'>
            Contact
          </Link>
        </ul>
      </nav>
      <p>© 2020 Adopt a Geux</p>
    </div>
  );
};

export default Footer;
