import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-166323214-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <Carousel />
        </div>
    );
}

export default HomePage;