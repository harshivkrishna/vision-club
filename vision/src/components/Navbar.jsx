// NavBar.js
import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Gadgets</a></li>
        <li><a href="#">Lifestyle</a></li>
        <li><a href="#">Video</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
