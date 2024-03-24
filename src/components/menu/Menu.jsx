import React from 'react';
import './menu.css'


const Menu = () => {
    return (
        <div className="Menu__content">
            <div className="Menu__container">
                <div>
                    <div className="Menu__container-title">
                        <h2 className="Menu__title">MENU</h2>
                    </div>
                </div>
                <div>
                    <div className="Menu__content-item">
                        <div className="Menu__item"><h4>Bruschetta</h4><p>$5.99</p></div>
                        <p className='Menu__p'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    </div>
                    <div className="Menu__content-item">
                        <div className="Menu__item"><h4>Lemon Dessert</h4><p>$5.00</p></div>
                        <p className='Menu__p'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p></div>
                    <div className="Menu__content-item">
                        <div className="Menu__item"><h4>Windy City Burger</h4> <p>$14.99</p></div>
                        <p className='Menu__p'>The Windy City Burger is a tribute to Chicago's bold flavors, featuring a juicy beef patty topped with melted cheddar cheese, crispy bacon, tangy pickles, caramelized onions, and a smoky barbecue sauce, served on a toasted brioche bun with a side of seasoned fries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
