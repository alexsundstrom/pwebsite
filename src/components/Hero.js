import React from 'react';
import TypeIt from 'typeit-react';
import styled from 'styled-components';



const HeroTextStyle = styled.div`
    text-align: center;

`;


const Hero = () => {
    return (
        <HeroTextStyle style={{marginBottom: "10px",}} className="pt-5 px-5 mb-5 border-bottom App">
        <TypeIt
        style={{fontWeight: "bold"}}
        element={"h1"}
        options={{
        loop: false,
        strings: ["Alexander Sundström"],
        speed: 150,
        waitUntilVisible: true,
        }}
    />
    <br />
        <TypeIt
        style={{fontWeight: "bold"}}
        element={"h2"}
        options={{
        loop: false,
        strings: ["Check out my projects below!"],
        speed: 50,
        waitUntilVisible: false,
        }}
    />
        
      </HeroTextStyle>
    )
}




export default Hero
