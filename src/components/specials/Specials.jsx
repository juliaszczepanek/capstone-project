import React from 'react';
import './specials.css';
import salad from '../../images/greeksalad.jpg'
import bruschetta from '../../images/bruchetta.svg'
import dessert from '../../images/lemon dessert.jpg'


function clickMe() {
    alert('You clicked me')
}

const Specials = () => {
    return (
        <div className="specials__content">
            <div className="specials__content-header">
                <div className="specials__content-title">
                    <h2>Specials</h2>
                </div>
                <div className='specials__button'>
                    <button type="button" onClick={clickMe}>Online Menu</button>
                </div>
            </div>
            <div className="specials__content-menu">
                <div className="specials__content-menu__container">
                    <img src={salad} alt="salad" />
                    <div className="specials__text">
                        <div className="specials__title-price"> <h3>Greek salad</h3>
                            <h3 className='price'>$8.99</h3> </div><p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p id="delivery">Order a delivery</p>
                    </div>
                </div>
                <div className="specials__content-menu__container">
                    <img src={bruschetta} alt="bruschetta" />
                    <div className="specials__text">
                        <div className="specials__title-price"> <h3 className="bruschetta">Bruschetta</h3>
                            <h3 className='price'>$12.99</h3>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p id="delivery">Order a delivery</p>
                    </div>
                </div>
                <div className="specials__content-menu__container">
                    <img src={dessert} alt="dessert" />
                    <div className="specials__text">
                        <div className="specials__title-price"> <h3>Lemon dessert</h3>
                            <h3 className='price'>$5.99</h3></div>  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p id="delivery" >Order a delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials;