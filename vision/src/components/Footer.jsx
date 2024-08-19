import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom';

import Logo from '../assets/logobg.jpg'
const Footer = () => {
    let currentDate = new Date(); 
    let currentYear = currentDate. getFullYear();
  return (
    <div className='footer-parent'>
        <footer>
            <div className="footer-container">
                <div className="logo-footer-container">
                    <img src={Logo} alt="" />
                    <p>Your Voice our Paper</p>
                </div>
                <div className="footer-links-container">
                    <ul className='footer-links'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/submit"><li>Submit</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="footer-socialmedia-links-container">
                    <a href="https://www.instagram.com/vision.citil/" target='_blank'><i className="ri-instagram-line"></i></a>
                    <a href="#" target='_blank'><i className='ri-mail-line'></i></a>
                    <a href="#" target='_blank'><i className='ri-linkedin-box-line'></i></a>
                    <a href="#" target='_blank'><i className='ri-whatsapp-line'></i></a>
                </div>
            </div>
        </footer>
        <p>Copyright &copy; {currentYear} Vision</p>
    </div>
  )
}

export default Footer