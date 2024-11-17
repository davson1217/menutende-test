import React from 'react';
import './navbar.css';
import logo from './assets/LOGO-SVG.svg';

const Navbar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt="MenuTender Logo" className="navbar-logo" />
    </nav>
  );
};

export default Navbar;
