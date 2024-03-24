import React from 'react';
import Restaurant from '../restaurant/Restaurant';
import Header from '../header/Header';
import Testimonial from '../testimonials/Testimonial';
import Specials from '../specials/Specials'

const About = () => {
    return (
        <div className="content">
            <Header />
            <Specials />
            <Testimonial />
            <Restaurant />
        </div>
    );
}

export default About;
