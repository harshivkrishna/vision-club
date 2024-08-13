// NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">AVISION</a>
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
