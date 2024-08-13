// NavBar.js
import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='container'>
      <nav className="navbar">
        <div>
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
