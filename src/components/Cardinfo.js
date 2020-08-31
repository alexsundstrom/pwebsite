import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const CardInfoTextStyles = styled.div`
    text-align: center;
    font-weight: bold;

`;


const Cardinfo = (props) => {
    
    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="" style={style} >
            <CardInfoTextStyles>
            <p>{props.title} </p>
            <p>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View Site</a>
            </CardInfoTextStyles>
        </animated.div>

    )
}

export default Cardinfo;
