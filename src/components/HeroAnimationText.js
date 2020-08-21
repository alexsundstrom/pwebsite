import React from 'react'
import TypeIt from 'typeit-react';

const HeroAnimationText = () => {
    return (
        <div className="App">
            <TypeIt
            style={{}}
            element={"h1"}
            options={{
            loop: false,
            strings: ["Alexander Sundström", "Check out my projects below!"],
            speed: 100,
            waitUntilVisible: false,
            }}
        />
            
        </div>
    )
}

export default HeroAnimationText
