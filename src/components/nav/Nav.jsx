
import React from 'react';
import './nav.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Menu = () => (
    <>
        <Link className="atag" to="/about">About</Link>
        <Link className="atag" to="/menu">Menu</Link>
        <Link className="atag" to="/reservation">Reservation</Link>
        <Link className="atag" to="/orderonline">Order Online</Link>
        <Link className="atag" to="/login">Login</Link>
    </>
);

const Nav = () => {
    return (
        <div className="nav__bar">
            <div className="nav__links-container">

                <div className="nav__links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu__list">
                    <Menu />
                </div>

            </div>
        </div>
    );
};

export default Nav;
