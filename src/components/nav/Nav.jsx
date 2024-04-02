
import React from 'react';
import './nav.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import hamburgerIcon from '../../images/🦆 icon _hamburger menu.svg'

const Menu = ({ toggleMenu }) => (
    <BurgerMenu
        isOpen={true}
        width={'200'}
        right
        customBurgerIcon={<img src={hamburgerIcon} alt="Hamburger Menu" />}
        className="custom-burger-menu"
        onStateChange={(state) => {
            if (state.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }}
    >
        <Link className="atag" to="/about">About</Link>
        <Link className="atag" to="/menu">Menu</Link>
        <Link className="atag" to="/reservation">Reservation</Link>
        <Link className="atag" to="/orderonline">Order Online</Link>
        <Link className="atag" to="/login">Login</Link>
        <div className="cross-icon" onClick={toggleMenu}></div>
    </BurgerMenu>
);

const NormalMenu = () => (
    <>
        <Link className="atag" to="/about">About</Link>
        <Link className="atag" to="/menu">Menu</Link>
        <Link className="atag" to="/reservation">Reservation</Link>
        <Link className="atag" to="/orderonline">Order Online</Link>
        <Link className="atag" to="/login">Login</Link>
    </>
);

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 780
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth <= 780 });
    };

    render() {
        const { isMobile } = this.state;
        return (
            <div className="nav__bar">
                <div className="nav__links-container">
                    <div className="nav__links-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu__list">
                        {isMobile ? <Menu toggleMenu={this.state.toggleMenu} /> : <NormalMenu />}
                    </div>
                </div>
            </div>
        );
    }
}
export default Nav;
