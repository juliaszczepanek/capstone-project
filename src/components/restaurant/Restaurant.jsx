import React from 'react';
import './restaurant.css';
import dish from '../../images/restauranfood.jpg'
import restaurantphoto from '../../images/restaurant.jpg'

const Restaurant = () => {
    return (
        <div className="restaurant__content">
            <div className="restaurant__text-containers">
                <h1 className="restaurant__text-title">Little Lemon</h1>
                <h3 className="restaurant__text-subtitle">Chicago</h3>
                <p className="restaurant__text-paragraph">Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. Crafted by expert chefs with locally-sourced ingredients, our dishes not only delight the palate but nourish the soul. Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. Find us in the heart of Chicago for an unforgettable experience.</p>
            </div>
            <div className="restaurant__content-images">
                <div className="restaurant__content-dish">
                    <img
                        src={dish}
                        alt="Restaurant food"
                        height={250}
                        width={250}
                    />
                </div>
                <div className="restaurant__content-photo">
                    <img
                        src={restaurantphoto}
                        alt="Restaurant"
                        height={250}
                        width={250}
                    />
                </div>
            </div>
        </div>
    )
}

export default Restaurant;