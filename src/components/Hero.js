import React from 'react';
import TypeIt from 'typeit-react';

const Hero = () => {
    return (
        <div style={{marginBottom: "10px",}} className="pt-5 px-5 mb-5 border-bottom App">
        <TypeIt
        style={{}}
        element={"h1"}
        options={{
        loop: false,
        strings: ["Alexander Sundström"],
        speed: 250,
        waitUntilVisible: true,
        }}
    />
    <br />
        <TypeIt
        style={{}}
        element={"h2"}
        options={{
        loop: false,
        strings: ["Check out my projects below!"],
        speed: 50,
        waitUntilVisible: false,
        }}
    />
        
      </div>
    )
}




export default Hero
