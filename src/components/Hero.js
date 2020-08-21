import React from 'react';
import TypeIt from 'typeit-react';


const Hero = () => {
    return (
        <div style={{height: "30vh"}} className="App bg-dark py-5 px-5 mb-5">
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




export default Hero
