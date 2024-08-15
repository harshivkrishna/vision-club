import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button>Download</button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
