import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import AboutContent from '../components/Layout';
 


const HomePage = () => {
    return (
        <>
        <Hero />
        <AboutContent>
        <Carousel />
        </AboutContent>
        </>
    )
}

export default HomePage;
