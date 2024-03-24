import React from 'react';
import './footer.css';
import logo from '../../images/logo-white.png'


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#menu">Menu</a></p>
    <p><a href="#reservation">Reservation</a></p>
    <p><a href="#orderonline">Order Online</a></p>
    <p><a href="#login">Login</a></p>
  </>
)
const Footer = () => {
  return (
    <div className="footer__content">
      <div className="footer__image">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="footer__content-sitemap">
        <h3>SITEMAP</h3>
        <div class="menu">
          <Menu />
        </div>
      </div>
      <div className="footer__content-contact">
        <h3>CONTACT</h3>
        <p>123 Citrus Lane</p>
        <p>123-4556-78</p>
        <p>little.lemon@lemon.com</p>
      </div>
      <div className="footer__content-socialmedia">
        <h3>SOCIAL MEDIA LINKS</h3>
        <p><a href="https://www.facebook.com" id="link">Facebook</a></p>
        <p><a href="https://www.instagram.com" id="link">Instagram</a></p>
        <p><a href="https://twitter.com" id="link">X</a></p>
      </div>
    </div>
  )
}

export default Footer;