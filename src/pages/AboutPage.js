import React from 'react';
import Image from 'react-bootstrap/Image'
import {Row, Col } from 'react-bootstrap';

import portfolioAvatar from '../images/portfolioAvatar.jpg';
import AboutContent from '../components/Layout';

function AboutPage(props) {

    return(
        <AboutContent >
       
            <Row className="text-center pt-5">
                   <Col md={3} xs={11} className="">
                  <Image src={portfolioAvatar} thumbnail/>
                  <h1 className="pb-2">About Me</h1> 
                    </Col>
               </Row>
      
                
                 
                 <Col xs={12}>
                      <p>Hello!</p>
                      <p>My name is Alexander. I am currently studying webdevelopment, some of the languages we are learning are the basic HTML, CSS and also JavaScript and PHP.</p>
                      <p>I do enjoy programming quite alot, so far my favorite has been React Library</p> 
                      <p> I am 29 years old, and when I am not programming I usually play Padel, video-games or hit the gym.</p> 
                </Col>
                
            </AboutContent>
            

        
    );
}

export default AboutPage;