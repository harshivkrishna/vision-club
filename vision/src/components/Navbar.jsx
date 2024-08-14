import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='container'>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <i
          className={showLinks ? 'ri-close-line menu-btn' : 'ri-menu-line menu-btn'}
          onClick={toggleNavLinks}
        ></i>
        <ul className={`nav-links ${showLinks ? 'show' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <button>Download</button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
