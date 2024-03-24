import React from 'react';
import './header.css';
import restaurant from '../../images/restaurant chef B.jpg'

const Header = () => {
  return (

    <div className="header__container">
      <div className="header__container-text">
        <h1 className="header__title">Little Lemon</h1>
        <h2 className="header__description">Chicago</h2>
        <p className="header__text">Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.</p>
        <button type="button" className="header__button">Reserve a Table</button>
      </div>
      <div className="header__container-img">
        <img src={restaurant} alt="restaurant" />
      </div>
    </div>

  )
}

export default Header;
