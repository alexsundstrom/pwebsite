import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

// function HomePage() {

//     return(
//         <div>
//         <Hero />
//         <Carousel />
//         </div>
//     );
// }


const HomePage = (props) => {
    return (
        <div>
        <Hero title={props.title} />
        <Carousel />
            
        </div>
    )
}

export default HomePage;
