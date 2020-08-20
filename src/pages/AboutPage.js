import React from 'react';

import Hero from '../components/Hero';
import AboutContent from '../components/Layout';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <AboutContent>
                <p>Hello, my name is Alexander. I am currently studying to become a webdeveloper I have always had a interest in developing and my goal is to work with webdeveloping in the future. </p>
                <p> I am 29 years old and in my freetime I spend most of my time playing pc games, playing with my daughter or hanging out with friends & family  </p>          
            </AboutContent>

        </div>
    );
}

export default AboutPage;